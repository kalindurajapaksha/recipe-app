import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealHighlights from "../components/MealHighlights";
import { ScrollView } from "react-native";
import List from "../components/List";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{meal.title}</Text>
        <MealHighlights
          duration={meal.duration}
          affordability={meal.affordability}
          complexity={meal.complexity}
          textStyle={styles.mealHighlightsText}
        />
      </View>
      <View style={styles.outerDetailsContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.subTitle}>Ingredients</Text>
          <List data={meal.ingredients} />
          <Text style={styles.subTitle}>Steps</Text>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  titleContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    margin: 16,
    paddingTop: 8,
    marginTop: -20,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#453153",
  },
  mealHighlightsText: {
    color: "#453153",
  },
  subTitle: {
    padding: 8,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  detailsContainer: {
    width: "80%",
  },
  outerDetailsContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
});
