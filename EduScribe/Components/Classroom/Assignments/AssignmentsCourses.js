import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../../context/AppContext";

const AssignmentsCourses = () => {
  const context = useContext(AppContext);
  const courseClass = context.userDetails.studyYear;
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "assignments", "courses");

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data()[courseClass]);
      } else {
        console.log("No such document!");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    for (const [key, value] of Object.entries(data)) {
      subjects.push(key);
    }
  }, [data]);

  function navigateToAssignment(item) {
    const path = courseClass + "/" + item;
    let assignData = [];
    for (const [key, value] of Object.entries(data)) {
      if (key == item) {
        assignData = { [key]: value };
      }
    }

    navigation.navigate("AssignmentDisplayList", {
      filePath: path,
      assignData: assignData,
    });
  }

  function DisplayTeacherIncharge(item) {
    let data = [];
    item.forEach((element, index) => {
      if (item.length - 1 == index) {
        data += element;
      } else {
        data += element + ",";
      }
    });
    return data;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#474747"} />
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Text style={[styles.textColor, { fontSize: 36, fontWeight: "bold" }]}>
          Courses
        </Text>
        <View style={styles.line} />
      </View>
      {Object.keys(data).length ? (
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={subjects}
            extraData={subjects}
            renderItem={({ item }) => (
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigateToAssignment(item)}
                >
                  <Text
                    style={[
                      styles.textColor,
                      { fontSize: 40, fontWeight: "600", marginTop: 20 },
                    ]}
                  >
                    {data[item].subject}
                  </Text>
                  <Text style={[styles.textColor, { marginTop: 5 }]}>
                    In Charge : {DisplayTeacherIncharge(data[item].teacher)}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textColor}>Nothing To show</Text>
        </View>
      )}
    </View>
  );
};

export default AssignmentsCourses;

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
    alignItems: "center",
  },
  line: {
    width: "70%",
    height: 1,
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 20,
  },
});
