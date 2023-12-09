import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostTodoDTO } from 'proto/todo';

@Controller('todo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postTodo(@Body() postTodoDto: PostTodoDTO) {
    return this.appService.postTodo(postTodoDto);
  }

  @Get()
  getTodos() {
    return this.appService.getTodos();
  }
}
