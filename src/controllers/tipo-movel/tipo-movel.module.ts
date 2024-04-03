import { Module } from '@nestjs/common';
import { TipoMovelService } from './tipo-movel.service';
import { TipoMovelController } from './tipo-movel.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [TipoMovelController],
  providers: [TipoMovelService, PrismaService],
})
export class TipoMovelModule { }
