import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/mealsList/MealList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );
  if (favoriteMealsIds.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorites yet.</Text>
      </View>
    );
  }
  return <MealList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});
