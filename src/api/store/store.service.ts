import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto, UpdateStoreDto } from './store.dto';
import { Store } from './store.entity';

@Injectable()
export class StoreService {
  @InjectRepository(Store)
  private readonly repository: Repository<Store>;

  public getStore(id: number): Promise<Store> {
    return this.repository.findOne(id);
  }

  public GetStores(): Promise<Store[]> {
    return this.repository.find();
  }

  public createStore(body: CreateStoreDto): Promise<Store> {
    const store: Store = new Store();

    store.name = body.name;
    store.description = body.description;
    store.address = body.address;

    return this.repository.save(store);
  }

  public updateStore(id: number, body: UpdateStoreDto) {
    const store: Store = new Store();

    store.name = body.name;
    store.description = body.description;
    store.address = body.address;

    return this.repository.update(id, store);
  }

  public deleteStore(id: number) {
    return this.repository.delete(id);
  }
}
