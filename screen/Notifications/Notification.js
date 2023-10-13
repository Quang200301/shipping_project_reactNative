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
        <View>
          <Text style={styles.textTile}>Notification</Text>
        </View>
        <View style={styles.itemframe}>
          <View style={styles.backgroundAd}>
            <View style={styles.image}>
              <Image
                source={require("../../assets/images/checkbox.png")}
                style={styles.image2}
              />
            </View>
            <View style={styles.voucherFrame}>
              <Text style={styles.voucherTitle}>
                Your order has been taken by {"\n"} the driver
              </Text>
              <Text style={styles.textbutton}>Recently</Text>
            </View>
          </View>
          <View style={styles.backgroundAd}>
            <View style={styles.image}>
              <Image
                source={require("../../assets/images/money.png")}
                style={styles.image2}
              />
            </View>
            <View style={styles.voucherFrame}>
              <Text style={styles.voucherTitle}>
                Your order has been taken by {"\n"} the driver
              </Text>
              <Text style={styles.textbutton}>10.00 Am</Text>
            </View>
          </View>
          <View style={styles.backgroundAd}>
            <View style={styles.image}>
              <Image
                source={require("../../assets/images/checkboxx.png")}
                style={styles.image2}
              />
            </View>
            <View style={styles.voucherFrame}>
              <Text style={styles.voucherTitle}>
                Your order has been taken by {"\n"} the driver
              </Text>
              <Text style={styles.textbutton}>22 Juny 2021</Text>
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
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  itemframe:{
    height:500,
    justifyContent:'flex-start',
    rowGap:20,
    padding:30,
  },

  backgroundAd: {
    height: 100,
    backgroundColor: "pink",
    padding: 5,
    flexDirection: "row",
    borderRadius: 20,
  },
  image: {
    width: "20%",
    justifyContent: "center",
    // backgroundColor: "black",
    alignItems: "center",
  },
  voucherFrame: {
    // backgroundColor: "red",
    width: "80%",
    marginBottom: 0,
  },
  voucherTitle: {
    color: "white",
    fontSize: 15,
    marginTop: 15,
  },
  voucherTitle2: {
    color: "#fff",
  },
  textbutton: {
    color: "grey",
  },
  //   textbutton2: {
  //     color: "#ffff",
  //     marginRight: 40,
  //     textAlign: "center",
  //     left: 20,
  //   },
  but: {
    fontSize: 50,
  },
});
