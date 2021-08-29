import React, {  useState, FC } from 'react';

import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Alert,
  TouchableNativeFeedback,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableNativeFeedbackComponent, Pressable
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
        <Pressable onPress={addHandler} style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#76c6fd" : "#39a1e7"
          },
          styles.addBtn
        ]}>
            <Text style={styles.btnText}>Добавить</Text>
        </Pressable>
      </View>
  );
});

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    width: "70%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 10
  },
  addBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 10,
    elevation: 5,
    color: "#fff"
  },
  btnText: {
    color: "#fff"
  }
});

export default TodoForm;
