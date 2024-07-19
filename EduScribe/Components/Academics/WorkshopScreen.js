import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";

const WorkshopScreen = () => {
  const [data, setData] = useState([]);
  const [state, setstate] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const docRef = collection(db, "workshops");
      const docSnap = await getDocs(docRef);
      docSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setData((prevData) => [...prevData, doc.data()]);
        setstate(doc.data());
      });
    };
    getData();
  }, []);

  //   useEffect(() => {
  //     console.log(data);
  //   }, [state]);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.textColor,
          { fontSize: 45, fontWeight: "bold", marginTop: 20 },
        ]}
      >
        Workshops
      </Text>
      <View style={styles.line} />
      <FlatList
        data={data}
        style={{ width: "80%" }}
        extraData={state}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={[styles.textColor, styles.cardHeading]}>
              {item.headline}
            </Text>
            <View style={styles.line} />
            <Text style={[styles.textColor, styles.cardText]}>
              {item.details}
            </Text>
            <Text
              style={[
                styles.textColor,
                styles.cardText,
                { fontWeight: "bold", marginTop: 5, fontSize: 16 },
              ]}
            >
              Teacher Incharge: {item.inCharge}
            </Text>
            <Text
              style={[
                styles.textColor,
                styles.cardText,
                { fontWeight: "bold", marginTop: 5, fontSize: 16 },
              ]}
            >
              facilitator: {item.facilitator}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default WorkshopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
    alignItems: "center",
  },
  card: {
    flexShrink: 1,
    marginTop: 20,
    backgroundColor: "#171717",
    padding: 20,
    borderRadius: 10,
  },
  textColor: {
    color: "white",
  },
  cardText: {
    marginLeft: 20,
    fontSize: 15,
  },
  cardHeading: {
    fontSize: 26,
    marginLeft: 20,
    fontWeight: "bold",
  },
  line: {
    height: 1,
    width: "80%",
    backgroundColor: "white",
    marginLeft: 20,
    marginVertical: 5,
  },
});
