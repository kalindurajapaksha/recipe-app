import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealList = ({ items }) => {
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
