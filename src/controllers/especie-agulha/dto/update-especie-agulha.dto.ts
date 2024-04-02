import { PartialType } from '@nestjs/mapped-types';
import { CreateEspecieAgulhaDto } from './create-especie-agulha.dto';

export class UpdateEspecieAgulhaDto extends PartialType(CreateEspecieAgulhaDto) {}
