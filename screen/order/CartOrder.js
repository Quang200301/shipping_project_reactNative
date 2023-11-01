import { View, Text, SafeAreaView, FlatList,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity } from '../../components/features/counterSlice';
import { decrementQuantity } from '../../components/features/counterSlice';
import { selectTotalAllPrice,selectTotalAllQuantity } from '../../components/features/cartSelectors';
export default function CartOrder() {
    const dispatch = useDispatch();
    const CartItems= useSelector((state)=>state.cart.cart);
    const totalQuantity = useSelector(selectTotalAllQuantity);
    const totalPrice = useSelector(selectTotalAllPrice);
    const incrementItemQuantity = (item) => {
        dispatch(incrementQuantity(item));
      };
      const decrementItemQuantity = (item) => {
        dispatch(decrementQuantity(item));
      };

      const TotalPayment = () => (
        <View style={styles.totalPayment}>
            <View style={styles.detailInvoid}>
                <Text style={styles.TextInvoice}> Sub - Total</Text>
                <Text style={styles.TextInvoice}>100 $</Text>
            </View>

            <View style={styles.detailInvoid}>
                <Text style={styles.TextInvoice}> Delivery Charge</Text>
                <Text style={styles.TextInvoice}> 10 $</Text>
            </View>

            <View style={styles.detailInvoid}>
                <Text style={styles.TextInvoice}> Discount</Text>
                <Text style={styles.TextInvoice}> 20 $</Text>
            </View>
            <View style={[styles.detailInvoid, { fontSize: 17, marginTop: 15 }]}>
                <Text style={[styles.TextInvoice, { fontSize: 18 }]}> Total</Text>
                <Text style={[styles.TextInvoice, { fontSize: 18 }]}> {totalPrice} $</Text>
            </View>
            <TouchableOpacity style={styles.order}>
                <Text style={styles.placeOrder}>Order</Text>
            </TouchableOpacity>
           
        </View>
    )
    const renderItem=({item})=>{
        return(
            <View style={styles.itemCart}>
                <Image source={item.image} style={{width:70,height:70}}/>
                <View>
                    <Text>{item.name}</Text>
                </View>
                <View>
                    <Text style={{color:'#3F51B5',fontWeight:'800'}}>{item.totalPrice} $</Text>
                </View>
                <TouchableOpacity  onPress={()=>decrementItemQuantity(item)}>
                    <Text><Entypo name="minus" size={20} color="black" /></Text>
                </TouchableOpacity>

                <Text style={{fontWeight:'800'}}>{item.quantity}</Text>

                <TouchableOpacity onPress={()=>incrementItemQuantity(item)}>
               <Text><Entypo name="plus" size={20} color="black" /></Text>
                </TouchableOpacity>
            </View>
        )
    }
  return (
    <SafeAreaView style={styles.container}> 
      <View>
        <Text>shoping Cart</Text>
      </View>
      <FlatList
      data={CartItems}
      renderItem={renderItem}
      />
      <View>
        <TotalPayment/>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    itemCart:{
        flexDirection:'row',
        padding:10,
        marginVertical:12,
        marginHorizontal:18,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#BDBDBD',
        borderRadius:12
    },
    container:{
        flex:1
    },
    totalPayment:{
        backgroundColor:'#1976D2',
        marginVertical:12,
        marginHorizontal:16,
        borderRadius:26,
       
    },
    TextInvoice:{
        fontSize:15,
        fontWeight:'800',
        color:'white'
    },
    detailInvoid:{
        flexDirection:'row',
        padding:7,
        justifyContent:'space-between'
    },
    order:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        marginVertical:20,
        marginHorizontal:30,
        height:48,
        borderRadius:12
    },
    placeOrder:{
        color:'#1976D2',
        fontSize:20,
        fontWeight:'900'
    }
   
})