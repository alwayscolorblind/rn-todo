import { StatusBar } from 'expo-status-bar';

import React, {createContext} from 'react';

import { StyleSheet, View } from 'react-native';

import NavBar from "./src/Navbar";

import Store from "./src/store/store";

import { observer } from "mobx-react";

import TodoScreen from "./src/TodoScreen";

const store = new Store();

export const StoreContext = createContext(store);

const App = observer(() => {
  return (
    <View>
      <NavBar title="Todo App"/>
      <StoreContext.Provider value={store}>
          <View style={styles.container}>
            <TodoScreen />
          </View>
      </StoreContext.Provider>
      <StatusBar style="auto"/>
    </View>
  );
}); // TODO: Спросить про статусбар, так же про цикл

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
});

export default App;
