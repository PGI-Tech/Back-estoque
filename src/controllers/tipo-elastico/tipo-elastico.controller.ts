/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoElasticoService } from './tipo-elastico.service';
import { CreateTipoElasticoDto } from './dto/create-tipo-elastico.dto';
import { UpdateTipoElasticoDto } from './dto/update-tipo-elastico.dto';

@Controller('tipo-elastico')
export class TipoElasticoController {
  constructor(private readonly tipoElasticoService: TipoElasticoService) { }

  @Post()
  create(@Body() createTipoElasticoDto: CreateTipoElasticoDto) {
    return this.tipoElasticoService.create(createTipoElasticoDto);
  }

  @Get()
  findAll() {
    return this.tipoElasticoService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoElasticoService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTipoElasticoDto: UpdateTipoElasticoDto) {
    return this.tipoElasticoService.update(+id, updateTipoElasticoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipoElasticoService.delete(+id);
  }
}
