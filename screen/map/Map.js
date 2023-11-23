import React, { useState } from "react";

import {
    SafeAreaView,
    StyleSheet
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

export default function Map({ navigation }) {

    const [currentLocation, setCurrentLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    });

    const markerCoordinate = {
        latitude: 37.8,
        longitude: -122.4324,
    };

    const [coordinates, setCoordinates] = useState([]);

    return (
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})