import { Module } from '@nestjs/common';
import { TecidoService } from './tecido.service';
import { TecidoController } from './tecido.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [TecidoController],
  providers: [TecidoService, PrismaService],
})
export class TecidoModule { }
