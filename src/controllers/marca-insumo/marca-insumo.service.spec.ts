import { Test, TestingModule } from '@nestjs/testing';
import { MarcaInsumoService } from './marca-insumo.service';

describe('MarcaInsumoService', () => {
  let service: MarcaInsumoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarcaInsumoService],
    }).compile();

    service = module.get<MarcaInsumoService>(MarcaInsumoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
