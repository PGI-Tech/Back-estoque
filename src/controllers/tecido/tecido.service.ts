/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTecidoDto } from './dto/create-tecido.dto';
import { UpdateTecidoDto } from './dto/update-tecido.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class TecidoService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateTecidoDto) {
    const new_preco_final = data.valor * (1 + (data.imposto / 100));
    const new_valor_estoque_total = data.estoque * new_preco_final;
    let new_em_falta = 'NAO';
    if (data.estoque <= data.estoque_minimo) {
      new_em_falta = 'SIM';
    };

    data.preco_final = new_preco_final;
    data.valor_estoque_total = new_valor_estoque_total;
    data.em_falta = new_em_falta;

    const tecido = await this.prisma.tecido.create({
      data,
    });

    return tecido;
  }

  // GET todo
  async getAll() {
    const tecido = await this.prisma.tecido.findMany();
    return tecido;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.tecido.findFirst({
      where: {
        id_tecido: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateTecidoDto) {
    const tecidoExiste = await this.prisma.tecido.findFirst({
      where: {
        id_tecido: id,
      },
    });

    if (!tecidoExiste) {
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

    return this.prisma.tecido.update({
      data,
      where: {
        id_tecido: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.tecido.delete({
      where: {
        id_tecido: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
