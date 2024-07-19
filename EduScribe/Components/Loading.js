import { View, Text } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View
      style={{
        height: 700,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Loading...</Text>
    </View>
  );
};

export default Loading;
