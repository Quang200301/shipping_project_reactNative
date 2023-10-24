import React, { useState } from "react";
import { Alert, Button, ImageBackground, Platform } from "react-native";
import { StyleSheet, SafeAreaView, Pressable, Text, View, TouchableOpacity, Image } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
const Items = ({ data }) => (
    <View style={[styles.item, styles.boxShadow]}>
        <View style={styles.photoFrame}>
            <Image style={styles.foodImage} source={require('../../assets/foodImages/foodimage1.png')} />
        </View>
        <View style={styles.foodInfor}>
            <Text style={styles.menuName}> {data.item.meNuName}</Text>
            <Text style={styles.RestaurantName}> Waroenk kita</Text>
            <Text style={styles.price}>$ 35</Text>
        </View>
        <View style={styles.action}>
            <TouchableOpacity>
                <Image source={require('../../assets/icons/IconMinus.png')} />
            </TouchableOpacity>
            <Text style={styles.quantity}>2</Text>
            <TouchableOpacity>
                <Image source={require('../../assets/icons/IconPlus.png')} />
            </TouchableOpacity>
        </View>
    </View>
)
const OrderDetail = () => {
    const data = [
        {
            id: 1,
            meNuName: "Food from Tai",
            restaurantName: "Tai restaurant",
            image: require('../../assets/foodImages/foodimage1.png'), // Replace with the actual image path
            price: 35,
            quantity: 4,
        },
        {
            id: 2,
            meNuName: "Food from Quang",
            restaurantName: "Quang restaurant",
            image: require('../../assets/foodImages/foodimage1.png'), // Replace with the actual image path
            price: 35,
            quantity: 2,
        },
        {
            id: 3,
            meNuName: "Food from thi",
            restaurantName: "Thi restaurant",
            image: require('../../assets/foodImages/foodimage1.png'), // Replace with the actual image path
            price: 35,
            quantity: 2,
        }, {
            id: 4,
            meNuName: "Food from thi",
            restaurantName: "Thi restaurant",
            image: require('../../assets/foodImages/foodimage1.png'), // Replace with the actual image path
            price: 35,
            quantity: 2,
        },
        {
            id: 5,
            meNuName: "Food from thi",
            restaurantName: "Thi restaurant",
            image: require('../../assets/foodImages/foodimage1.png'), // Replace with the actual image path
            price: 35,
            quantity: 2,
        }
    ];
    // Initialize DataOrders with data
    const [DataOrders, setDataOrder] = useState(data);
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
                                            onPress={() => Alert.alert(`You want delete the item from ${data.item.restaurantName}`)}
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
                            <Text> Sub - Total</Text>
                            <Text> 120 $</Text>
                        </View>
                        <View style={styles.detailInvoid}>
                            <Text> Delivery Charge</Text>
                            <Text> 10 $</Text>
                        </View>

                        <View style={styles.detailInvoid}>
                            <Text> Discount</Text>
                            <Text> 20 $</Text>
                        </View>

                        <View style={[styles.detailInvoid,{fontSize: 30}]}>
                            <Text> Total</Text>
                            <Text> 150 $</Text>
                        </View>
                    </View>
                    
                    <View>

                        <Button
                        title="Place my Order"
                        /> 
                    </View> 
                </View>

            </View>

        </SafeAreaView>
    )
}
export default OrderDetail;
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
    boxShadow: {},
    photoFrame: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    foodInfor: {
        flex: 3,
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
    action: {
        flex: 2,
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
        marginTop: '2%',
        height: '30%',
        borderRadius: 10
    },
    totalPayment: {
        padding: 10,
        backgroundColor: '#6B50F6',
        width: '100%',
        height: '100%',
        borderRadius: 22,
    },
    detailInvoid: {
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
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

