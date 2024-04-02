import { Test, TestingModule } from '@nestjs/testing';
import { LinhaService } from './linha.service';

describe('LinhaService', () => {
  let service: LinhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinhaService],
    }).compile();

    service = module.get<LinhaService>(LinhaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
