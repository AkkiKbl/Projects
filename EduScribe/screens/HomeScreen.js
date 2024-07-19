import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import Notice from "../Components/Home/Notice";
import WelcomeName from "../Components/Home/WelcomeName";
import React, { useContext } from "react";
import ClassroomDetails from "../Components/Home/ClassroomDetails";
import ServiceCards from "../Components/Home/ServiceCards";
import { SafeAreaView } from "react-native-safe-area-context";
import Loading from "../Components/Loading";
import { AppContext, AppProvider } from "../context/AppContext";
import { StackActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const { userDetails, setUserDetails } = useContext(AppContext);
  const navigation = useNavigation();

  //Load fonts
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  function LogoutFunction() {
    //Store data in AsyncStorage
    const storeData = async () => {
      await AsyncStorage.removeItem("user-pass");
    };
    storeData();
    navigation.dispatch(StackActions.replace("LoginGroupStack"));
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"#474747"} />

      {userDetails ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <WelcomeName user={userDetails} />
            <Notice />
            <ClassroomDetails user={userDetails} />
            <View style={{ alignItems: "center", marginRight: 20 }}>
              <View style={styles.separator} />
            </View>
            <ServiceCards />
          </View>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={LogoutFunction}
          >
            <View style={styles.button}>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
                LOGOUT
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
  welcome_1: {
    marginTop: 40,
    fontSize: 25,
    fontFamily: "Pacifico_400Regular",
  },
  welcome_2: {
    fontSize: 25,
    fontWeight: "bold",
  },
  separator: {
    width: 200,
    height: 1,
    backgroundColor: "white",
    marginTop: 20,
    opacity: 0.5,
  },
  button: {
    backgroundColor: "#A52A2A",
    width: "70%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
});
