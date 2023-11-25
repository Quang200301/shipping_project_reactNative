import { View, Text, StyleSheet, TextInput, Image, Pressable, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
// import Menu from "./Menu";
import ProductCart from "../order/ProductCart";
const YourOrder = ({ navigation }) => {
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={require('../../assets/backgroundImages/background.png')}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text
                        style={{ fontSize: 31, fontWeight: '900', letterSpacing: 0.7 }}
                    >
                        Find Your {'\n'}Favorite Food
                    </Text>
                    <View
                        style={{ width: 45, height: 45, backgroundColor: '#fff', elevation: 4, justifyContent: "center", alignItems: 'center', borderRadius: 15 }}
                    >
                        <FontAwesome style={{}} name={"bell-o"} size={24} color="#6b50f6" />
                    </View>
                </View>

                <View style={styles.search_Filter}>
                    <View style={styles.searchFrame}>
                        <TouchableOpacity style={styles.searchIcon}>
                            <FontAwesome name="search" size={24} color={"#6b50f6"} />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            placeholder="What do you want to order ?"
                            clearButtonMode="always"
                        />
                    </View>
                    {/* <FontAwesome name={"bars"} size={35} color="blue" style={{ marginTop: 25 }} /> */}
                    <Pressable
                        onPress={() => { navigation.navigate("searchs") }}
                        style={{ width: 49, height: 50, backgroundColor: '#ECEAFC', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}
                    >
                        <Image source={require('../../assets/icons/FilterSearch.png')} />
                    </Pressable>
                </View>

                <View style={styles.listItems}>

                    <View style={styles.item}>
                    </View>

                </View>

            </SafeAreaView>
        </ImageBackground>

    )
}
export default YourOrder;
const styles = StyleSheet.create({

    container: {
        marginTop: '10%',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    header: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    Searchtext: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    search_Filter: {
        height: 50,
        flexDirection: 'row',
        columnGap: 10,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    searchFrame: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        backgroundColor: '#F0EDFF',
        alignItems: 'center',
        borderRadius: 15,
        columnGap: 14
    },
    searchIcon: {
        padding: 10
    },
    input: {
        height: '100%',
        flex: 1
    }
    ,
    listItems: {
        marginTop:20,
        paddingHorizontal: 10,
    }   
    ,
    item: {
        width: '100%',
        backgroundColor: 'white',
        elevation: 4,
        height: 103
    }
})