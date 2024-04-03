/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgulhaService } from './agulha.service';
import { CreateAgulhaDto } from './dto/create-agulha.dto';
import { UpdateAgulhaDto } from './dto/update-agulha.dto';

@Controller('agulha')
export class AgulhaController {
  constructor(private readonly agulhaService: AgulhaService) { }

  @Post()
  create(@Body() createEmbalagemDto: CreateAgulhaDto) {
    return this.agulhaService.create(createEmbalagemDto);
  }

  @Get()
  findAll() {
    return this.agulhaService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.agulhaService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEmbalagemDto: UpdateAgulhaDto) {
    return this.agulhaService.update(+id, updateEmbalagemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.agulhaService.delete(+id);
  }
}
