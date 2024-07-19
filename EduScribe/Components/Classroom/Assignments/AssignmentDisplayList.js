import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";

const AssignmentDisplay = (routes) => {
  const { filePath, assignData } = routes.route.params;
  // console.log(assignData);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        collection(db, "assignments/" + filePath)
      );
      setData([]);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.data());
        setData((oldObject) => [...oldObject, doc.data()]);
        temp.push({ [doc.id]: doc.data() });
        // console.log(doc.id);
      });
    };

    fetchData();
  }, []);
  function navigateToDisplayAssignment(item) {
    // console.log(temp);

    const doc_id = checkData(item);
    // console.log(doc_id);
    navigation.navigate("AssignmentDisplayDetails", {
      data: item,
      subjectData: assignData,
      docId: doc_id,
    });
  }

  function checkData(item) {
    // console.log(item);
    for (let i = 0; i < temp.length; i++)
      for (const [key, value] of Object.entries(temp[i])) {
        if (
          value.Assignment == item.Assignment &&
          value.description == item.description
        ) {
          return key;
        }
      }
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Text style={[styles.textColor, { fontSize: 36, fontWeight: "bold" }]}>
          Assignments
        </Text>
        <View style={styles.line} />
      </View>

      <FlatList
        data={data}
        extraData={data}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigateToDisplayAssignment(item)}
            >
              <View style={{ marginLeft: 30, marginTop: 14 }}>
                <Text
                  style={[
                    styles.textColor,
                    { fontSize: 34, fontWeight: "600", width: "85%" },
                  ]}
                  numberOfLines={1}
                >
                  {item.Assignment}
                </Text>
                <Text
                  style={[styles.textColor, { width: "85%", marginTop: 5 }]}
                  numberOfLines={1}
                >
                  Description: {item.description}
                </Text>
                <Text style={styles.textColor}>Due Date : {item.duedate}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default AssignmentDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
  textColor: {
    color: "white",
  },
  button: {
    backgroundColor: "black",
    width: "85%",
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
  },
  line: {
    width: "70%",
    height: 1,
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 20,
  },
});
