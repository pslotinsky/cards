import * as React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './App.css';

import { Store } from '../models/Store';

import { Deck } from './Deck';

const store = new Store();

function App(): JSX.Element {
    return (
        <div className="l-app">
            {store.decks.map(deck => (
                <div key={deck.name} className="l-app__deck">
                    <Deck deck={deck} />
                </div>
            ))}
        </div>
    );
}

export default DragDropContext(HTML5Backend)(App);
