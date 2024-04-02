/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ElasticoService } from './elastico.service';
import { CreateElasticoDto } from './dto/create-elastico.dto';
import { UpdateElasticoDto } from './dto/update-elastico.dto';

@Controller('elastico')
export class ElasticoController {
  constructor(private readonly elasticoService: ElasticoService) { }

  @Post()
  create(@Body() createElasticoDto: CreateElasticoDto) {
    // Fazer os cálculos de preco_final e valor_estoque_total no create
    return this.elasticoService.create(createElasticoDto);
  }

  @Get()
  findAll() {
    return this.elasticoService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.elasticoService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEmbalagemDto: UpdateElasticoDto) {
    return this.elasticoService.update(+id, updateEmbalagemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.elasticoService.delete(+id);
  }
}
