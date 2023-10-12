import React from "react";
import {View,Text,StyleSheet,Pressable,TextInput, ScrollView} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
export default function SearchPage(){
    return(
        <>
            <View style={{ width: "100%",alignItems:"center" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", paddingTop: 20, width: "100%", alignItems: "center" }}>
                    <Text style={{ fontSize: 40, fontWeight: "bold" }}>
                        Find Your {'\n'}Favorite Food
                    </Text>
                    <FontAwesome style={{ marginTop: 30,paddingHorizontal:16,backgroundColor:"#FAFAFA",height:50,width:60,borderRadius:25}} name={"bell-o"} size={28} color="red" />
                </View>

                <Pressable style={styles.Searchtext}>
                    <View style={{
                        backgroundColor: '#fff',
                        flexDirection: 'row', paddingVertical: 16,
                        borderRadius: 18,
                        paddingHorizontal: 18,
                        marginVertical: 16,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 7,
                        flex: 1,
                        marginHorizontal:16
                    }}>
                        <FontAwesome name="search" size={28} color={"#6b50f6"} />
                        <TextInput style={{ paddingLeft: 8, fontSize: 16, color: '#808080' }}
                            placeholder="What do you want to order ?"

                        >
                        </TextInput>
                    </View>
                </Pressable>
                <View>
                    
                    {
                        // category.map((category,index)=>{
                        //    return<View
                           
                        //    >

                        //    </View> 
                        // })
                    }
                     <Text style={{ marginRight:36,
                        borderRadius:8,
                        paddingHorizontal:16,
                        paddingVertical:10,
                        backgroundColor:"red",
                        shadowColor:"#000",
                        shadowOffset:{width:0,height:4},
                        shadowOpacity:0.1,
                        shadowRadius:7,
                        marginVertical:16,
                        }}>Restuarant</Text>
                 
                   
                </View>
            </View>
        </>
    )
}
const styles=StyleSheet.create({
    Searchtext: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 15

    },
})