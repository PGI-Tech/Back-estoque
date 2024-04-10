import { Module } from '@nestjs/common';
import { MarcaInsumoService } from './marca-insumo.service';
import { MarcaInsumoController } from './marca-insumo.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [MarcaInsumoController],
  providers: [MarcaInsumoService, PrismaService],
})
export class MarcaInsumoModule { }
