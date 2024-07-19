import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { storage } from "../../../firebase";
import { getDownloadURL, listAll, ref } from "@firebase/storage";

const TimeTableDownload = (routes) => {
  const filePath = routes.route.params;
  const [data, setData] = useState([]);
  console.log(filePath);

  const listRef = ref(
    storage,
    `gs://eduscribe-college.appspot.com/${filePath}`
  );

  useEffect(() => {
    const fetchData = async () => {
      await listAll(listRef)
        .then((res) => {
          res.prefixes.forEach((folderRef) => {
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
          });
          res.items.forEach((itemRef) => {
            // All the items under listRef.
            setData((oldObject) => [...oldObject, itemRef.name]);
          });
          setdownloadList(data);
        })

        .catch((error) => {
          // Uh-oh, an error occurred!
        });
    };
    fetchData();
  }, []);

  //Download File
  const downloadFunction = (fileName) => {
    getDownloadURL(ref(storage, filePath + "/" + fileName))
      .then((url) => {
        Linking.openURL(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 30, marginBottom: 20 }}>
        <Text style={[styles.textColor, { fontSize: 32, fontWeight: "600" }]}>
          TimeTable
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
            onPress={() => downloadFunction(item)}
          >
            <Text style={styles.textColor}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TimeTableDownload;

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
