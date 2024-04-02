import { Test, TestingModule } from '@nestjs/testing';
import { TecidoService } from './tecido.service';

describe('TecidoService', () => {
  let service: TecidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TecidoService],
    }).compile();

    service = module.get<TecidoService>(TecidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
