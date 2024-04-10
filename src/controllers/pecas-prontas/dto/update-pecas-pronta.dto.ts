import { PartialType } from '@nestjs/mapped-types';
import { CreatePecasProntaDto } from './create-pecas-pronta.dto';

export class UpdatePecasProntaDto extends PartialType(CreatePecasProntaDto) {}
