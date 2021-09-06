import { Module } from '@nestjs/common';
import { ArmyService, DiseaseService, BattleService } from './services';
import { BattleController } from './controllers';
@Module({
  imports: [],
  controllers: [BattleController],
  providers: [ArmyService, DiseaseService, BattleService],
})
export class AppModule { }
