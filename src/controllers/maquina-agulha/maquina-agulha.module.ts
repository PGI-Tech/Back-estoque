/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MaquinaAgulhaService } from './maquina-agulha.service';
import { MaquinaAgulhaController } from './maquina-agulha.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [MaquinaAgulhaController],
  providers: [MaquinaAgulhaService, PrismaService],
})
export class MaquinaAgulhaModule { }
