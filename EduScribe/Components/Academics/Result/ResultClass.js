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

const ResultScreen = () => {
  const navigation = useNavigation();

  const filePath = "RESULTS/";
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
        });
      });
    };
    fetchData();
  }, []);

  function navigateToResult(item) {
    const path = filePath + item;
    navigation.navigate("ResultDownload", path);
  }

  return (
    <View style={[styles.container, { alignItems: "center" }]}>
      <View style={{ marginTop: 50, marginBottom: 30, alignItems: "center" }}>
        <Text style={[styles.textColor, { fontSize: 32, fontWeight: "600" }]}>
          Class
        </Text>
        <View style={styles.line} />
      </View>
      <FlatList
        data={data}
        extraData={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateToResult(item)}
          >
            <Text style={[styles.textColor, { fontSize: 18 }]}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
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
    width: 200,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
