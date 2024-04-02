/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        // Unidades e siglas a serem inseridas
        const unidades = [
            { sigla: 'AMPOLA', unidade: 'AMPOLA' },
            { sigla: 'BALDE', unidade: 'BALDE' },
            { sigla: 'BANDEJ', unidade: 'BANDEJA' },
            { sigla: 'BARRA', unidade: 'BARRA' },
            { sigla: 'BISNAG', unidade: 'BISNAGA' },
            { sigla: 'BLOCO', unidade: 'BLOCO' },
            { sigla: 'BOBINA', unidade: 'BOBINA' },
            { sigla: 'BOMB', unidade: 'BOMBONA' },
            { sigla: 'CAPS', unidade: 'CÁPSULA' },
            { sigla: 'CART', unidade: 'CARTELA' },
            { sigla: 'CENTO', unidade: 'CENTO' },
            { sigla: 'CJ', unidade: 'CONJUNTO' },
            { sigla: 'CM', unidade: 'CENTÍMETRO' },
            { sigla: 'CM2', unidade: 'CENTIMETRO QUADRADO' },
            { sigla: 'CX', unidade: 'CAIXA' },
            { sigla: 'CX2', unidade: 'CAIXA COM 2 UNIDADES' },
            { sigla: 'CX3', unidade: 'CAIXA COM 3 UNIDADES' },
            { sigla: 'CX5', unidade: 'CAIXA COM 5 UNIDADES' },
            { sigla: 'CX10', unidade: 'CAIXA COM 10 UNIDADES' },
            { sigla: 'CX15', unidade: 'CAIXA COM 15 UNIDADES' },
            { sigla: 'CX20', unidade: 'CAIXA COM 20 UNIDADES' },
            { sigla: 'CX25', unidade: 'CAIXA COM 25 UNIDADES' },
            { sigla: 'CX50', unidade: 'CAIXA COM 50 UNIDADES' },
            { sigla: 'CX100', unidade: 'CAIXA COM 100 UNIDADES' },
            { sigla: 'DISP', unidade: 'DISPLAY' },
            { sigla: 'DUZIA', unidade: 'DUZIA' },
            { sigla: 'EMBAL', unidade: 'EMBALAGEM' },
            { sigla: 'FARDO', unidade: 'FARDO' },
            { sigla: 'FOLHA', unidade: 'FOLHA' },
            { sigla: 'FRASCO', unidade: 'FRASCO' },
            { sigla: 'GALAO', unidade: 'GALÃO' },
            { sigla: 'GF', unidade: 'GARRAFA' },
            { sigla: 'GRAMAS', unidade: 'GRAMAS' },
            { sigla: 'JOGO', unidade: 'JOGO' },
            { sigla: 'KG', unidade: 'QUILOGRAMA' },
            { sigla: 'KIT', unidade: 'KIT' },
            { sigla: 'LATA', unidade: 'LATA' },
            { sigla: 'LITRO', unidade: 'LITRO' },
            { sigla: 'M', unidade: 'METRO' },
            { sigla: 'M2', unidade: 'METRO QUADRADO' },
            { sigla: 'M3', unidade: 'METRO CÚBICO' },
            { sigla: 'MILHEI', unidade: 'MILHEIRO' },
            { sigla: 'ML', unidade: 'MILILITRO' },
            { sigla: 'MWH', unidade: 'MEGAWATT HORA' },
            { sigla: 'PACOTE', unidade: 'PACOTE' },
            { sigla: 'PALETE', unidade: 'PALETE' },
            { sigla: 'PARES', unidade: 'PARES' },
            { sigla: 'PC', unidade: 'PEÇA' },
            { sigla: 'POTE', unidade: 'POTE' },
            { sigla: 'K', unidade: 'QUILATE' },
            { sigla: 'RESMA', unidade: 'RESMA' },
            { sigla: 'ROLO', unidade: 'ROLO' },
            { sigla: 'SACO', unidade: 'SACO' },
            { sigla: 'SACOLA', unidade: 'SACOLA' },
            { sigla: 'TAMBOR', unidade: 'TAMBOR' },
            { sigla: 'TANQUE', unidade: 'TANQUE' },
            { sigla: 'TON', unidade: 'TONELADA' },
            { sigla: 'TUBO', unidade: 'TUBO' },
            { sigla: 'UNID', unidade: 'UNIDADE' },
            { sigla: 'VASIL', unidade: 'VASILHAME' },
            { sigla: 'VIDRO', unidade: 'VIDRO' },
        ];

        // Inserção de cada unidade e sigla
        for (const { sigla, unidade } of unidades) {
            await prisma.unidade.upsert({
                where: { id_unidade: 0 }, // Usando a sigla como identificador único
                update: {},
                create: { sigla, unidade },
            });
        }
    } catch (error) {
        console.error(error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
