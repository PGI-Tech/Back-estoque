/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TipoElasticoService } from './tipo-elastico.service';
import { TipoElasticoController } from './tipo-elastico.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [TipoElasticoController],
  providers: [TipoElasticoService, PrismaService],
})
export class TipoElasticoModule { }
