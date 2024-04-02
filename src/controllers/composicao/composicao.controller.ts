/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComposicaoService } from './composicao.service';
import { CreateComposicaoDto } from './dto/create-composicao.dto';
import { UpdateComposicaoDto } from './dto/update-composicao.dto';

@Controller('composicao')
export class ComposicaoController {
  constructor(private readonly composicaoService: ComposicaoService) { }

  @Post()
  create(@Body() createComposicaoDto: CreateComposicaoDto) {
    return this.composicaoService.create(createComposicaoDto);
  }

  @Get()
  findAll() {
    return this.composicaoService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.composicaoService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateComposicaoDto: UpdateComposicaoDto) {
    return this.composicaoService.update(+id, updateComposicaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.composicaoService.delete(+id);
  }
}
