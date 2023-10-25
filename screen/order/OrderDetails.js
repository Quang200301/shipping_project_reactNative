import React, { useState } from "react";
import { Alert, ImageBackground, Platform } from "react-native";
import { StyleSheet, SafeAreaView, Pressable, Text, View, TouchableOpacity, Image } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import NumericInput from 'react-native-numeric-input';
import { Button } from '@rneui/themed';
import { ListData } from "../home/ListData.js";
import { StatusBar } from "expo-status-bar";

const TotalPayment = () => (
    <View style={styles.totalPayment}>
        <View style={styles.detailInvoid}>
            <Text style={styles.TextInvoice}> Sub - Total</Text>
            <Text style={styles.TextInvoice}>{totalAmount}$</Text>
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
            <Text style={[styles.TextInvoice, { fontSize: 18 }]}> {totalAmount} $</Text>
        </View>
        <View style={{ width: '100%', height: "40%" }}>
            <Button
                title="Place my Order"
                containerStyle={{
                    width: "93%",
                    height: "70%",
                    alignSelf: 'center',
                    elevation: 4,
                    marginTop: 50,
                }}
                buttonStyle={{
                    height: '100%',
                    backgroundColor: '#FEFEFF',
                    borderRadius: 15,

                }}
                titleStyle={{ color: '#6B50F6', fontSize: 14 }}
            />
        </View>
    </View>
)
export {TotalPayment};
export default function OrderDetail() {
    if (ListData) {
        var newData = [...ListData];
        // console.log('...........', newData);
    } else {
        console.log('ListData is undefined or not yet loaded.');
    }
    const [DataOrders, setDataorder] = useState(newData);
    const [value, setValue] = useState(0);
    const totalAmount = DataOrders.reduce((total, product) => {
        var quantity = value
        // Tổng giá trị sản phẩm = giá sản phẩm * số lượng
        return total + product.quantity * product.price;
    }, 0);
    //   delete
    const handleDeleteItem = (itemId) => {
        const updatedItems = DataOrders.filter((item) => item.id !== itemId);
        setDataorder(updatedItems);
    };
    const Items = ({ data }) => (
        <View style={[styles.item, styles.boxShadow]}>
            <View style={styles.photoFrame}>
                <Image style={styles.foodImage} source={data.item.image} />
            </View>
            <View style={styles.foodInfor}>
                <Text style={styles.menuName}> {data.item.name}</Text>
                <Text style={styles.RestaurantName}> Waroenk kita</Text>
                <Text style={styles.price}>{data.item.price}</Text>
            </View>
            <View style={styles.action}>
                <NumericInput
                    value={value}
                    onChange={() => setValue(value)}
                    onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                    totalWidth={80}
                    totalHeight={30}
                    iconSize={50}
                    step={1}
                    rounded
                    iconStyle={{ color: '#FFFFFF' }}
                    rightButtonBackgroundColor="#3F51B5"
                    leftButtonBackgroundColor="#BDBDBD"
                />
            </View>
        </View>
    )
    
    const FlatListItem = () => (
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
    )
    const Header = () => (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image source={require('../../assets/icons/IconBack.png')} />
            </TouchableOpacity>
            <Text style={styles.textTitle} selectionColor={'pink'}>Order details</Text>
        </View>
    )

    return (
        <SafeAreaView>
            <StatusBar hidden={true} />
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <FlatListItem />
                </View>
                <View style={styles.footer}>
                    <TotalPayment />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        margin: 10,
        rowGap: 10,
        backgroundColor: 'rbga(0,red,blue,0.5)',

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
        borderRadius: 15,
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
        flex: 4,
        justifyContent: 'center',
        alignItems: "center"

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
        marginTop: '3%',
        height: '30%',
        borderRadius: 10,
    },
    totalPayment: {
        lineHeight: 10,
        padding: 20,
        backgroundColor: '#6B50F6',
        width: '100%',
        height: '100%',
        borderRadius: 22,
        justifyContent: 'flex-start',
    },
    detailInvoid: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TextInvoice: {
        color: '#FEFEFF',
        fontSize: 14,
    },
    foodImage: {
        width: 100,
        height: 100,
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

