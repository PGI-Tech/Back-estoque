/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateMaquinaAgulhaDto } from './dto/create-maquina-agulha.dto';
import { UpdateMaquinaAgulhaDto } from './dto/update-maquina-agulha.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class MaquinaAgulhaService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateMaquinaAgulhaDto) {
    const maquinaAgulha = await this.prisma.maquinaAgulha.create({
      data,
    });

    return maquinaAgulha;
  }

  // GET todo
  async getAll() {
    const maquinaAgulha = await this.prisma.maquinaAgulha.findMany();
    return maquinaAgulha;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.maquinaAgulha.findFirst({
      where: {
        id_maquina_agulha: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateMaquinaAgulhaDto) {
    const maquinaAgulhaExiste = await this.prisma.maquinaAgulha.findFirst({
      where: {
        id_maquina_agulha: id,
      },
    });

    if (!maquinaAgulhaExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.maquinaAgulha.update({
      data,
      where: {
        id_maquina_agulha: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.maquinaAgulha.delete({
      where: {
        id_maquina_agulha: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
