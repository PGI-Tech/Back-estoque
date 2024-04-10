/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateMarcaMovelDto } from './dto/create-marca-movel.dto';
import { UpdateMarcaMovelDto } from './dto/update-marca-movel.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class MarcaMovelService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateMarcaMovelDto) {
    const marcaMovel = await this.prisma.marcaMovel.create({
      data,
    });

    return marcaMovel;
  }

  // GET todo
  async getAll() {
    const marcaMovel = await this.prisma.marcaMovel.findMany();
    return marcaMovel;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.marcaMovel.findFirst({
      where: {
        id_marca_movel: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateMarcaMovelDto) {
    const marcaMovelExiste = await this.prisma.marcaMovel.findFirst({
      where: {
        id_marca_movel: id,
      },
    });

    if (!marcaMovelExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.marcaMovel.update({
      data,
      where: {
        id_marca_movel: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.marcaMovel.delete({
      where: {
        id_marca_movel: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
