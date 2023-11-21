import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Buy = ({ navigation }) => {
  const [parentNumber, setParentNumber] = useState(0);
  const reSetParentNumber = (number =0) => setParentNumber(number);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('DetailStack',{reSetParentNumber})}>
        <Text style={styles.title}>Change Number</Text>
      </TouchableOpacity>
      <Text style={styles.number}> Number: {parentNumber}</Text>
    </View>
  )
}

export default Buy

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    backgroundColor: 'blue',
    padding: 15,

  }
  , number: {
    fontSize: 50,
    color: 'red',
  }
})