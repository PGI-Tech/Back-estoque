/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClasseService } from './classe.service';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClasseDto } from './dto/update-classe.dto';

@Controller('classe')
export class ClasseController {
  constructor(private readonly classeService: ClasseService) { }

  @Post()
  create(@Body() createClasseDto: CreateClasseDto) {
    return this.classeService.create(createClasseDto);
  }

  @Get()
  findAll() {
    return this.classeService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.classeService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateClasseDto: UpdateClasseDto) {
    return this.classeService.update(+id, updateClasseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.classeService.delete(+id);
  }
}
