import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  @Inject(ProductService)
  private readonly service: ProductService;

  @Get(':id')
  public getProduct(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.service.getProduct(id);
  }

  @Get()
  public GetProducts(): Promise<Product[]> {
    return this.service.GetProducts();
  }

  @Post()
  public createProduct(@Body() body: CreateProductDto): Promise<Product> {
    return this.service.createProduct(body);
  }

  @Post(':id')
  public updateProduct(@Body() body: UpdateProductDto, @Param('id', ParseIntPipe) id: number) {
    return this.service.updateProduct(id, body);
  }

  @Delete(':id')
  public deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.service.deleteProduct(id);
  }
}
