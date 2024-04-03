/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoMaquinaService } from './tipo-maquina.service';
import { CreateTipoMaquinaDto } from './dto/create-tipo-maquina.dto';
import { UpdateTipoMaquinaDto } from './dto/update-tipo-maquina.dto';

@Controller('tipo-maquina')
export class TipoMaquinaController {
  constructor(private readonly tipoMaquinaService: TipoMaquinaService) { }

  @Post()
  create(@Body() createTipoLinhaDto: CreateTipoMaquinaDto) {
    return this.tipoMaquinaService.create(createTipoLinhaDto);
  }

  @Get()
  findAll() {
    return this.tipoMaquinaService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoMaquinaService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTipoLinhaDto: UpdateTipoMaquinaDto) {
    return this.tipoMaquinaService.update(+id, updateTipoLinhaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipoMaquinaService.delete(+id);
  }
}
