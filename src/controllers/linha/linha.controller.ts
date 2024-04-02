/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LinhaService } from './linha.service';
import { CreateLinhaDto } from './dto/create-linha.dto';
import { UpdateLinhaDto } from './dto/update-linha.dto';

@Controller('linha')
export class LinhaController {
  constructor(private readonly linhaService: LinhaService) { }

  @Post()
  create(@Body() createEmbalagemDto: CreateLinhaDto) {
    // Calcular preco_final e valor_estoque_total no create
    return this.linhaService.create(createEmbalagemDto);
  }

  @Get()
  findAll() {
    return this.linhaService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.linhaService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEmbalagemDto: UpdateLinhaDto) {
    return this.linhaService.update(+id, updateEmbalagemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.linhaService.delete(+id);
  }
}
