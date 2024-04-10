import { Test, TestingModule } from '@nestjs/testing';
import { MarcaMovelService } from './marca-movel.service';

describe('MarcaMovelService', () => {
  let service: MarcaMovelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarcaMovelService],
    }).compile();

    service = module.get<MarcaMovelService>(MarcaMovelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
