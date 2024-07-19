import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { deleteObject, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../firebase";
import * as DocumentPicker from "expo-document-picker";
import { AppContext } from "../../../context/AppContext";
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteField,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const AssignmentDisplayDetails = (routes) => {
  const { data, subjectData, docId } = routes.route.params;
  // const [Data, setData] = useState();
  const context = useContext(AppContext);
  const courseClass = context.userDetails.studyYear;
  const subject = Object.keys(subjectData).toString();
  const [isUploaded, setIsUploaded] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const d = new Date();
  const todayDate =
    d.getDate().toString().padStart(2, 0) +
    "/" +
    d.getMonth().toString().padStart(2, 0) +
    "/" +
    d.getFullYear();
  const todayDate1 = todayDate[0] + todayDate[1];
  const dueDate1 = data.duedate[0] + data.duedate[1];

  const dueDate =
    data.duedate[0] + data.duedate[1] - d.getDate().toString().padStart(2, 0);
  const dueMonth =
    data.duedate[3] + data.duedate[4] - d.getMonth().toString().padStart(2, 0);
  const dueYear =
    data.duedate[6] +
    data.duedate[7] +
    data.duedate[8] +
    data.duedate[9] -
    d.getFullYear();

  // const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    async function checkUpload() {
      try {
        const studentRef = doc(db, "assignments", "students");
        const docSnap = await getDoc(studentRef);
        if (docSnap.data()[subject]) {
          const test = docSnap.data()[subject][docId];
          setIsUploaded(test[context.userDetails.rollNo]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    checkUpload();
  }, []);

  const pickDocument = async () => {
    // Document Picker
    try {
      const result = (await DocumentPicker.getDocumentAsync({})).assets[0];
      setSelectedFile(result);
      const uri = result.uri;
      const fileName = result.name;
      if (uri) {
        await uploadDocumentToFirebase(uri, fileName); // Upload to Firebase
      } else {
        console.log("File selection cancelled");
      }
    } catch (error) {
      console.log("Error picking file:", error);
    }
  };

  const uploadDocumentToFirebase = async (uri, fileName) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob(); // Access the file's blob content

      // Build the storage reference path
      const storageRef = ref(
        storage,
        `assignments/${courseClass}/${subject}/${docId}/${fileName}`
      );

      // Upload the file to Firebase storage
      uploadBytes(storageRef, blob).then((snapshot) => {
        const assignmentDoc = doc(
          db,
          "assignments/" + "TYBCA/" + subject + "/" + docId
        );

        //student uploaded or not

        updateDoc(assignmentDoc, {
          submitted: arrayUnion(context.userDetails.rollNo),
        });

        //Student upload location
        const studentRef = doc(db, "assignments", "students");
        let studentUpdate = `${subject}.${docId}.${context.userDetails.rollNo}.location`;
        setIsUploaded({
          location: `assignments/${courseClass}/${subject}/${docId}/${fileName}`,
          fileName: fileName,
        });

        updateDoc(studentRef, {
          [studentUpdate]: `assignments/${courseClass}/${subject}/${docId}/${fileName}`,
        });

        studentUpdate = `${subject}.${docId}.${context.userDetails.rollNo}.fileName`;
        updateDoc(studentRef, {
          [studentUpdate]: fileName,
        });

        studentUpdate = `${subject}.${docId}.${context.userDetails.rollNo}.timestamp`;
        updateDoc(studentRef, {
          [studentUpdate]: serverTimestamp(),
        });
      });
    } catch (error) {
      console.error("Error uploading document:", error.message);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };

  function deleteData() {
    try {
      const studentRef = doc(db, "assignments", "students");
      const studentDelete = `${subject}.${docId}.${context.userDetails.rollNo}`;
      updateDoc(studentRef, {
        [studentDelete]: deleteField(),
      });

      console.log(isUploaded.location);
      const fileRef = ref(storage, isUploaded.location);
      deleteObject(fileRef);

      const assignmentDoc = doc(
        db,
        "assignments/" + "TYBCA/" + subject + "/" + docId
      );

      updateDoc(assignmentDoc, {
        submitted: arrayRemove(context.userDetails.rollNo),
      });

      setIsUploaded("");
    } catch (error) {
      console.log("Error" + error);
    }
  }

  function DisplayButton() {
    return (
      <View>
        {isUploaded ? (
          <View>
            <View
              style={{ alignItems: "center", marginTop: 15, marginBottom: 8 }}
            >
              <Text
                style={[styles.textColor, { fontSize: 18 }]}
                numberOfLines={1}
              >
                File : {isUploaded.fileName}
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "red" }]}
                onPress={() => deleteData()}
              >
                <Text style={{ fontSize: 16 }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity
            style={[styles.button, { marginTop: 30 }]}
            onPress={() => pickDocument()}
          >
            <Text style={{ fontSize: 16 }}>Upload</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topCard}>
        <Text style={[styles.textColor, { fontSize: 32, fontWeight: "600" }]}>
          <Text> {data.Assignment}</Text>
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.description}>
          <Text
            style={[styles.textColor, { fontSize: 20, textAlign: "center" }]}
          >
            <Text>Description : </Text>
            <Text>{data.description} </Text>
          </Text>
        </View>
      </View>
      <View style={styles.bottomTab}>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={[styles.textColor, { fontSize: 16 }]}>
            Due Date: {data.duedate}
          </Text>
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => pickDocument()}
          >
            <Text style={{ fontSize: 16 }}>Upload</Text>
          </TouchableOpacity> */}
          <DisplayButton />
        </View>
      </View>
    </View>
  );
};

export default AssignmentDisplayDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
  topCard: {
    width: "100%",
    height: 200,
    backgroundColor: "black",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textColor: {
    color: "white",
  },
  description: {
    alignItems: "center",
    marginTop: 20,
    width: "80%",
  },
  bottomTab: {
    width: "100%",
    height: 150,
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  button: {
    backgroundColor: "white",
    width: 180,
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
