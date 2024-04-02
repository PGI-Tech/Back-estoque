/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) { }

  // CREATE todo
  async create(data: CreateUsuarioDto) {

    const usuarioExiste = await this.prisma.usuario.findFirst({
      where: {
        username: data.username,
      },
    });

    if (usuarioExiste) {
      return { erro: 'Usuário já existente!' };
    }

    const usuario = await this.prisma.usuario.create({
      data,
    });

    return usuario;
  }

  // GET todo
  async getAll() {
    const usuarios = await this.prisma.usuario.findMany();
    return usuarios;
  }

  // GET ID todo
  async getById(id: number) {
    return this.prisma.usuario.findFirst({
      where: {
        id_usuario: id,
      },
    });
  }

  // UPDATE todo
  async update(id: number, data: UpdateUsuarioDto) {
    const usuarioExiste = await this.prisma.usuario.findFirst({
      where: {
        id_usuario: id,
      },
    });

    if (!usuarioExiste) {
      return { erro: 'Este item não existe!' };
    }

    return this.prisma.usuario.update({
      data,
      where: {
        id_usuario: id,
      },
    });
  }

  // DELETE todo
  async delete(id: number) {
    const del = await this.prisma.usuario.delete({
      where: {
        id_usuario: id,
      },
    });
    if (del) {
      return { message: 'Item excluído com sucesso!' };
    } else {
      return { message: '[ERRO] Item não excluída!' };
    }
  }
}
