/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmbalagemService } from './embalagem.service';
import { EmbalagemController } from './embalagem.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [EmbalagemController],
  providers: [EmbalagemService, PrismaService],
})
export class EmbalagemModule { }
