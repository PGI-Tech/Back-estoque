/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TecidoService } from './tecido.service';
import { CreateTecidoDto } from './dto/create-tecido.dto';
import { UpdateTecidoDto } from './dto/update-tecido.dto';

@Controller('tecido')
export class TecidoController {
  constructor(private readonly tecidoService: TecidoService) { }

  @Post()
  create(@Body() createEmbalagemDto: CreateTecidoDto) {
    return this.tecidoService.create(createEmbalagemDto);
  }

  @Get()
  findAll() {
    return this.tecidoService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tecidoService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEmbalagemDto: UpdateTecidoDto) {
    return this.tecidoService.update(+id, updateEmbalagemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tecidoService.delete(+id);
  }
}
