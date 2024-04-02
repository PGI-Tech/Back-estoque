/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EspecieAgulhaService } from './especie-agulha.service';
import { EspecieAgulhaController } from './especie-agulha.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [EspecieAgulhaController],
  providers: [EspecieAgulhaService, PrismaService],
})
export class EspecieAgulhaModule { }
