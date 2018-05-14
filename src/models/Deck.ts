import autobind from 'autobind-decorator';
import { remove } from 'lodash';
import { computed, observable } from 'mobx';

import { Card } from "./Card";

export interface IDeckParams {
    name: string;
    budget: number;
    cards: Card[];
}

export class Deck {

    @observable
    public name: string;

    @observable
    public budgetValue: number;

    @observable
    public cards: Card[];

    constructor({ name, budget, cards }: IDeckParams) {
        this.name = name;
        this.budgetValue = budget;
        this.cards = cards;
    }

    @computed
    public get budget(): string {
        return `${this.budgetValue}$`;
    }

    @computed
    public get salaryValue(): number {
        return this.cards.reduce((sum, card) => sum + card.salaryValue, 0);
    }

    @computed
    public get salary(): string {
        return `${this.salaryValue}$`;
    }

    public add(card: Card): void {
        this.cards.push(card);
    }

    @autobind
    public remove(card: Card): void {
        remove(this.cards, item => (item.name === card.name));
    }

}
