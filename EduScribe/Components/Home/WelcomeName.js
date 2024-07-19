import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "@expo-google-fonts/pacifico";

const welcomeName = ({ user }) => {
  const userDetails = {
    name: "",
    rollno: "",
  };

  if (user.firstName) {
    userDetails.name = user.firstName + "!";
    userDetails.rollno = user.rollNo;
  }

  return (
    <View style={{ color: "white", marginLeft: 20 }}>
      <Text style={styles.welcomeName}>Hello {userDetails.name}</Text>
      <Text style={styles.rollno}> {userDetails.rollno}</Text>
    </View>
  );
};

export default welcomeName;

const styles = StyleSheet.create({
  welcomeName: {
    fontSize: 28,
    fontFamily: "Pacifico_400Regular",
    color: "white",
  },
  rollno: {
    color: "white",
    fontSize: 26,
    fontWeight: "600",
  },
});
