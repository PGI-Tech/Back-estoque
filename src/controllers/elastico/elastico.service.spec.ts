import { Test, TestingModule } from '@nestjs/testing';
import { ElasticoService } from './elastico.service';

describe('ElasticoService', () => {
  let service: ElasticoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElasticoService],
    }).compile();

    service = module.get<ElasticoService>(ElasticoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
