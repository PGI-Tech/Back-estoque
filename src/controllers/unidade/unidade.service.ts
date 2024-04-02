/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateUnidadeDto } from './dto/update-classe.dto';

@Injectable()
export class UnidadeService {
    constructor(private prisma: PrismaService) { }

    // CREATE todo
    async create(data: CreateUnidadeDto) {
        const categoria = await this.prisma.unidade.create({
            data,
        });

        return categoria;
    }

    // GET todo
    async getAll() {
        const unidades = await this.prisma.unidade.findMany();
        return unidades;
    }

    // GET ID todo
    async getById(id: number) {
        return this.prisma.unidade.findFirst({
            where: {
                id_unidade: id,
            },
        });
    }

    // UPDATE todo
    async update(id: number, data: UpdateUnidadeDto) {
        const unidadeExiste = await this.prisma.unidade.findFirst({
            where: {
                id_unidade: id,
            },
        });

        if (!unidadeExiste) {
            throw new Error('Este item não existe!');
        }

        return this.prisma.unidade.update({
            data,
            where: {
                id_unidade: id,
            },
        });
    }

    // DELETE todo
    async delete(id: number) {
        const del = await this.prisma.unidade.delete({
            where: {
                id_unidade: id,
            },
        });
        if (del) {
            return { message: 'Item excluído com sucesso!' };
        } else {
            return { message: '[ERRO] Item não excluída!' };
        }
    }
};