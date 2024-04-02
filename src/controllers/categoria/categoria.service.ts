/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
    constructor(private prisma: PrismaService) { }

    // CREATE todo
    async create(data: CreateCategoriaDto) {
        const categoria = await this.prisma.categoria.create({
            data,
        });

        return categoria;
    }

    // GET todo
    async getAll() {
        const categorias = await this.prisma.categoria.findMany();
        return categorias;
    }

    // GET ID todo
    async getById(id: number) {
        return this.prisma.categoria.findFirst({
            where: {
                id_categoria: id,
            },
        });
    }

    // UPDATE todo
    async update(id: number, data: UpdateCategoriaDto) {
        const todoExiste = await this.prisma.categoria.findFirst({
            where: {
                id_categoria: id,
            },
        });

        if (!todoExiste) {
            throw new Error('Este item não existe!');
        }

        return this.prisma.categoria.update({
            data,
            where: {
                id_categoria: id,
            },
        });
    }

    // DELETE todo
    async delete(id: number) {
        const del = await this.prisma.categoria.delete({
            where: {
                id_categoria: id,
            },
        });
        if (del) {
            return { message: 'Item excluído com sucesso!' };
        } else {
            return { message: '[ERRO] Item não excluída!' };
        }
    }
};