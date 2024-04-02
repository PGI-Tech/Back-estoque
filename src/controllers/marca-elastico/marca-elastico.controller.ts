/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarcaElasticoService } from './marca-elastico.service';
import { CreateMarcaElasticoDto } from './dto/create-marca-elastico.dto';
import { UpdateMarcaElasticoDto } from './dto/update-marca-elastico.dto';

@Controller('marca-elastico')
export class MarcaElasticoController {
  constructor(private readonly marcaElasticoService: MarcaElasticoService) { }

  @Post()
  create(@Body() createMarcaElasticoDto: CreateMarcaElasticoDto) {
    return this.marcaElasticoService.create(createMarcaElasticoDto);
  }

  @Get()
  findAll() {
    return this.marcaElasticoService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.marcaElasticoService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMarcaElasticoDto: UpdateMarcaElasticoDto) {
    return this.marcaElasticoService.update(+id, updateMarcaElasticoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.marcaElasticoService.delete(+id);
  }
}
