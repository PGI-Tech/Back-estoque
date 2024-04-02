import { Test, TestingModule } from '@nestjs/testing';
import { ElasticoController } from './elastico.controller';
import { ElasticoService } from './elastico.service';

describe('ElasticoController', () => {
  let controller: ElasticoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElasticoController],
      providers: [ElasticoService],
    }).compile();

    controller = module.get<ElasticoController>(ElasticoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
