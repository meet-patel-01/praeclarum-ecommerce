import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Product, (product) => product.order)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column()
  orderDate: Date;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({ default: 'COD' })
  payment_mode: string;

  @Column({ default: false })
  payment_succeed: boolean;
}
