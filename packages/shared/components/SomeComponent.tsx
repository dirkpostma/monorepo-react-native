import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  onPress: () => void;
}

export const SomeComponent = (props: Props) => {
  const { onPress = () => {} } = props;
  return (
    <Pressable onPress={onPress} style={styles.mainContainer}>
      <Text style={styles.text}>Shared Button</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#2BE044",
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: "#FF0",
  },
});
