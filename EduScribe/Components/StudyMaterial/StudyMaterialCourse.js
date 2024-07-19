import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { storage } from "../../firebase";
import { ref, listAll } from "firebase/storage";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const StudyMaterialList = (routes) => {
  const navigation = useNavigation();
  const fileUrl = routes.route.params;

  const listRef = ref(storage, `gs://eduscribe-college.appspot.com/${fileUrl}`);
  let data = [];
  const [folders, setFolders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await listAll(listRef)
        .then((res) => {
          res.prefixes.forEach((folderRef) => {
            data.push(folderRef.name);

            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
          });
          res.items.forEach((itemRef) => {
            // All the items under listRef.
          });
        })

        .catch((error) => {
          // Uh-oh, an error occurred!
        });
      setFolders(data);
    };
    fetchData();
  }, []);

  function navigateScreen(course) {
    const filePath = fileUrl + "/" + course;
    navigation.navigate("UnitListScreen", filePath);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <Text style={{ color: "white" }}>/{fileUrl}</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={[
            styles.textColor,
            { fontSize: 30, fontWeight: "600", marginTop: 20 },
          ]}
        >
          Subjects
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.line} />
      </View>
      <View>
        <FlatList
          data={folders}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity onPress={() => navigateScreen(item)}>
                <View style={styles.button}>
                  <Text style={styles.textColor}>{item}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default StudyMaterialList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
  textColor: {
    color: "white",
    fontWeight: "700",
    fontSize: 24,
  },
  button: {
    backgroundColor: "black",
    height: 60,
    width: 240,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  line: {
    backgroundColor: "white",
    width: 180,
    height: 1,
    marginBottom: 10,
  },
});
