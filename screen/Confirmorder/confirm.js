import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
// import { Button } from "@rneui/themed";

const TotalPayment = () => (
  <View style={styles.totalPayment}>
    <View style={styles.detailInvoid}>
      <Text style={styles.TextInvoice}> Sub - Total</Text>
      <Text style={styles.TextInvoice}> 30 $</Text>
    </View>

    <View style={styles.detailInvoid}>
      <Text style={styles.TextInvoice}> Delivery Charge</Text>
      <Text style={styles.TextInvoice}> 10 $</Text>
    </View>

    <View style={styles.detailInvoid}>
      <Text style={styles.TextInvoice}> Discount</Text>
      <Text style={styles.TextInvoice}> 20 $</Text>
    </View>
    <View style={[styles.detailInvoid, { fontSize: 17, marginTop: 15 }]}>
      <Text style={[styles.TextInvoice, { fontSize: 18 }]}> Total</Text>
      <Text style={[styles.TextInvoice, { fontSize: 18 }]}>100 $</Text>
    </View>
    <View style={{ width: "100%", height: "40%" }}>
      <Button
        title="Place my Order"
        containerStyle={{
          width: "93%",
          height: "70%",
          alignSelf: "center",
          elevation: 4,
          marginTop: 50,
        }}
        buttonStyle={{
          height: "100%",
          backgroundColor: "#FEFEFF",
          borderRadius: 15,
        }}
        titleStyle={{ color: "#6B50F6", fontSize: 14 }}
      />
    </View>
  </View>
);

export default function Voucher() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Header */}
        <View
          style={[
            styles.header,
            { height: "10%", width: "100%",  },
          ]}
        >
          <Image
            source={require("../../assets/images/combackicon.png")}
            style={[styles.image1]}
          />
          <View>
            <Text style={styles.textTile}>Confirm Order</Text>
          </View>
        </View>

        <View
          style={[
            styles.content,
            {
              height: "50%",
              // backgroundColor: "green",
              padding: 10,
              width: "100%",
            },
          ]}
        >
          <View style={styles.itemframe}>
            <View style={styles.backgroundAd}>
              <View style={styles.actionEdit}>
                <Text style={styles.delivers}>Deliver To</Text>
                <Text style={styles.deliver}>Edit</Text>
              </View>

              <View style={styles.location}>
                <View style={{ width: "20%" }}>
                  <Image
                    source={require("../../assets/images/locationIcon.png")}
                  />
                </View>

                <Text style={{ width: "80%", fontSize: 15, color: "#22242E" }}>
                  4517 Washington Ave. Manchester, Kentucky 39495
                </Text>
              </View>
            </View>
            <View style={styles.backgroundAd}>
              <View style={styles.actionEdit}>
                <Text style={styles.delivers}>Payment Method</Text>
                <Text style={styles.deliver}>Edit</Text>
              </View>

              <View style={styles.locations}>
                <View style={{ width: "20%" }}>
                  <Image
                    source={require("../../assets/images/paypal.png")}
                  />
                </View>
                <Text style={{ width: "80%", fontSize: 15, marginLeft:180,}}>
                 123456789012****
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.footer,
            { height: "32%", width: "100%" },
          ]}
        >
          <TotalPayment />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    margin: 10,
    alignItems: "flex-start",
  },
  textTile: {
    fontSize: 25,
  },
  locations:{
    flexDirection:'row',
    },
  itemframe: {
    width: "100%",
    // backgroundColor: "yellow",
    height: "100%",
    rowGap:20,
  },
  actionEdit: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backgroundAd: {
    rowGap: 15,
    justifyContent: "center",
    height: 108,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 10,
  },
  deliver: {
    opacity: 0.5,
    fontSize: 14,
    color:"#6B50F6",
  },
  location: {
    flexDirection: "row",

  },

  image: {
    width: "30%",
    justifyContent: "center",
    // backgroundColor: "black",
    backgroundColor: "white 78",
  },
  orderTitle: {
    color: "black",
    fontSize: 15,
  },
  voucherTitle2: {
    color: "#fff",
  },

  footer: {
    height: "30%",
    borderRadius: 10,
  },
  totalPayment: {
    lineHeight: 10,
    padding: 20,
    backgroundColor: "#6B50F6",
    width: "100%",
    height: "100%",
    borderRadius: 22,
    justifyContent: "flex-start",
  },
  detailInvoid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextInvoice: {
    color: "#FEFEFF",
    fontSize: 14,
  },
  foodImage: {
    width: 100,
    height: 100,
  },
});
