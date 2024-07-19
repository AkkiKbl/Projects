import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StudySection1 from "../Components/StudyMaterial/StudySection1";

const StudyMaterial = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#474747"} barStyle={"light-content"} />
      <StudySection1 />
    </SafeAreaView>
  );
};

export default StudyMaterial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
});
