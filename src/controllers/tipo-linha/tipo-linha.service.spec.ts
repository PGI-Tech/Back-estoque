import { Test, TestingModule } from '@nestjs/testing';
import { TipoLinhaService } from './tipo-linha.service';

describe('TipoLinhaService', () => {
  let service: TipoLinhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoLinhaService],
    }).compile();

    service = module.get<TipoLinhaService>(TipoLinhaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
