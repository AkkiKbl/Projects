import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Pinchable from "react-native-pinchable";

const ImageView = (routes) => {
  const data = routes.route.params;

  return (
    <View
      style={{ flex: 1, backgroundColor: "black", justifyContent: "center" }}
    >
      <Pinchable>
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
          source={{
            uri: data.url,
          }}
        />
      </Pinchable>
    </View>
  );
};

export default ImageView;
