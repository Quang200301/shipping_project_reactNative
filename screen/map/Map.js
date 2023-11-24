import React, { useState } from "react";

import {
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Text
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

export default function Map({ route, navigation }) {

    const [addressChild, setAddress] = useState('99 To Hien Thanh, Phuoc My, Son Tra, DaNang 550000 Vietnam');
    const [searchText, setSearchText] = useState("");
    const [currentLocation, setCurrentLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    });

    const markerCoordinate = {
        latitude: 37.8,
        longitude: -122.4324,
    };

    const [showSetLocationButton, setShowSetLocationButton] = useState(true);
    const [coordinates, setCoordinates] = useState([]);

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.iconBack} onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/icons/IconBack.png')} />
            </TouchableOpacity>

            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={markerCoordinate}
                    title="Đây là đánh dấu"
                    description="Vị trí cụ thể"
                    image={require("../../assets/icons/mapIcons/lct.png")}
                />
                <Marker
                    coordinate={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude,
                    }}
                    title="Vị trí hiện tại của bạn"
                    description="Bạn đang ở đây"
                />
                {coordinates.length > 0 && (
                    <Polyline
                        coordinates={coordinates}
                        strokeWidth={3}
                        strokeColor="blue"
                    />
                )}
            </MapView>

            <View style={styles.searchBar}>
                <TouchableOpacity style={styles.searchIcon}>
                    <Image source={require('../../assets/icons/mapIcons/search.png')} />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Find Your Location"
                    placeholderTextColor={'#6B50F6'}
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                />
            </View>

            <View style={styles.location}>
                <Text style={styles.yourLocationText}>Your Location</Text>
                <View style={styles.locationAddress}>
                    <Image source={require('../../assets/images/locationIcon.png')} resizeMode="contain" />
                    <Text style={styles.addressText}>{addressChild} </Text>
                </View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        navigation.navigate('Shipping', { addressChild })
                    }}
                >
                    <Text style={styles.setLocationText}>Set Location</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconBack: {
        position: 'absolute',
        zIndex: 1,
        left: 15,
        top: 10
    },
    searchBar: {
        position: "absolute",
        top: 70,
        left: 15,
        right: 15,
        height: 69,
        backgroundColor: "white",
        borderRadius: 22,
        elevation: 5,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchIcon: {
        padding: 20,
        marginLeft: -19
    },
    input: {
        flex: 1,
        height: "100%",
        fontSize: 12,
        letterSpacing: 0.5,
        opacity: 0.4,
        color: '#6B50F6',
    },
    location: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        right: 15,
        height: 181,
        backgroundColor: '#fff',
        elevation: 4,
        borderRadius: 22,
        padding: 15,
        rowGap: 10
    },
    yourLocationText: {
        opacity: 0.3,
        fontSize: 15,
        fontWeight: '500'
    },
    locationAddress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        columnGap: 5
    },
    addressText: {
        fontSize: 15,
        fontWeight: '500',
        maxWidth: '95%',
        textAlign: "left",
    },
    btn: {
        position: 'absolute',
        left: 15,
        right: 15,
        bottom: 15,
        backgroundColor: '#6B50F6',
        height: 57,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 4
    },
    setLocationText: {
        color: '#fff',
        fontWeight: '800',
        letterSpacing: 0.5,
        fontSize: 14,
    }
})