import { Test, TestingModule } from '@nestjs/testing';
import { LinhaController } from './linha.controller';
import { LinhaService } from './linha.service';

describe('LinhaController', () => {
  let controller: LinhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinhaController],
      providers: [LinhaService],
    }).compile();

    controller = module.get<LinhaController>(LinhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
