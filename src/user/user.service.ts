import { Injectable, NotFoundException } from '@nestjs/common';
import { LoggerService } from './user.logger';
import { CreateUserDto } from './dto/create-user.dto';

// what a user IS in our system
export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(private readonly logger: LoggerService) {}
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@doe' },
    { id: 2, name: 'Adrian', email: 'adrian@kelm' },
  ];

  // next id to hand out; incremented on every create so ids are never reused
  private nextId = 3;

  findAllUsers(name: string = '') {
    this.logger.log('Finding all the users');
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  findOneUser(id: number) {
    this.logger.log('Find a user');
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  createUser(dto: CreateUserDto) {
    this.logger.log('Creating a user');
    const user: User = {
      id: this.nextId++,
      name: dto.name,
      email: dto.email,
    };

    this.users.push(user);

    return user;
  }

  // createUser(dto: CreateUserDto)
  // updateUser(id: number, dto: UpdateUserDto)
  // deleteUser(id: number)

  // - this.users — this refers to the UserService instance,
  // so this reads the private array declared on line 11.
  // Without this., TypeScript would look for a local variable named users and error.
}
