/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaquinaAgulhaService } from './maquina-agulha.service';
import { CreateMaquinaAgulhaDto } from './dto/create-maquina-agulha.dto';
import { UpdateMaquinaAgulhaDto } from './dto/update-maquina-agulha.dto';

@Controller('maquina-agulha')
export class MaquinaAgulhaController {
  constructor(private readonly maquinaAgulhaService: MaquinaAgulhaService) { }

  @Post()
  create(@Body() createMaquinaAgulhaServiceDto: CreateMaquinaAgulhaDto) {
    return this.maquinaAgulhaService.create(createMaquinaAgulhaServiceDto);
  }

  @Get()
  findAll() {
    return this.maquinaAgulhaService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.maquinaAgulhaService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMaquinaAgulhaServiceDto: UpdateMaquinaAgulhaDto) {
    return this.maquinaAgulhaService.update(+id, updateMaquinaAgulhaServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.maquinaAgulhaService.delete(+id);
  }
}
