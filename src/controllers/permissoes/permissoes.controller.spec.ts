import { Test, TestingModule } from '@nestjs/testing';
import { PermissoesController } from './permissoes.controller';
import { PermissoesService } from './permissoes.service';

describe('PermissoesController', () => {
  let controller: PermissoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermissoesController],
      providers: [PermissoesService],
    }).compile();

    controller = module.get<PermissoesController>(PermissoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
