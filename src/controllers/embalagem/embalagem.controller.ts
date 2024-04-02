/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmbalagemService } from './embalagem.service';
import { CreateEmbalagemDto } from './dto/create-embalagem.dto';
import { UpdateEmbalagemDto } from './dto/update-embalagem.dto';

@Controller('embalagem')
export class EmbalagemController {
  constructor(private readonly embalagemService: EmbalagemService) { }

  @Post()
  create(@Body() createEmbalagemDto: CreateEmbalagemDto) {
    return this.embalagemService.create(createEmbalagemDto);
  }

  @Get()
  findAll() {
    return this.embalagemService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.embalagemService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEmbalagemDto: UpdateEmbalagemDto) {
    return this.embalagemService.update(+id, updateEmbalagemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.embalagemService.delete(+id);
  }
}
