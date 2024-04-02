/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ClasseService } from './classe.service';
import { ClasseController } from './classe.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ClasseController],
  providers: [ClasseService, PrismaService],
})
export class ClasseModule { }
