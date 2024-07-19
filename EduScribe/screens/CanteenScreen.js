import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// import Section_1 from "../Components/Canteen/Section_1";
import Canteen_menu from "../Components/Canteen/Canteen_Menu/Canteen_menu";

const CanteenScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2F2F2F" />
      <Canteen_menu />
    </SafeAreaView>
  );
};

export default CanteenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
});
