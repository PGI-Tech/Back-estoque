import { Test, TestingModule } from '@nestjs/testing';
import { MaquinaAgulhaService } from './maquina-agulha.service';

describe('MaquinaAgulhaService', () => {
  let service: MaquinaAgulhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaquinaAgulhaService],
    }).compile();

    service = module.get<MaquinaAgulhaService>(MaquinaAgulhaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
