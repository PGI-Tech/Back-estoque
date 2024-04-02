/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ElasticoService } from './elastico.service';
import { ElasticoController } from './elastico.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ElasticoController],
  providers: [ElasticoService, PrismaService],
})
export class ElasticoModule { }
