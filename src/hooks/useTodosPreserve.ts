import AsyncStorage from "@react-native-async-storage/async-storage";

import { useStore } from "./useStore";

import { useEffect } from "react";

export const useTodosPreserve = () => {
  const store = useStore();

  const _loadTodos = async () => {
    const savedString = await AsyncStorage.getItem("todos");
    return savedString;
  }

  const _saveTodos = async () => {
    const toSave = JSON.stringify(store.todos);
    await AsyncStorage.setItem("todos", toSave);
  }

  useEffect(() => {
    _loadTodos()
        .then(saved => saved !== null ? JSON.parse(saved) : [])
        .then(todos => store.setTodos(todos));
  }, []);

  useEffect(() => {
    _saveTodos();
  })
}