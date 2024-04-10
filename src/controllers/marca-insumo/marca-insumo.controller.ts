/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarcaInsumoService } from './marca-insumo.service';
import { CreateMarcaInsumoDto } from './dto/create-marca-insumo.dto';
import { UpdateMarcaInsumoDto } from './dto/update-marca-insumo.dto';

@Controller('marca-insumo')
export class MarcaInsumoController {
  constructor(private readonly marcaInsumoService: MarcaInsumoService) { }

  @Post()
  create(@Body() createMarcaElasticoDto: CreateMarcaInsumoDto) {
    return this.marcaInsumoService.create(createMarcaElasticoDto);
  }

  @Get()
  findAll() {
    return this.marcaInsumoService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.marcaInsumoService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMarcaElasticoDto: UpdateMarcaInsumoDto) {
    return this.marcaInsumoService.update(+id, updateMarcaElasticoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.marcaInsumoService.delete(+id);
  }
}
