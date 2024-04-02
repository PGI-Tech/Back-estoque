/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MarcaElasticoService } from './marca-elastico.service';
import { MarcaElasticoController } from './marca-elastico.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [MarcaElasticoController],
  providers: [MarcaElasticoService, PrismaService],
})
export class MarcaElasticoModule { }
