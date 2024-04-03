import { Module } from '@nestjs/common';
import { TipoMaquinaService } from './tipo-maquina.service';
import { TipoMaquinaController } from './tipo-maquina.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [TipoMaquinaController],
  providers: [TipoMaquinaService, PrismaService],
})
export class TipoMaquinaModule { }
