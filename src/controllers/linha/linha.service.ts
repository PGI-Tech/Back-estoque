/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateLinhaDto } from './dto/create-linha.dto';
import { UpdateLinhaDto } from './dto/update-linha.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class LinhaService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateLinhaDto) {
    const new_preco_final = data.valor * (1 + (data.imposto / 100));
    const new_valor_estoque_total = data.estoque * new_preco_final;
    let new_em_falta = 'NAO';
    if (data.estoque <= data.estoque_minimo) {
      new_em_falta = 'SIM';
    };

    data.preco_final = new_preco_final;
    data.valor_estoque_total = new_valor_estoque_total;
    data.em_falta = new_em_falta;

    const linha = await this.prisma.linha.create({
      data,
    });

    return linha;
  }

  // GET todo
  async getAll() {
    const linha = await this.prisma.linha.findMany();
    return linha;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.linha.findFirst({
      where: {
        id_linha: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateLinhaDto) {
    const linhaExiste = await this.prisma.linha.findFirst({
      where: {
        id_linha: id,
      },
    });

    if (!linhaExiste) {
      throw new Error('Este item não existe!');
    }

    const new_preco_final = data.valor * (1 + (data.imposto / 100));
    const new_valor_estoque_total = data.estoque * new_preco_final;
    let new_em_falta = 'NAO';
    if (data.estoque <= data.estoque_minimo) {
      new_em_falta = 'SIM';
    };

    data.preco_final = new_preco_final;
    data.valor_estoque_total = new_valor_estoque_total;
    data.em_falta = new_em_falta;

    return this.prisma.linha.update({
      data,
      where: {
        id_linha: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.linha.delete({
      where: {
        id_linha: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
