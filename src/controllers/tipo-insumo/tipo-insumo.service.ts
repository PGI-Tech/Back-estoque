/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTipoInsumoDto } from './dto/create-tipo-insumo.dto';
import { UpdateTipoInsumoDto } from './dto/update-tipo-insumo.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class TipoInsumoService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateTipoInsumoDto) {
    const tipoInsumo = await this.prisma.tipoInsumo.create({
      data,
    });

    return tipoInsumo;
  }

  // GET todo
  async getAll() {
    const tipoInsumo = await this.prisma.tipoInsumo.findMany();
    return tipoInsumo;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.tipoInsumo.findFirst({
      where: {
        id_tipo_insumo: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateTipoInsumoDto) {
    const tipoInsumoExiste = await this.prisma.tipoInsumo.findFirst({
      where: {
        id_tipo_insumo: id,
      },
    });

    if (!tipoInsumoExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.tipoInsumo.update({
      data,
      where: {
        id_tipo_insumo: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.tipoInsumo.delete({
      where: {
        id_tipo_insumo: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
