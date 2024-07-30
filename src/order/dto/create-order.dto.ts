import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  user: number;

  @IsNotEmpty()
  @IsNumber()
  product: number;

  @IsNotEmpty()
  @IsDate({ message: `Date should be in given format ${new Date()}` })
  orderDate: Date;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  payment_mode: string;

  @IsBoolean()
  payment_succeed?: boolean;
}
