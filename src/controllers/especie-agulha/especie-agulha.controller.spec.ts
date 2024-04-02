import { Test, TestingModule } from '@nestjs/testing';
import { EspecieAgulhaController } from './especie-agulha.controller';
import { EspecieAgulhaService } from './especie-agulha.service';

describe('EspecieAgulhaController', () => {
  let controller: EspecieAgulhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspecieAgulhaController],
      providers: [EspecieAgulhaService],
    }).compile();

    controller = module.get<EspecieAgulhaController>(EspecieAgulhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
