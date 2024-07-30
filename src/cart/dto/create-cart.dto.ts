import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCartDto {
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  user: number;

  @IsNotEmpty()
  @IsNumber()
  product: number;
}
