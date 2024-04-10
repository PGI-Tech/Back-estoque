import { Module } from '@nestjs/common';
import { MarcaMovelService } from './marca-movel.service';
import { MarcaMovelController } from './marca-movel.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [MarcaMovelController],
  providers: [MarcaMovelService, PrismaService],
})
export class MarcaMovelModule { }
