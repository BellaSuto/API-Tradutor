import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FraseEntity } from './frase.entity';
import { FraseController } from './frase.controller';
import { FraseService } from './frase.service';

@Module({
  imports: [TypeOrmModule.forFeature([FraseEntity])],
  controllers: [FraseController],
  providers: [FraseService],
  exports: [FraseService]
})
export class FraseModule {}
