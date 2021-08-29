import React from 'react';

import Todo from "./Todo";

import {Alert, FlatList, View} from "react-native";

import { useStore } from "./hooks/useStore";

import { ITodo } from "./interfaces/ITodo";
import {observer} from "mobx-react";

const TodoList = observer(() => {
  const {
    todos,
    makeTodoCompleted,
    removeTodo
  } = useStore();

  const handleRemove = (todo: ITodo) => {
    if (todo.completed) {
      removeTodo(todo.id);
    } else {
      Alert.alert("Это дело еще не выполнено",
          "Вы действительно хотите его удалить",
          [
            {
              text: "Нет",
              style: "cancel"
            },
            {
              text: "Да",
              onPress: () => removeTodo(todo.id)
            }
          ]);
    }
  };

  return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={todos}
            renderItem={({item}) => (
                <Todo todo={item} handleComplete={makeTodoCompleted} handleRemove={handleRemove}/>
            )}
        />
  );
});

export default TodoList;
