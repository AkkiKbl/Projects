import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { SafeAreaView } from "react-native-safe-area-context";

const DownloadListScreen = (file) => {
  const filePath = file.route.params;
  const [downloadList, setdownloadList] = useState([]);
  let data = [];

  const listRef = ref(
    storage,
    `gs://eduscribe-college.appspot.com/${filePath}`
  );

  //Fetch List Files
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
            data.push(itemRef.name);
          });
          setdownloadList(data);
        })

        .catch((error) => {
          // Uh-oh, an error occurred!
        });
    };
    fetchData();
  }, []);
  // const fileUri =
  //   FileSystem.documentDirectory + "Addressing mode and format.ppt";
  // const fileName = "Addressing mode and format.ppt";

  //Download File
  const downloadFunction = (fileName) => {
    getDownloadURL(ref(storage, filePath + "/" + fileName))
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        Linking.openURL(url);

        // const result = FileSystem.downloadAsync(url, fileUri);

        // This can be downloaded directly:
        // const xhr = new XMLHttpRequest();
        // xhr.responseType = "blob";
        // xhr.onload = (event) => {
        //   const blob = xhr.response;
        // };
        // xhr.open("GET", url);
        // xhr.send();

        // Or inserted into an <img> element
        // const img = document.getElementById("myimg");
        // img.setAttribute("src", url);
      })
      .catch((error) => {
        // Handle any errors
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <Text style={{ color: "white" }}>/{filePath}</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={[
            styles.textColor,
            { fontSize: 30, fontWeight: "600", marginTop: 20 },
          ]}
        >
          Files
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.line} />
      </View>
      <FlatList
        data={downloadList}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.buttonView}
              onPress={() => downloadFunction(item)}
            >
              <View style={styles.button}>
                <Text
                  style={[
                    styles.textColor,
                    { fontWeight: "500", fontSize: 16 },
                  ]}
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default DownloadListScreen;

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
    width: 180,
    height: 1,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "black",
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
  },
});
