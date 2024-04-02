import { Test, TestingModule } from '@nestjs/testing';
import { ComposicaoController } from './composicao.controller';
import { ComposicaoService } from './composicao.service';

describe('ComposicaoController', () => {
  let controller: ComposicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComposicaoController],
      providers: [ComposicaoService],
    }).compile();

    controller = module.get<ComposicaoController>(ComposicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
