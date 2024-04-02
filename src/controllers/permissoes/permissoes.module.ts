/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PermissoesService } from './permissoes.service';
import { PermissoesController } from './permissoes.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [PermissoesController],
  providers: [PermissoesService, PrismaService],
})
export class PermissoesModule { }
