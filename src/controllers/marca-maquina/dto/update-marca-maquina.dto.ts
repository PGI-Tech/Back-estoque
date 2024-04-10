import { PartialType } from '@nestjs/mapped-types';
import { CreateMarcaMaquinaDto } from './create-marca-maquina.dto';

export class UpdateMarcaMaquinaDto extends PartialType(CreateMarcaMaquinaDto) {}
