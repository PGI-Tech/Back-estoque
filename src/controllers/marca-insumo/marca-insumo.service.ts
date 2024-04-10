/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateMarcaInsumoDto } from './dto/create-marca-insumo.dto';
import { UpdateMarcaInsumoDto } from './dto/update-marca-insumo.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class MarcaInsumoService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateMarcaInsumoDto) {
    const marcaInsumo = await this.prisma.marcaInsumo.create({
      data,
    });

    return marcaInsumo;
  }

  // GET todo
  async getAll() {
    const marcaInsumo = await this.prisma.marcaInsumo.findMany();
    return marcaInsumo;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.marcaInsumo.findFirst({
      where: {
        id_marca_insumo: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateMarcaInsumoDto) {
    const marcaInsumoExiste = await this.prisma.marcaInsumo.findFirst({
      where: {
        id_marca_insumo: id,
      },
    });

    if (!marcaInsumoExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.marcaInsumo.update({
      data,
      where: {
        id_marca_insumo: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.marcaInsumo.delete({
      where: {
        id_marca_insumo: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
