import { Injectable } from '@nestjs/common';
import { Disease } from '../models/disease.model';

@Injectable()
export class DiseaseService {
    disease: Disease;

    createDisease() {
        this.disease = new Disease(Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1));

        return this.disease;
    }
}