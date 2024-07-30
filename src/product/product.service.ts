import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(payload: CreateProductDto) {
    return this.productRepository.create({
      ...payload,
      user: { id: payload.user },
    });
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOne({ where: { id } });
  }

  update(id: number, payload: UpdateProductDto) {
    return this.productRepository.update(
      { id },
      {
        title: payload.title,
        description: payload.description,
        price: payload.price,
      },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
