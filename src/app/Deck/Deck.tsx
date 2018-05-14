import { observer } from 'mobx-react';
import * as React from 'react';

import './Deck.css';

import { Deck as DeckModel } from '../../models/Deck';

import { Card } from '../Card';

export interface IDeckProps {
    deck: DeckModel;
}

@observer
export class Deck extends React.Component<IDeckProps> {

    public render(): React.ReactNode {
        const { deck } = this.props;

        return (
            <div className="b-deck">
                <h2 className="b-deck__name">{deck.name} — {deck.salary}/{deck.budget}</h2>
                <ul className="b-deck__cards">
                    {deck.cards.map(card => (
                        <li key={card.name} className="b-deck__card">
                            <Card card={card} onDragEnd={deck.remove} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}
