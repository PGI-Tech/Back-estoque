/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarcaMaquinaService } from './marca-maquina.service';
import { CreateMarcaMaquinaDto } from './dto/create-marca-maquina.dto';
import { UpdateMarcaMaquinaDto } from './dto/update-marca-maquina.dto';

@Controller('marca-maquina')
export class MarcaMaquinaController {
  constructor(private readonly marcaMaquinaService: MarcaMaquinaService) { }

  @Post()
  create(@Body() createMarcaElasticoDto: CreateMarcaMaquinaDto) {
    return this.marcaMaquinaService.create(createMarcaElasticoDto);
  }

  @Get()
  findAll() {
    return this.marcaMaquinaService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.marcaMaquinaService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMarcaElasticoDto: UpdateMarcaMaquinaDto) {
    return this.marcaMaquinaService.update(+id, updateMarcaElasticoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.marcaMaquinaService.delete(+id);
  }
}
