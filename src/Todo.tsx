import React, { FC } from 'react';

import { ITodo } from "./interfaces/ITodo";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
      >
        <View style={styles.todo}>
          <Text style={todo.completed ? styles.completed : null}>{todo.title}</Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#eee",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#d3d3d3",
    marginVertical: 5,
  },
  completed: {
    textDecorationLine: "line-through"
  }
});

export default Todo;
