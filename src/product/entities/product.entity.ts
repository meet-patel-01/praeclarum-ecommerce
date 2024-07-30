import { Cart } from 'src/cart/entities/cart.entity';
import { Order } from 'src/order/entities/order.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToOne(() => User, (user) => user.products)
  @JoinColumn({ name: 'userId' })
  user: User;

  @OneToMany(() => Cart, (cart) => cart.product)
  carts: Cart[];

  @OneToMany(() => Order, (orderItem) => orderItem.product)
  order: Order[];
}
