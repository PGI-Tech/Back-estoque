/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EspecieAgulhaService } from './especie-agulha.service';
import { CreateEspecieAgulhaDto } from './dto/create-especie-agulha.dto';
import { UpdateEspecieAgulhaDto } from './dto/update-especie-agulha.dto';

@Controller('especie-agulha')
export class EspecieAgulhaController {
  constructor(private readonly especieAgulhaService: EspecieAgulhaService) { }

  @Post()
  create(@Body() createEspecieAgulhaDto: CreateEspecieAgulhaDto) {
    return this.especieAgulhaService.create(createEspecieAgulhaDto);
  }

  @Get()
  findAll() {
    return this.especieAgulhaService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.especieAgulhaService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEspecieAgulhaDto: UpdateEspecieAgulhaDto) {
    return this.especieAgulhaService.update(+id, updateEspecieAgulhaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.especieAgulhaService.delete(+id);
  }
}
