import { StatusBar } from "expo-status-bar";
import react from "react";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView, ImageBackground, View, TouchableOpacity, Text, Image }
    from "react-native";

export default function ChatDetail() {

    const chatContents = [
        {
            they:"Just to order",
            me:"Okay, for what level of spiciness?"
        },
        {
            they:"Okay, wait a minute 👍 ",
            me:"Okay I'm waiting 👍"
        }
    ]
    return (
        <ImageBackground
            style={styles.backGround}
            source={require('../../assets/images/Pattern.png')}
            resizeMode="cover"
        >
            <StatusBar />
            <SafeAreaView>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/icons/IconBack.png')} />
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.chatText}>Chat</Text>
                    </View>

                    <TouchableOpacity style={styles.frameProfile}>
                        <Image source={require('../../assets/images/Klein.png')} />
                        <View style={{ width: '70%', alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={styles.nameText}>Name</Text>
                            <View style={styles.statusFrame}>
                                <Image source={require('../../assets/icons/Ellipse184.png')} />
                                <Text style={styles.statusText}>Online</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/icons/CallLogo.png')} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <ScrollView style={styles.chatContent}>
                        
                        <Text style={styles.chatContentThey}></Text>
                        <Text style={styles.chatContentMe}></Text>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}



const styles = StyleSheet.create({
    backGround: {
        width: '100%',
        height: "100%"
    },
    container: {
        margin: 20,
        marginTop: 50,
        rowGap: 20
    },
    chatText: {
        fontSize: 25,
        color: '#22242E',
        fontWeight: 'bold'
    },
    frameProfile: {
        justifyContent: 'space-around',
        height: 93,
        backgroundColor: "#FFF",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
        borderRadius: 22,
        columnGap: 30,
        elevation: 10,
    }

    ,
    statusFrame: {
        flexDirection: 'row',
        alignItems: "center",
        columnGap: 10,
    },
    nameText: {
        color: "#2242E",
        fontSize: 15,

    },
    statusText: {
        color: '#22242E',
        opacity: 0.3
    },
    chatContent:{
        backgroundColor:"pink",
        height:"60%"
    }
});



