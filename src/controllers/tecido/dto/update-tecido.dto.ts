import { PartialType } from '@nestjs/mapped-types';
import { CreateTecidoDto } from './create-tecido.dto';

export class UpdateTecidoDto extends PartialType(CreateTecidoDto) {}
