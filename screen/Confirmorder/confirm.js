import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

const TotalPayment = (props) => (
  <View style={totalPaymentStyles.totalPayment}>
    <View style={totalPaymentStyles.detailInvoid}>
      <Text style={totalPaymentStyles.TextInvoice}> Sub - Total</Text>
      <Text style={totalPaymentStyles.TextInvoice}>{props.data.subTotal} $</Text>
    </View>

    <View style={totalPaymentStyles.detailInvoid}>
      <Text style={totalPaymentStyles.TextInvoice}> Delivery Charge</Text>
      <Text style={totalPaymentStyles.TextInvoice}> 10 $</Text>
    </View>

    <View style={totalPaymentStyles.detailInvoid}>
      <Text style={totalPaymentStyles.TextInvoice}> Discount</Text>
      <Text style={totalPaymentStyles.TextInvoice}> 20 $</Text>
    </View>
    <View style={[totalPaymentStyles.detailInvoid, { fontSize: 17, marginTop: 15 }]}>
      <Text style={[totalPaymentStyles.TextInvoice, { fontSize: 18 }]}> Total</Text>
      <Text style={[totalPaymentStyles.TextInvoice, { fontSize: 18 }]}> {props.data.totalPrice} $</Text>
    </View>

    <TouchableOpacity
      style={totalPaymentStyles.order}
      onPress={
        () => navigation.goBack()
      }
    >
      <Text style={totalPaymentStyles.placeOrder}>Place My Order</Text>
    </TouchableOpacity>
  </View>
)

export default function ConfirmOder({ route, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[styles.header, { height: "10%", width: "100%", backgroundColor: 'red', justifyContent: 'center' },]}
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../../assets/images/combackicon.png")} />
      </TouchableOpacity>

      <View>
        <Text style={styles.textTile}>Confirm Order</Text>
      </View>



      <View style={styles.paymentInfo}>

        <View style={styles.deliverLocation}>
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

            <Text style={styles.textAddress}>
              4517 Washington Ave. Manchester, Kentucky 39495
            </Text>
          </View>
        </View>
        
        {/* <View style={styles.backgroundAd}>
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
            <Text style={{ width: "80%", fontSize: 15, marginLeft: 180, }}>
              123456789012****
            </Text>
          </View>
        </View> */}
      </View>


      <View
        style={[
          styles.footer,
          { height: "32%", width: "100%" },
        ]}
      >
        {/* <TotalPayment data={route.params.dataPayment} /> */}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: 30,
    margin: 10,
    marginBottom: 10,
    alignItems: "flex-start",
    backgroundColor: 'pink',
    position:'relative'
  },
  textTile: {
    fontSize: 25,
    fontWeight: '900',
    color: "#6B50F6",
    elevation: 5
  },

  paymentInfo: {
    rowGap: 20,
    backgroundColor: 'yellow',
    width:'100%',
  },
  deliverLocation: {
    justifyContent: "center",
    height: 120,
    backgroundColor: "#fff",
    width:'100%',
  },

  // locations: {
  //   flexDirection: 'row',
  // },

  // actionEdit: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
 
  // deliver: {
  //   opacity: 0.5,
  //   fontSize: 14,
  //   color: "#6B50F6",
  // },
  // location: {
  //   flexDirection: "row",
  // },
  // image: {
  //   width: "30%",
  //   justifyContent: "center",
  //   backgroundColor: "white 78",
  // },
  footer: {
    height: "30%",
    borderRadius: 10,
  },
});

const totalPaymentStyles = StyleSheet.create({
  totalPayment: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#6B50F6',
    padding: 10,
    borderRadius: 20,
  },
  TextInvoice: {
    fontSize: 15,
    fontWeight: '800',
    color: 'white'
  },
  detailInvoid: {
    flexDirection: 'row',
    padding: 7,
    justifyContent: 'space-between'
  },
  order: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 5,
    height: 48,
    borderRadius: 10
  },
  placeOrder: {
    color: '#6B50F6',
    fontSize: 20,
    fontWeight: '900'
  }
})