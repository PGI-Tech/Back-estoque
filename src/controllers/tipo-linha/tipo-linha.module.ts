/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TipoLinhaService } from './tipo-linha.service';
import { TipoLinhaController } from './tipo-linha.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [TipoLinhaController],
  providers: [TipoLinhaService, PrismaService],
})
export class TipoLinhaModule { }
