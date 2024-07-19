import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { DataTable } from "react-native-paper";

const BillScreen = (routes) => {
  const [data, setdata] = useState([]);
  const { saveData, transactionId, totalPrice } = routes.route.params;

  // useEffect(() => {
  //   console.log(saveData[0].foodItem);
  // }, []);

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(
        collection(db, "canteen", "TYBCA", "B-21-1320")
      );
      const data1 = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setdata(data1);
    };

    getData();
  }, []);

  return (
    <View>
      <View>
        <View style={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 42,
              fontWeight: "600",
            }}
          >
            Bill
          </Text>
        </View>

        <DataTable.Row>
          <DataTable.Title style={{ justifyContent: "center" }}>
            Item
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            Quanity
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center" }}>
            Price
          </DataTable.Title>
        </DataTable.Row>

        <FlatList
          data={saveData}
          renderItem={({ item }) => (
            <View>
              <DataTable>
                <DataTable.Row>
                  <DataTable.Cell style={{ justifyContent: "center" }}>
                    {item.foodItem}
                  </DataTable.Cell>
                  <DataTable.Cell style={{ justifyContent: "center" }}>
                    {item.quantity}
                  </DataTable.Cell>
                  <DataTable.Cell style={{ justifyContent: "center" }}>
                    {item.price}
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
          )}
        />

        <View style={{ alignItems: "center" }}>
          <Text style={{ paddingVertical: 5 }}>Paid : Rs.{totalPrice}</Text>
          <Text>Reference ID: {transactionId}</Text>
        </View>
      </View>
    </View>
  );
};

export default BillScreen;
