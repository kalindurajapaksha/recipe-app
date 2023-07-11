import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const categoryTitle = route.params.categoryTitle;
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryTitle]);

  const renderMealItem = (itemData) => {
    const { id, title, imageUrl, duration, affordability, complexity } =
      itemData.item;
    const mealItemProps = {
      id,
      title,
      imageUrl,
      duration,
      affordability,
      complexity,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
