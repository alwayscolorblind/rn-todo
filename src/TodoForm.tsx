import React, {  useState, FC } from 'react';

import {
  Button,
  TextInput,
  View,
  StyleSheet, Alert
} from "react-native";

import { useStore } from "./hooks/useStore";
import {observer} from "mobx-react";

const TodoForm: FC = observer(() => {
  const [title, setTitle] = useState("");

  const { addTodo } = useStore();

  const addHandler = () => {
    if (!title.trim()) {
      Alert.alert("Внимание!", "Название не может быть пустым")
      return;
    }
    addTodo(title);
    setTitle("");
  }

  return (
      <View style={styles.form}>
        <TextInput
            style={styles.input}
            onChangeText={text => {setTitle(text)}}
            onSubmitEditing={addHandler}
            value={title}
            placeholder="Введите название"
        />
        <Button title="Добавить" onPress={addHandler} color="#ff4545"/>
      </View>
  );
});

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  input: {
    width: "70%",
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderBottomColor: "#ff4545",
    padding: 10
  }
});

export default TodoForm;
