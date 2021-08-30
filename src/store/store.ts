import { makeAutoObservable } from "mobx";

import { ITodo } from "../interfaces/ITodo";
import {makeClassComponentObserver} from "mobx-react/dist/observerClass";

export default class Store {
  todos: ITodo[] = [];
  todosCompleted: ITodo[] = [];


  constructor() {
    makeAutoObservable(this);
  }

  setTodos(todos: ITodo[]) {
    this.todos = todos;
  }

  addTodo = (title: string) => {
    const todo = {
      id: Date.now().toString(),
      title,
      completed: false
    }

    this.todos = [
        todo,
        ...this.todos
    ]
  };

  removeTodo = (id: string) => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  };

  removeCompleted = (id: string) => {
    this.todosCompleted = this.todosCompleted.filter(todo => todo.id !== id);
  }

  makeTodoCompleted = (todo: ITodo) => {
    this.todos = this.todos.filter(item => item.id !== todo.id);

    this.todosCompleted = [
      {
        ...todo,
        completed: !todo.completed
      },
      ...this.todosCompleted
    ]
  };

  makeTodoUncompleted = (todo: ITodo) => {
    this.todosCompleted = this.todosCompleted.filter(item => item.id !== todo.id);

    this.todos = [
      {
        ...todo,
        completed: !todo.completed
      },
      ...this.todos
    ]
  };
}