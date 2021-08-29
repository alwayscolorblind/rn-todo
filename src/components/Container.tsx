import React, { FC } from 'react';
import {StyleSheet, View} from "react-native";

const Container: FC = ({ children}) => {
  return (
      <View style={styles.container}>
        {children}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Container;
