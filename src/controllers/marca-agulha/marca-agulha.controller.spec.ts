import { Test, TestingModule } from '@nestjs/testing';
import { MarcaAgulhaController } from './marca-agulha.controller';
import { MarcaAgulhaService } from './marca-agulha.service';

describe('MarcaAgulhaController', () => {
  let controller: MarcaAgulhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarcaAgulhaController],
      providers: [MarcaAgulhaService],
    }).compile();

    controller = module.get<MarcaAgulhaController>(MarcaAgulhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
