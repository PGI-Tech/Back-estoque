/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarcaMovelService } from './marca-movel.service';
import { CreateMarcaMovelDto } from './dto/create-marca-movel.dto';
import { UpdateMarcaMovelDto } from './dto/update-marca-movel.dto';

@Controller('marca-movel')
export class MarcaMovelController {
  constructor(private readonly marcaMovelService: MarcaMovelService) { }

  @Post()
  create(@Body() createMarcaElasticoDto: CreateMarcaMovelDto) {
    return this.marcaMovelService.create(createMarcaElasticoDto);
  }

  @Get()
  findAll() {
    return this.marcaMovelService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.marcaMovelService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMarcaElasticoDto: UpdateMarcaMovelDto) {
    return this.marcaMovelService.update(+id, updateMarcaElasticoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.marcaMovelService.delete(+id);
  }
}
