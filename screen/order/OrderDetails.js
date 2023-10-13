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



const Items = () => (
    <View style={styles.item}>
        <View style={styles.photoFrame}>
            <Image style={styles.foodImage} source={require('../../assets/foodImages/foodimage1.png')} />
        </View>
        <View style={styles.foodInfor}>
            <Text style={styles.menuName}> Spacy fresh crab</Text>
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
                        <Items />
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
        margin: 10,
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
        height: '60%',
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
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
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
    footer: {
        height: '23%',
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
