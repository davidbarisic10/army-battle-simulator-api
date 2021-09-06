import { Injectable } from "@nestjs/common";
import { Army, Disease } from '../models';
@Injectable()
export class BattleService {
    
    simulateBattle(armies: Army[], disease: Disease) {
        let winner: Army
        //Reduce the health of armies if they are infected
        if(armies[0].isInfected) {
            armies[0].health = armies[0].health - (armies[0].solidersCount * (disease.percentageOfInfected / 100) * disease.damagePerSolider); 
        }
        if(armies[1].isInfected) {
            armies[1].health = armies[1].health - (armies[1].solidersCount * (disease.percentageOfInfected / 100) * disease.damagePerSolider); 
        }
        //Attacking phase
        do {
            armies[1].health = armies[1].health - (armies[0].damage * armies[0].solidersCount);
            armies[0].health = armies[0].health - (armies[1].damage * armies[1].solidersCount);
        
        } while(armies[0].health >= 0 || armies[1].health >= 0 );

        winner = armies[0].health > armies[1].health ? armies[0] : armies[1];

        return winner;
    }

}