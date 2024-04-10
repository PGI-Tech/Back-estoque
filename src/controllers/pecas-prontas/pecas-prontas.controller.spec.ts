import { Test, TestingModule } from '@nestjs/testing';
import { PecasProntasController } from './pecas-prontas.controller';
import { PecasProntasService } from './pecas-prontas.service';

describe('PecasProntasController', () => {
  let controller: PecasProntasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecasProntasController],
      providers: [PecasProntasService],
    }).compile();

    controller = module.get<PecasProntasController>(PecasProntasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
