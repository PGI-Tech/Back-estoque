import { PartialType } from '@nestjs/mapped-types';
import { CreateMarcaMovelDto } from './create-marca-movel.dto';

export class UpdateMarcaMovelDto extends PartialType(CreateMarcaMovelDto) {}
