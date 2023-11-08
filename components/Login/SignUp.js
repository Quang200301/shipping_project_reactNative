import { View, Text, StyleSheet, SafeAreaView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function SignUp() {
    const [text, onChangeText] = React.useState('Useless Text');
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/Signup1.png')} resizeMode="contain" style={styles.image} />
            <Text style={{ textAlign: 'center', paddingTop: 30, fontSize: 25, fontWeight: '800' }}>Sign Up For Free</Text>
            <View style={{ paddingTop: 30 }}>
                <View style={styles.inputContainer}>
                    <AntDesign name="user" size={24} color="#6B50F6" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="userName"

                    />
                </View>
                <View style={styles.inputContainer}>
                    <AntDesign name="mail" size={24} color="#6B50F6" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Email"

                    />
                </View>
                <View style={styles.inputContainer}>

                    <AntDesign name="lock" size={24} color="#6B50F6" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="PassWord"
                    />
                </View>
                <View style={{flexDirection:'row', marginHorizontal: 18,gap:5}}>
                    <Entypo name="chevron-with-circle-down" size={19} color="#6B50F6" />
                    <Text>Keep Me Signed In</Text>
                </View>
                <View  style={{flexDirection:'row', marginHorizontal: 18,gap:5,paddingTop:8}}>
                    <Entypo name="chevron-with-circle-down" size={19} color="#6B50F6" />      
                    <Text>Email Me About Special Pricing </Text>
                </View>
                <TouchableOpacity style={styles.LoginButton}>
                    <Text>Create Account</Text>
                </TouchableOpacity>
                <Text style={{ marginLeft:100,paddingTop:8,color:'#6B50F6',borderBottomWidth:1,borderBottomColor: '#6B50F6',width:170}}>already have an account?</Text>
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    input: {
       flex:1
    },
    container: {
        flex: 1,
    },
    image: {
        width: 200,
        height: 300,
        textAlign: 'center',
        marginLeft: 90

    },
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginHorizontal: 18,
        marginVertical: 12,
        borderWidth: 1,
        borderRadius: 15,
        padding:8,
        gap:8,
        backgroundColor:'white'
    },
    LoginButton:{
        backgroundColor:'#6B50F6',
        height:60,
        width:160,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:100,
        marginTop:20,
        borderRadius:15
    }
});