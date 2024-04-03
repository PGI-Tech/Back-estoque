/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTipoMaquinaDto } from './dto/create-tipo-maquina.dto';
import { UpdateTipoMaquinaDto } from './dto/update-tipo-maquina.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class TipoMaquinaService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateTipoMaquinaDto) {
    const tipoMaquina = await this.prisma.tipoMaquina.create({
      data,
    });

    return tipoMaquina;
  }

  // GET todo
  async getAll() {
    const tipoMaquina = await this.prisma.tipoMaquina.findMany();
    return tipoMaquina;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.tipoMaquina.findFirst({
      where: {
        id_tipo_maquina: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateTipoMaquinaDto) {
    const tipoMaquinaExiste = await this.prisma.tipoMaquina.findFirst({
      where: {
        id_tipo_maquina: id,
      },
    });

    if (!tipoMaquinaExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.tipoMaquina.update({
      data,
      where: {
        id_tipo_maquina: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.tipoMaquina.delete({
      where: {
        id_tipo_maquina: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
