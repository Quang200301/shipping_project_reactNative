import React,{useRef} from "react";
import { View, Text, Image, StyleSheet, ScrollView, Animated, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const BANNER_H = Dimensions.get('window').height;
const BANNER_W = Dimensions.get('window').width;

export default function Profile() {
  const scrollA = useRef(new Animated.Value(0)).current;

  return (
    <Animated.ScrollView contentContainerStyle={styles.scrollViewContent}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollA}}}],
        {useNativeDriver: true},
      )}
      scrollEventThrottle={16}

    >
      <View>
        <Animated.Image
          source={require("../../assets/images/taixoan.png")}
          style={styles.banner(scrollA)}
          resizeMode="cover"
        />
        <View
          style={{
            backgroundColor: "#FF7F50",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            flex: 1,
            paddingBottom: 50,
            top: -40,
          }}
        >
          <View style={styles.contentcontainer}>
            <Text style={styles.memberGold}>Member Gold</Text>
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
                style={styles.voucher}
              />
              <Text style={{marginTop:10}}>You Have 3 Voucher</Text>
            </View>
          </View>
          <Text style={styles.favoriteText}>Favorite</Text>
          <View style={styles.contentcontainer}>
         
          <View style={styles.contentcontainer}>
            <View style={{ flexDirection: "row", gap: 25 }}>
              <Image
                source={require("../../assets/images/Menu1.png")}
                style={styles.voucher}
              />
              <View>
                <Text style={styles.menuTitle}>Spacy fresh crab</Text>
                <Text style={styles.menuSubtitle}>Waroenk kita</Text>
                <Text style={styles.menuPrice}>$ 35</Text>
              </View>
              <View style={styles.buyAgainButton}>
                <Text style={styles.buyAgainButtonText}>Buy Again</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentcontainer}>
            <View style={{ flexDirection: "row", gap: 25 }}>
              <Image
                source={require("../../assets/images/PhotoMenu.png")}
                style={styles.voucher}
              />
              <View>
                <Text style={styles.menuTitle}>Spacy fresh crab</Text>
                <Text style={styles.menuSubtitle}>Waroenk kita</Text>
                <Text style={styles.menuPrice}>$ 35</Text>
              </View>
              <View style={styles.buyAgainButton}>
                <Text style={styles.buyAgainButtonText}>Buy Again</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentcontainer}>
            <View style={{ flexDirection: "row", gap: 25 }}>
              <Image
                source={require("../../assets/images/PhotoMenu2.png")}
                style={styles.voucher}
              />
              <View>
                <Text style={styles.menuTitle}>Spacy fresh crab</Text>
                <Text style={styles.menuSubtitle}>Waroenk kita</Text>
                <Text style={styles.menuPrice}>$ 35</Text>
              </View>
              <View style={styles.buyAgainButton}>
                <Text style={styles.buyAgainButtonText}>Buy Again</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentcontainer}>
            <View style={{ flexDirection: "row", gap: 25 }}>
              <Image
                source={require("../../assets/images/PhotoMenu2.png")}
                style={styles.voucher}
              />
              <View>
                <Text style={styles.menuTitle}>Spacy fresh crab</Text>
                <Text style={styles.menuSubtitle}>Waroenk kita</Text>
                <Text style={styles.menuPrice}>$ 35</Text>
              </View>
              <View style={styles.buyAgainButton}>
                <Text style={styles.buyAgainButtonText}>Buy Again</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentcontainer}>
            <View style={{ flexDirection: "row", gap: 25 }}>
              <Image
                source={require("../../assets/images/PhotoMenu2.png")}
                style={styles.voucher}
              />
              <View>
                <Text style={styles.menuTitle}>Spacy fresh crab</Text>
                <Text style={styles.menuSubtitle}>Waroenk kita</Text>
                <Text style={styles.menuPrice}>$ 35</Text>
              </View>
              <View style={styles.buyAgainButton}>
                <Text style={styles.buyAgainButtonText}>Buy Again</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentcontainer}>
            <View style={{ flexDirection: "row", gap: 25 }}>
              <Image
                source={require("../../assets/images/Menu2.png")}
                style={styles.voucher}
              />
              <View>
                <Text style={styles.menuTitle}>Spacy fresh crab</Text>
                <Text style={styles.menuSubtitle}>Waroenk kita</Text>
                <Text style={styles.menuPrice}>$ 35</Text>
              </View>
              <View style={styles.buyAgainButton}>
                <Text style={styles.buyAgainButtonText}>Buy Again</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentcontainer}>
            <View style={{ flexDirection: "row", gap: 25 }}>
              <Image
                source={require("../../assets/images/Menu1.png")}
                style={styles.voucher}
              />
              <View>
                <Text style={styles.menuTitle}>Spacy fresh crab</Text>
                <Text style={styles.menuSubtitle}>Waroenk kita</Text>
                <Text style={styles.menuPrice}>$ 35</Text>
              </View>
              <View style={styles.buyAgainButton}>
                <Text style={styles.buyAgainButtonText}>Buy Again</Text>
              </View>
            </View>
          </View>
          </View>
          
          {/* Repeat the above block for other favorite items */}
        </View>
        <View style={{ width: 60 }}></View>
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
 
  scrollViewContent: {
    flexGrow: 1,
  },
  contentcontainer: {
    paddingTop: 10,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor:'30A2FF'
  },
  conten2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 18,
  },
  memberGold: {
    backgroundColor: "#0F6",
    justifyContent: "center",
    textAlign: "center",
    width: 120,
    borderRadius: 20,
    marginBottom:20,
    marginTop:20,
  },
  email: {
    fontWeight: "300",
    marginHorizontal: 18,
  },
  favoriteText: {
    marginLeft: 20,
    fontSize: 45,
  },
  voucher: {
    // Add styles for the voucher image
  },
  menuTitle: {
    fontSize: 15,
  },
  menuSubtitle: {
    fontSize: 14,
  },
  menuPrice: {
    fontSize: 19,
    color: "#6B50F6",
  },
  buyAgainButton: {
    backgroundColor: "#6B50F6",
    height: 59,
    width: 130,
    borderRadius: 30,
    justifyContent: "center",
    textAlign: "center",
    color: "#ffff",
    marginLeft: 90,
  },
  buyAgainButtonText: {
    color: "#fff",
    justifyContent: "center",
    textAlign: "center",
  },
  banner: scrollA => ({
    height: BANNER_H-400,
    width: BANNER_W,
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      }
    ],
  }),
});
