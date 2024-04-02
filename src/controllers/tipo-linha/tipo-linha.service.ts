/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTipoLinhaDto } from './dto/create-tipo-linha.dto';
import { UpdateTipoLinhaDto } from './dto/update-tipo-linha.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class TipoLinhaService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateTipoLinhaDto) {
    const tipoLinha = await this.prisma.tipoLinha.create({
      data,
    });

    return tipoLinha;
  }

  // GET todo
  async getAll() {
    const tipoLinha = await this.prisma.tipoLinha.findMany();
    return tipoLinha;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.tipoLinha.findFirst({
      where: {
        id_tipo_linha: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateTipoLinhaDto) {
    const tipoLinhaExiste = await this.prisma.tipoLinha.findFirst({
      where: {
        id_tipo_linha: id,
      },
    });

    if (!tipoLinhaExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.tipoLinha.update({
      data,
      where: {
        id_tipo_linha: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.tipoLinha.delete({
      where: {
        id_tipo_linha: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
