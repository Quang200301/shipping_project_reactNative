import { View, Text, StyleSheet, SafeAreaView, TextInput, ImageBackground, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function SignUp({ navigation }) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [PassWord, setPassWord] = useState('');

    const handleSignUp = () => {
        if (userName === '' || email === '' || PassWord === '') {
            Alert.alert('please input data')
        } else {
            AsyncStorage.setItem('userName', userName)
                .then(() => AsyncStorage.setItem('email', email))
                .then(() => AsyncStorage.setItem('passWord', PassWord))
                .then(() => {
                    navigation.navigate('signin');
                })
                .catch(error => {
                    console.error('Error saving data to AsyncStorage:', error);
                });
        }

    }
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../../assets/Signup1.png')} resizeMode="contain" style={styles.image} />
            <Text style={{ textAlign: 'center', paddingTop: 30, fontSize: 25, fontWeight: '800' }}>Sign Up For Free</Text>
            <View style={{ paddingTop: 30 }}>
                <View style={styles.inputContainer}>
                    <AntDesign name="user" size={24} color="#6B50F6" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setUserName}
                        placeholder="userName"

                    />
                </View>
                <View style={styles.inputContainer}>
                    <AntDesign name="mail" size={24} color="#6B50F6" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        placeholder="Email"

                    />
                </View>
                <View style={styles.inputContainer}>

                    <AntDesign name="lock" size={24} color="#6B50F6" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassWord}
                        placeholder="*****"
                    />
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 18, gap: 5 }}>
                    <Entypo name="chevron-with-circle-down" size={19} color="#6B50F6" />
                    <Text>Keep Me Signed In</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 18, gap: 5, paddingTop: 8 }}>
                    <Entypo name="chevron-with-circle-down" size={19} color="#6B50F6" />
                    <Text>Email Me About Special Pricing </Text>
                </View>
                <TouchableOpacity style={styles.LoginButton} onPress={() => handleSignUp()} >
                    <Text style={{ fontSize: 20, fontWeight: '400' }}>Create Account</Text>
                </TouchableOpacity >
                <Text style={{ marginLeft: 100, paddingTop: 8, color: '#6B50F6', borderBottomWidth: 1, borderBottomColor: '#6B50F6', width: 170 }} onPress={() => navigation.navigate('signin')}>already have an account?</Text>
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    input: {
        flex: 1
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginHorizontal: 18,
        marginVertical: 12,
        borderWidth: 1,
        borderRadius: 15,
        padding: 8,
        gap: 8,
        backgroundColor: 'white'
    },
    LoginButton: {
        backgroundColor: '#6B50F6',
        height: 60,
        width: 190,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 100,
        marginTop: 20,
        borderRadius: 15
    }
});