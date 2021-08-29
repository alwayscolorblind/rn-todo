import { makeAutoObservable } from "mobx";

import { ITodo } from "../interfaces/ITodo";

export default class Store {
  todos: ITodo[] = [
    { id: "1", title: "test", completed: false },
    { id: "2", title: "test", completed: false },
    { id: "3", title: "test", completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
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