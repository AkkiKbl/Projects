import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { G, Path, Polygon, Rect, Svg } from "react-native-svg";

const Acad_Section2 = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.perLineCards}>
        <TouchableOpacity
          style={styles.cards}
          onPress={() => navigation.navigate("ResultClass")}
        >
          <Text style={styles.textColor}>Results</Text>
          <Svg
            fill="#FFFFFF"
            width="100px"
            height="130px"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <G id="Passed_exam">
              <Path d="M417.875,46H94.2126A13.2576,13.2576,0,0,0,81,59.2126V452.875A13.1835,13.1835,0,0,0,94.2126,466H417.875A13.1072,13.1072,0,0,0,431,452.875V59.2126A13.1814,13.1814,0,0,0,417.875,46ZM238.5,396.3493H151a13.125,13.125,0,0,1,0-26.25h87.5C255.7308,370.3674,255.7757,396.0737,238.5,396.3493Zm0-96.25H151a13.125,13.125,0,0,1,0-26.25h87.5C255.7308,274.1174,255.7757,299.8237,238.5,300.0993ZM273.85,194.75c-.2563,17.2351-25.9829,17.2672-26.25-.0011V126.7623a41.3874,41.3874,0,0,1,82.7747,0V194.75c-.282,17.2458-25.968,17.265-26.25-.0011V176.2866H273.85Zm96.4252,176.2241-43.0493,43.05a12.6979,12.6979,0,0,1-9.2755,3.8506,12.9869,12.9869,0,0,1-9.2755-3.8506l-18.2007-18.2c-11.918-12.3474,6.2036-30.6357,18.551-18.55l8.9252,8.9241,33.7738-33.7738C364.2043,340.5007,382.311,358.6587,370.2755,370.9741Zm0-96.25-43.0493,43.05a12.6979,12.6979,0,0,1-9.2755,3.8506,12.9869,12.9869,0,0,1-9.2755-3.8506l-18.2007-18.2c-11.918-12.3474,6.2036-30.6357,18.551-18.55l8.9252,8.9241,33.7738-33.7738C364.2043,244.2507,382.311,262.4087,370.2755,274.7241Z" />

              <Path d="M304.125,126.7623a15.1374,15.1374,0,0,0-30.2747,0v23.2743H304.125Z" />
            </G>
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cards}
          onPress={() => navigation.navigate("TimeTableClass")}
        >
          <Text style={styles.textColor}>Time-Table</Text>

          <Svg
            fill="#FFFFFF"
            width="100px"
            height="130px"
            viewBox="0 0 32 32"
            data-name="Layer 13"
            id="Layer_13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path d="M28.55,6.57H26.42V4.93a0.5,0.5,0,1,0-1,0V6.57H19.81V5.06a0.5,0.5,0,0,0-1,0V6.57H13.19V5.06a0.5,0.5,0,0,0-1,0V6.57H6.58V5.06a0.5,0.5,0,1,0-1,0V6.57H3.45A2,2,0,0,0,1.5,8.52v17.1a2,2,0,0,0,1.95,2h25.1a2,2,0,0,0,1.95-2V8.52A2,2,0,0,0,28.55,6.57Zm-25.1,1H5.58V9.08a0.5,0.5,0,0,0,1,0V7.57h5.61V9.08a0.5,0.5,0,0,0,1,0V7.57h5.61V9.08a0.5,0.5,0,0,0,1,0V7.57h5.61V8.94a0.5,0.5,0,1,0,1,0V7.57h2.13a1,1,0,0,1,.95.95v2.94H2.5V8.52A1,1,0,0,1,3.45,7.57Zm25.1,19H3.45a1,1,0,0,1-.95-1V12.46h27V25.62A1,1,0,0,1,28.55,26.57Z" />
            <Rect height="2.13" width="2.13" x="9.99" y="14.39" />
            <Rect height="2.13" width="2.13" x="14.98" y="14.39" />
            <Rect height="2.13" width="2.13" x="19.98" y="14.37" />
            <Rect height="2.13" width="2.13" x="5" y="18.45" />
            <Rect height="2.13" width="2.13" x="9.99" y="18.45" />
            <Rect height="2.13" width="2.13" x="14.98" y="18.45" />
            <Rect height="2.13" width="2.13" x="5" y="22.56" />
            <Rect height="2.13" width="2.13" x="9.99" y="22.56" />
            <Rect height="2.13" width="2.13" x="14.98" y="22.55" />
            <Rect height="2.13" width="2.13" x="19.98" y="22.55" />
            <Rect height="2.13" width="2.13" x="19.98" y="18.44" />
            <Rect height="2.13" width="2.13" x="24.87" y="14.36" />
            <Rect height="2.13" width="2.13" x="24.87" y="18.42" />
          </Svg>
        </TouchableOpacity>
      </View>
      <View style={styles.perLineCards}>
        <TouchableOpacity
          style={styles.cards}
          onPress={() => navigation.navigate("Workshop")}
        >
          <Text style={styles.textColor}>Workshop</Text>
          <Svg
            fill="#FFFFFF"
            version="1.1"
            id="XMLID_66_"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-8 0 42 15"
          >
            <G id="workshop">
              <G>
                <Polygon points="24,17 20,17 20,15 22,15 22,3 4,3 4,5 2,5 2,1 24,1 		" />
              </G>
              <G>
                <Rect x="10" width="6" height="4" />
              </G>
              <G>
                <Path
                  d="M13,24H0v-5c0-2.3,1.3-4.4,3.3-5.4C2.5,12.8,2,11.7,2,10.5C2,8,4,6,6.5,6S11,8,11,10.5c0,0.7-0.1,1.3-0.4,1.8
			c1.4-0.6,3.4-1.8,5.7-4.1l2-2l1.4,1.4L18.4,9l1.8,1.8l-0.3,0.6c-0.1,0.2-2.4,5.5-6.6,7.2C13.1,18.7,13,18.8,13,19V24z M2,22h9v-3
			c0-1,0.6-1.9,1.5-2.3c2.7-1.1,4.6-4.2,5.3-5.5L17,10.4C12.1,15,8.4,15,8,15H6c-2.2,0-4,1.8-4,4V22z M6.5,13C7.9,13,9,11.9,9,10.5
			S7.9,8,6.5,8S4,9.1,4,10.5S5.1,13,6.5,13z"
                />
              </G>
            </G>
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cards}
          onPress={() =>
            Linking.openURL("https://pages.razorpay.com/sridora-bca")
          }
        >
          <Text style={styles.textColor}>Pay Fees</Text>
          <Svg
            fill="#FFFFFF"
            width="100px"
            height="130px"
            viewBox="-1 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
            class="cf-icon-svg"
          >
            <Path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zM3.107 7.189v.61h4.929a3.605 3.605 0 0 1 .512-1.402h-4.65a.794.794 0 0 0-.791.792zm9.959 4.454-.03.013A3.625 3.625 0 0 1 8.009 8.59H3.107v3.337a.794.794 0 0 0 .791.792h8.376a.794.794 0 0 0 .792-.792zm-4.927-1.13H4.887v.792h3.252zm6.32-2.197a2.833 2.833 0 1 0-1.393 2.44 2.834 2.834 0 0 0 1.392-2.44zm-1.69.634a.825.825 0 0 1-.414.713 1.322 1.322 0 0 1-.41.171v.183a.317.317 0 0 1-.633 0v-.179a1.466 1.466 0 0 1-.264-.083.94.94 0 0 1-.361-.264.317.317 0 1 1 .478-.415.318.318 0 0 0 .118.091.854.854 0 0 0 .16.052 1.257 1.257 0 0 0 .174.021.773.773 0 0 0 .393-.109c.125-.081.125-.149.125-.182a.214.214 0 0 0-.052-.138.489.489 0 0 0-.13-.104.663.663 0 0 0-.161-.058.762.762 0 0 0-.16-.016 1.623 1.623 0 0 1-.27-.022 1.246 1.246 0 0 1-.35-.113 1.014 1.014 0 0 1-.334-.267.86.86 0 0 1-.198-.54.872.872 0 0 1 .433-.738 1.305 1.305 0 0 1 .399-.162v-.175a.317.317 0 1 1 .633 0v.183a1.527 1.527 0 0 1 .27.094 1.086 1.086 0 0 1 .316.218.317.317 0 0 1-.447.448.448.448 0 0 0-.13-.089.864.864 0 0 0-.164-.057l-.018-.004a.839.839 0 0 0-.135-.023.76.76 0 0 0-.385.103.246.246 0 0 0-.139.202.238.238 0 0 0 .056.14.39.39 0 0 0 .125.1.628.628 0 0 0 .171.055 1.009 1.009 0 0 0 .167.013 1.396 1.396 0 0 1 .294.031 1.297 1.297 0 0 1 .322.116 1.12 1.12 0 0 1 .312.248.844.844 0 0 1 .209.556z" />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Acad_Section2;

const styles = StyleSheet.create({
  cards: {
    backgroundColor: "black",
    width: "40%",
    height: 180,
    borderRadius: 10,
    flexDirection: "column-reverse",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },

  perLineCards: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textColor: {
    color: "white",
    marginBottom: 10,
    fontWeight: "400",
    fontSize: 18,
  },
});
