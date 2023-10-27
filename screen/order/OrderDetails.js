import React, { useState } from "react";
import { Alert, Button, ImageBackground, Platform } from "react-native";
import { StyleSheet, SafeAreaView, Pressable, Text, View, TouchableOpacity, Image } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { ListData } from "../home/ListData.js";
export default function OrderDetail(){
    const [quantity, setQuantity] = useState(1);
    if (ListData) {
        var newData = [...ListData];
      } else {
        console.log('ListData is undefined or not yet loaded.');
      }
      const [DataOrders,setDataorder]=useState(newData);
    const handleDeleteItem = (itemId) => {

    
        const updatedItems = DataOrders.filter((item) => item.id !== itemId);
        setDataorder(updatedItems);
      };
      const handleDecrease = (itemId) => {
        if(quantity.lengh>1){
            setQuantity((prevQuantity) => ({
                ...prevQuantity,
                [itemId]: (prevQuantity[itemId] || 0) - 1,
              }));
        }
           
      };
    
      const handleIncrease = (itemId) => {
        setQuantity((prevQuantity) => ({
          ...prevQuantity,
          [itemId]: (prevQuantity[itemId] || 0) + 1,
        }));
      };

      const calculateTotal = () => {
        let total = 0;
        for (const item of DataOrders) {
          // Ensure the item has a valid quantity and price
          if (item.quantity && item.price) {
            total += item.quantity * item.price;
          }
        }
        return total;
      };
    const Items = ({ data }) => (
    <View style={[styles.item, styles.boxShadow]}>
        <View style={styles.photoFrame}>
            <Image style={styles.foodImage} source={data.item.image } />
        </View>
        <View style={styles.foodInfor}>
            <Text style={styles.menuName}> {data.item.name}</Text>
            <Text style={styles.RestaurantName}> Waroenk kita</Text>
            <Text style={styles.price}>{data.item.price}</Text>
        </View>
        <View style={styles.action}>
            <TouchableOpacity onPress={() => handleDecrease(data.item.id)}>
            <Text style={styles.quantityButtondes}>-</Text>
            </TouchableOpacity>
            <Text>{quantity[data.item.id] || 1}</Text>
            <TouchableOpacity onPress={() => handleIncrease(data.item.id)}>
            <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
) 
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/icons/IconBack.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textTitle} selectionColor={'pink'}>Order details</Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.flatListItem}>
                        <SwipeListView
                            data={DataOrders} // Replace with your actual data


                            //render item apperace.
                            renderItem={
                                (data, rowMap) => (
                                    <Items data={data} />
                                )
                            }

                            // render hiden items
                            renderHiddenItem={
                                (data, rowMap) => (
                                    <View style={styles.rowBack}>
                                        <TouchableOpacity
                                            style={{ marginRight: '5%' }}
                                            onPress={() => handleDeleteItem(data.item.id)}
                                        >
                                            <Image
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
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.totalPayment}>
                        <View style={styles.detailInvoid}>
                            <Text style={{fontSize:20}}> Sub - Total</Text>
                            <Text>100$</Text>
                        </View>
                        <View style={styles.detailInvoid}>
                            <Text style={{fontSize:20}}> Delivery Charge</Text>
                            <Text> 10 $</Text>
                        </View>

                        <View style={styles.detailInvoid}>
                            <Text style={{fontSize:20}}> Discount</Text>
                            <Text> 20 $</Text>
                        </View>

                        <View style={[styles.detailInvoid,{fontSize: 30}]}>
                            <Text style={{fontSize:20}}> Total</Text>
                            <Text>{calculateTotal()}$</Text>
                        </View>
                    </View>
                    
                    <View  style={{padding:20}}>

                        <Button
                       
                        title="Place my Order"
                        /> 
                    </View> 
                </View>

            </View>

        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        margin: 10,
        rowGap: 10
    },
    header: {
        height: '17%',
        rowGap: 10,
        alignItems: 'flex-start'
    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    content: {
        height: '40%',
    },
    flatListItem: {
        width: '100%',
        height: "100%",
    },
    item: {
        width: '100%',
        height: 103,
        backgroundColor: '#FFF',
        borderRadius: 22,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    boxShadow: {
    },
    photoFrame: {
       flex:4,
        justifyContent:'center',
        alignItems:"center"

    },
    foodInfor: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'flex-start',
        rowGap: 5
    },
    menuName: {
        fontSize: 15,
        color: '#22242E',
    },
    RestaurantName: {
        fontSize: 14,
        color: '#22242E',
        letterSpacing: 0.5,
        opacity: 0.3,
    },
    price: {
        fontSize: 19,
        fontStyle: 'normal',
        color: '#6B50F6',
        fontWeight: 'bold',
    },
    quantityButton:{
        paddingHorizontal:8,
        fontSize:18,
        backgroundColor:'#6B50F6',
        borderRadius:8
    },
    quantityButtondes:{
        paddingHorizontal:8,
        fontSize:18,
        backgroundColor:'#E0E0E0',
        borderRadius:8
    },
    action: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 10,
        alignItems: "center",
    },
    quantity: {
        fontSize: 16,
        color: '#181818',
        letterSpacing: 0.571,
        opacity: 0.7,
    },
    rowBack: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#6B50F6',
        alignItems: 'center',
        borderRadius: 22
    },
    footer: {
        elevation: 10,
        marginTop: '3%',
        height: '20%',
        borderRadius: 10
    },
    totalPayment: {
        padding: 20,
        backgroundColor: '#6B50F6',
        width: '100%',
        height: '100%',
        borderRadius: 22,
    },
    detailInvoid: {
   
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    foodImage:{
        width:100,
        height:100,
    }


});

const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid,
) => {
    if (Platform.OS === 'ios') {
        styles.boxShadow = {
            shadowColor: shadowColorIos,
            shadowOffset: { width: xOffset, height: yOffset },
            shadowOpacity,
            shadowRadius,
        };
    } else if (Platform.OS === "android") {
        styles.boxShadow = {
            elevation,
            shadowColor: shadowColorAndroid,
        };
    }
}
generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 10, '#171717');

