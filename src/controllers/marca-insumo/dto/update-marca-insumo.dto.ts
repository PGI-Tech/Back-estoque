import { PartialType } from '@nestjs/mapped-types';
import { CreateMarcaInsumoDto } from './create-marca-insumo.dto';

export class UpdateMarcaInsumoDto extends PartialType(CreateMarcaInsumoDto) {}
