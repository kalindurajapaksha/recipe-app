import { View, Text, StyleSheet } from "react-native";
import React from "react";

const List = ({ data }) => {
  return data.map((item) => (
    <View style={styles.listItemContainer} key={item}>
      <Text style={styles.text}>{item}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItemContainer: {
    backgroundColor: "#9f78bb",
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 10,
    margin: 6,
  },
  text: {
    textAlign: "center",
  },
});
