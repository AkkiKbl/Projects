import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import image1 from "../../assets/CanteenScreen/image1.jpg";
import { useState } from "react";
import { Svg, Path, Line } from "react-native-svg";
import Section_2 from "./Section_2";

const Section_1 = () => {
  const [searchItem, setSearchItem] = useState("");
  const [selectType, setselectType] = useState({
    meal: true,
    snacks: true,
    drinks: true,
  });
  return (
    <View style={styles.container}>
      <View style={styles.card1}>
        <View>
          <Image source={image1} style={styles.image1Style} />
        </View>
        <View style={styles.CanteenLogo}>
          <View>
            <Svg
              width="253"
              height="98"
              viewBox="0 0 253 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Line
                x1="4.5"
                y1="1.96701e-07"
                x2="4.5"
                y2="54"
                stroke="white"
                strokeWidth="9"
              />
              <Line
                x1="185"
                y1="4.5"
                x2="4"
                y2="4.5"
                stroke="white"
                strokeWidth="9"
              />
              <Line
                x1="248.5"
                y1="41"
                x2="248.5"
                y2="95"
                stroke="white"
                strokeWidth="9"
              />
              <Line
                x1="253"
                y1="93.5"
                x2="72"
                y2="93.5"
                stroke="white"
                strokeWidth="9"
              />
              <Path
                d="M55.196 47.0938H48.9744C48.8608 46.2888 48.6288 45.5739 48.2784 44.9489C47.928 44.3144 47.4782 43.7746 46.929 43.3295C46.3797 42.8845 45.7453 42.5436 45.0256 42.3068C44.3153 42.0701 43.5436 41.9517 42.7102 41.9517C41.2045 41.9517 39.893 42.3258 38.7756 43.0739C37.6581 43.8125 36.7917 44.892 36.1761 46.3125C35.5606 47.7235 35.2528 49.4375 35.2528 51.4545C35.2528 53.5284 35.5606 55.2708 36.1761 56.6818C36.8011 58.0928 37.6723 59.1581 38.7898 59.8778C39.9072 60.5975 41.1998 60.9574 42.6676 60.9574C43.4915 60.9574 44.2538 60.8485 44.9545 60.6307C45.6648 60.4129 46.2945 60.0956 46.8438 59.679C47.393 59.2528 47.8475 58.7367 48.2074 58.1307C48.5767 57.5246 48.8324 56.8333 48.9744 56.0568L55.196 56.0852C55.035 57.4205 54.6326 58.7083 53.9886 59.9489C53.3542 61.1799 52.4972 62.2831 51.4176 63.2585C50.3475 64.2244 49.0691 64.9915 47.5824 65.5597C46.1051 66.1184 44.4337 66.3977 42.5682 66.3977C39.9735 66.3977 37.6534 65.8106 35.608 64.6364C33.572 63.4621 31.9621 61.7623 30.7784 59.5369C29.6042 57.3116 29.017 54.6174 29.017 51.4545C29.017 48.2822 29.6136 45.5833 30.8068 43.358C32 41.1326 33.6193 39.4375 35.6648 38.2727C37.7102 37.0985 40.0114 36.5114 42.5682 36.5114C44.2538 36.5114 45.8163 36.7481 47.2557 37.2216C48.7045 37.6951 49.9877 38.3864 51.1051 39.2955C52.2225 40.1951 53.1316 41.2983 53.8324 42.6051C54.5426 43.9119 54.9972 45.4081 55.196 47.0938ZM64.0739 66H57.483L67.5256 36.9091H75.4517L85.4801 66H78.8892L71.6023 43.5568H71.375L64.0739 66ZM63.6619 54.5653H79.2301V59.3665H63.6619V54.5653ZM113.314 36.9091V66H108.001L95.3452 47.6903H95.1321V66H88.9815V36.9091H94.3793L106.936 55.2045H107.192V36.9091H113.314ZM117.288 41.9801V36.9091H141.18V41.9801H132.273V66H126.194V41.9801H117.288ZM145.114 66V36.9091H164.717V41.9801H151.265V48.9119H163.708V53.983H151.265V60.929H164.773V66H145.114ZM169.607 66V36.9091H189.209V41.9801H175.757V48.9119H188.2V53.983H175.757V60.929H189.266V66H169.607ZM218.431 36.9091V66H213.119L200.462 47.6903H200.249V66H194.099V36.9091H199.496L212.053 55.2045H212.309V36.9091H218.431Z"
                fill="white"
              />
            </Svg>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Section_1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card1: {
    backgroundColor: "black",
    width: "100%",
    height: 420,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  image1Style: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  line1: {
    position: "absolute",
    backgroundColor: "white",
    width: 100,
    height: 100,
  },
  CanteenLogo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    bottom: "10%",
  },
  searchBar: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    top: "18%",
  },
});
