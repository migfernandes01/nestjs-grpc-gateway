import { Injectable } from '@nestjs/common';
import { PostTodoDTO, Todo, Todos } from 'proto/todo';

@Injectable()
export class TodoService {
  private todos: Todos = {
    todos: [{ id: 1, description: 'Description 1', isDone: false }],
  };

  postTodo(postTodo: PostTodoDTO): Todo {
    const todo: Todo = {
      id: this.todos.todos.length + 1,
      description: postTodo.description,
      isDone: false,
    };
    this.todos.todos.push(todo);
    return todo;
  }

  getTodos(): Todos {
    return {
      todos: this.todos.todos,
    };
  }
}
