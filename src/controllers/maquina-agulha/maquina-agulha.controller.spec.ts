import { Test, TestingModule } from '@nestjs/testing';
import { MaquinaAgulhaController } from './maquina-agulha.controller';
import { MaquinaAgulhaService } from './maquina-agulha.service';

describe('MaquinaAgulhaController', () => {
  let controller: MaquinaAgulhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaquinaAgulhaController],
      providers: [MaquinaAgulhaService],
    }).compile();

    controller = module.get<MaquinaAgulhaController>(MaquinaAgulhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
