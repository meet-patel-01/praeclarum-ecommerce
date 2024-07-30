import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order/entities/order.entity';
import { Cart } from './cart/entities/cart.entity';
import { Product } from './product/entities/product.entity';
import { User } from './user/entities/user.entity';
import * as Joi from 'joi';
import * as path from 'node:path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.resolve(__dirname, '../', '.env'),
      validationSchema: Joi.object({
        PORT: Joi.number().required().default(3000),
        DB_USERNAME: Joi.string().required().default('root'),
        DB_PASSWORD: Joi.string().required().default('root'),
        DB_PORT: Joi.number().port().required().default(3306),
        DB_HOST: Joi.string().required().default('localhost'),
        DATABASE: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get<string>('SQL.DB_HOST'),
          port: configService.get<number>('SQL.DB_PORT'),
          username: configService.get<string>('SQL.DB_USERNAME'),
          password: configService.get<string>('SQL.DB_PASSWORD'),
          database: configService.get<string>('SQL.DB_DATABASE'),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User, Product, Cart, Order]),
    UserModule,
    ProductModule,
    OrderModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
