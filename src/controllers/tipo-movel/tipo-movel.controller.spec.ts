import { Test, TestingModule } from '@nestjs/testing';
import { TipoMovelController } from './tipo-movel.controller';
import { TipoMovelService } from './tipo-movel.service';

describe('TipoMovelController', () => {
  let controller: TipoMovelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoMovelController],
      providers: [TipoMovelService],
    }).compile();

    controller = module.get<TipoMovelController>(TipoMovelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
