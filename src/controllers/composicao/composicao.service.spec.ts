import { Test, TestingModule } from '@nestjs/testing';
import { ComposicaoService } from './composicao.service';

describe('ComposicaoService', () => {
  let service: ComposicaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComposicaoService],
    }).compile();

    service = module.get<ComposicaoService>(ComposicaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
