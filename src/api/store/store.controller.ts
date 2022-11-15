import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateStoreDto, UpdateStoreDto } from './store.dto';
import { Store } from './store.entity';
import { StoreService } from './store.service';

@Controller('stores')
export class StoreController {
  @Inject(StoreService)
  private readonly service: StoreService;

  @Get(':id')
  public getStore(@Param('id', ParseIntPipe) id: number): Promise<Store> {
    return this.service.getStore(id);
  }

  @Get()
  public GetStores(): Promise<Store[]> {
    return this.service.GetStores();
  }

  @Post()
  public createStore(@Body() body: CreateStoreDto): Promise<Store> {
    return this.service.createStore(body);
  }

  @Post(':id')
  public updateStore(@Body() body: UpdateStoreDto, @Param('id', ParseIntPipe) id: number) {
    return this.service.updateStore(id, body);
  }

  @Delete(':id')
  public deleteStore(@Param('id', ParseIntPipe) id: number) {
    return this.service.deleteStore(id);
  }
}
