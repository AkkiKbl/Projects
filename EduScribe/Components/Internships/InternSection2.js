import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { AppContext } from "../../context/AppContext";

const InternSection2 = () => {
  const { userDetails, setUserDetails } = useContext(AppContext);
  const [Internship, setInternship] = useState([]);

  useEffect(() => {
    const getInternships = async () => {
      const querySnapshot = await getDocs(collection(db, "internships"));

      const data1 = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setInternship(data1);
    };

    getInternships();
  }, []);

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text style={[styles.textColor, styles.headingText]}>
          {userDetails.stream}
        </Text>
        <View style={styles.line} />
      </View>
      <View>
        <View style={{ alignItems: "center" }}>
          <FlatList
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            data={Internship}
            renderItem={({ item }) => (
              <View>
                <View style={styles.internshipCards}>
                  <View style={styles.detailSection}>
                    <Text style={[styles.textColor, styles.detailHeading]}>
                      Company :
                    </Text>
                    <Text style={[styles.textColor, styles.detailInfo]}>
                      {item.company}
                    </Text>
                  </View>
                  <View style={styles.detailSection}>
                    <Text style={[styles.textColor, styles.detailHeading]}>
                      Role :
                    </Text>
                    <Text style={[styles.textColor, styles.detailInfo]}>
                      {item.role}
                    </Text>
                  </View>
                  <View style={styles.detailSection}>
                    <Text style={[styles.textColor, styles.detailHeading]}>
                      Period :
                    </Text>
                    <Text style={[styles.textColor, styles.detailInfo]}>
                      {item.period} months
                    </Text>
                  </View>
                  <View style={styles.detailSection}>
                    <Text style={[styles.textColor, styles.detailHeading]}>
                      Teacher Incharge :
                    </Text>
                    <Text style={[styles.textColor, styles.detailInfo]}>
                      {item.inCharge}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default InternSection2;

const styles = StyleSheet.create({
  textColor: {
    color: "white",
  },
  headingText: {
    marginTop: 15,
    fontSize: 40,
    fontWeight: "600",
  },
  buttons: {
    backgroundColor: "black",
    width: "80%",
    height: 70,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    backgroundColor: "white",
    height: 1,
    width: "40%",
    marginBottom: 20,
  },
  internshipTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  internshipCards: {
    backgroundColor: "black",
    height: 170,
    maxWidth: 400,
    minWidth: 380,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "space-evenly",
  },
  detailInfo: {
    marginLeft: 10,
    fontSize: 20,
  },
  detailHeading: {
    fontSize: 20,
    fontWeight: "500",
  },
  detailSection: {
    flexDirection: "row",

    marginLeft: 20,
    alignItems: "center",
  },
});
