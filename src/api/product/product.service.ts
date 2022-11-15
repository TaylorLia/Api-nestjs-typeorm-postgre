import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  @InjectRepository(Product)
  private readonly repository: Repository<Product>;

  public getProduct(id: number): Promise<Product> {
    return this.repository.findOne(id);
  }

  public GetProducts(): Promise<Product[]> {
    return this.repository.find();
  }

  public createProduct(body: CreateProductDto): Promise<Product> {
    const product: Product = new Product();

    product.name = body.name;
    product.description = body.description;
    product.quantity = body.quantity;
    product.price = body.price;

    return this.repository.save(product);
  }

  public updateProduct(id: number, body: UpdateProductDto) {
    const product: Product = new Product();

    product.name = body.name;
    product.description = body.description;
    product.quantity = body.quantity;
    product.price = body.price;

    return this.repository.update(id, product);
  }

  public deleteProduct(id: number) {
    return this.repository.delete(id);
  }
}
