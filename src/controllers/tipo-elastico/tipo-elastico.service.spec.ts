import { Test, TestingModule } from '@nestjs/testing';
import { TipoElasticoService } from './tipo-elastico.service';

describe('TipoElasticoService', () => {
  let service: TipoElasticoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoElasticoService],
    }).compile();

    service = module.get<TipoElasticoService>(TipoElasticoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
