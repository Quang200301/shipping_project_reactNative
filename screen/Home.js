import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      {/* <Text>Home</Text> */}
      <TouchableOpacity styles={{padding:10, backgroundColor:'pink'}} onPress ={()=> navigation.navigate('Detail')}>
        <Text>go to Detail</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    touchNavigate:{
        backgroundColor:'pink',
        borderRadius:10,
        padding:10,
        marginTop:10,
    }
})