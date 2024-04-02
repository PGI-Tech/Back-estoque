import { Test, TestingModule } from '@nestjs/testing';
import { TipoElasticoController } from './tipo-elastico.controller';
import { TipoElasticoService } from './tipo-elastico.service';

describe('TipoElasticoController', () => {
  let controller: TipoElasticoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoElasticoController],
      providers: [TipoElasticoService],
    }).compile();

    controller = module.get<TipoElasticoController>(TipoElasticoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
