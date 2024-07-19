import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const ServiceCards = () => {
  const data = [
    {
      id: 1,
      title: Acadmics,
    },
  ];

  return (
    <TouchableOpacity style={styles.cards}>
      <Text style={{ color: "white", textAlign: "center", marginBottom: 10 }}>
        <FlatList />
      </Text>
    </TouchableOpacity>
  );
};

export default ServiceCards;

const styles = StyleSheet.create({
  cards: {
    width: 150,
    height: 150,
    backgroundColor: "#171717",
    flexDirection: "column-reverse",
    marginRight: 35,
    borderRadius: 10,
  },
});
