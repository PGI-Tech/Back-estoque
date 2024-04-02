/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateMarcaAgulhaDto } from './dto/create-marca-agulha.dto';
import { UpdateMarcaAgulhaDto } from './dto/update-marca-agulha.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class MarcaAgulhaService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateMarcaAgulhaDto) {
    const marcaAgulha = await this.prisma.marcaAgulha.create({
      data,
    });

    return marcaAgulha;
  }

  // GET todo
  async getAll() {
    const marcaAgulha = await this.prisma.marcaAgulha.findMany();
    return marcaAgulha;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.marcaAgulha.findFirst({
      where: {
        id_marca_agulha: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateMarcaAgulhaDto) {
    const marcaAgulhaExiste = await this.prisma.marcaAgulha.findFirst({
      where: {
        id_marca_agulha: id,
      },
    });

    if (!marcaAgulhaExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.marcaAgulha.update({
      data,
      where: {
        id_marca_agulha: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.marcaAgulha.delete({
      where: {
        id_marca_agulha: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
