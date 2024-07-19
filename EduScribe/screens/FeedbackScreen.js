import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import FeedbackSection1 from "../Components/Feedback/FeedbackSection1";
import FeedbackSection2 from "../Components/Feedback/FeedbackSection2";

const FeedbackScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <FeedbackSection1 />
      <FeedbackSection2 />
    </ScrollView>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
});
