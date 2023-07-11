import { View, Text, Pressable, Platform } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { reduceLightness } from "../util";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem(color)}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && Platform.OS === "ios" ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: reduceLightness(color) }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: (color) => ({
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: color,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  }),
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "fancy-bold",
    fontSize: 18,
    textAlign: "center",
  },
});
