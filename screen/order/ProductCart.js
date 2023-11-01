import { View, Text, SafeAreaView,Image, Pressable,StyleSheet} from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import { ListData } from '../home/ListData';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../components/features/counterSlice';
export default function ProductCart({ navigation }) {

    const dispatch = useDispatch();

    const addedItems = useSelector((state) => state.cart.cart);
    console.log('âddd=>', addedItems)
    const addToCart = item => {
        dispatch(addItem(item));
    };
    const renderItem = ({ item }) => {
        return (
          <SafeAreaView style={styles.containerCart}>
            <Image source={item.image} style={{ width: 70, height: 70 }} />
            <View>
              <Text> {item.name}</Text>
              <Text>{item.price} $</Text>
            </View>
            <Pressable onPress={() => addToCart(item)}>
              <Text style={{ borderWidth: 1, borderRadius: 6 }}>Add cart</Text>
            </Pressable>
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
    },
    container:{
        flexDirection:'row'
    }

})