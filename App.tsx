import { StatusBar } from 'expo-status-bar';

import { SafeAreaProvider } from "react-native-safe-area-context";

import React, { createContext } from 'react';

import {DrawerLayoutAndroid, StyleSheet, View} from 'react-native';

import NavBar from "./src/Navbar";

import { observer } from "mobx-react";

import TodoScreen from "./src/TodoScreen";

import {NavigationContainer} from "@react-navigation/native";

import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const App = observer(() => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Todo">
          <Drawer.Screen name="Todo" component={TodoScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}); // TODO: Спросить про статусбар, так же про цикл

export default App;

// <NavBar title="Todo App b1"/>
// <StoreContext.Provider value={store}>
//   <View style={styles.container}>
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Home" component={TodoScreen} />
//     </Drawer.Navigator>
//   </View>
// </StoreContext.Provider>