/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ComposicaoService } from './composicao.service';
import { ComposicaoController } from './composicao.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ComposicaoController],
  providers: [ComposicaoService, PrismaService],
})
export class ComposicaoModule { }
