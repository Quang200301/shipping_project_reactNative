import React from "react";
import {View, Text,FlatList,Image,Pressable} from "react-native";
import { ListData } from "./ListData";
const CardItem=()=>{
    return(
        <View style={{marginLeft:20}}>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={ListData}
            renderItem={({item})=>
            <Pressable
            style={{
            backgroundColor:"#FFFFFF",
            shadowColor:"#000",
            shadowOffset:{width:0,height:4},
            shadowOpacity:0.1,
            shadowRadius:7,
            borderRadius:16,
            marginVertical:16,
            alignItems:"center",
            paddingHorizontal:8,
            paddingVertical:26,
            alignSelf:"center",
            marginRight: 16,

        
           
            }}
            >
                <Image source={item.image} style={{width:150,height:150,resizeMode:"center"}}/>
                <Text>{item.time}</Text>
           </Pressable>}
          
          
         
           />
        
            
            
          
        </View>
        
    )
}
export default CardItem;