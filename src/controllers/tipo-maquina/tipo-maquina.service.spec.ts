import { Test, TestingModule } from '@nestjs/testing';
import { TipoMaquinaService } from './tipo-maquina.service';

describe('TipoMaquinaService', () => {
  let service: TipoMaquinaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoMaquinaService],
    }).compile();

    service = module.get<TipoMaquinaService>(TipoMaquinaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
