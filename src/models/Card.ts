export enum Rarity {
    Common = 'common',
    Rare = 'rare',
    Epic = 'epic'
}

export enum Job { Frontend, Backend, Teamlead }

export interface ICardParams {
    name: string;
    image?: string;
    rarity: Rarity;
    jobs: Job[];
    salary: number;
}

const FRONTEND = 'frontend';
const BACKEND = 'backend';
const TEAMLEAD = 'teamlead';
const FULLSTACK = 'fullstack';

export class Card {

    public name: string;

    public image: string;

    public rarity: Rarity;

    public salaryValue: number;

    protected jobs: Job[];

    constructor({ name, salary, jobs, rarity, image = '' }: ICardParams) {
        this.name = name;
        this.image = image;
        this.rarity = rarity;
        this.jobs = jobs;
        this.salaryValue = salary;
    }

    public get job(): string {
        let res = this.isFrontend() ? FRONTEND : '';

        if (this.isBackend()) {
            res = res ? FULLSTACK : BACKEND;
        }

        if (this.isTeamlead()) {
            res = res ? `${TEAMLEAD}/${res}` : TEAMLEAD;
        }

        return res;
    }

    public get salary(): string {
        return `${this.salaryValue}$`;
    }

    public isEqual(card: Card): boolean {
        return (this.name === card.name);
    }

    protected isFrontend(): boolean {
        return (this.jobs.indexOf(Job.Frontend) > -1);
    }

    protected isBackend(): boolean {
        return (this.jobs.indexOf(Job.Backend) > -1);
    }

    protected isTeamlead(): boolean {
        return (this.jobs.indexOf(Job.Teamlead) > -1);
    }

}
