import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import NumericInput from 'react-native-numeric-input';
import { Button } from '@rneui/themed';
import { ListData } from "../home/ListData.js";

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
const OrderDetail = () => {
    const [quantity, setQuantity] = useState({});
    const [value, setValue] = useState(0);

    const handleDeleteItem = (itemId) => {
        // Implement item deletion logic here
    };

    const handleDecrease = (itemId) => {
        if (quantity[itemId] > 1) {
            setQuantity((prevQuantity) => ({
                ...prevQuantity,
                [itemId]: (prevQuantity[itemId] || 1) - 1,
            }));
        }
    };

    const handleIncrease = (itemId) => {
        setQuantity((prevQuantity) => ({
            ...prevQuantity,
            [itemId]: (prevQuantity[itemId] || 0) + 1,
        }));
    };
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
};

export default OrderDetail;



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
    quantityButton: {
        paddingHorizontal: 8,
        fontSize: 18,
        backgroundColor: '#6B50F6',
        borderRadius: 8
    },
    quantityButtondes: {
        paddingHorizontal: 8,
        fontSize: 18,
        backgroundColor: '#E0E0E0',
        borderRadius: 8
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