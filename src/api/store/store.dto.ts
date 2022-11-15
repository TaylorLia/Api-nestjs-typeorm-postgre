import { IsEmail, isNotEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateStoreDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  public description: string;

  @IsString()
  @IsNotEmpty()
  public address: string;

}

export class UpdateStoreDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  public description: string;

  @IsNotEmpty()
  public address: string;

}
