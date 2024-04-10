import { Test, TestingModule } from '@nestjs/testing';
import { PecasProntasService } from './pecas-prontas.service';

describe('PecasProntasService', () => {
  let service: PecasProntasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecasProntasService],
    }).compile();

    service = module.get<PecasProntasService>(PecasProntasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
