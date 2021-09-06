import { Injectable } from "@nestjs/common";
import { General } from "src/models/general.model";
import { v4 as uuidv4 } from 'uuid';
import { Army } from '../models/army.model';

@Injectable()
export class ArmyService {
    armies: Army[] = []

    createArmy(
        solidersCount: number[],
    ) {
        //Generate two armies
        for (let index = 0; index < 2; index++) {
            const generalId = uuidv4();
            const generalBonus = (Math.random() * (1.5 - 0.5) + 0.5);
            const soliderHealth = solidersCount[index] * 100
            const isInfected = Math.round(Math.random()) === 1 ? true : false; // Random disease infection

            const army = new Army(`Army ${index + 1}`, solidersCount[index], new General(generalId, generalBonus), soliderHealth, 2 * generalBonus, isInfected);

            this.armies.push(army);
        }
        return this.armies;
    }
}