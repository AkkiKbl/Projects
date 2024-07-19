import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { listAll, ref } from "firebase/storage";
import { storage } from "../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const UnitListScreen = (classRoute) => {
  const filePath = classRoute.route.params;
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  let data1 = [];
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
            data1.push(folderRef.name);
          });
          res.items.forEach((itemRef) => {
            // All the items under listRef.
          });

          setData(data1);
        })

        .catch((error) => {
          // Uh-oh, an error occurred!
        });
    };
    fetchData();
  }, []);

  function navigateScreen(path) {
    const fileUri = filePath + "/" + path;
    navigation.navigate("DownloadListScreen", fileUri);
  }

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
          Units
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.line} />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.buttonView}
              onPress={() => navigateScreen(item)}
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

export default UnitListScreen;

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
