import { General } from './general.model';

export class Army {
    constructor(
        public id: string,
        public solidersCount: number,
        public general: General,
        public health: number,
        public damage: number,
        public isInfected: boolean
    ) {};
}