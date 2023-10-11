import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    View,
    TouchableOpacity,
    Text,
    Image
} from "react-native";

const OrderDetail = () => {
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
                        <View style={styles.item}>
                            <View style={styles.photo}>
                                <Image source={require('../../assets/icons/IconBack.png')} />
                            </View>
                            <View style={styles.foodInfor}>
                                <Text style={styles.menuName}> Spacy fresh crab</Text>
                                <Text style={styles.RestaurantName}> Waroenk kita</Text>
                                <Text style={styles.price}>$ 35</Text>
                            </View>
                            <View style={styles.action}>
                            <Image source={require('../../assets/icons/IconBack.png')} />
                            <Text style={styles.quantity}>2</Text>
                            <Image source={require('../../assets/icons/IconBack.png')} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text> footer</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}
export default OrderDetail;

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    header: {
        height: '17%',
        rowGap: 15,
        alignItems: 'flex-start'
    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    content: {
        height: '63%',
        backgroundColor: 'red',
    },
    flatListItem: {
        backgroundColor: 'pink',
        width: '100%',
        height: "100%"
    },
    item: {
        width: '100%',
        height: 103,
        elevation: 4,
        backgroundColor: '#FFF',
        borderRadius: 22,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    photo:{
        flex:2,
        backgroundColor:'red'
    },
    foodInfor:{
        flex:3,
        backgroundColor:'green'

    },
    action:{
        flex:2,
        backgroundColor:'yellow'

    },
    footer: {
        height: '20%',
        backgroundColor: 'yellow',
    }
})



// const [DataOrders, setDataOrder] = useState([
//     {
//         id: 1,
//         meNuName: "Spacy fresh crab",
//         restaurantName: "Waroenk kita",
//         image: require(''),
//         price: 35,
//         quantity: 2,
//     },
//     {
//         id: 2,
//         meNuName: "Spacy fresh crab",
//         restaurantName: "Waroenk kita",
//         image: require(''),
//         price: 35,
//         quantity: 2,
//     },
//     {
//         id: 3,
//         meNuName: "Spacy fresh crab",
//         restaurantName: "Waroenk kita",
//         image: require(''),
//         price: 35,
//         quantity: 2,
//     }
// ]);
