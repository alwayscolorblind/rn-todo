import React from 'react';

import Todo from "./Todo";

import {Alert, FlatList, StyleSheet, Text, View} from "react-native";

import { useStore } from "./hooks/useStore";

import { ITodo } from "./interfaces/ITodo";
import {observer} from "mobx-react";

const TodoList = observer(() => {
  const {
    todos,
    todosCompleted,
    makeTodoCompleted,
    makeTodoUncompleted,
    removeTodo,
    removeCompleted
  } = useStore();

  const handleRemove = (todo: ITodo) => {
    if (todo.completed) {
      removeCompleted(todo.id);
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

  const completedTodos = (
      <>
        <Text style={styles.todoHeader}>Выполнено:</Text>
        <FlatList
            keyExtractor={(item) => item.id}
            data={todosCompleted}
            renderItem={({item}) => (
                <Todo
                    todo={item}
                    handleRemove={handleRemove}
                    handleUncomplete={makeTodoUncompleted}
                />
            )}
        />
      </>
  );

  const todosList = (
      <>
        <Text style={styles.todoHeader}>Дела:</Text>
        <FlatList
            keyExtractor={(item) => item.id}
            data={todos}
            renderItem={({item}) => (
                <Todo todo={item} handleComplete={() => makeTodoCompleted(item)} handleRemove={handleRemove}/>
            )}
        />
      </>
  );

  const textPlug = (
      <View style={styles.plug}>
        <Text style={styles.plugText}>Тут пока что нет дел...</Text>
      </View>
  );

  return (
      <View>
        <Text style={styles.countText}>Дел: {todos.length}, Выполнено: {todosCompleted.length}</Text>
        {!todos.length && !todosCompleted.length ? textPlug : null}
        {todos.length ? todosList : null}
        {todosCompleted.length ? completedTodos : null}
      </View>
  );
});

const styles = StyleSheet.create({
  countText: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 10,
    color: "#b0b0b0"
  },
  todoHeader: {
    fontSize: 18,
    marginBottom: 10,
    color: "#505050",
    fontWeight: "500"
  },
  plug: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%"
  },
  plugText: {
    fontSize: 20,
    marginBottom: 10,
    color: "#797979",
    fontWeight: "500"
  }
});

export default TodoList;
