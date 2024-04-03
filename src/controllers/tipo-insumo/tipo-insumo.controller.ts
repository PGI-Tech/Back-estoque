/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoInsumoService } from './tipo-insumo.service';
import { CreateTipoInsumoDto } from './dto/create-tipo-insumo.dto';
import { UpdateTipoInsumoDto } from './dto/update-tipo-insumo.dto';

@Controller('tipo-insumo')
export class TipoInsumoController {
  constructor(private readonly tipoInsumoService: TipoInsumoService) { }

  @Post()
  create(@Body() createTipoLinhaDto: CreateTipoInsumoDto) {
    return this.tipoInsumoService.create(createTipoLinhaDto);
  }

  @Get()
  findAll() {
    return this.tipoInsumoService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoInsumoService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTipoLinhaDto: UpdateTipoInsumoDto) {
    return this.tipoInsumoService.update(+id, updateTipoLinhaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipoInsumoService.delete(+id);
  }
}
