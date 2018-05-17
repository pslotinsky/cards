import autobind from 'autobind-decorator';
import * as React from 'react';

import { Card as CardModel } from '../models/Card';
import { Deck as DeckModel } from '../models/Deck';
import { Store } from "../models/Store";

import App from './App';

export interface IAppContainerProps {
    store: Store;
}

export class AppContainer extends React.Component<IAppContainerProps> {

    public render(): React.ReactChild {
        const { store } = this.props;
        const { onCardDropped } = this;
        return React.createElement(App, { store, onCardDropped });
    }

    @autobind
    protected onCardDropped(card: CardModel, deck: DeckModel): void {
        const { store } = this.props;
        const prevDeck = store.decks.find(item => item.contains(card));
        if (prevDeck && prevDeck !== deck) {
            prevDeck.remove(card);
            deck.add(card);
        }
    }

}
