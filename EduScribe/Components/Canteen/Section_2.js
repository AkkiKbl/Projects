import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Touchable,
} from "react-native";
import React, { useEffect, useState } from "react";
// import Canteen_menu from "./Canteen_Menu/Canteen_menu";

const Section_2 = () => {
  const [data, setData] = useState([]);
  const [isMeal, setIsMeal] = useState(true);
  const [isSnacks, setIsSnacks] = useState(true);
  const [isDrinks, setisDrinks] = useState(true);
  const tempHighlight = {
    meal: false,
    snacks: false,
    drinks: false,
  };
  const [highlight, setHighlight] = useState(tempHighlight);

  function changeState(item) {
    if (isMeal == true && isSnacks == true && isDrinks == true) {
      if (item == "meal") {
        setIsMeal(true);
        setIsSnacks(false);
        setisDrinks(false);
      } else if (item == "snacks") {
        setIsMeal(false);
        setIsSnacks(true);
        setisDrinks(false);
      } else {
        setIsMeal(false);
        setIsSnacks(false);
        setisDrinks(true);
      }
    } else {
      setIsMeal(true);
      setIsSnacks(true);
      setisDrinks(true);
    }

    if (isMeal == false || isSnacks == false || isDrinks == false) {
      tempHighlight.meal = false;
      tempHighlight.snacks = false;
      tempHighlight.drinks = false;
      setHighlight(tempHighlight);
    } else {
      tempHighlight[item] = true;
      setHighlight(tempHighlight);
    }
  }

  useEffect(() => {
    setData({
      meal: isMeal,
      snacks: isSnacks,
      drinks: isDrinks,
    });
  }, [isMeal, isSnacks, isDrinks]);
  return (
    <View>
      {/* Filter buttons */}

      <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
        {/* meal button */}
        {highlight.meal ? (
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: "white" }]}
            onPress={() => changeState("meal")}
          >
            <Text style={{ color: "black" }}>Meal</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => changeState("meal")}
          >
            <Text style={{ color: "white" }}>Meal</Text>
          </TouchableOpacity>
        )}

        {/* Snacks Button */}

        {highlight.snacks ? (
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: "white" }]}
            onPress={() => changeState("snacks")}
          >
            <Text style={{ color: "black" }}>Snacks</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => changeState("snacks")}
          >
            <Text style={{ color: "white" }}>Snacks</Text>
          </TouchableOpacity>
        )}

        {highlight.drinks ? (
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: "white" }]}
            onPress={() => changeState("drinks")}
          >
            <Text style={{ color: "black" }}>Drinks</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => changeState("drinks")}
          >
            <Text style={{ color: "white" }}>Drinks</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Veg/NonVeg Switch Buttons */}
      {/* <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.switchContainer,
              { backgroundColor: Veg ? "green" : "#222" },
            ]}
            onPress={() => setVeg(!Veg)}
          >
            <View
              style={[
                styles.circle,
                { transform: [{ translateX: Veg ? 30 : 0 }] },
              ]}
            />
          </TouchableOpacity>
          <Text style={styles.switchText}>Veg</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.switchContainer,
              { backgroundColor: NonVeg ? "green" : "#222" },
            ]}
            onPress={() => setNonVeg(!NonVeg)}
          >
            <View
              style={[
                styles.circle,
                { transform: [{ translateX: NonVeg ? 30 : 0 }] },
              ]}
            />
          </TouchableOpacity>
          <Text style={styles.switchText}>Non-Veg</Text>
        </View>
      </View> */}
      {/* <Canteen_menu value={data} /> */}
    </View>
  );
};

export default Section_2;

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#171717",
    width: "25%",
    height: 32,
    borderRadius: 40,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  switchText: {
    color: "white",
    marginRight: 15,
    marginTop: 18,
    marginLeft: 10,
    fontSize: 16,
  },
  switchButtons: {
    marginTop: 5,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  switchContainer: {
    backgroundColor: "black",
    borderRadius: 40,
    width: 60,
    height: 28,
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 20,
  },
  circle: {
    backgroundColor: "white",
    width: 30,
    height: 30,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

//    {/* Switch Buttons */}
//    <View style={styles.switchButtons}>
//    <Switch
//      value={Veg}
//      onValueChange={() => setVeg((previousState) => !previousState)}
//    />
//    <Text style={styles.switchText}>Veg</Text>
//    <Switch
//      value={NonVeg}
//      onValueChange={() => setNonVeg((previousState) => !previousState)}
//    />
//    <Text style={styles.switchText}>Non-Veg</Text>
//  </View>
