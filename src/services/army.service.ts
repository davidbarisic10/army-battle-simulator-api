import { Injectable } from "@nestjs/common";
import { General } from "src/models/general.model";
import { v4 as uuidv4 } from 'uuid';
import { Army } from '../models/army.model';

@Injectable()
export class ArmyService {
    
    createArmy(solidersCount: number[]) {
        let armies: Army[] = []
        //Generate two armies
        for (let index = 0; index < 2; index++) {
            const generalId = uuidv4();
            const generalBonus = (Math.random() * (1.5 - 0.8) + 0.8);
            const damage = generalBonus * 1.1
            const soliderHealth = solidersCount[index] * 100
            const isInfected = Math.round(Math.random()) === 1 ? true : false; // Random disease infection

            const army = new Army(`Army ${index + 1}`, solidersCount[index], new General(generalId, generalBonus), soliderHealth, damage, isInfected);

            armies.push(army);
        }
        return armies;
    }
}