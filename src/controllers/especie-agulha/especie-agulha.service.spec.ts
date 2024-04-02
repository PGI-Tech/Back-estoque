import { Test, TestingModule } from '@nestjs/testing';
import { EspecieAgulhaService } from './especie-agulha.service';

describe('EspecieAgulhaService', () => {
  let service: EspecieAgulhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspecieAgulhaService],
    }).compile();

    service = module.get<EspecieAgulhaService>(EspecieAgulhaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
