import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { storage } from "../../../firebase";
import { listAll, ref } from "@firebase/storage";
import { useNavigation } from "@react-navigation/core";

const TimeTableClass = () => {
  const navigation = useNavigation();

  const filePath = "Timetable/";
  const listRef = ref(
    storage,
    `gs://eduscribe-college.appspot.com/${filePath}`
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await listAll(listRef).then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
          // data.push(folderRef.name);
          setData((oldObject) => [...oldObject, folderRef.name]);
          console.log(folderRef.name);
        });
      });
    };
    fetchData();
  }, []);

  function navigateToResult(item) {
    const path = filePath + item;
    navigation.navigate("TimeTableDownload", path);
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 30, marginBottom: 20 }}>
        <Text style={[styles.textColor, { fontSize: 32, fontWeight: "600" }]}>
          Class
        </Text>
        <View style={styles.line} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        extraData={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateToResult(item)}
          >
            <Text style={styles.textColor}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TimeTableClass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
    alignItems: "center",
  },
  textColor: {
    color: "white",
  },
  line: {
    backgroundColor: "white",
    width: 200,
    height: 1,
  },
  button: {
    backgroundColor: "black",
    width: 290,
    height: 70,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
