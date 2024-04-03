/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTipoMovelDto } from './dto/create-tipo-movel.dto';
import { UpdateTipoMovelDto } from './dto/update-tipo-movel.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class TipoMovelService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateTipoMovelDto) {
    const tipoMovel = await this.prisma.tipoMovel.create({
      data,
    });

    return tipoMovel;
  }

  // GET todo
  async getAll() {
    const tipoMovel = await this.prisma.tipoMovel.findMany();
    return tipoMovel;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.tipoMovel.findFirst({
      where: {
        id_tipo_movel: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateTipoMovelDto) {
    const tipoMovelExiste = await this.prisma.tipoMovel.findFirst({
      where: {
        id_tipo_movel: id,
      },
    });

    if (!tipoMovelExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.tipoMovel.update({
      data,
      where: {
        id_tipo_movel: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.tipoMovel.delete({
      where: {
        id_tipo_movel: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
