/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateMarcaElasticoDto } from './dto/create-marca-elastico.dto';
import { UpdateMarcaElasticoDto } from './dto/update-marca-elastico.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class MarcaElasticoService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateMarcaElasticoDto) {
    const marcaElastico = await this.prisma.marcaElastico.create({
      data,
    });

    return marcaElastico;
  }

  // GET todo
  async getAll() {
    const marcaElastico = await this.prisma.marcaElastico.findMany();
    return marcaElastico;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.marcaElastico.findFirst({
      where: {
        id_marca_elastico: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateMarcaElasticoDto) {
    const marcaElasticoExiste = await this.prisma.marcaElastico.findFirst({
      where: {
        id_marca_elastico: id,
      },
    });

    if (!marcaElasticoExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.marcaElastico.update({
      data,
      where: {
        id_marca_elastico: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.marcaElastico.delete({
      where: {
        id_marca_elastico: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
