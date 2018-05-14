import * as React from 'react';
import {
    ConnectDragSource,
    DragSource,
    DragSourceConnector,
    DragSourceMonitor,
    DragSourceSpec
} from 'react-dnd';

import { Card as CardModel } from '../../models/Card';

import { Card, ICardProps } from './Card';

export interface IDraggableCardProps extends ICardProps {
    isDragging?: boolean;
    connectDragSource?: ConnectDragSource;
    onDragEnd?(card: CardModel): void;
}

const cardSource: DragSourceSpec<IDraggableCardProps> = {
    beginDrag({ card }: IDraggableCardProps): { card: CardModel } {
        return { card };
    },
    endDrag({ card, onDragEnd }: IDraggableCardProps): void {
        if (onDragEnd) {
            onDragEnd(card);
        }
    }
};

function collect(connect: DragSourceConnector, monitor: DragSourceMonitor): object {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

@DragSource('Card', cardSource, collect)
export class DraggableCard extends React.Component<IDraggableCardProps> {

    public render(): React.ReactNode {
        const { connectDragSource, card } = this.props;
        return connectDragSource ? connectDragSource(<div><Card card={card} /></div>) : null;
    }

}
