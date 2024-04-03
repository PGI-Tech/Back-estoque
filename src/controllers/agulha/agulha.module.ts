import { Module } from '@nestjs/common';
import { AgulhaService } from './agulha.service';
import { AgulhaController } from './agulha.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [AgulhaController],
  providers: [AgulhaService, PrismaService],
})
export class AgulhaModule { }
