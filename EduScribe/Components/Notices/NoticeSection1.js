import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { storage } from "../../firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useNavigation } from "@react-navigation/native";

const NoticeSection1 = ({ value }) => {
  const navigation = useNavigation();
  let count = 1;
  const filePath = `Notices/${value}`;

  const listRef = ref(storage, filePath);
  const [data, setData] = useState([]);
  const [state, setstate] = useState(false);

  useEffect(() => {
    let test = [];
    const fetchData = async () => {
      await listAll(listRef).then((res) => {
        res.items.forEach((itemRef) => {
          // All the items under listRef.
          downloadFunction(itemRef.name);
        });
      });
    };
    fetchData();

    function downloadFunction(item) {
      getDownloadURL(ref(storage, filePath + "/" + item)).then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        test = { id: count++, url: url };
        // setData((oldarray) => [...oldarray, test]);
        setData((oldArray) => [...oldArray, test]);
        setstate(!state);
      });
    }
  }, []);

  function imageView(item) {
    navigation.navigate("ImageView", item);
  }

  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ color: "white", fontSize: 28, fontWeight: "600" }}>
          {value}
        </Text>
        <View style={styles.line} />
        <FlatList
          data={data}
          extraData={state}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity onPress={() => imageView(item)}>
                <Image
                  style={{
                    width: 300,
                    height: 200,
                    marginTop: 20,
                  }}
                  source={{
                    uri: item.url,
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default NoticeSection1;

const styles = StyleSheet.create({
  line: {
    width: 200,
    height: 1,
    backgroundColor: "white",
    marginBottom: 20,
  },
});
