/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreatePermissoesDto } from './dto/create-permissoe.dto';
import { UpdatePermissoesDto } from './dto/update-permissoes.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PermissoesService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreatePermissoesDto) {
    const permissao = await this.prisma.permissao.create({
      data,
    });

    return permissao;
  }

  // GET todo
  async getAll() {
    const permissoes = await this.prisma.permissao.findMany();
    return permissoes;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.permissao.findFirst({
      where: {
        id_permissao: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdatePermissoesDto) {
    const permissaoExiste = await this.prisma.permissao.findFirst({
      where: {
        id_permissao: id,
      },
    });

    if (!permissaoExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.permissao.update({
      data,
      where: {
        id_permissao: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.permissao.delete({
      where: {
        id_permissao: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
