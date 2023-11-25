import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import CardItem from './CardItem';
import Testimonials from './Testimonials';
import { addItem } from "../../components/features/counterSlice";
import { useSelector, useDispatch } from 'react-redux';
const DetailPage = ({ navigation, route }) => {
    const { item } = route.params;
    const dispatch = useDispatch();

    const addedItemss = useSelector((state) => state.cart.cart);
    console.log('âddd=>', addedItemss)
    const addToCart = item => {
        dispatch(addItem(item));
    };
    return (
        <>
            <View style={{ flex: 1 }}>
                <ParallaxScrollView
                    backgroundColor="grey"
                    contentBackgroundColor="#EEEEEE"
                    parallaxHeaderHeight={300}
                    stickyHeaderIndices={[0]}
                    renderForeground={() => (
                        <View style={{ borderRadius: 24 }} >
                            <Image source={item.image} style={{ width: '100%', height: '100%' }} />
                        </View>
                    )}>
                    <View style={{ borderRadius: 22 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 22, paddingTop: 18 }}>
                            <Text style={{ fontSize: 17, backgroundColor: '#B2DFDB', width: 80, height: 35, textAlign: 'center', paddingTop: 4, borderRadius: 12, color: '#6B50F6' }}>Populer</Text>
                            <View style={{ flexDirection: 'row', gap: 34 }}>
                                <FontAwesome5 name="map-marker-alt" size={24} color="#448AFF" />
                                <AntDesign name="heart" size={24} color="red" />
                            </View>
                        </View>  
                        <Text style={{ fontSize: 30, fontWeight: '800', marginHorizontal: 22, paddingTop: 18 }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', paddingTop: 10, marginHorizontal: 22, gap: 8, paddingTop: 18 }}>
                            <FontAwesome5 name="map-marker-alt" size={24} color="#448AFF" />
                            <Text>{item.km} Km</Text>
                            <View style={{ flexDirection: 'row', marginLeft: 40, gap: 8 }}>
                                <FontAwesome name="star-half-o" size={24} color="#2ECF80" />
                                <Text>{item.rating} Rating</Text>
                            </View>

                        </View>
                        <Text style={{ fontSize: 17, fontWeight: '400', marginHorizontal: 22, paddingTop: 18 }}>{item.description}</Text>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 22, paddingTop: 18 }}>
                                <Text style={{ fontWeight: '700', fontSize: 18 }}>Populer Menu</Text>
                                <Text onPress={() => navigation.navigate("allview")} style={{ fontWeight: '700', fontSize: 18, color: '#00FF66' }}>View All</Text>
                            </View>
                            <View>
                                <CardItem />
                            </View>
                            <Text style={{ fontWeight: '700', fontSize: 18, marginHorizontal: 22, paddingTop: 8 }}>Testimonials</Text>
                            <View>
                                <Testimonials />
                            </View>
                        </View>
                    </View>

                </ParallaxScrollView>

            </View>
            <TouchableOpacity style={styles.addTochart}>
                <Text style={{color:'white',fontSize:14,fontWeight:'600'}} onPress={() => addToCart(item)}>Add To Chart</Text>
            </TouchableOpacity>
        </>

    )
}
export default DetailPage;
const styles = StyleSheet.create({
    addTochart: {
        position: 'absolute',
        height: 25,
        backgroundColor: '#6B50F6',
        width: '90%',
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'179%',
        borderRadius:15
    }
})