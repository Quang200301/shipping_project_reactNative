import react from "react";
import {View,Text,StyleSheet,TextInput} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
const Home=()=>{
    return(
        <View style={{flex:1,width:"95%",alignItems:"center"}}>
            <View style={{flexDirection:"row",justifyContent:"space-around",paddingTop:20,width:"100%",alignItems:"center"}}>
            <Text style={{fontSize:40,fontWeight:"bold"}}>
                Find Your {'\n'}Favorite Food
            </Text>
            <FontAwesome style={{marginTop:30}} name={"bell-o"} size={28} color="red" />
            </View>
                <View style={{backgroundColor:'#fff',
                flexDirection:'row',paddingVertical:16,
                borderRadius:8,
                paddingHorizontal:16,
                marginVertical:16,

                shadowColor:"#000",
                shadowOffset:{width:0,height:4},
                shadowOpacity:0.1,
                shadowRadius:7,
                }}>
                    
                    <TextInput style={{paddingLeft:8,fontSize:16,color:'#808080'}}
                    placeholder="search"
                   
                    >
                        
                    </TextInput>
                </View>
           
        </View>
    )
}
export default Home;
const styles=StyleSheet.create({

})