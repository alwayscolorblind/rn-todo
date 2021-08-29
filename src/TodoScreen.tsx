import React from 'react';

import TodoForm from "./TodoForm";

import TodoList from "./TodoList";

const TodosScreen = () => {
  return (
      <>
        <TodoForm />
        <TodoList />
      </>
  );
};

export default TodosScreen;
