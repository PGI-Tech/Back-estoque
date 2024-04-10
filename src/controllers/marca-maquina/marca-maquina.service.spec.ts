import { Test, TestingModule } from '@nestjs/testing';
import { MarcaMaquinaService } from './marca-maquina.service';

describe('MarcaMaquinaService', () => {
  let service: MarcaMaquinaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarcaMaquinaService],
    }).compile();

    service = module.get<MarcaMaquinaService>(MarcaMaquinaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
