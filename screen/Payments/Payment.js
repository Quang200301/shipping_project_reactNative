import React, { useState } from "react";
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
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentPress = (payment) => {
    setSelectedPayment(payment);
  };

  const renderPaymentItem = (item) => {
    const isSelected = selectedPayment === item.id;

    return (
      <TouchableOpacity
        style={[
          styles.backgroundAd,
          isSelected && styles.selectedBackgroundAd,
        ]}
        onPress={() => handlePaymentPress(item.id)}
      >
        <View style={styles.image}>
          <Image source={item.image} style={styles.image2} />
        </View>
        <View style={styles.voucherFrame}>
          <Text style={styles.paymentTitle}>{item.number}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/combackicon.png")}
          style={styles.image1}
        />
        <View>
          <Text style={styles.textTile}>Payment</Text>
        </View>
        <View style={styles.itemframe}>
          <FlatList
            data={paymentData}
            renderItem={({ item }) => renderPaymentItem(item)}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const paymentData = [
  {
    id: 1,
    image: require("../../assets/images/paypal.png"),
    number: "234466345634***",
  },
  {
    id: 2,
    image: require("../../assets/images/visa.png"),
    number: "234466345634***",
  },
  {
    id: 3,
    image: require("../../assets/images/layer3.png"),
    number: "234466345634***",
  },
];

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
    height: 500,
    justifyContent: "flex-start",
    padding: 30,
  },
  backgroundAd: {
    height: 100,
    backgroundColor: "#F6F6F6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 5,
    flexDirection: "row",
    borderRadius: 20,
    marginBottom: 20, 
  },
  selectedBackgroundAd: {
    backgroundColor: "#fff",
  },
  image: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  voucherFrame: {
    width: "80%",
    marginBottom: 0,
  },
  paymentTitle: {
    color: "black",
    fontSize: 15,
    marginTop: 35,
    marginLeft: 30,
  },
  image1: {
    marginLeft: 20,
    marginBottom: -20,
  },
});