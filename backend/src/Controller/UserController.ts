import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { UserService } from './../Service/UserService';
import { User } from '../model/UserModel';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post('/')
  async create(@Body() userData: Partial<User>): Promise<HttpStatus> {
    await this.userService.create(userData);
    return HttpStatus.CREATED;
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() userData: Partial<User>
  ): Promise<HttpStatus> {
    this.userService.update(id, userData);
    return HttpStatus.OK;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<HttpStatus> {
    this.userService.remove(id);
    return HttpStatus.OK;
  }
}