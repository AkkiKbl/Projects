import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { SelectList } from "react-native-dropdown-select-list";

const FeedbackSection2 = () => {
  const [feedbackItem, setFeedbackItem] = useState({
    key: "1",
    value: "College",
  });
  const [message, setMessage] = useState("");

  const addToFirebase = async (feedbackItem, message) => {
    await addDoc(collection(db, "feedback"), {
      field: feedbackItem.value,
      message: message,
    });
    ToastAndroid.showWithGravity(
      "Submitted",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    setMessage("");
  };

  const data = [
    { key: "1", value: "College" },
    { key: "2", value: "Teacher" },
    { key: "3", value: "Canteen" },
  ];

  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <SelectList
          defaultOption={{ key: "1", value: "College" }}
          search={false}
          setSelected={(val) => {
            setFeedbackItem(data[val - 1]);
          }}
          data={data}
          boxStyles={{ width: 300, backgroundColor: "white" }}
          dropdownStyles={{ backgroundColor: "white" }}
        />
      </View>
      <View>
        <Text style={[styles.textColor, styles.message]}>Message :</Text>
        <TextInput
          value={message}
          multiline
          textAlignVertical="top"
          numberOfLines={10}
          placeholder="Type Here..."
          style={styles.input}
          onChangeText={(text) => setMessage(text)}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => addToFirebase(feedbackItem, message)}
        >
          <Text style={[styles.textColor, { fontSize: 18 }]}> Submit! </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedbackSection2;

const styles = StyleSheet.create({
  container: {
    color: "white",
  },
  selectDropdown: {
    borderRadius: 5,
    backgroundColor: "black",
    color: "white",
  },
  selectOption: {
    alignItems: "center",
    marginTop: 20,
  },
  textColor: {
    color: "white",
  },
  message: {
    marginTop: 25,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "white",
    paddingLeft: 20,
    paddingTop: 20,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    backgroundColor: "black",
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
  },
});
