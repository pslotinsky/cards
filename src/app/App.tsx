import * as React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './App.css';

import { Card as CardModel } from '../models/Card';
import { Deck as DeckModel } from '../models/Deck';
import { Store } from '../models/Store';

import { Deck } from './Deck';

export interface IAppProps {
    store: Store;
    onCardDropped(card: CardModel, deck: DeckModel): void;
}

function App({ store, onCardDropped }: IAppProps): JSX.Element {
    return (
        <div className="l-app">
            {store.decks.map(deck => (
                <div key={deck.name} className="l-app__deck">
                    <Deck deck={deck} onCardDropped={onCardDropped} />
                </div>
            ))}
        </div>
    );
}

export default DragDropContext(HTML5Backend)(App);
