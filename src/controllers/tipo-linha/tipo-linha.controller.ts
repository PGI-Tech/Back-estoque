/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoLinhaService } from './tipo-linha.service';
import { CreateTipoLinhaDto } from './dto/create-tipo-linha.dto';
import { UpdateTipoLinhaDto } from './dto/update-tipo-linha.dto';

@Controller('tipo-linha')
export class TipoLinhaController {
  constructor(private readonly tipoLinhaService: TipoLinhaService) { }

  @Post()
  create(@Body() createTipoLinhaDto: CreateTipoLinhaDto) {
    return this.tipoLinhaService.create(createTipoLinhaDto);
  }

  @Get()
  findAll() {
    return this.tipoLinhaService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoLinhaService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTipoLinhaDto: UpdateTipoLinhaDto) {
    return this.tipoLinhaService.update(+id, updateTipoLinhaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipoLinhaService.delete(+id);
  }
}
