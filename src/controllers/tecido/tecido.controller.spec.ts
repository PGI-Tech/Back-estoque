import { Test, TestingModule } from '@nestjs/testing';
import { TecidoController } from './tecido.controller';
import { TecidoService } from './tecido.service';

describe('TecidoController', () => {
  let controller: TecidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TecidoController],
      providers: [TecidoService],
    }).compile();

    controller = module.get<TecidoController>(TecidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
