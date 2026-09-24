import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../assets/theme";



export function AppButton({ text, onPress }: { text: string; onPress: () => void }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      style={[styles.button, isPressed && styles.pressed]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.mauve,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: colors.base,
    fontWeight: "600",
    fontSize: 15,
  },
  pressed: {
    opacity: 0.7,
  },
});
