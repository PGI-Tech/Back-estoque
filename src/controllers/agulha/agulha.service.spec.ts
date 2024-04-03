import { Test, TestingModule } from '@nestjs/testing';
import { AgulhaService } from './agulha.service';

describe('AgulhaService', () => {
  let service: AgulhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgulhaService],
    }).compile();

    service = module.get<AgulhaService>(AgulhaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
