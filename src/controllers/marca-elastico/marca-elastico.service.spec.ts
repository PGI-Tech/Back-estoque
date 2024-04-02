import { Test, TestingModule } from '@nestjs/testing';
import { MarcaElasticoService } from './marca-elastico.service';

describe('MarcaElasticoService', () => {
  let service: MarcaElasticoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarcaElasticoService],
    }).compile();

    service = module.get<MarcaElasticoService>(MarcaElasticoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
