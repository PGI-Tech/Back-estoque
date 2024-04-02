/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTipoElasticoDto } from './dto/create-tipo-elastico.dto';
import { UpdateTipoElasticoDto } from './dto/update-tipo-elastico.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class TipoElasticoService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateTipoElasticoDto) {
    const tipoElastico = await this.prisma.tipoElastico.create({
      data,
    });

    return tipoElastico;
  }

  // GET todo
  async getAll() {
    const tipoElastico = await this.prisma.tipoElastico.findMany();
    return tipoElastico;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.tipoElastico.findFirst({
      where: {
        id_tipo_elastico: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateTipoElasticoDto) {
    const tipoElasticoExiste = await this.prisma.tipoElastico.findFirst({
      where: {
        id_tipo_elastico: id,
      },
    });

    if (!tipoElasticoExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.tipoElastico.update({
      data,
      where: {
        id_tipo_elastico: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.tipoElastico.delete({
      where: {
        id_tipo_elastico: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
