import { Controller, Get, Query, Param, Post, Body, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers(@Query('name') name: string) {
    // const users = [
    //   { id: 1, name: 'John Doe' },
    //   { id: 2, name: 'Adrian' },
    // ];

    // if (name) {
    //   return users.filter((user) =>
    //     user.name.toLowerCase().includes(name.toLowerCase()),
    //   );
    // }
    // return users;

    return this.userService.findAllUsers(name);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id, name: 'John Doe' };
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return { data: createUserDto, message: 'User created successfully' };
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      data: { id, ...updateUserDto },
      message: 'User updated successfully',
    };
  }
}
