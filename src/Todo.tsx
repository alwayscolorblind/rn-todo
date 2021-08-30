import React, { FC } from 'react';

import { ITodo } from "./interfaces/ITodo";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface TodoProps {
  todo: ITodo,
  handleComplete?: (id: ITodo) => void,
  handleRemove?: (todo: ITodo) => void,
  handleUncomplete?: (todo: ITodo) => void
}

const Todo: FC<TodoProps> = (
    {
      todo,
      handleComplete,
      handleRemove,
      handleUncomplete
    }) => {
  return (
      <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => todo.completed ? handleUncomplete!(todo) : handleComplete!(todo)}
          onLongPress={() => handleRemove ? handleRemove(todo) : null}
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
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    marginVertical: 5
  },
  completed: {
    textDecorationLine: "line-through",
  }
});

export default Todo;
