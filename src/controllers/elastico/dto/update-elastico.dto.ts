import { PartialType } from '@nestjs/mapped-types';
import { CreateElasticoDto } from './create-elastico.dto';

export class UpdateElasticoDto extends PartialType(CreateElasticoDto) {}
