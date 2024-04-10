import { Module } from '@nestjs/common';
import { PecasProntasService } from './pecas-prontas.service';
import { PecasProntasController } from './pecas-prontas.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [PecasProntasController],
  providers: [PecasProntasService, PrismaService],
})
export class PecasProntasModule { }
