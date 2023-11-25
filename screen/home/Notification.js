import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default function Notification({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Ionicons name="md-chevron-back" size={28} color="black" onPress={()=> navigation.goBack()}/>
            <Text style={styles.notification}>Notification</Text>
            <View style={styles.conten} >
                <View style={{
                    flexDirection: 'row', backgroundColor: 'white',
                    borderRadius: 12,
                    height: 120,
                    justifyContent: 'center',
                    alignItems: 'center',  marginVertical:8,justifyContent:'space-around'
                }}>
                    <FontAwesome name="chevron-circle-down" size={34} color="green" />
                    <Text>Your order has been take by the drive </Text>
                </View>
                <View style={{ flexDirection: 'row',backgroundColor: 'white',
                    borderRadius: 12,
                    height: 120,
                    justifyContent: 'center',
                    alignItems: 'center',  marginVertical:8,justifyContent:'space-around' }}>
                    <SimpleLineIcons name="like" size={34} color="yellow" />
                    <Text>Topup for $100 was successful  </Text>
                </View>
                <View style={{ flexDirection: 'row',backgroundColor: 'white',
                    borderRadius: 12,
                    height: 120,
                    justifyContent: 'center',
                    alignItems: 'center',  marginVertical:8 ,justifyContent:'space-around'}}>
                    <MaterialIcons name="cancel" size={34} color="red" />
                    <Text>Your order has been canceled  </Text>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        marginHorizontal: 20
    },
    conten: {
    },
    notification: {
        fontSize: 20,
        fontWeight: '700'
    }
})