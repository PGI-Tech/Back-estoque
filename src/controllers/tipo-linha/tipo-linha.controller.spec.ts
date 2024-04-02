import { Test, TestingModule } from '@nestjs/testing';
import { TipoLinhaController } from './tipo-linha.controller';
import { TipoLinhaService } from './tipo-linha.service';

describe('TipoLinhaController', () => {
  let controller: TipoLinhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoLinhaController],
      providers: [TipoLinhaService],
    }).compile();

    controller = module.get<TipoLinhaController>(TipoLinhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
