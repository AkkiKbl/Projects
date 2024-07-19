import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState("");
  let value = [];
  //Fetch Data from firestore
  useEffect(() => {
    const getData = async () => {
      const jsonValue = await AsyncStorage.getItem("user-pass");
      value = JSON.parse(jsonValue);

      if (value) {
        const fetchData = async () => {
          const q = query(
            collection(db, "stud_users"),
            where("rollNo", "==", value.username),
            where("password", "==", value.password)
          );
          const userDoc = await getDocs(q);

          const data1 = userDoc.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setUserDetails(data1[0]);
        };
        fetchData();
      }
    };
    getData();
  }, []);

  return (
    <AppContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
