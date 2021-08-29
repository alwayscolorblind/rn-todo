import React, { FC } from 'react';

import { ITodo } from "./interfaces/ITodo";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface TodoProps {
  todo: ITodo,
  handleComplete: (id: string) => void,
  handleRemove: (todo: ITodo) => void
}

const Todo: FC<TodoProps> = ({ todo, handleComplete, handleRemove }) => {
  return (
      <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => handleComplete(todo.id)}
          onLongPress={() => handleRemove(todo)}
          style={todo.completed ? styles.todoCompleted : styles.todo}
      >
          <Text style={todo.completed ? styles.completed : null}>{todo.title}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 5,
    elevation: 5 // Bug
  },
  todoCompleted: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#dadada",
    borderRadius: 10,
    marginVertical: 5
  },
  completed: {
    textDecorationLine: "line-through",
  }
});

export default Todo;
