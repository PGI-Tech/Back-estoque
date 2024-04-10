/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateMarcaMaquinaDto } from './dto/create-marca-maquina.dto';
import { UpdateMarcaMaquinaDto } from './dto/update-marca-maquina.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class MarcaMaquinaService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateMarcaMaquinaDto) {
    const marcaMaquina = await this.prisma.marcaMaquina.create({
      data,
    });

    return marcaMaquina;
  }

  // GET todo
  async getAll() {
    const marcaMaquina = await this.prisma.marcaMaquina.findMany();
    return marcaMaquina;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.marcaMaquina.findFirst({
      where: {
        id_marca_maquina: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateMarcaMaquinaDto) {
    const marcaMaquinaExiste = await this.prisma.marcaMaquina.findFirst({
      where: {
        id_marca_maquina: id,
      },
    });

    if (!marcaMaquinaExiste) {
      throw new Error('Este item não existe!');
    }

    return this.prisma.marcaMaquina.update({
      data,
      where: {
        id_marca_maquina: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.marcaMaquina.delete({
      where: {
        id_marca_maquina: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
