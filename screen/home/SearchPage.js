import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { ListData } from "./ListData";
export default function SearchPage() {
    const [selectedCategory, setSelectedCategory] = useState(null);
       
        const handleCategorySelect = (category) => {
            setSelectedCategory(category);
        };
   
    return (
        <>
            <View style={{ width: "100%",backgroundColor:"#90A4AE" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", paddingTop: 20, width: "100%", alignItems: "center" }}>
                    <Text style={{ fontSize: 40, fontWeight: "bold" }}>
                        Find Your {'\n'}Favorite Food
                    </Text>
                    <FontAwesome style={{ marginTop: 30, paddingHorizontal: 16, backgroundColor: "#FAFAFA", height: 50, width: 60, borderRadius: 25 }} name={"bell-o"} size={28} color="#6B50F6" />
                </View>

                <Pressable style={styles.Searchtext}>
                    <View style={{
                        backgroundColor: '#ECEFF1',
                        flexDirection: 'row', paddingVertical: 16,
                        borderRadius: 18,
                        paddingHorizontal: 18,
                        marginVertical: 16,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 7,
                        flex: 1,
                        marginHorizontal: 16
                    }}>
                        <FontAwesome name="search" size={28} color={"#6b50f6"} />
                        <TextInput style={{ paddingLeft: 8, fontSize: 16, color: '#6B50F6' }}
                            placeholder="What do you want to order ?"

                        >
                        </TextInput>
                    </View>
                </Pressable>
                <Text style={styles.categoryName}> Type </Text>
                <View style={styles.filterSearch}>
                {selectedCategory === null ? (
                    <>
                        <TouchableOpacity
                            style={styles.filtername}
                            onPress={() => handleCategorySelect('haisan')}
                        >
                            <Text style={{ color: 'white' }}>Hải sản </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.filtername}
                        onPress={() => handleCategorySelect('thitkho')}
                    >
                        <Text style={{ color: 'white' }}>Đặc sản Rừng </Text>
                    </TouchableOpacity>
                    </> 
                    ) : (
                        <>
                        <Text style={styles.categoryCate}>{selectedCategory} Phổ biến</Text>
                            {ListData
                                .filter((item) => item.category === selectedCategory)
                                .map((item) => (
                                    <TouchableOpacity
                                        style={styles.DataCategory}
                                        key={item.name}
                                        onPress={() => handleCategorySelect(item.category)}
                                    >
                                        <View style={styles.CategoryContent}>
                                            <Image source={item.image} style={{ width: 100, height: 100, resizeMode: "center" }} />
                                           <View>
                                                <Text>{item.name}</Text>
                                                <Text>{item.time}</Text>
                                           </View>
                                           <Text style={{color:"#6B50F6",fontSize:20,fontWeight:"bold"}}> {item.price}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))
                            }
                        </>
                    )}


                </View>
                <View>
                    <Text style={styles.categoryLocate}>Location</Text>
                    <View style={styles.filterSearch}>
                        <Text style={styles.filtername}>1 Km</Text>
                        <Text style={styles.filtername}> {'>'}10 Km</Text>
                        <Text style={styles.filtername}> {'<'}10 Km</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.categoryFood}>Food</Text>
                    <View style={styles.filterSearch}>
                        <Text style={styles.filtername}>Cake</Text>
                        <Text style={styles.filtername}>Soup</Text>
                        <Text style={styles.filtername}>Main Couse</Text>
                        <Text style={styles.filtername}>Appetizer</Text>
                        <Text style={styles.filtername}>Dessert</Text>

                    </View>
                </View>
                <View style={styles.Searchbuttom}>
                    <TouchableOpacity onPress={() => handleSearch()}>
                        <Text style={styles.search}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    Searchtext: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 15

    },
    filterSearch: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: 16,
        flexWrap: 'wrap',

    },
    filtername:
    {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "#00FF66",
        borderRadius: 16,
        color: '#6B50F6',
    },
    categoryName: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 16,
       



    },
    categoryLocate: {
        marginHorizontal: 16,
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 15
    },
    categoryFood: {
        marginHorizontal: 16,
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 15
    },
    search: {
        color: '#FEFEFF',
    },
    Searchbuttom: {
        padding: 18,
        backgroundColor: '#6B50F6',
        marginVertical: 120,
        marginHorizontal: 16,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',

    },
    categoryCate:{
        backgroundColor:'#66BB6A',
        fontSize:30,
        fontWeight:"bold",
        color:'white',
        borderRadius:16,
        width:280,
        textAlign:'center',
        padding:10,
        marginVertical:23

    },
    DataCategory:{
        backgroundColor:"#FFFFFF",
        padding: 10,
        marginVertical: 15,
        borderRadius: 16,
        width:"90%"
    },
    CategoryContent:{
        marginHorizontal:16,
        flexDirection:"row",
        gap:20,
        marginStart:5
       
    }
})