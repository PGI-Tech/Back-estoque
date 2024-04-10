import { Test, TestingModule } from '@nestjs/testing';
import { MarcaMovelController } from './marca-movel.controller';
import { MarcaMovelService } from './marca-movel.service';

describe('MarcaMovelController', () => {
  let controller: MarcaMovelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarcaMovelController],
      providers: [MarcaMovelService],
    }).compile();

    controller = module.get<MarcaMovelController>(MarcaMovelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
