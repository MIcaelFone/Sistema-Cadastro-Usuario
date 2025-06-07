import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { UserService } from './../Service/UserService';
import { User } from '../model/UserModel';
import { ApiTags,ApiResponse,ApiOperation } from '@nestjs/swagger';
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  @ApiOperation({ summary: 'Buscar todos usuários' })
  @ApiResponse({ status: 200, description: 'Usuário encontrado' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar usuário por ID' })
  @ApiResponse({ status: 200, description: 'Usuário encontrado' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Criar um usuário' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
  async create(@Body() userData: Partial<User>): Promise<HttpStatus> {
    await this.userService.create(userData);
    return HttpStatus.CREATED;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Usuário atualizado por ID' })
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() userData: Partial<User>
  ): Promise<HttpStatus> {
    this.userService.update(id, userData);
    return HttpStatus.OK;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover usuário por ID' })
  @ApiResponse({ status: 200, description: 'Usuário removido com sucesso' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<HttpStatus> {
    this.userService.remove(id);
    return HttpStatus.OK;
  }
}