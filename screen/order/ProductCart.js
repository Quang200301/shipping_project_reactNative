import { View, Text, SafeAreaView,Image,StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import { ListData } from '../home/ListData';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../components/features/counterSlice';
export default function ProductCart({ navigation }) {

    const dispatch = useDispatch();

    const addedItems = useSelector((state) => state.cart.cart);
    // console.log('âddd=>', addedItems)
    const addToCart = item => {
        dispatch(addItem(item));
    };
    const renderItem = ({ item }) => {
        return (
          <SafeAreaView style={styles.containerCart}>
            <Image source={item.image} style={{ width: 70, height: 70 }} />
            <View>
              <Text style={styles.name}> {item.name}</Text>
              <Text style={styles.price}>{item.price} $</Text>
            </View>
            <TouchableOpacity onPress={() => addToCart(item)}>
              <Text style={{color:'#6B50F6',fontWeight:'900'}}>Add Cart</Text>
            </TouchableOpacity>
          </SafeAreaView>
        );
      }
  return (
    <SafeAreaView style={styles.container}>
     
    
      <FlatList
      data={ListData}
      renderItem={renderItem}
      />

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    containerCart:{
        flexDirection:'row',
        padding:10,
        marginHorizontal:18,
        marginVertical:12,
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:12
    },
    container:{
        flexDirection:'row'
    },
    name:{
      fontSize:18,
      fontWeight:'700'
    },
    price:{
      color:"#6B50F6",
      fontWeight:'900'
    }

})