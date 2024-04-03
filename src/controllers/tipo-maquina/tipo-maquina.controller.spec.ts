import { Test, TestingModule } from '@nestjs/testing';
import { TipoMaquinaController } from './tipo-maquina.controller';
import { TipoMaquinaService } from './tipo-maquina.service';

describe('TipoMaquinaController', () => {
  let controller: TipoMaquinaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoMaquinaController],
      providers: [TipoMaquinaService],
    }).compile();

    controller = module.get<TipoMaquinaController>(TipoMaquinaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
