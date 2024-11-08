import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const FlatgridItem = () => {
    const hotel = [
        {
            id: 1,
            title: "Intercontinental Hotel",
            imageurl: require("../assets/hotel1.jpg"),
            local: "Lagos, Nigeria",
            rate: "5.0",
            price: "$205",
            night: "/night"
        },
        {
            id: 2,
            title: "Naveda Hotel",
            imageurl: require("../assets/hotel2.jpg"),
            local: "Lagos, Nigeria",
            rate: "5.0",
            price: "$107",
            night: "/night"
        },
        {
            id: 3,
            title: "Oriental Hotel",
            imageurl: require("../assets/hotel3.jpg"),
            local: "Lagos, Nigeria",
            rate: "5.0",
            price: "$190",
            night: "/night"
        },
        {
            id: 4,
            title: "Federal Palace Hotel",
            imageurl: require("../assets/hotel4.jpg"),
            local: "Lagos, Nigeria",
            rate: "5.0",
            price: "$200",
            night: "/night"
        },
    ]
    return (
        <View style={styles.containner}>
            <FlatList data={hotel} numColumns={2}
                renderItem={({ item }) =>
                    <View style={styles.flatlistContainer}>
                        <Image source={item.imageurl} style={[styles.image, { height: 145, width: 145 }]} />
                        <View style={styles.detailhotel}>
                            <Text style={styles.title}>{item.title}</Text>
                            <View style={styles.rating}>
                                <AntDesign name="star" size={17} color="#FED201" />
                                <Text style={styles.rate}>{item.rate}</Text>
                                <Text style={styles.local}>{item.local}</Text>
                            </View>
                        </View>
                        <View style={styles.detailcost}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.price}>{item.price}</Text>
                                <Text style={styles.night}>{item.night}</Text>
                            </View>
                            <View style={styles.bookmark}>
                                <FontAwesome5 name="bookmark" size={22} color="black" />
                            </View>
                        </View>
                    </View>
                }
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default FlatgridItem

const styles = StyleSheet.create({
    containner: {
        marginTop: 10,
        marginHorizontal: 10,
    },
    flatlistContainer: {
        backgroundColor: "#fff",
        marginVertical: 10,
        marginHorizontal: 8,
        paddingVertical: 15,
        borderRadius: 10,
        width: 170,
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
    },
    image: {
        borderRadius: 11,
    },
    detailhotel: {
        paddingTop: 10,
        flexDirection: 'column',
    },
    rating: {
        flexDirection: 'row',
        paddingHorizontal:5,
    },
    title: {
        fontSize: 17,
        lineHeight: 23.8,
        fontWeight: '700',
        color: "#000",
        paddingBottom: 5,
        paddingHorizontal:8,
    },
    local: {
        paddingBottom: 5,
        fontSize: 15,
    },
    rate: {
        marginRight: 8,
        marginLeft: 2,
        fontSize: 15,
        fontWeight: '600',
        color: '#1AB65C',
    },
    price: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1AB65C',
        paddingRight: 10,
    },
    night:{
        paddingTop:3,
        fontSize: 14,
    },
    detailcost: {
        flexDirection: 'row',
    },
    bookmark: {
        paddingLeft: 10,
    }
})