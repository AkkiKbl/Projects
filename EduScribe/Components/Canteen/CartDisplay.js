import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { DataTable } from "react-native-paper";
import RNUpiPayment from "react-native-upi-payment";
import { db } from "../../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { AppContext } from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const CartDisplay = (routes) => {
  const user = useContext(AppContext).userDetails;
  const cart = routes.route.params;
  const navigation = useNavigation();
  const randomChar = (Math.random() + 1).toString(36).substring(3);

  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  const onPay = async () => {
    await RNUpiPayment.initializePayment(
      {
        vpa: "agneld38@indianbk", // or can be john@ybl or mobileNo@upi
        payeeName: "College Canteen",
        amount: 1,
        transactionRef: randomChar,
      },
      successCallback,
      failureCallback
    );
  };

  function successCallback(data) {
    // do whatever with the data
    let saveData = [];

    cart.forEach((item) => {
      saveData.push({
        foodItem: item.foodItem,
        price: item.price,
        quantity: item.quantity,
      });
    });

    const sentData = {
      name: user.firstName + " " + user.lastName,
      rollNo: user.rollNo,
      stream: user.stream,
      semester: user.semester,
      ordered: saveData,
      totalPrice: totalPrice,
      transaction_id: data.txnRef,
      timestamp: serverTimestamp(),
    };
    const sendData = async () => {
      await setDoc(doc(db, "canteen", randomChar), sentData);
    };
    sendData();

    const transactionId = data.txnRef;

    navigation.navigate("BillScreen", {
      saveData: saveData,
      transactionId: transactionId,
      totalPrice: totalPrice,
    });
  }

  function failureCallback(data) {
    // do whatever with the data
    Alert.alert("Canteen", "UPI Payment Failed", [
      {
        text: "OK",
        style: "cancel",
      },
    ]);
  }

  return (
    <View>
      <View style={{ alignItems: "center", marginBottom: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 40, fontWeight: "600" }}>Cart</Text>
        <View style={styles.line} />
      </View>
      {Object.keys(cart).length ? (
        <View>
          <View style={{ justifyContent: "space-around" }}>
            <DataTable>
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
            </DataTable>

            <FlatList
              data={cart}
              keyExtractor={(item) => item.id}
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
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text>Total </Text>
            <Text>{totalPrice}</Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 100 }}>
            <TouchableOpacity style={styles.button} onPress={() => onPay()}>
              <Text style={{ color: "white" }}>Place Order</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text>Note: Only UPI payments are accepted</Text>
          </View>
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          <Text>Your cart is empty</Text>
        </View>
      )}
    </View>
  );
};

export default CartDisplay;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  line: {
    backgroundColor: "black",
    width: "70%",
    height: 2,
    marginTop: 5,
  },
});
