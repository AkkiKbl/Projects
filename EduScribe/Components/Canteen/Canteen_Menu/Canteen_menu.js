import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Button,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import FoodItems from "../../../resources/CanteenMenu";

import { useNavigation } from "@react-navigation/native";
import Section_1 from "../Section_1";
import { Path, Svg } from "react-native-svg";
// import Section_2 from "../Section_2";

const Canteen_menu = (props) => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const navigation = useNavigation();

  //------------------------Menu Tags---------------------------------

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

  function MenuTags() {
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
      </View>
    );
  }

  //-----------------------------------End Of Menu Tag ---------------------------------------------

  // useEffect(() => {
  //   setselectType(props.value);
  //   // console.log(selectType);
  // }, [props.value]);

  let cart = [];

  //Store fetched Data
  useEffect(() => {
    //Meal
    FoodItems.Meal.forEach((item) => {
      data1.push({
        id: item.id,
        foodItem: item.foodItem,
        price: item.price,
        quantity: 0,
        isSelected: false,
        nonVeg: item.nonVeg,
        tag: item.tag,
        link: item.link,
      });
    });

    //Snacks
    FoodItems.Snacks.forEach((item) => {
      data2.push({
        id: item.id,
        foodItem: item.foodItem,
        price: item.price,
        quantity: 0,
        isSelected: false,
        nonVeg: item.nonVeg,
        tag: item.tag,
        link: item.link,
      });
    });

    //Drinks

    FoodItems.Drinks.forEach((item) => {
      data3.push({
        id: item.id,
        foodItem: item.foodItem,
        price: item.price,
        quantity: 0,
        isSelected: false,
        nonVeg: item.nonVeg,
        tag: item.tag,
        link: item.link,
      });
    });

    //Extras

    FoodItems.Extras.forEach((item) => {
      data4.push({
        id: item.id,
        foodItem: item.foodItem,
        price: item.price,
        quantity: 0,
        isSelected: false,
        nonVeg: item.nonVeg,
        tag: item.tag,
        link: item.link,
      });
    });
  }, []);

  function navigateToPayment() {
    cart = [];
    data1.forEach((item) => {
      if (item.isSelected) cart.push(item);
    });
    data2.forEach((item) => {
      if (item.isSelected) cart.push(item);
    });
    data3.forEach((item) => {
      if (item.isSelected) cart.push(item);
    });
    data4.forEach((item) => {
      if (item.isSelected) cart.push(item);
    });
    // console.log(cart);

    navigation.navigate("CartScreen", cart);
  }

  //Re-Render List Function
  function reRender(tag) {
    if (tag === "Meal") {
      setData1((prevState) => {
        return [...prevState];
      });
    } else if (tag === "Snacks") {
      setData2((prevState) => {
        return [...prevState];
      });
    } else if (tag === "Drinks") {
      setData3((prevState) => {
        return [...prevState];
      });
    } else {
      setData4((prevState) => {
        return [...prevState];
      });
    }
  }

  //decrement quantity
  function decreQuantity(id, tag) {
    if (tag === "Meal") {
      data1.forEach((item) => {
        if (item.id === id) {
          if (item.quantity === 1) {
            item.isSelected = false;
          }
          item.quantity--;
        }
      });
    } else if (tag === "Snacks") {
      data2.forEach((item) => {
        if (item.id === id) {
          if (item.quantity === 1) {
            item.isSelected = false;
          }
          item.quantity--;
        }
      });
    } else if (tag === "Drinks") {
      data3.forEach((item) => {
        if (item.id === id) {
          if (item.quantity === 1) {
            item.isSelected = false;
          }
          item.quantity--;
        }
      });
    } else {
      data4.forEach((item) => {
        if (item.id === id) {
          if (item.quantity === 1) {
            item.isSelected = false;
          }
          item.quantity--;
        }
      });
    }
    //Re-Render List
    reRender(tag);
  }

  // increment quantity

  function increQuantity(id, tag) {
    if (tag === "Meal") {
      data1.forEach((item) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
    } else if (tag === "Snacks") {
      data2.forEach((item) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
    } else if (tag === "Drinks") {
      data3.forEach((item) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
    } else {
      data4.forEach((item) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
    }
    //Re-Render List
    reRender(tag);
  }

  //Create quantity
  function onClickAdd(id, tag) {
    if (tag === "Meal") {
      data1.forEach((item) => {
        if (item.id === id) {
          item.isSelected = true;
          item.quantity = 1;
        }
      });
    } else if (tag === "Snacks") {
      data2.forEach((item) => {
        if (item.id === id) {
          item.isSelected = true;
          item.quantity = 1;
        }
      });
    } else if (tag === "Drinks") {
      data3.forEach((item) => {
        if (item.id === id) {
          item.isSelected = true;
          item.quantity = 1;
        }
      });
    } else {
      data4.forEach((item) => {
        if (item.id === id) {
          item.isSelected = true;
          item.quantity = 1;
        }
      });
    }
    //Re-Render List
    reRender(tag);
  }

  //Meal Flatlist
  function RenderFlatlist1() {
    return (
      <View>
        {isMeal ? (
          <View>
            <View style={styles.titleText}>
              <Text style={styles.TextColor}>Meal</Text>
              <View style={styles.line} />
            </View>
            <View
              style={{
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <FlatList
                numColumns={"2"}
                scrollEnabled={false}
                keyExtractor={(item) => item.id}
                data={data1}
                extraData={data1}
                renderItem={({ item }) => (
                  <View>
                    <View style={styles.cards}>
                      <View>
                        {item.isSelected ? (
                          <TouchableOpacity style={styles.menuButton}>
                            <View
                              style={{
                                flexDirection: "row",
                              }}
                            >
                              <Text
                                style={styles.decreaseQuantity}
                                onPress={() => decreQuantity(item.id, item.tag)}
                              >
                                -
                              </Text>
                              <View style={styles.quantityView}>
                                <Text
                                  style={{
                                    fontSize: 18,
                                  }}
                                >
                                  {item.quantity}
                                </Text>
                              </View>
                              <Text
                                style={styles.increaseQuantity}
                                onPress={() => increQuantity(item.id, item.tag)}
                              >
                                +
                              </Text>
                            </View>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            style={styles.menuButton}
                            onPress={() => onClickAdd(item.id, item.tag)}
                          >
                            <Text style={styles.addButtonText}>Add</Text>
                          </TouchableOpacity>
                        )}
                      </View>
                      <Text style={styles.textColor}>Rs.{item.price}</Text>
                      <Text style={styles.textColor}>{item.foodItem}</Text>
                      <View style={styles.line} />
                      <Image
                        source={{
                          uri: item.link,
                        }}
                        style={{
                          width: 200,
                          height: 150,
                          resizeMode: "contain",
                        }}
                      />
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    );
  }

  //Snacks FlatList
  function RenderFlatlist2() {
    return (
      <View>
        {isSnacks ? (
          <View>
            <View style={styles.titleText}>
              <Text style={styles.TextColor}>Snacks</Text>
              <View style={styles.line} />
            </View>
            <View
              style={{
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <FlatList
                numColumns={"2"}
                scrollEnabled={false}
                keyExtractor={(item) => item.id}
                data={data2}
                extraData={data2}
                renderItem={({ item }) => (
                  <View style={styles.cards}>
                    <View>
                      {item.isSelected ? (
                        <View style={styles.menuButton}>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <Text
                              style={styles.decreaseQuantity}
                              onPress={() => decreQuantity(item.id, item.tag)}
                            >
                              -
                            </Text>
                            <View style={styles.quantityView}>
                              <Text
                                style={{
                                  fontSize: 18,
                                }}
                              >
                                {item.quantity}
                              </Text>
                            </View>
                            <Text
                              style={styles.increaseQuantity}
                              onPress={() => increQuantity(item.id, item.tag)}
                            >
                              +
                            </Text>
                          </View>
                        </View>
                      ) : (
                        <TouchableOpacity
                          style={styles.menuButton}
                          onPress={() => onClickAdd(item.id, item.tag)}
                        >
                          <Text style={styles.addButtonText}>Add</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                    <Text style={styles.textColor}>Rs.{item.price}</Text>
                    <Text style={styles.textColor}>{item.foodItem}</Text>

                    <View style={styles.line} />
                    {/* {console.log(item.link)} */}
                    {/* <Text style={styles.textColor}>{item.link}</Text> */}
                    <Image
                      source={{
                        uri: item.link,
                      }}
                      style={{ width: 200, height: 150, resizeMode: "contain" }}
                    />
                  </View>
                )}
              />
            </View>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    );
  }

  //Drinks FlatList
  function RenderFlatlist3() {
    return (
      <View>
        {isDrinks ? (
          <View>
            <View style={styles.titleText}>
              <Text style={styles.TextColor}>Drinks</Text>
              <View style={styles.line} />
            </View>
            <View
              style={{
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <FlatList
                numColumns={"2"}
                scrollEnabled={false}
                keyExtractor={(item) => item.id}
                data={data3}
                extraData={data3}
                renderItem={({ item }) => (
                  <View style={styles.cards}>
                    <View>
                      {item.isSelected ? (
                        <TouchableOpacity style={styles.menuButton}>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <Text
                              style={styles.decreaseQuantity}
                              onPress={() => decreQuantity(item.id, item.tag)}
                            >
                              -
                            </Text>
                            <View style={styles.quantityView}>
                              <Text
                                style={{
                                  fontSize: 18,
                                }}
                              >
                                {item.quantity}
                              </Text>
                            </View>
                            <Text
                              style={styles.increaseQuantity}
                              onPress={() => increQuantity(item.id, item.tag)}
                            >
                              +
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={styles.menuButton}
                          onPress={() => onClickAdd(item.id, item.tag)}
                        >
                          <Text style={styles.addButtonText}>Add</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                    <Text style={styles.textColor}>Rs.{item.price}</Text>
                    <Text style={styles.textColor}>{item.foodItem}</Text>
                    <View style={styles.line} />
                    <Image
                      source={{
                        uri: item.link,
                      }}
                      style={{ width: 200, height: 150, resizeMode: "contain" }}
                    />
                  </View>
                )}
              />
            </View>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    );
  }

  function RenderFlatlist4() {
    return (
      <View>
        <View style={styles.titleText}>
          <Text style={styles.TextColor}>Extras</Text>
          <View style={styles.line} />
        </View>
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <FlatList
            numColumns={"2"}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            data={data4}
            extraData={data4}
            renderItem={({ item }) => (
              <View style={styles.cards}>
                <View>
                  {item.isSelected ? (
                    <TouchableOpacity style={styles.menuButton}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Text
                          style={styles.decreaseQuantity}
                          onPress={() => decreQuantity(item.id, item.tag)}
                        >
                          -
                        </Text>
                        <View style={styles.quantityView}>
                          <Text
                            style={{
                              fontSize: 18,
                            }}
                          >
                            {item.quantity}
                          </Text>
                        </View>
                        <Text
                          style={styles.increaseQuantity}
                          onPress={() => increQuantity(item.id, item.tag)}
                        >
                          +
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.menuButton}
                      onPress={() => onClickAdd(item.id, item.tag)}
                    >
                      <Text style={styles.addButtonText}>Add</Text>
                    </TouchableOpacity>
                  )}
                </View>
                <Text style={styles.textColor}>Rs.{item.price}</Text>
                <Text style={styles.textColor}>{item.foodItem}</Text>
                <View style={styles.line} />
                <Image
                  source={{
                    uri: item.link,
                  }}
                  style={{ width: 200, height: 150, resizeMode: "contain" }}
                />
              </View>
            )}
          />
        </View>
      </View>
    );
  }

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Section_1 />
        <MenuTags />
        <RenderFlatlist1 />
        <RenderFlatlist2 />
        <RenderFlatlist3 />
        <RenderFlatlist4 />
      </ScrollView>

      {/* Cart Icon */}
      <View style={{ position: "absolute", bottom: 20, right: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 70,
            height: 70,
            borderRadius: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigateToPayment();
          }}
        >
          <Svg
            width="42px"
            height="200px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
              stroke="#000000"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
          {/* <Text style={{ color: "black", fontSize: 20 }}>Cart</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Canteen_menu;

const styles = StyleSheet.create({
  TextColor: {
    color: "white",
    fontSize: 25,
  },
  titleText: {
    marginTop: 20,
    marginLeft: 20,
  },
  cards: {
    backgroundColor: "black",
    width: 180,
    height: 260,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: "column-reverse",
    alignItems: "center",
    marginTop: 20,
    overflow: "hidden",
  },
  textColor: {
    color: "white",
    fontSize: 16,
  },
  addButtonText: {
    color: "black",
    fontWeight: "600",
  },
  menuButton: {
    backgroundColor: "white",
    width: 120,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  line: {
    backgroundColor: "white",
    width: "70%",
    height: 1,
    marginBottom: 5,
  },
  quantityView: {
    alignItems: "center",
    justifyContent: "center",
  },
  decreaseQuantity: {
    fontSize: 18,
    paddingRight: 20,
    paddingLeft: 20,
  },
  increaseQuantity: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttons: {
    backgroundColor: "#171717",
    width: "25%",
    height: 32,
    borderRadius: 40,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
