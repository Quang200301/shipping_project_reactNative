import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
export default function Profile() {
  return (
    <View>
      <Image
        source={require("../../assets/images/taixoan.png")}
        style={[styles.image1]}
      />
      <View style={styles.contentcontainer}>
        <Text
          style={{
            backgroundColor: "#0F6",
            justifyContent: "center",
            textAlign: "center",
            width: 120,
            borderRadius: 20,
          }}
        >
          Member Gold
        </Text>
        <View style={styles.conten2}>
          <Text>Arash Ranjbaran</Text>
          <Image
            source={require("../../assets/images/EditIcon.png")}
            style={styles.editIcon}
          />
        </View>
        <Text style={styles.email}>awdesign.ar@gmail.com</Text>
      </View>

      <View style={styles.contentcontainer}>
        <View style={{ flexDirection: "row", gap: 25 }}>
          <Image
            source={require("../../assets/images/voucher1.png")}
            style={[styles.voucher]}
          />
          <Text>You Have 3 Voucher</Text>
        </View>
      </View>
      <Text style={{ marginLeft: 30, fontsize: 45 }}>Favorite</Text>

      <View style={styles.contentcontainer}>
        <View style={{ flexDirection: "row", gap: 25 }}>
          <Image
            source={require("../../assets/images/PhotoMenu.png")}
            style={[styles.voucher]}
          />
          <View>
            <Text style={{ fontsize: 15 }}>Spacy fresh crab</Text>
            <Text style={{ fontsize: 14 }}>Waroenk kita</Text>
            <Text style={{ fontsize: 19, color: "#6B50F6" }}>$ 35</Text>
          </View>
          <View
            style={{
              backgroundColor: "#6B50F6",
              heigh: 29,
              width: 130,
              borderRadius: 30,
              justifyContent: "center",
              textAlign: "center",
              color: "#ffff",
              marginLeft: 90,
            }}
          >
            <Text
              style={{
                color: "#fff",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Buy Again
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.contentcontainer}>
        <View style={{ flexDirection: "row", gap: 25 }}>
          <Image
            source={require("../../assets/images/PhotoMenu2.png")}
            style={[styles.voucher]}
          />
          <View>
            <Text style={{ fontsize: 15 }}>Spacy fresh crab</Text>
            <Text style={{ fontsize: 14 }}>Waroenk kita</Text>
            <Text style={{ fontsize: 19, color: "#6B50F6" }}>$ 35</Text>
          </View>
          <View
            style={{
              backgroundColor: "#6B50F6",
              heigh: 29,
              width: 130,
              borderRadius: 30,
              justifyContent: "center",
              textAlign: "center",
              color: "#ffff",
              marginLeft: 90,
            }}
          >
            <Text
              style={{
                color: "#fff",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Buy Again
            </Text>
          </View>
        </View>
      </View>
      <View style={{width:60,}}>
        
      <View style={{ backgroundColor: "pink", height: 300 ,width:900, flexDirection:'row'}}>
        <Image
          source={require("../../assets/images/IconHome.png")}
          style={styles.editIcon}
        />
        <View>
        <Image
          source={require("../../assets/images/IconProfile.png")}
          style={styles.editIcon}
        />
          
        </View>
      </View>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  image1: {
    width: "100%",
  },
  contentcontainer: {
    paddingTop: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  conten2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 18,
  },
  email: {
    fontWeight: "300",
    marginHorizontal: 18,
    marginBottom: 36,
  },
});
