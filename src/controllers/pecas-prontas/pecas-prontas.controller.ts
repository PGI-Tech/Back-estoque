/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PecasProntasService } from './pecas-prontas.service';
import { CreatePecasProntaDto } from './dto/create-pecas-pronta.dto';
import { UpdatePecasProntaDto } from './dto/update-pecas-pronta.dto';

@Controller('pecas-prontas')
export class PecasProntasController {
  constructor(private readonly pecasProntasService: PecasProntasService) { }

  @Post()
  create(@Body() createpecasProntasDto: CreatePecasProntaDto) {
    return this.pecasProntasService.create(createpecasProntasDto);
  }

  @Get()
  findAll() {
    return this.pecasProntasService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pecasProntasService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatepecasProntasDto: UpdatePecasProntaDto) {
    return this.pecasProntasService.update(+id, updatepecasProntasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pecasProntasService.delete(+id);
  }
}
