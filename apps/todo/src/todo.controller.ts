import { Controller } from '@nestjs/common';
import { TodoService } from './todo.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  Empty,
  PostTodoDTO,
  Todo,
  TodoServiceController,
  Todos,
} from 'proto/todo';
import { Observable } from 'rxjs';

@Controller()
export class TodoController implements TodoServiceController {
  constructor(private readonly todoService: TodoService) {}

  @GrpcMethod('TodoService', 'PostTodo')
  postTodo(postTodo: PostTodoDTO): Todo {
    return this.todoService.postTodo(postTodo);
  }

  @GrpcMethod('TodoService', 'GetTodos')
  getTodos(request: Empty): Todos | Promise<Todos> | Observable<Todos> {
    console.log('getTodos', request);
    return this.todoService.getTodos();
  }
}
