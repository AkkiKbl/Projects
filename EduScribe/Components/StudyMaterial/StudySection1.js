import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const StudySection1 = () => {
  const navigation = useNavigation();

  function navigateScreen(screen) {
    navigation.navigate("StudyCourseStackGroup", {
      screen: "SemesterScreen",
      params: { data: screen },
    });
  }

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={[
            styles.textColor,
            { fontSize: 30, fontWeight: "600", marginTop: 20 },
          ]}
        >
          Class
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.line} />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateScreen("FYBCA")}
        >
          <Text style={[styles.textColor, styles.textStyle]}>FYBCA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateScreen("SYBCA")}
        >
          <Text style={[styles.textColor, styles.textStyle]}>SYBCA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateScreen("TYBCA")}
        >
          <Text style={[styles.textColor, styles.textStyle]}>TYBCA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StudySection1;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    width: "80%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonView: {
    alignItems: "center",
  },
  textColor: {
    color: "white",
  },
  textStyle: { fontSize: 22, fontWeight: "600" },
  line: {
    backgroundColor: "white",
    width: 180,
    height: 1,
    marginBottom: 20,
  },
});
