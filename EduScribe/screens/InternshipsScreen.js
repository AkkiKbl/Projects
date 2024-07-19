import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import InternSection1 from "../Components/Internships/InternSection1";
import InternSection2 from "../Components/Internships/InternSection2";

const InternshipsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <InternSection1 />
        <InternSection2 />
      </View>
    </ScrollView>
  );
};

export default InternshipsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
});
