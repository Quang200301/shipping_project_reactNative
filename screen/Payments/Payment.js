import { StatusBar } from "expo-status-bar";
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
const paymentData = [
  {
    id: 1,
    bankType: 'Paypal',
    image: require("../../assets/images/paypal.png"),
    number: "234466345634***",
  },
  {
    id: 2,
    bankType: 'Visa',
    image: require("../../assets/images/visa.png"),
    number: "234466345634***",
  },
  {
    id: 3,
    bankType: 'Payoneer',
    image: require("../../assets/images/layer3.png"),
    number: "234466345634***",
  },
];



export default function Checkout({ navigation }) {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentPress = (payment) => {
    setSelectedPayment(payment);
  };

  const renderPaymentItem = (item) => {
    const isSelected = selectedPayment === item.id;
    return (
      <TouchableOpacity
        style={styles.bankItem}
        onPress={() => handlePaymentPress(item.id)}
      >
        <Image source={item.image} />
        <Text style={{}}>{item.number}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <StatusBar hidden />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/images/combackicon.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Payment</Text>
        <FlatList
          data={paymentData}
          renderItem={({ item }) => renderPaymentItem(item)}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.bankFlatList}
        />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding:20,
  },
  title: {
    marginTop:20,
    fontSize: 25,

  }
  ,
  bankFlatList: {
    marginTop:20,
    height: '100%',
    rowGap: 10,
  },
  bankItem: {
    marginTop:20,
    height: 73,
    borderRadius: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: 'white',
    padding:20,
    elevation:4,
  }
});