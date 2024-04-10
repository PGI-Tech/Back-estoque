import { Module } from '@nestjs/common';
import { MarcaMaquinaService } from './marca-maquina.service';
import { MarcaMaquinaController } from './marca-maquina.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [MarcaMaquinaController],
  providers: [MarcaMaquinaService, PrismaService],
})
export class MarcaMaquinaModule { }
