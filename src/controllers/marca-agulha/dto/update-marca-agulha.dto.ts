import { PartialType } from '@nestjs/mapped-types';
import { CreateMarcaAgulhaDto } from './create-marca-agulha.dto';

export class UpdateMarcaAgulhaDto extends PartialType(CreateMarcaAgulhaDto) {}
