import React, { FC } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NavBar: FC<{ title: string }> = ({ title }) => {
  const insets = useSafeAreaInsets();

  return (
      <View style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff4545",
        paddingTop: insets.top + 10,
        paddingBottom: 10
      }}>
        <Text style={styles.text}>{title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default NavBar;
