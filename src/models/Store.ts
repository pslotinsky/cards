import { Card, Job, Rarity } from './Card';
import { Deck } from './Deck';

export class Store {

    public decks: Deck[];

    constructor() {
        this.decks = [
            new Deck({
                budget: 500,
                cards: [
                    new Card({
                        image: require('./images/dpanov.jpg'),
                        jobs: [Job.Frontend, Job.Teamlead],
                        name: 'Дима Панов',
                        rarity: Rarity.Epic,
                        salary: 18
                    }),
                    new Card({
                        jobs: [Job.Frontend],
                        name: 'Женя Шишлянников',
                        rarity: Rarity.Rare,
                        salary: 18
                    }),
                    new Card({
                        jobs: [Job.Backend],
                        name: 'Сергей Некрасов',
                        rarity: Rarity.Common,
                        salary: 12
                    }),
                    new Card({
                        image: require('./images/aserkerov.png'),
                        jobs: [Job.Backend],
                        name: 'Адиль Серкеров',
                        rarity: Rarity.Common,
                        salary: 9
                    }),
                    new Card({
                        image: require('./images/okurochkin.png'),
                        jobs: [Job.Backend],
                        name: 'Олег Курочкин',
                        rarity: Rarity.Common,
                        salary: 18
                    }),
                ],
                name: 'Сбербанк-маркетинг'
            }),
            new Deck({
                budget: 250,
                cards: [
                    new Card({
                        jobs: [Job.Teamlead, Job.Frontend, Job.Backend],
                        name: 'Гера Костуров',
                        rarity: Rarity.Epic,
                        salary: 18
                    }),
                    new Card({
                        image: require('./images/slukovkina.png'),
                        jobs: [Job.Frontend],
                        name: 'Соня Луковкина',
                        rarity: Rarity.Common,
                        salary: 6
                    }),
                    new Card({
                        image: require('./images/mratilainen.png'),
                        jobs: [Job.Frontend],
                        name: 'Мика Ратиляйнен',
                        rarity: Rarity.Common,
                        salary: 6
                    }),
                ],
                name: 'Конкуренты 360'
            })
        ];
    }

}
