import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { PostTodoDTO, TODO_SERVICE_NAME, TodoServiceClient } from 'proto/todo';

@Injectable()
export class AppService implements OnModuleInit {
  // define a private property to store the client
  private todoServiceClient: TodoServiceClient;

  // inject the ClientGrpc grpc client
  constructor(@Inject('todo') private clientGrpc: ClientGrpc) {}

  // initialize the client in the OnModuleInit lifecycle hook
  onModuleInit() {
    this.todoServiceClient =
      this.clientGrpc.getService<TodoServiceClient>(TODO_SERVICE_NAME);
  }

  postTodo(postTodoDto: PostTodoDTO) {
    return this.todoServiceClient.postTodo(postTodoDto);
  }

  getTodos() {
    return this.todoServiceClient.getTodos({});
  }
}
