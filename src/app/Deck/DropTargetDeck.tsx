import * as React from 'react';
import {
    ConnectDropTarget,
    DropTarget,
    DropTargetConnector,
    DropTargetMonitor,
    DropTargetSpec
} from 'react-dnd';

import { Deck as DeckModel } from '../../models/Deck';

import { Deck } from './Deck';

interface IDropTargetDeckProps {
    deck: DeckModel;
    connectDropTarget?: ConnectDropTarget;
    isOver?: boolean;
}

const target: DropTargetSpec<IDropTargetDeckProps> = {
    drop(props: IDropTargetDeckProps, monitor: DropTargetMonitor) {
        const { card } = monitor.getItem() as any;
        setTimeout(() => props.deck.add(card), 0);
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
