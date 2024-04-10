/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateAgulhaDto } from './dto/create-agulha.dto';
import { UpdateAgulhaDto } from './dto/update-agulha.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class AgulhaService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateAgulhaDto) {
    const new_preco_final = Math.floor(data.valor * (1 + (data.imposto / 100)) * 100) / 100;
    const new_valor_estoque_total = Math.floor(data.estoque * new_preco_final * 100) / 100;
    let new_em_falta = 'NAO';
    if (data.estoque <= data.estoque_minimo) {
      new_em_falta = 'SIM';
    };

    data.preco_final = new_preco_final;
    data.valor_estoque_total = new_valor_estoque_total;
    data.em_falta = new_em_falta;

    const agulha = await this.prisma.agulha.create({
      data,
    });

    return agulha;
  }

  // GET todo
  async getAll() {
    const agulha = await this.prisma.agulha.findMany();
    return agulha;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.agulha.findFirst({
      where: {
        id_agulha: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateAgulhaDto) {
    const agulhaExiste = await this.prisma.agulha.findFirst({
      where: {
        id_agulha: id,
      },
    });

    if (!agulhaExiste) {
      throw new Error('Este item não existe!');
    }

    const new_preco_final = Math.floor(data.valor * (1 + (data.imposto / 100)) * 100) / 100;
    const new_valor_estoque_total = Math.floor(data.estoque * new_preco_final * 100) / 100;
    let new_em_falta = 'NAO';
    if (data.estoque <= data.estoque_minimo) {
      new_em_falta = 'SIM';
    };

    data.preco_final = new_preco_final;
    data.valor_estoque_total = new_valor_estoque_total;
    data.em_falta = new_em_falta;

    return this.prisma.agulha.update({
      data,
      where: {
        id_agulha: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.agulha.delete({
      where: {
        id_agulha: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
