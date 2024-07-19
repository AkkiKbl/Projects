import { StyleSheet, ScrollView, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ClassroomSection1 from "../Components/Classroom/ClassroomSection1";
import ClassroomSection2 from "../Components/Classroom/ClassroomSection2";

const ClassroomScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ClassroomSection1 />
        <ClassroomSection2 />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClassroomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
