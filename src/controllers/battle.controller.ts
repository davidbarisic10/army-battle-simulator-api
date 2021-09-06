import { Controller, Get, Query } from "@nestjs/common";
import { Army } from "src/models";
import { ArmyService, DiseaseService, BattleService } from '../services';

@Controller()
export class BattleController {

    constructor(private readonly ArmyService: ArmyService, private readonly DiseaseService: DiseaseService, private readonly BattleService: BattleService) { }
    @Get('?')
    async getQueryParams(@Query() query: any): Promise<any> {

        let validationRegEx = /^[0-9]+$/;

        if(!query.army1.match(validationRegEx || !query.army2.match(validationRegEx))) {
            return 'INVALID DATA SUPPLIED'!
        }
        else{
        let solidersCount = [0,0];
        solidersCount = [parseInt(query.army1), parseInt(query.army2)];

        let armies = this.ArmyService.createArmy(solidersCount);
        let disease = this.DiseaseService.createDisease();
        let battle = this.BattleService.simulateBattle(armies, disease);

        console.log(armies)
        console.log(disease)

        return battle;
        }
    }
}