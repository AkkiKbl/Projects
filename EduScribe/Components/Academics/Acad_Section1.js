import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AcademicsImage from "../../assets/AcademicsScreen/AcademicsImage.png";
import { Svg, Line, Path } from "react-native-svg";

const Acad_Section1 = () => {
  return (
    <View>
      <View style={styles.card1}>
        <View>
          <Image source={AcademicsImage} style={styles.image1Style} />
        </View>
        <View style={styles.CanteenLogo}>
          <Svg
            width="296"
            height="98"
            viewBox="0 0 296 98"
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
              x1="291.5"
              y1="41"
              x2="291.5"
              y2="95"
              stroke="white"
              strokeWidth="9"
            />
            <Line
              x1="296"
              y1="93.5"
              x2="115"
              y2="93.5"
              stroke="white"
              strokeWidth="9"
            />
            <Path
              d="M34.5426 66H27.9517L37.9943 36.9091H45.9205L55.9489 66H49.358L42.071 43.5568H41.8438L34.5426 66ZM34.1307 54.5653H49.6989V59.3665H34.1307V54.5653ZM83.7507 47.0938H77.5291C77.4155 46.2888 77.1835 45.5739 76.8331 44.9489C76.4827 44.3144 76.0329 43.7746 75.4837 43.3295C74.9344 42.8845 74.3 42.5436 73.5803 42.3068C72.87 42.0701 72.0982 41.9517 71.2649 41.9517C69.7592 41.9517 68.4477 42.3258 67.3303 43.0739C66.2128 43.8125 65.3464 44.892 64.7308 46.3125C64.1153 47.7235 63.8075 49.4375 63.8075 51.4545C63.8075 53.5284 64.1153 55.2708 64.7308 56.6818C65.3558 58.0928 66.227 59.1581 67.3445 59.8778C68.4619 60.5975 69.7545 60.9574 71.2223 60.9574C72.0462 60.9574 72.8085 60.8485 73.5092 60.6307C74.2195 60.4129 74.8492 60.0956 75.3984 59.679C75.9477 59.2528 76.4022 58.7367 76.7621 58.1307C77.1314 57.5246 77.3871 56.8333 77.5291 56.0568L83.7507 56.0852C83.5897 57.4205 83.1873 58.7083 82.5433 59.9489C81.9089 61.1799 81.0518 62.2831 79.9723 63.2585C78.9022 64.2244 77.6238 64.9915 76.1371 65.5597C74.6598 66.1184 72.9884 66.3977 71.1229 66.3977C68.5282 66.3977 66.2081 65.8106 64.1626 64.6364C62.1267 63.4621 60.5168 61.7623 59.3331 59.5369C58.1589 57.3116 57.5717 54.6174 57.5717 51.4545C57.5717 48.2822 58.1683 45.5833 59.3615 43.358C60.5547 41.1326 62.174 39.4375 64.2195 38.2727C66.2649 37.0985 68.5661 36.5114 71.1229 36.5114C72.8085 36.5114 74.371 36.7481 75.8104 37.2216C77.2592 37.6951 78.5424 38.3864 79.6598 39.2955C80.7772 40.1951 81.6863 41.2983 82.3871 42.6051C83.0973 43.9119 83.5518 45.4081 83.7507 47.0938ZM92.6286 66H86.0376L96.0803 36.9091H104.006L114.035 66H107.444L100.157 43.5568H99.9297L92.6286 66ZM92.2166 54.5653H107.785V59.3665H92.2166V54.5653ZM127.849 66H117.536V36.9091H127.934C130.86 36.9091 133.379 37.4915 135.491 38.6562C137.603 39.8116 139.227 41.4735 140.363 43.642C141.509 45.8106 142.082 48.4053 142.082 51.4261C142.082 54.4564 141.509 57.0606 140.363 59.2386C139.227 61.4167 137.593 63.0881 135.462 64.2528C133.341 65.4176 130.803 66 127.849 66ZM123.687 60.7301H127.593C129.411 60.7301 130.941 60.4081 132.181 59.7642C133.431 59.1108 134.369 58.1023 134.994 56.7386C135.628 55.3655 135.945 53.5947 135.945 51.4261C135.945 49.2765 135.628 47.5199 134.994 46.1562C134.369 44.7926 133.436 43.7888 132.195 43.1449C130.955 42.5009 129.425 42.179 127.607 42.179H123.687V60.7301ZM146.638 66V36.9091H166.24V41.9801H152.788V48.9119H165.232V53.983H152.788V60.929H166.297V66H146.638ZM171.13 36.9091H178.715L186.727 56.4545H187.067L195.079 36.9091H202.664V66H196.698V47.0653H196.457L188.928 65.858H184.866L177.337 46.9943H177.096V66H171.13V36.9091ZM213.882 36.9091V66H207.732V36.9091H213.882ZM244.61 47.0938H238.388C238.275 46.2888 238.043 45.5739 237.692 44.9489C237.342 44.3144 236.892 43.7746 236.343 43.3295C235.794 42.8845 235.159 42.5436 234.44 42.3068C233.729 42.0701 232.958 41.9517 232.124 41.9517C230.619 41.9517 229.307 42.3258 228.19 43.0739C227.072 43.8125 226.206 44.892 225.59 46.3125C224.975 47.7235 224.667 49.4375 224.667 51.4545C224.667 53.5284 224.975 55.2708 225.59 56.6818C226.215 58.0928 227.086 59.1581 228.204 59.8778C229.321 60.5975 230.614 60.9574 232.082 60.9574C232.906 60.9574 233.668 60.8485 234.369 60.6307C235.079 60.4129 235.709 60.0956 236.258 59.679C236.807 59.2528 237.262 58.7367 237.621 58.1307C237.991 57.5246 238.246 56.8333 238.388 56.0568L244.61 56.0852C244.449 57.4205 244.047 58.7083 243.403 59.9489C242.768 61.1799 241.911 62.2831 240.832 63.2585C239.762 64.2244 238.483 64.9915 236.996 65.5597C235.519 66.1184 233.848 66.3977 231.982 66.3977C229.388 66.3977 227.067 65.8106 225.022 64.6364C222.986 63.4621 221.376 61.7623 220.192 59.5369C219.018 57.3116 218.431 54.6174 218.431 51.4545C218.431 48.2822 219.028 45.5833 220.221 43.358C221.414 41.1326 223.033 39.4375 225.079 38.2727C227.124 37.0985 229.425 36.5114 231.982 36.5114C233.668 36.5114 235.23 36.7481 236.67 37.2216C238.119 37.6951 239.402 38.3864 240.519 39.2955C241.637 40.1951 242.546 41.2983 243.246 42.6051C243.957 43.9119 244.411 45.4081 244.61 47.0938ZM264.802 45.2756C264.688 44.1297 264.201 43.2396 263.339 42.6051C262.477 41.9706 261.308 41.6534 259.83 41.6534C258.826 41.6534 257.979 41.7955 257.288 42.0795C256.596 42.3542 256.066 42.7377 255.697 43.2301C255.337 43.7225 255.157 44.2812 255.157 44.9062C255.138 45.4271 255.247 45.8816 255.484 46.2699C255.73 46.6581 256.066 46.9943 256.492 47.2784C256.918 47.553 257.411 47.7945 257.969 48.0028C258.528 48.2017 259.125 48.3722 259.759 48.5142L262.373 49.1392C263.642 49.4233 264.807 49.8021 265.867 50.2756C266.928 50.7491 267.846 51.3314 268.623 52.0227C269.399 52.714 270.001 53.5284 270.427 54.4659C270.862 55.4034 271.085 56.4782 271.094 57.6903C271.085 59.4706 270.63 61.0142 269.731 62.321C268.841 63.6184 267.553 64.6269 265.867 65.3466C264.191 66.0568 262.169 66.4119 259.802 66.4119C257.453 66.4119 255.408 66.0521 253.665 65.3324C251.933 64.6127 250.578 63.5473 249.603 62.1364C248.637 60.7159 248.13 58.9593 248.083 56.8665H254.035C254.101 57.8419 254.38 58.6562 254.873 59.3097C255.375 59.9536 256.042 60.4413 256.876 60.7727C257.719 61.0947 258.67 61.2557 259.731 61.2557C260.772 61.2557 261.677 61.1042 262.444 60.8011C263.22 60.4981 263.822 60.0767 264.248 59.5369C264.674 58.9972 264.887 58.3769 264.887 57.6761C264.887 57.0227 264.693 56.4735 264.305 56.0284C263.926 55.5833 263.367 55.2045 262.629 54.892C261.899 54.5795 261.004 54.2955 259.944 54.0398L256.776 53.2443C254.324 52.6477 252.387 51.715 250.967 50.446C249.546 49.1771 248.841 47.4678 248.85 45.3182C248.841 43.5568 249.309 42.018 250.256 40.7017C251.213 39.3854 252.524 38.358 254.191 37.6193C255.858 36.8807 257.752 36.5114 259.873 36.5114C262.032 36.5114 263.916 36.8807 265.526 37.6193C267.146 38.358 268.405 39.3854 269.305 40.7017C270.204 42.018 270.668 43.5426 270.697 45.2756H264.802Z"
              fill="white"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
};

export default Acad_Section1;

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
  Line1: {
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
  },
  searchBar: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    bottom: "12%",
  },
});
