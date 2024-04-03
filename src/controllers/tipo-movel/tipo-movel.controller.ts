/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoMovelService } from './tipo-movel.service';
import { CreateTipoMovelDto } from './dto/create-tipo-movel.dto';
import { UpdateTipoMovelDto } from './dto/update-tipo-movel.dto';

@Controller('tipo-movel')
export class TipoMovelController {
  constructor(private readonly tipoMovelService: TipoMovelService) { }

  @Post()
  create(@Body() createTipoLinhaDto: CreateTipoMovelDto) {
    return this.tipoMovelService.create(createTipoLinhaDto);
  }

  @Get()
  findAll() {
    return this.tipoMovelService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoMovelService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTipoLinhaDto: UpdateTipoMovelDto) {
    return this.tipoMovelService.update(+id, updateTipoLinhaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipoMovelService.delete(+id);
  }
}
