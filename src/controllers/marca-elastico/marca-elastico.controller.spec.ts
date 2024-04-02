import { Test, TestingModule } from '@nestjs/testing';
import { MarcaElasticoController } from './marca-elastico.controller';
import { MarcaElasticoService } from './marca-elastico.service';

describe('MarcaElasticoController', () => {
  let controller: MarcaElasticoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarcaElasticoController],
      providers: [MarcaElasticoService],
    }).compile();

    controller = module.get<MarcaElasticoController>(MarcaElasticoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
