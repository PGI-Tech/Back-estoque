/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateComposicaoDto } from './dto/create-composicao.dto';
import { UpdateComposicaoDto } from './dto/update-composicao.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ComposicaoService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateComposicaoDto) {
    const composicao = await this.prisma.composicao.create({
      data,
    });

    return composicao;
  }

  // GET todo
  async getAll() {
    const composicao = await this.prisma.composicao.findMany();
    return composicao;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.composicao.findFirst({
      where: {
        id_composicao: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateComposicaoDto) {
    const composicaoExiste = await this.prisma.composicao.findFirst({
      where: {
        id_composicao: id,
      },
    });

    if (!composicaoExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.composicao.update({
      data,
      where: {
        id_composicao: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.composicao.delete({
      where: {
        id_composicao: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
