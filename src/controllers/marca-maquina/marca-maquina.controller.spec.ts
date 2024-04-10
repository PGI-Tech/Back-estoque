import { Test, TestingModule } from '@nestjs/testing';
import { MarcaMaquinaController } from './marca-maquina.controller';
import { MarcaMaquinaService } from './marca-maquina.service';

describe('MarcaMaquinaController', () => {
  let controller: MarcaMaquinaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarcaMaquinaController],
      providers: [MarcaMaquinaService],
    }).compile();

    controller = module.get<MarcaMaquinaController>(MarcaMaquinaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
