import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(private readonly cartModule: Repository<Cart>) {}

  create(payload: CreateCartDto) {
    return this.cartModule.create({
      product: { id: payload.product },
      user: { id: payload.user },
      quantity: payload.quantity,
    });
  }

  cartList(userID: number) {
    return this.cartModule.find({
      where: { user: { id: userID } },
      relations: ['user'],
    });
  }

  update(id: number, payload: UpdateCartDto) {
    return this.cartModule.update({ id }, payload);
  }

  remove(id: number) {
    return this.cartModule.delete({ id: id });
  }
}
