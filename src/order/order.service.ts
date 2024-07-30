import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  create(payload: CreateOrderDto) {
    return this.orderRepository.create({
      ...payload,
      product: { id: payload.product },
      user: { id: payload.user },
    });
  }

  findOrders(id: number) {
    return this.orderRepository.find({ where: { user: { id } } });
  }

  update(id: number, payload: UpdateOrderDto) {
    return this.orderRepository.update(
      { id },
      {
        ...payload,
        product: { id: payload.product },
        user: { id: payload.user },
      },
    );
  }

  remove(id: number) {
    return this.orderRepository.delete({ id });
  }
}
