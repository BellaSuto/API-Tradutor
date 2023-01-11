import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FraseEntity } from './frase.entity';

@Injectable()
export class FraseService {
    constructor(
        @InjectRepository(FraseEntity)
        private readonly fraseRepository: Repository<FraseEntity>
    ) { }

    async saveFrase(linguagem, frase, traducao) {

        await this.fraseRepository.save(new FraseEntity(linguagem, frase, traducao))
    }

    async translate(linguagem, frase) {
        console.log(frase)

        const consumoApi = await fetch(`https://api.funtranslations.com/translate/${linguagem}.json?text=${frase.frase}`);
        const api = await consumoApi.json();

        //let translate: string = api.contents.translated
        //console.log(api.contents.translated)
        
        //this.saveFrase(linguagem, frase, translate)

        return api;
    }

    async findAll(){
        await this.fraseRepository.find();
    }

    async findOneOrFail(id: number) {
        try {
            return await this.fraseRepository.findOneOrFail({ where: { id: id } });
        } catch (error) {
            throw new NotFoundException('frase não encontrado');
        }
    }

    async update(id, data) {
        const frase = await this.findOneOrFail(id);
        this.fraseRepository.merge(frase, data);
        return await this.fraseRepository.save(frase);
    }

    async deleteById(id) {
        await this.findOneOrFail(id);
        await this.fraseRepository.softDelete(id);
    }


}
