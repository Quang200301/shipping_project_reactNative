import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

const TotalPayment = ({ data, navigation }) => (
  <View style={totalPaymentStyles.totalPayment}>
    <View style={totalPaymentStyles.detailInvoid}>
      <Text style={totalPaymentStyles.TextInvoice}> Sub - Total</Text>
      <Text style={totalPaymentStyles.TextInvoice}>{data.subTotal} $</Text>
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
      <Text style={[totalPaymentStyles.TextInvoice, { fontSize: 18 }]}> {data.totalPrice} $</Text>
    </View>

    <TouchableOpacity
      style={totalPaymentStyles.order}
      onPress={
        () => {
          navigation.navigate('YourOrder')
          // ---------------------------------------------- NAVIGATTE TO CHECKOUT PAGE ------------------------------------------
        }
      }
    >
      <Text style={totalPaymentStyles.placeOrder}>Place My Order</Text>
    </TouchableOpacity>
  </View>
)

export default function ConfirmOrder({ route, navigation }) {
  const [address, setAddress] = useState('4517 Washington Ave. Manchester, Kentucky 39490');

  const { image, number } = route.params;
  return (
    <SafeAreaView style={{ height: '100%' }}>
      <View style={styles.bodyContainer}>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image source={require("../../assets/images/combackicon.png")} />
        </TouchableOpacity>
        <View>
          <Text style={styles.textTile}>Confirm Order</Text>
        </View>


        <View style={styles.paymentInfo}>

          <View style={styles.deliverLocation}>

            <View style={[styles.row, styles.actionEdit]}>
              <Text style={styles.deliverText}>Deliver To</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Shipping', { adr: address })}
              >
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.location, styles.row]}>
              <View style={styles.iconLocation}>
                <Image
                  source={require("../../assets/images/locationIcon.png")}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.textAddress}>
                {address != null && "4517 Washington Ave. Manchester, Kentucky 39490"}
              </Text>
            </View>

          </View>

          {/* This is payment method */}
          <View style={styles.deliverLocation}>

            <View style={[styles.row, styles.actionEdit]}>
              <Text style={styles.deliverText}>Payment Method</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('PaymentMethod')}
              >
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.location, styles.row]}>
              <View style={styles.iconLocation}>
                <Image
                  source={image != null ? image : require("../../assets/images/paypal.png")}
                  resizeMode="contain"
                />
              </View>

              <Text style={[styles.textAddress, { textAlign: 'right' }]}>
                {number != null ? number : '2121 6352 8465 ****'}
              </Text>
            </View>

          </View>
        </View>



      </View>
      <TotalPayment data={[route.params.dataPayment, navigation]} navigation={navigation} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  bodyContainer: {
    marginTop: 30,
    margin: 10,
  },
  textTile: {
    fontSize: 25,
    fontWeight: '900',
    color: "#6B50F6",
    elevation: 5
  },
  paymentInfo: {
    rowGap: 20,
    width: '100%'
  },
  deliverLocation: {
    marginTop: 10,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    elevation: 4,
    justifyContent: 'space-evenly'
  },
  actionEdit: {
    justifyContent: 'space-between',
    color: '#6B50F6',
  },

  deliverText: {
    textAlign: 'right',
    fontSize: 16,
    paddingBottom: 10,
    opacity: 0.3
  },
  editText: {
    flex: 1,
    fontSize: 16,
    paddingBottom: 10,
    textAlign: 'right',
    color: '#6B50F6',
    paddingLeft: 30
  },
  location: {
    alignItems: 'center'
  },
  iconLocation: {
    minWidth: '10%',
    paddingRight: 20
  },
  textAddress: {
    fontSize: 18,
    flex: 1
  }

  ,
  row: {
    flexDirection: 'row'
  }
});

const totalPaymentStyles = StyleSheet.create({
  totalPayment: {
    position: 'absolute',
    right: 10,
    left: 10,
    bottom: 10,
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
  },
})