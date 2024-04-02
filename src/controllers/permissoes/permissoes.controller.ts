/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermissoesService } from './permissoes.service';
import { CreatePermissoesDto } from './dto/create-permissoe.dto';
import { UpdatePermissoesDto } from './dto/update-permissoes.dto';

@Controller('permissoes')
export class PermissoesController {
  constructor(private readonly permissoesService: PermissoesService) { }

  @Post()
  create(@Body() createPermissoesDto: CreatePermissoesDto) {
    return this.permissoesService.create(createPermissoesDto);
  }

  @Get()
  findAll() {
    return this.permissoesService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.permissoesService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePermissoesDto: UpdatePermissoesDto) {
    return this.permissoesService.update(+id, updatePermissoesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.permissoesService.delete(+id);
  }
}
