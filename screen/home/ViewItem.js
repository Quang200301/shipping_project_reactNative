import React from "react";
import { Text, FlatList, Pressable, Image, ScrollView, StyleSheet, View } from "react-native";
import { ListData, NearestData } from "./ListData";
import Header from "./Header";
const ViewItem = () => {

    const restaurantItems = ({ item }) => (
        <Pressable style={styles.itemRestaurant} >
            <Image source={item.image} style={{ width: 150, height: 150, resizeMode: "center" }} />
            <Text>{item.name}</Text>
        </Pressable>

    )

    return (
        <>
            <Header />
            <ScrollView>

                <View style={{ flex: 1, width: "90%", alignSelf: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "600", marginHorizontal: 16 }}>Populer Restaurant</Text>
                    <Text>
                        <FlatList
                            style={{ width: "100%" }}
                            data={ListData}
                            renderItem={({ item }) =>
                                <Pressable
                                    style={{
                                        backgroundColor: "#FFFFFF",
                                        shadowColor: "#000",
                                        shadowOffset: { width: 0, height: 4 },
                                        shadowOpacity: 0.1,
                                        shadowRadius: 7,
                                        borderRadius: 16,
                                        marginVertical: 16,
                                        alignItems: "center",
                                        paddingHorizontal: 8,
                                        paddingVertical: 26,
                                        alignSelf: "center",

                                    }}>

                                    <Image source={item.image} style={{ width: 150, height: 150, resizeMode: "center" }} />
                                    <Text>{item.time}</Text>
                                </Pressable>
                            }
                            numColumns={2}
                            columnWrapperStyle={{
                                justifyContent: "space-between",
                                gap: 10
                            }}

                        />
                    </Text>

                    {/* Show reastaurant --------------------------*/}
                    <Text style={styles.Nearest}>Nearest Restaurant</Text>
                    <View   >
                        <FlatList
                            style={styles.flatListContainer}
                            data={NearestData}
                            renderItem={restaurantItems}
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: 'space-between', gap: 10 }}
                        />
                    </View>
                </View>
            </ScrollView>
        </>

    )
}
export default ViewItem;
const styles = StyleSheet.create({
    Nearest: {
        fontSize: 20,
        fontWeight: "600",

    },
    itemRestaurant: {
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 16,
        marginVertical: 10,
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 26,
        alignSelf: "center",

    },
    flatListContainer: {
        width: "100%",
        margin: 8,
        flexDirection: 'row',
    },
})