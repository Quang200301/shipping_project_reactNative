import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
const Detail = ({navigation}) => {
  return (
    <View>
      <Text>Detail</Text>
      <TouchableOpacity styles={{padding:10,}} onPress ={()=> navigation.goBack()}>
        <Text>go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})