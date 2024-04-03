import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoMovelDto } from './create-tipo-movel.dto';

export class UpdateTipoMovelDto extends PartialType(CreateTipoMovelDto) {}
