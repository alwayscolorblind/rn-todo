import { makeAutoObservable } from "mobx";

import { ITodo } from "../interfaces/ITodo";

export default class Store {
  todos: ITodo[] = [];

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

  makeTodoCompleted = (id: string) => {
    this.todos = this.todos.map((item) => {
      return item.id !== id ? item : {
        ...item,
        completed: !item.completed
      };
    });
  };
}