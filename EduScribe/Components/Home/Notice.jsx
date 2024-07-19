import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Notice = () => {
  const [notices, setNotices] = useState([]);


  useEffect(() => {
    const getNotices = async () => {
      const querySnapshot = await getDocs(collection(db, "notices"));

      const data1 = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotices(data1);
    };

    getNotices();
  }, []);

  return (
    <View>
      <View style={{ marginLeft: 20 }}>
        <Text style={styles.titleText}>Notices</Text>
        <View style={styles.line} />
      </View>
      <View style={{ marginTop: 20, flex: 1, alignContent: "space-around" }}>
        <FlatList
          style={{ paddingStart: 10, flex: 1, alignContent: "space-around" }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={notices}
          renderItem={({ item }) => <Text style={styles.cards}>{item.notice}</Text>}
        />
      </View>
    </View>

  );
};

export default Notice;

const styles = StyleSheet.create({
  titleText: {
    marginTop: 20,
    fontWeight: "500",
    fontSize: 20,
    color: "white",
  },
  cards: {
    width: 180,
    height: 130,
    marginRight: 20,
    backgroundColor: "#171717",
    color: "white",
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "500",
  },
  line: {
    marginTop: 4,
    width: 150,
    height: 1,
    backgroundColor: "white",
  },
});
