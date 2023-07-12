import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/mealsList/MealList";

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

  return <MealList items={displayedMeals} />;
};

export default MealsOverviewScreen;
