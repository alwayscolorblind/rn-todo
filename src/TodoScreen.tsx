import React from 'react';

import TodoForm from "./TodoForm";

import TodoList from "./TodoList";

import { useTodosPreserve } from "./hooks/useTodosPreserve";
import Container from "./components/Container";

const TodosScreen = () => {
  useTodosPreserve();

  return (
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
  );
};

export default TodosScreen;
