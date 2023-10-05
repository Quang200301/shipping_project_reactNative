import React from "react";
import {View,Text,Image, TouchableOpacity} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
const Footer=()=>{
    return(
        <View style={{width:"90%",height:85,alignSelf:"center",flexDirection:"row",backgroundColor:"#FFFFFF",justifyContent:"space-around",borderRadius:16,alignItems:"center"}}>
            <View style={{flexDirection:"row",gap:8}}>
                <FontAwesome name={"home"} size={28} color="blue"/>
            </View>
            <View>
            <FontAwesome name={"user"} size={28} color="blue"/>
            </View>
            <View>
            <FontAwesome name={"shopping-cart"} size={28} color="blue"/>
            </View>
            <View>
               
            <FontAwesome name={"comment"} size={28} color="blue"/>
            </View>
        </View>
    )
}
export default Footer;