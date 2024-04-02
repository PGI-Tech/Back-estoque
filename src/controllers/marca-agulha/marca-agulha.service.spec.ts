import { Test, TestingModule } from '@nestjs/testing';
import { MarcaAgulhaService } from './marca-agulha.service';

describe('MarcaAgulhaService', () => {
  let service: MarcaAgulhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarcaAgulhaService],
    }).compile();

    service = module.get<MarcaAgulhaService>(MarcaAgulhaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
