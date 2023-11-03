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
          <Text style={styles.textTile}>Voucher Promo</Text>
        </View>
        <View style={styles.backgroundAd1}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/images/people.png")}
              style={styles.image2}
            />
          </View>
          <View style={styles.voucherFrame}>
            <Text style={styles.voucherTitle1}>
              Special Deal For {"\n"} October
            </Text>
              <Text style={styles.textbutton1}>Order Now</Text>
            
          </View>
        </View>

       
       

        <View style={styles.backgroundAd3}>
    
            <TouchableOpacity style={styles.but}>
              {/* <Text style={styles.textbutton2}>Order Now</Text> */}
              <Text>Check out</Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textTile: {
    fontSize: 25,
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  backgroundAd1: {
    height: 122,
    backgroundColor: "#6B50F6",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  backgroundAd3: {
    height:70,
    backgroundColor: "yellow",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  backgroundAd2: {
    height: 122,
    backgroundColor: "green",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 250,
  },
  image: {
     width:"50%"
    },
  voucherFrame: {
    height: "100%",
    rowGap: 10,
    justifyContent: "center",
  },
  voucherTitle1: {
    color: "white",
  },
  voucherTitle2: {
    color: "yellow",
  },
  button: {
    backgroundColor: "white",
    height: 30,
    borderRadius: 10,
  },
  textbutton1: {
    marginRight: 40,
    color: "green",
    textAlign: "center",
    left: 20,
    top: 5,
  },
  textbutton2: {
    color:'#6B3A5B',
    marginRight: 40,
    textAlign: "center",
    left: 20,
    top: 5,
  },
  but:{
    marginTop:20,
    fontSize:50,
  }
});
