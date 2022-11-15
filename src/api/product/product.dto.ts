import { IsEmail, isNotEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  public description: string;

  @IsNotEmpty()
  public quantity: number;

  @IsNotEmpty()
  public price: number;

}

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  public description: string;

  @IsNotEmpty()
  public quantity: number;

  @IsNotEmpty()
  public price: number;
}
