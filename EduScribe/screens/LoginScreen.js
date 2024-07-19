import { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ToastAndroid,
  StatusBar,
  Image,
} from "react-native";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { StackActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { AppContext } from "../context/AppContext";

const LoginScreen = () => {
  //Save typed Username and Password
  const { userDetails, setUserDetails } = useContext(AppContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const value = {
    username: "",
    password: "",
    isLoggedIn: false,
  };

  const navigation = useNavigation();

  //Load fonts
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  //Handle OnClick Button
  const handleSignIn = () => {
    value.username = userName;
    value.password = password;

    //Store data in AsyncStorage
    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("user-pass", jsonValue);
      } catch (e) {
        // saving error
      }
    };

    const signIn = async () => {
      const q = query(
        collection(db, "stud_users"),
        where("rollNo", "==", value.username),
        where("password", "==", value.password)
      );
      const userDoc = await getDocs(q);

      const data1 = userDoc.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUserDetails(data1[0]);

      if (Object.keys(data1).length) {
        value.isLoggedIn = true;
        storeData();
        navigation.dispatch(StackActions.replace("HomeGroupStack"));
      } else {
        ToastAndroid.showWithGravity(
          "Invalid Username or Password",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    };

    signIn();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar barStyle={"dark-content"} backgroundColor={"grey"} />
      <View style={{ marginTop: -180 }}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/eduscribe-college.appspot.com/o/Logo%2FEduScribeLogo.PNG?alt=media&token=8493d693-f8fa-48a8-b908-b12753c73e91",
          }}
          style={{
            resizeMode: "cover",
            width: 260,
            height: 200,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Pacifico_400Regular",
            fontSize: 50,
            marginBottom: 25,
          }}
        >
          Welcome
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  inputContainer: {
    width: "80%",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#2a2c41",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
