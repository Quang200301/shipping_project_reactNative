import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";

export default function Message() {
  const [data, setData] = useState([
    {
      id: 1,
      image: require("../../assets/images/Klein.png"),
      name: "Ao",
      Notification: "Ho Thi Tai",
      Hour: "12:00",
    },
    {
      id: 2,
      image: require("../../assets/images/Klein.png"),
      name: "Ao",
      Notification: "Ho Thi Tai",
      Hour: "12:00",
    },
    {
      id: 3,
      name: "Quan",
      image: require("../../assets/images/Koch.png"),
      Notification: "Ho Thi Tai",
      Hour: "12:00",
    },
    {
      id: 4,
      name: "Vest",
      image: require("../../assets/images/Photo_Profile.png"),
      Notification: "Ho Thi Tai",
      Hour: "12:00",
    },
    {
      id: 5,
      name: "Vest",
      image: require("../../assets/images/Photo_Profile.png"),
      Notification: "Ho Thi Tai",
      Hour: "12:00",
    },
  ]);
  const [isLoading, setLoading] = useState(true);
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.notificationText}>{item.Notification}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.hourText}>{item.Hour}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor:"black",width:'100%',height:'100%'}}>
      <View> 
        <Text style={styles.chatText}> Chat</Text>
      </View>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => `key-${item.id}`}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  chatText:{
    marginTop:40,
    fontSize:40,
  },
  list: {
    marginTop: 20,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    top: 10,
    backgroundColor:'yellow',
    marginTop:30,
    borderRadius:10
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 24,
  },
  notificationText: {
    fontSize: 20,
  },
  timeContainer: {
    marginLeft: 10,
  },
  hourText: {
    fontSize: 20,
    top: -10,
    marginLeft: 40,
    marginRight: 90,
  },
});
