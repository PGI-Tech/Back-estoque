/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UnidadeService } from './unidade.service';
import { UpdateUnidadeDto } from './dto/update-classe.dto';
import { CreateUnidadeDto } from './dto/create-unidade.dto';

@Controller('unidade')
export class UnidadeController {
  constructor(private readonly unidadeService: UnidadeService) { }

  @Post()
  create(@Body() createUnidadeDto: CreateUnidadeDto) {
    return this.unidadeService.create(createUnidadeDto);
  }

  @Get()
  findAll() {
    return this.unidadeService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.unidadeService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUnidadeDto: UpdateUnidadeDto) {
    return this.unidadeService.update(+id, updateUnidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.unidadeService.delete(+id);
  }
}
