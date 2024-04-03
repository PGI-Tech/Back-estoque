import { Test, TestingModule } from '@nestjs/testing';
import { AgulhaController } from './agulha.controller';
import { AgulhaService } from './agulha.service';

describe('AgulhaController', () => {
  let controller: AgulhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgulhaController],
      providers: [AgulhaService],
    }).compile();

    controller = module.get<AgulhaController>(AgulhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
