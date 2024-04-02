import { PartialType } from '@nestjs/mapped-types';
import { CreateMaquinaAgulhaDto } from './create-maquina-agulha.dto';

export class UpdateMaquinaAgulhaDto extends PartialType(CreateMaquinaAgulhaDto) {}
