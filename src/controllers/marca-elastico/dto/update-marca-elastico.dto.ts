import { PartialType } from '@nestjs/mapped-types';
import { CreateMarcaElasticoDto } from './create-marca-elastico.dto';

export class UpdateMarcaElasticoDto extends PartialType(CreateMarcaElasticoDto) {}
