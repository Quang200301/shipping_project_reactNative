
import { View, Text, StyleSheet, SafeAreaView, TextInput, ImageBackground, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SignIn({ navigation }) {
    const [LoginEmail, setLoginEmail] = useState('');
    const [LoginPassword, setLoginPassword] = useState('');

    const handleLogin = async () => {
        try {
            const saEmail = await AsyncStorage.getItem('email');
            const saPassword = await AsyncStorage.getItem('passWord');

            if (LoginEmail === saEmail && LoginPassword === saPassword) {
                navigation.navigate('home');
            } else {
                Alert.alert('There are error in your email or password');
            }
        } catch (error) {
            console.error('Error retrieving data from AsyncStorage:', error);
        }
    }
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../../assets/Signup1.png')} resizeMode="contain" style={styles.image} />
            <Text style={{ textAlign: 'center', paddingTop: 30, fontSize: 25, fontWeight: '800' }}>Login To Your Account</Text>
            <View style={{ paddingTop: 30 }}>
                <View style={styles.inputContainer}>
                    <AntDesign name="mail" size={24} color="#6B50F6" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setLoginEmail}
                        placeholder="Email"

                    />
                </View>
                <View style={styles.inputContainer}>

                    <AntDesign name="lock" size={24} color="#6B50F6" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setLoginPassword}
                        placeholder="*****"
                        secureTextEntry={true}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 600 }}>Or Continue With</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 18, paddingTop: 8, justifyContent: 'space-between', marginVertical: 12, marginHorizontal: 18, padding: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', gap: 8, alignItems: 'center', backgroundColor: '#F4F4F4', height: 50, width: 140, padding: 10, justifyContent: 'center', borderRadius: 12 }}>
                        <Entypo name="facebook-with-circle" size={24} color="#3C5A9A" />
                        <Text>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', gap: 8, alignItems: 'center', backgroundColor: '#F4F4F4', height: 50, width: 140, padding: 10, justifyContent: 'center', borderRadius: 12 }}>
                        <FontAwesome5 name="google" size={24} color="#3C5A9A" />
                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ marginLeft: 100, paddingTop: 8, color: '#6B50F6', borderBottomWidth: 1, borderBottomColor: '#6B50F6', width: 150 }} onPress={() => navigation.navigate('signin')}>Forgot Your Password?</Text>
                <TouchableOpacity style={styles.LoginButton} onPress={() => handleLogin()}>
                    <Text style={{ fontSize: 20, fontWeight: '400' }}>Login</Text>
                </TouchableOpacity >
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    input: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
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
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 100,
        marginTop: 20,
        borderRadius: 15
    }
});