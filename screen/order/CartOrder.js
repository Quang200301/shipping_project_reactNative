import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity } from '../../components/features/counterSlice';
import { decrementQuantity } from '../../components/features/counterSlice';
import { removeItem } from '../../components/features/counterSlice';
import { selectTotalAllPrice, selectTotalAllQuantity } from '../../components/features/cartSelectors';
import { SwipeListView } from "react-native-swipe-list-view";
import { useNavigation } from '@react-navigation/native';

export default function CartOrder() {
    const dispatch = useDispatch();
    const CartItems = useSelector((state) => state.cart.cart);
    const totalQuantity = useSelector(selectTotalAllQuantity); 
    const totalPrice = useSelector(selectTotalAllPrice);
    const Discount=20;
    const subTotal= totalPrice-Discount;
    const incrementItemQuantity = (item) => {
        dispatch(incrementQuantity(item));
    };
    const decrementItemQuantity = (item) => {
        dispatch(decrementQuantity(item));
    };
    const removeItemfromCart=(item)=>{
        dispatch(removeItem(item))
    }
    const TotalPayment = () => (
        <View style={styles.totalPayment}>
            <View style={styles.detailInvoid}>
                <Text style={styles.TextInvoice}> Sub - Total</Text>
                <Text style={styles.TextInvoice}>{subTotal} $</Text>
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
                <Text style={styles.placeOrder}>Place My Order</Text>
            </TouchableOpacity>

        </View>
    )
    const RenderItem = ({ data }) => {
        return (
            <View style={styles.itemCart}>
               
                <Image source={data.item.image} style={{ width: 70, height: 70 }} />
                <View>
                    <Text style={{ fontSize:18,fontWeight:'700'}}>{data.item.name}</Text>
                </View>
                <View>
                    <Text style={{ fontSize:18,color: '#3F51B5', fontWeight: '800' }}>{data.item.totalPrice} $</Text>
                </View>
                <TouchableOpacity onPress={() => decrementItemQuantity(data.item)}>
                    <Text  style={{backgroundColor:'#FF9012',borderRadius:9}}><Entypo name="minus" size={20} color="white" /></Text>
                </TouchableOpacity>

                <Text style={{ fontWeight: '800' }}>{data.item.quantity}</Text>

                <TouchableOpacity onPress={() => incrementItemQuantity(data.item)}>
                    <Text style={{backgroundColor:'#6B50F6',borderRadius:9}}><Entypo name="plus" size={20} color="white" /></Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{marginVertical:20,marginHorizontal:18}}>       
                <Text style={{fontSize:25,fontWeight:'800'}}>Order details</Text>
            </View>

            {/* Swipe list */}
            <SwipeListView
                data={CartItems}
                renderItem={
                    (data, rowMap) => (
                        <RenderItem data={data} />
                        
                    )
                }
                renderHiddenItem={
                    (data, rowMap) => (
                        <View style={{ width: "100%", height: 100}}>
                            <TouchableOpacity
                                style={{justifyContent:'flex-end',marginTop:25,backgroundColor: '#6B50F6',  padding: 20,marginVertical: 12,borderRadius: 12,height:'85%'
                                ,marginHorizontal: 18,}}
                                onPress={()=>removeItemfromCart(data.item)}
                            >
                                <Image style={{marginLeft:'86%',width:40,height:40,paddingTop:30}}
                                    source={require('../../assets/icons/Icontrash.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }
                contentContainerStyle={{ rowGap: 10 }}
                style={styles.menuList}
                // leftOpenValue={40}
                rightOpenValue={-70}
            />
            
            <View>
                <TotalPayment />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    itemCart: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 12,
        marginHorizontal: 18,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor:'white'
    },
    container: {
        flex: 1
    },
    totalPayment: {
        backgroundColor: '#6B50F6',
        marginVertical: 12,
        marginHorizontal: 16,
        borderRadius: 26,

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
        marginVertical: 20,
        marginHorizontal: 30,
        height: 48,
        borderRadius: 12
    },
    placeOrder: {
        color: '#6B50F6',
        fontSize: 20,
        fontWeight: '900'
    }

})