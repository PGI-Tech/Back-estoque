/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UnidadeService } from './unidade.service';
import { UnidadeController } from './unidade.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [UnidadeController],
  providers: [UnidadeService, PrismaService],
})
export class UnidadeModule { }
