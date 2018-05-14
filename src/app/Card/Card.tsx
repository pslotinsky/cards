import * as React from 'react';

import './Card.css';

import { Card as CardModel } from '../../models/Card';

export interface ICardProps {
    card: CardModel;
}

export function Card({ card }: ICardProps): JSX.Element {
    return (
        <div className={`b-card b-card_${card.rarity}`}>
			<div className="b-card__background">
				<div className="b-card__name">
					<div className="b-card__name-text">{card.name}</div>
				</div>
				<div
                    className="b-card__image"
                    style={card.image ? { backgroundImage: `url(${card.image})` } : {}}
                />
                <div className="b-card__job">
					<div className="b-card__job-text">{card.job}</div>
				</div>
				<div className="b-card__description">
					<table className="b-card__table">
                        <tbody>
                            <tr>
                                <td>Сил: 3</td>
                                <td>Лов: 2</td>
                                <td>Инт: 3</td>
                            </tr>
                            <tr>
                                <td>Муд: 1</td>
                                <td>Хар: 2</td>
                                <td>Удч: 1</td>
                            </tr>
                        </tbody>
					</table>
				</div>
                <div className="b-card__price">{card.salary}</div>
			</div>
		</div>
    );
}
