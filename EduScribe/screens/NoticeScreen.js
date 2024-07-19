import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NoticeSection1 from "../Components/Notices/NoticeSection1";
import { storage } from "../firebase";
import { listAll, ref } from "firebase/storage";

const NoticeScreen = () => {
  const [state, setState] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Create a reference under which you want to list
    const listRef = ref(storage, "/Notices");

    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // console.log(folderRef.name);
          data.push(folderRef.name);
          setState(!state);
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
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        extraData={state}
        renderItem={(item) => <NoticeSection1 value={item.item} />}
      />
    </SafeAreaView>
  );
};

export default NoticeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
});
