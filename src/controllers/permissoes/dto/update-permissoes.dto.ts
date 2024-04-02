/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreatePermissoesDto } from './create-permissoe.dto';

export class UpdatePermissoesDto extends PartialType(CreatePermissoesDto) { }
