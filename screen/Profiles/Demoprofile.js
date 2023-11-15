import react from 'react'
import { ScrollView,StyleSheet } from 'react-native-gesture-handler';

const DATA =[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
    {id:9},
    {id:10},
];
const ScrollViewSreen = ()=> {
    return (
        <scrollview>
            { DATA.map (Val =>{
                    return(
                        <View style={styles.card}>
                            <Text>{val.id}</Text>
                        </View>
                    )
                }
                    )
            }
        </scrollview>
    )
};
export default ScrollViewSreen;
const styles= StyleSheet.create [{
    card:{
        height:100,
        backgroundColor:"#30A2FF",
        marginTop: 10,
        justifyconten:'center',
        alighItém:'center',
        marginHorizontal:10,
    }
}]