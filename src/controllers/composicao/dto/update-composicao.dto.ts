import { PartialType } from '@nestjs/mapped-types';
import { CreateComposicaoDto } from './create-composicao.dto';

export class UpdateComposicaoDto extends PartialType(CreateComposicaoDto) {}
