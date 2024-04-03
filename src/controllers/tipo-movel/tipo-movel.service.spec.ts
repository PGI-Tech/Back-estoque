import { Test, TestingModule } from '@nestjs/testing';
import { TipoMovelService } from './tipo-movel.service';

describe('TipoMovelService', () => {
  let service: TipoMovelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoMovelService],
    }).compile();

    service = module.get<TipoMovelService>(TipoMovelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
