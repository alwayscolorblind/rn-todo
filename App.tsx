import { StatusBar } from 'expo-status-bar';

import { SafeAreaView } from "react-native-safe-area-context";

import React, { createContext } from 'react';

import {DrawerLayoutAndroid, StyleSheet, View} from 'react-native';

import NavBar from "./src/Navbar";

import { observer } from "mobx-react";

import TodoScreen from "./src/TodoScreen";

import {NavigationContainer} from "@react-navigation/native";

import {createDrawerNavigator, DrawerContent, DrawerItem} from "@react-navigation/drawer";
import AboutScreen from "./src/AboutScreen";

const Drawer = createDrawerNavigator();

const App = observer(() => {
  const state = {
    type: 'stack',
    key: 'stack-1',
    routeNames: ['Home'],
    routes: [
      { key: 'home-1', name: 'Home', params: { sortBy: 'latest' } }
    ],
    index: 1,
    stale: false,
  };

  return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Дела"
                            screenOptions={{
                              swipeEdgeWidth: 1000
                            }}>
            <Drawer.Screen name="Дела" component={TodoScreen} />
            <Drawer.Screen name={"О приложении"} component={AboutScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
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