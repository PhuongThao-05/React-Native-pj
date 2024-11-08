import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const FlatlistItem = () => {
    const hotel = [
        {
            id: 1,
            title: "Intercontinental Hotel",
            imageurl: require("../assets/hotel1.jpg"),
            local: "Lagos, Nigeria",
            rate: "5.0",
            review: "(4,345 reviews)",
            price: "$205",
            night: "/night"
        },
        {
            id: 2,
            title: "Naveda Hotel",
            imageurl: require("../assets/hotel2.jpg"),
            local: "Lagos, Nigeria",
            rate: "5.0",
            review: "(4,345 reviews)",
            price: "$107",
            night: "/night"
        },
        {
            id: 3,
            title: "Oriental Hotel",
            imageurl: require("../assets/hotel3.jpg"),
            local: "Lagos, Nigeria",
            rate: "5.0",
            review: "(4,345 reviews)",
            price: "$190",
            night: "/night"
        },
        {
            id: 4,
            title: "Federal Palace Hotel",
            imageurl: require("../assets/hotel4.jpg"),
            local: "Lagos, Nigeria",
            rate: "5.0",
            review: "(4,345 reviews)",
            price: "$200",
            night: "/night"
        },
    ]
    return (
        <View style={styles.containner}>
            <FlatList data={hotel}
                renderItem={({ item }) =>
                    <View style={styles.flatlistContainer}>
                        <Image source={item.imageurl} style={[styles.image, { height: 91, width: 91 }]} />
                        <View style={styles.detailhotel}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.local}>{item.local}</Text>
                            <View style={styles.rating}>
                                <AntDesign name="star" size={17} color="#FED201" />
                                <Text style={styles.rate}>{item.rate}</Text>
                                <Text style={styles.review}>{item.review}</Text>
                            </View>
                        </View>
                        <View style={styles.detailcost}>
                            <View style={styles.cost}>
                                <Text style={styles.price}>{item.price}</Text>
                                <Text style={styles.night}>{item.night}</Text>
                            </View>
                            <View style={styles.bookmark}>
                            <FontAwesome5 name="bookmark" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                }
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default FlatlistItem

const styles = StyleSheet.create({
    containner: {
        marginTop: 10,
    },
    flatlistContainer: {
        backgroundColor: "#fff",
        marginVertical: 10,
        marginHorizontal: 21,
        paddingBottom: 14,
        paddingTop: 14,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: 'row',
    },
    image: {
        marginHorizontal: 10,
        borderRadius: 11,
    },
    detailhotel: {
        flexDirection: 'column',
        width: 180,
    },
    rating: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 16,
        lineHeight: 23.8,
        fontWeight: '700',
        color: "#000",
        paddingBottom: 10,
    },
    local: {
        paddingBottom: 5,
        fontSize:14,
    },
    rate: {
        marginRight: 8,
        marginLeft: 2,
        fontSize: 13.5,
        fontWeight: '600',
        color: '#1AB65C',
    },
    review: {
        fontSize: 13.5,
    },
    price: {
        fontSize: 17,
        fontWeight: '700',
        color: '#1AB65C',
        paddingRight: 10,
    },
    detailcost: {
        flexDirection:'column',
        paddingBottom: 5,
        paddingLeft: 10,
    },
    bookmark:{
        paddingTop:10,
        paddingLeft:10,
    }
})