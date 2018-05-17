import * as React from 'react';
import {
    ConnectDropTarget,
    DropTarget,
    DropTargetConnector,
    DropTargetMonitor,
    DropTargetSpec
} from 'react-dnd';

import { Card as CardModel } from '../../models/Card';
import { Deck as DeckModel } from '../../models/Deck';

import { Deck } from './Deck';

interface IDropTargetDeckProps {
    deck: DeckModel;
    connectDropTarget?: ConnectDropTarget;
    isOver?: boolean;
    onCardDropped(card: CardModel, deck: DeckModel): void;
}

const target: DropTargetSpec<IDropTargetDeckProps> = {
    drop(props: IDropTargetDeckProps, monitor: DropTargetMonitor) {
        const { card } = monitor.getItem() as any;
        const { deck, onCardDropped } = props;
        onCardDropped(card, deck);
    }
};

function collect(connect: DropTargetConnector, monitor: DropTargetMonitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

@DropTarget('Card', target, collect)
export class DropTargetDeck extends React.Component<IDropTargetDeckProps> {

    public render(): React.ReactNode {
        const { deck, connectDropTarget } = this.props;

        if (!connectDropTarget) {
            throw new Error('connectDropTarget is undefined');
        }

        return connectDropTarget(
            <div>
                <Deck deck={deck} />
            </div>
        );
    }

}
