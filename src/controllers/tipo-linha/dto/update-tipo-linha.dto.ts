import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoLinhaDto } from './create-tipo-linha.dto';

export class UpdateTipoLinhaDto extends PartialType(CreateTipoLinhaDto) {}
