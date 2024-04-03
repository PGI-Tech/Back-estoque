import { PartialType } from '@nestjs/mapped-types';
import { CreateAgulhaDto } from './create-agulha.dto';

export class UpdateAgulhaDto extends PartialType(CreateAgulhaDto) {}
