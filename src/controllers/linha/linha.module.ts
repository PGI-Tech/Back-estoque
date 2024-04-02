import { Module } from '@nestjs/common';
import { LinhaService } from './linha.service';
import { LinhaController } from './linha.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [LinhaController],
  providers: [LinhaService, PrismaService],
})
export class LinhaModule { }
