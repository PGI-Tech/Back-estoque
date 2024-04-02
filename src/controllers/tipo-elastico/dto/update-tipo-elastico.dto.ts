import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoElasticoDto } from './create-tipo-elastico.dto';

export class UpdateTipoElasticoDto extends PartialType(CreateTipoElasticoDto) {}
