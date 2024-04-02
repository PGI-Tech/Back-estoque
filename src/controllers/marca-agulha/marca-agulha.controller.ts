/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarcaAgulhaService } from './marca-agulha.service';
import { CreateMarcaAgulhaDto } from './dto/create-marca-agulha.dto';
import { UpdateMarcaAgulhaDto } from './dto/update-marca-agulha.dto';

@Controller('marca-agulha')
export class MarcaAgulhaController {
  constructor(private readonly marcaAgulhaService: MarcaAgulhaService) { }

  @Post()
  create(@Body() createMarcaAgulhaDto: CreateMarcaAgulhaDto) {
    return this.marcaAgulhaService.create(createMarcaAgulhaDto);
  }

  @Get()
  findAll() {
    return this.marcaAgulhaService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.marcaAgulhaService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMarcaAgulhaDto: UpdateMarcaAgulhaDto) {
    return this.marcaAgulhaService.update(+id, updateMarcaAgulhaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.marcaAgulhaService.delete(+id);
  }
}
