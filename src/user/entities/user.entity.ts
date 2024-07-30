import { Cart } from 'src/cart/entities/cart.entity';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
