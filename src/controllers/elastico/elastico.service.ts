/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateElasticoDto } from './dto/create-elastico.dto';
import { UpdateElasticoDto } from './dto/update-elastico.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ElasticoService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateElasticoDto) {
    const new_preco_final = Math.floor(data.valor * (1 + (data.imposto / 100)) * 100) / 100;
    const new_valor_estoque_total = Math.floor(data.estoque * new_preco_final * 100) / 100;
    let new_em_falta = 'NAO';
    if (data.estoque <= data.estoque_minimo) {
      new_em_falta = 'SIM';
    };

    data.preco_final = new_preco_final;
    data.valor_estoque_total = new_valor_estoque_total;
    data.em_falta = new_em_falta;

    const elastico = await this.prisma.elastico.create({
      data,
    });

    return elastico;
  }

  // GET todo
  async getAll() {
    const elastico = await this.prisma.elastico.findMany();
    return elastico;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.elastico.findFirst({
      where: {
        id_elastico: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateElasticoDto) {
    const elasticoExiste = await this.prisma.elastico.findFirst({
      where: {
        id_elastico: id,
      },
    });

    if (!elasticoExiste) {
      throw new Error('Este item não existe!');
    };

    const new_preco_final = Math.floor(data.valor * (1 + (data.imposto / 100)) * 100) / 100;
    const new_valor_estoque_total = Math.floor(data.estoque * new_preco_final * 100) / 100;
    let new_em_falta = 'NAO';
    if (data.estoque <= data.estoque_minimo) {
      new_em_falta = 'SIM';
    };

    data.preco_final = new_preco_final;
    data.valor_estoque_total = new_valor_estoque_total;
    data.em_falta = new_em_falta;

    return this.prisma.elastico.update({
      data,
      where: {
        id_elastico: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.elastico.delete({
      where: {
        id_elastico: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
