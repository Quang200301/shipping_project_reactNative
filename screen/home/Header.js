import React from "react";
import { View,Text,Pressable,StyleSheet,TextInput } from "react-native";
import {FontAwesome} from "@expo/vector-icons";
const Header=()=>{
    return(
        
        <View style={{width:"95%",alignSelf:"center"}}>
        <View style={{flexDirection:"row",justifyContent:"space-around",paddingTop:20,width:"100%",alignItems:"center"}}>
            <Text style={{fontSize:40,fontWeight:"bold"}}>
                Find Your {'\n'}Favorite Food
            </Text>
            <FontAwesome style={{marginTop:30}} name={"bell-o"} size={28} color="red" />
        </View>

            <Pressable style={styles.Searchtext}>
                <View style={{backgroundColor:'#fff',
                flexDirection:'row',paddingVertical:16,
                borderRadius:18,
                paddingHorizontal:18,
                marginVertical:16,
                shadowColor:"#000",
                shadowOffset:{width:0,height:4},
                shadowOpacity:0.1,
                shadowRadius:7,
                flex:1,
                marginLeft:25
                }}>
                         <FontAwesome name="search" size={28} color={"#6b50f6"}/>
                        <TextInput style={{paddingLeft:8,fontSize:16,color:'#808080'}}
                        placeholder="What do you want to order ?"
                    
                        > 
                        </TextInput>
                </View>
                <FontAwesome name={"bars"} size={35} color="blue" style={{marginTop:25}}/>
            </Pressable>
            </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    Searchtext:{
        flexDirection:"row",
        justifyContent:"space-between",
        gap:15
        
    },
})