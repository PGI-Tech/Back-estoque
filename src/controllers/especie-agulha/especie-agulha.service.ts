/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateEspecieAgulhaDto } from './dto/create-especie-agulha.dto';
import { UpdateEspecieAgulhaDto } from './dto/update-especie-agulha.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class EspecieAgulhaService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateEspecieAgulhaDto) {
    const especieAgulha = await this.prisma.especieAgulha.create({
      data,
    });

    return especieAgulha;
  }

  // GET todo
  async getAll() {
    const especieAgulha = await this.prisma.especieAgulha.findMany();
    return especieAgulha;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.especieAgulha.findFirst({
      where: {
        id_especie_agulha: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateEspecieAgulhaDto) {
    const especieAgulhaExiste = await this.prisma.especieAgulha.findFirst({
      where: {
        id_especie_agulha: id,
      },
    });

    if (!especieAgulhaExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.especieAgulha.update({
      data,
      where: {
        id_especie_agulha: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.especieAgulha.delete({
      where: {
        id_especie_agulha: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
