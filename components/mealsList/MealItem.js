import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealHighlights from "../MealHighlights";

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
}) => {
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) =>
          pressed && Platform.OS === "ios" ? styles.buttonPressed : null
        }
        onPress={pressHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealHighlights
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
