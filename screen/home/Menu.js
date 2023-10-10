import React from "react";
import {View,FlatList, Pressable,StyleSheet,Image,Text} from "react-native"
import { MenuData } from "./ListData";
const Menu =()=>{
    return(
        <View style={Styles.menuItem}>
            <FlatList
            
                data={MenuData}
                renderItem={({item})=>
                <Pressable style={Styles.menuData}>
                    <Image source={item.image}  style={{ width: 100, height: 100 }}/>
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.price}$</Text>
                    </View>
                    
                </Pressable>
            }
            />
        </View>
        
         
        
    )
}
export default Menu;
Styles=StyleSheet.create({
    menuItem:{
        flex:1,
  
        
      },
    menuData:{
        backgroundColor: "#FFF",
        flexDirection:"row",
        borderRadius: 22,
        fontWeight:"700",
        margin: 8, // Khoảng cách giữa các mục
        padding: 3,
        gap:8
  
        
    }
})