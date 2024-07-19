import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const ClassroomSection2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.box2}>
      <View style={styles.cards}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("StudyMaterialGroupStack")}
        >
          <Svg
            width="120px"
            height="120px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xmlns="preserve"
            style={{ marginTop: 15 }}
          >
            <Path
              fill="#231F20"
              d="M60,52V4c0-2.211-1.789-4-4-4H14v51v3h42v8H10c-2.209,0-4-1.791-4-4s1.791-4,4-4h2v-3V0H8
	C5.789,0,4,1.789,4,4v54c0,3.313,2.687,6,6,6h49c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1v-8C59.104,54,60,53.104,60,52z M23,14h12
	c0.553,0,1,0.447,1,1s-0.447,1-1,1H23c-0.553,0-1-0.447-1-1S22.447,14,23,14z M42,28H23c-0.553,0-1-0.447-1-1s0.447-1,1-1h19
	c0.553,0,1,0.447,1,1S42.553,28,42,28z M49,22H23c-0.553,0-1-0.447-1-1s0.447-1,1-1h26c0.553,0,1,0.447,1,1S49.553,22,49,22z"
            />
          </Svg>
          <Text style={{ fontSize: 30, fontWeight: "800", marginTop: 20 }}>
            Study Material
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, { marginTop: 40 }]}
          onPress={() => navigation.navigate("AssignmentCourses")}
        >
          <Svg
            width="130px"
            height="140px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path d="M11 3a1 1 0 1 1 2 0h2a3 3 0 1 0-6 0h2Z" fill="#000000" />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8v1.2a.8.8 0 0 0 .8.8h6.4a.8.8 0 0 0 .8-.8V3Zm-9 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Zm0 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Zm0 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H7Z"
              fill="#000000"
            />
          </Svg>
          <Text style={{ fontSize: 30, fontWeight: "800", marginTop: 20 }}>
            Assignments
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ClassroomSection2;

const styles = StyleSheet.create({
  cards: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    width: 260,
    height: 260,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    flex: 1,
    marginTop: 300,
    backgroundColor: "black",
    width: "100%",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
});
