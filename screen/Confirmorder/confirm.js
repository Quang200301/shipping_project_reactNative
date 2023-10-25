import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Voucher() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/combackicon.png")}
          style={styles.image1}
        />
        <View>
          <Text style={styles.textTile}>Confirm Order</Text>
        </View>
        <View style={styles.itemframe}>
          <View style={styles.backgroundAd}>
            <View style={styles.voucherFrame}>

              <View style={styles.title}>
                <Text style={styles.deliver}>Deliver To</Text>
                <Text style={styles.deliver}>Edit</Text>
              </View>
              
              <Text style={styles.orderTitle}>
                4517 Washington Ave. Manchester, {"\n"} Kentucky 3245
              </Text>
            </View>
            <View style={styles.image}>
              <Image
                source={require("../../assets/images/locationIcon.png")}
                style={styles.image2}
              />
            </View>
          </View>
          <View style={styles.backgroundAd}>
            <View style={styles.image}>
              <Image
                source={require("../../assets/images/paypal.png")}
                style={styles.image2}
              />
            </View>
            <View style={styles.voucherFrame}>
              <Text style={styles.orderTitle}>2121 6352 8465 ****</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  textTile: {
    fontSize: 25,
    marginTop: 30,
    marginLeft: 30,
    marginBottom: 20,
  },
  itemframe: {
    backgroundColor: "yellow",
    height: 500,
    justifyContent: "flex-start",
    rowGap: 20,
  },
  title: {
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  backgroundAd: {
    height: 150,
    backgroundColor: "red",
    // borderWidth:3,
    shadowColor: "red",
    shadowOffset: {},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 5,
    flexDirection: "row",
    borderRadius: 20,
  },
  image: {
    width: "30%",
    justifyContent: "center",
    // backgroundColor: "black",
    alignItems: "center",
    backgroundColor: "white 78",
  },
  voucherFrame: {},
  orderTitle: {
    color: "black",
    fontSize: 15,
    marginTop: 30,
    marginLeft: 20,
  },
  voucherTitle2: {
    color: "#fff",
  },
  image1: {
    marginLeft: 20,
    marginBottom: -20,
  },
  textbutton: {
    color: "grey",
  },
  but: {
    fontSize: 50,
  },
});
