import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Entypo } from '@expo/vector-icons';
import ProductCart from '../order/ProductCart';
export default function Profile({ route,navigation }) {
  return (
    <ParallaxScrollView
      backgroundColor="grey"
      contentBackgroundColor="#EEEEEE"
      parallaxHeaderHeight={300}
      stickyHeaderIndices={[0]}
      renderForeground={() => (
        <View style={{ borderRadius: 24 }} >
          <Image source={require('../../assets/userImages/user.png')} style={{width:'100%',height:'100%'}}/>
        </View>
      )}>
      <View style={{borderTopEndRadius:22}}>
        <Text style={style.name}>Member Gold</Text>
            <View style={style.contenName}>
                <View>
                    <Text style={{fontSize:27,fontWeight:'500'}}>Arash Ranjbaran</Text>
                    <Text style={{fontWeight:'200'}}>awdesign.@gmail.com</Text>
                </View>
                <TouchableOpacity>
                    <Entypo name="pencil" size={24} color="#6B50F6" />
                </TouchableOpacity>
            </View>
            <View style={style.voucher}>
                <Image source={require('../../assets/icons/voucher.png')}/>
                <Text>You have 3 Voucher</Text>
            </View>
            <Text style={{ marginHorizontal:16}}>Favoryte</Text>
            <ProductCart/>
      </View>
    </ParallaxScrollView>

  )
};
const style = StyleSheet.create({
    name:{
       fontSize:16,
       borderRadius:13,
       backgroundColor:'#00FF66',
       width:120,
       justifyContent:'center',
       textAlign:'center',
       height:40,
       padding:10,
       marginVertical:16,
       marginHorizontal:16
    },
    contenName:{
        flexDirection:'row',
        justifyContent:'space-between',
       marginHorizontal:16
    },
    voucher:{
        flexDirection:'row',
        marginHorizontal:16,
        marginVertical:16,
        gap:22
    },

})