/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreatePecasProntaDto } from './dto/create-pecas-pronta.dto';
import { UpdatePecasProntaDto } from './dto/update-pecas-pronta.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PecasProntasService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreatePecasProntaDto) {
    const new_valor_estoque_total = Math.floor(data.estoque * data.valor * 100) / 100;
    let new_em_falta = 'NAO';
    if (data.estoque <= data.estoque_minimo) {
      new_em_falta = 'SIM';
    };

    data.valor_estoque_total = new_valor_estoque_total;
    data.em_falta = new_em_falta;

    const pecas_pronta = await this.prisma.pecasProntas.create({
      data
    });

    return pecas_pronta;
  }

  // GET todo
  async getAll() {
    const pecas_pronta = await this.prisma.pecasProntas.findMany();
    return pecas_pronta;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.pecasProntas.findFirst({
      where: {
        id_pecas_prontas: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdatePecasProntaDto) {
    const pecas_prontaExiste = await this.prisma.pecasProntas.findFirst({
      where: {
        id_pecas_prontas: id,
      },
    });

    if (!pecas_prontaExiste) {
      throw new Error('Este item não existe!');
    }

    const new_valor_estoque_total = Math.floor(data.estoque * data.valor * 100) / 100;
    let new_em_falta = 'NAO';
    if (data.estoque <= data.estoque_minimo) {
      new_em_falta = 'SIM';
    };

    data.valor_estoque_total = new_valor_estoque_total;
    data.em_falta = new_em_falta;

    return this.prisma.pecasProntas.update({
      data: data,
      where: {
        id_pecas_prontas: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.pecasProntas.delete({
      where: {
        id_pecas_prontas: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
