import { View, Text, StatusBar, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Acad_Section1 from "../Components/Academics/Acad_Section1";
import Acad_Section2 from "../Components/Academics/Acad_Section2";

const AcademicsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <StatusBar backgroundColor={"#2F2F2F"} />
        <Acad_Section1 />
        <Acad_Section2 />
      </View>
    </ScrollView>
  );
};

export default AcademicsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
});
