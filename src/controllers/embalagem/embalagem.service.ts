/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateEmbalagemDto } from './dto/create-embalagem.dto';
import { UpdateEmbalagemDto } from './dto/update-embalagem.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class EmbalagemService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateEmbalagemDto) {
    const embalagem = await this.prisma.embalagem.create({
      data,
    });

    return embalagem;
  }

  // GET todo
  async getAll() {
    const embalagem = await this.prisma.embalagem.findMany();
    return embalagem;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.embalagem.findFirst({
      where: {
        id_embalagem: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateEmbalagemDto) {
    const embalagemExiste = await this.prisma.embalagem.findFirst({
      where: {
        id_embalagem: id,
      },
    });

    if (!embalagemExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.embalagem.update({
      data,
      where: {
        id_embalagem: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.embalagem.delete({
      where: {
        id_embalagem: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
