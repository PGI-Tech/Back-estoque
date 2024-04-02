/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MarcaAgulhaService } from './marca-agulha.service';
import { MarcaAgulhaController } from './marca-agulha.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [MarcaAgulhaController],
  providers: [MarcaAgulhaService, PrismaService],
})
export class MarcaAgulhaModule { }
