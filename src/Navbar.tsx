import React, { FC } from 'react';
import {Text, View, StyleSheet} from "react-native";

const NavBar: FC<{ title: string }> = ({ title }) => {
  return (
      <View style={styles.navbar}>
        <Text style={styles.text}>{title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#ff4545",
    paddingBottom: 10
  },
  text: {
    fontSize: 20
  }
});

export default NavBar;
