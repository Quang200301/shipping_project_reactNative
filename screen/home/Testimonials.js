import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
export default function Testimonials() {
    return (
        <>
            <View style={styles.contenContainer}>
                <Image source={require('../../assets/backgroundImages/homeLogo.webp')} style={{ width: 60, height: 60, borderRadius: 12 }} />
                <View>
                    <Text style={styles.name}>Dianne Russell</Text>
                    <Text>12 April 2021</Text>
                    <Text>This Is great, So delicious!{'\n'} You Must Here, With Your family . . </Text>
                </View>
                <View>
                    <Entypo name="star" size={24} color="red" />
                </View>
            </View>
            <View style={styles.contenContainer}>
                <Image source={require('../../assets/backgroundImages/homeLogo.webp')} style={{ width: 60, height: 60, borderRadius: 12 }} />
                <View>
                    <Text style={styles.name}>Dianne Russell</Text>
                    <Text>12 April 2021</Text>
                    <Text>This Is great, So delicious!{'\n'} You Must Here, With Your family . . </Text>
                </View>
                <View>
                    <Entypo name="star" size={24} color="red" />
                </View>
            </View>
            <View style={styles.contenContainer}>
                <Image source={require('../../assets/backgroundImages/homeLogo.webp')} style={{ width: 60, height: 60, borderRadius: 12 }} />
                <View>
                    <Text style={styles.name}>Dianne Russell</Text>
                    <Text>12 April 2021</Text>
                    <Text>This Is great, So delicious!{'\n'} You Must Here, With Your family . . </Text>
                </View>
                <View>
                    <Entypo name="star" size={24} color="red" />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    contenContainer: {
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12
    },
    name: {
        fontWeight: '700'
    }
})