import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Buy = ({navigation}) => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Buy</Text>

        
    </View>
  )
}

export default Buy

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:30,
        color:'green',
    }
})