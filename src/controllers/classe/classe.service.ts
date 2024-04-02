/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClasseDto } from './dto/update-classe.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ClasseService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateClasseDto) {
    const classe = await this.prisma.classe.create({
      data,
    });

    return classe;
  }

  // GET todo
  async getAll() {
    const classes = await this.prisma.classe.findMany();
    return classes;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.classe.findFirst({
      where: {
        id_classe: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateClasseDto) {
    const classExiste = await this.prisma.classe.findFirst({
      where: {
        id_classe: id,
      },
    });

    if (!classExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.classe.update({
      data,
      where: {
        id_classe: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.classe.delete({
      where: {
        id_classe: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
