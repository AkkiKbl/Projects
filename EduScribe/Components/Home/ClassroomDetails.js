import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Attendance from "./ClassroomDetails/Attendance";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase";
import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { AppContext } from "../../context/AppContext";

const ClassroomDetails = ({ user }) => {
  const navigation = useNavigation();
  const [Totalinternship, setTotalinternship] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [deadlines, setDeadlines] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  let totalAssignments = 0;

  // console.log(user);

  useEffect(() => {
    const getInternTotal = async () => {
      const querySnapshot = await getDocs(collection(db, "internships"));
      setTotalinternship(querySnapshot.size);
    };
    getInternTotal();
  }, []);

  let department = user.stream;

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "assignments", "courses");
      const docSnap = await getDoc(docRef);

      for (const [key, value] of Object.entries(
        docSnap.data()[user.studyYear]
      )) {
        subjects.push(key);
      }

      // Get data from every subject
      let subjectCount = 0;
      subjects.forEach((item) => {
        const fetchData = async (item) => {
          const subjectCollec = collection(db, "assignments", "TYBCA", item);

          const allSubjects = await getCountFromServer(subjectCollec);
          totalAssignments += allSubjects.data().count;

          setTotalCount(totalAssignments);

          const q = query(
            subjectCollec,
            where("submitted", "array-contains", user.rollNo)
          );

          let fetchCount = (await getCountFromServer(q)).data().count;
          subjectCount += fetchCount;
          // console.log(subjectCount);

          setCount(subjectCount);
        };
        fetchData(item);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    setDeadlines(totalCount - count);
  }, [count]);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.bcaText}>{department}</Text>
          <View style={styles.line} />
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* Card 1 */}
          <TouchableOpacity
            style={styles.card1}
            onPress={() => navigation.navigate("Internships")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "300",
                marginLeft: 15,
              }}
            >
              Internships:
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 32,
                marginLeft: 15,
                marginTop: 5,
                fontWeight: "700",
              }}
            >
              {Totalinternship}
            </Text>
          </TouchableOpacity>

          {/* Card2 */}

          <View style={styles.card2}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "300",
                marginBottom: 15,
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Attendance
            </Text>

            <View style={{ alignItems: "center" }}>
              <View style={styles.attendanceLine} />
            </View>
            <Attendance user={user} />
          </View>
        </View>

        {/* Card 3 */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.card3}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "300",
                marginLeft: 15,
              }}
            >
              Deadlines:
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 32,
                marginLeft: 15,
                marginTop: 5,
                fontWeight: "700",
              }}
            >
              {deadlines}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          {/* Card 4 */}

          <TouchableOpacity
            style={styles.card4}
            onPress={() => navigation.navigate("ClassroomGroupStack")}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "400",
                fontSize: 20,
              }}
            >
              Classroom
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ClassroomDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "90%",
    height: 450,
    borderRadius: 10,
    backgroundColor: "#171717",
  },
  bcaText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    paddingTop: 10,
  },
  line: {
    width: 150,
    height: 1,
    backgroundColor: "white",
    marginTop: 5,
    opacity: 0.6,
  },
  card1: {
    width: "45%",
    height: "75%",
    backgroundColor: "#424242",
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "center",
  },
  card2: {
    width: "42%",
    height: "163%",
    backgroundColor: "#424242",
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "column-reverse",
  },
  card3: {
    width: "45%",
    height: "75%",
    backgroundColor: "#424242",
    marginLeft: 20,
    borderRadius: 10,
    justifyContent: "center",
  },
  card4: {
    width: "65%",
    height: 50,
    backgroundColor: "#424242",
    justifyContent: "center",
    borderRadius: 25,
    marginBottom: "2%",
  },
  attendanceLine: {
    backgroundColor: "#222222",
    width: 100,
    height: 1,
    marginBottom: 5,
    opacity: 0.6,
  },
});
