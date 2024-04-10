import { Test, TestingModule } from '@nestjs/testing';
import { MarcaInsumoController } from './marca-insumo.controller';
import { MarcaInsumoService } from './marca-insumo.service';

describe('MarcaInsumoController', () => {
  let controller: MarcaInsumoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarcaInsumoController],
      providers: [MarcaInsumoService],
    }).compile();

    controller = module.get<MarcaInsumoController>(MarcaInsumoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
