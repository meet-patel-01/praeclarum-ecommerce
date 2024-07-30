import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(payload: CreateUserDto) {
    return this.userRepository.create(payload);
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  update(id: number, payload: UpdateUserDto) {
    return this.userRepository.update({ id }, payload);
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }
}
