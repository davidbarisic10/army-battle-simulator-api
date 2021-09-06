import { Controller, Get, Query } from "@nestjs/common";
import { ArmyService, DiseaseService, BattleService } from '../services';

@Controller()
export class BattleController {

    constructor(private readonly ArmyService: ArmyService, private readonly DiseaseService: DiseaseService, private readonly BattleService: BattleService) { }

    @Get('?')
    async getQueryParams(@Query() query: any): Promise<string> {
        const solidersCount = [parseInt(query.army1), parseInt(query.army2)];

        const armies = this.ArmyService.createArmy(solidersCount);
        const disease = this.DiseaseService.createDisease();


        console.log('Armies:' + armies);
        const battle = this.BattleService.simulateBattle(armies, disease);
        console.log(armies);
        console.log(disease)
        console.log(battle)

        return 'win'
    }
}