import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { FraseService } from './frase.service';

@Controller('translate')
export class FraseController {
    constructor(
        private readonly fraseService: FraseService
    ) { }

   @Post('/:linguagem')
    async translate(@Param('linguagem') linguagem: string, @Body() frase:string){

        return await this.fraseService.translate(linguagem, frase);
        
    }
    @Get()
    async findAll(){
        return await this.fraseService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.fraseService.findOneOrFail(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() body) {
        return await this.fraseService.update(id, body);
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteById(@Param('id') id: number) {
        await this.fraseService.deleteById(id);
    }


    

}
