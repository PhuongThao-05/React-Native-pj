import { FlatList, StyleSheet, Text,View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const ScreenCanceled = () => {
    const hotel = [
        {
            id: 1,
            title: "Intercontinental Hotel",
            imageurl: require("../assets/hotel1.jpg"),
            local: "Lagos, Nigeria",
            status: "Canceled & Refunded",
            content: "You canceled this hotel booking",
        },
        {
            id: 2,
            title: "Naveda Hotel",
            imageurl: require("../assets/hotel2.jpg"),
            local: "Lagos, Nigeria",
            status: "Canceled & Refunded",
            content: "You canceled this hotel booking",
        },
        {
            id: 3,
            title: "Oriental Hotel",
            imageurl: require("../assets/hotel3.jpg"),
            local: "Lagos, Nigeria",
            status: "Canceled & Refunded",
            content: "You canceled this hotel booking",
        },
        {
            id: 4,
            title: "Federal Palace Hotel",
            imageurl: require("../assets/hotel4.jpg"),
            local: "Lagos, Nigeria",
            status: "Canceled & Refunded",
            content: "You canceled this hotel booking",
        },
    ]
    return (
        <View style={styles.containner}>
            <FlatList data={hotel}
                renderItem={({ item }) =>
                    <View style={styles.flatlistContainer}>
                        <View style={styles.infohotel}>
                            <Image source={item.imageurl} style={[styles.image, { height: 91, width: 91 }]} />
                            <View style={styles.detailhotel}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.local}>{item.local}</Text>
                                <Text style={styles.status}>{item.status}</Text>
                            </View>
                        </View>
                        <View style={styles.infostatus}>
                            <View style={styles.line}></View>
                            <View style={styles.titlestatus}>
                            <AntDesign style={styles.warn} name="exclamationcircle" size={17} color="#F86666" />
                                <Text style={styles.content}>{item.content}</Text>
                            </View>
                        </View>
                    </View>
                }
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ScreenCanceled

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
        flexDirection: 'column',
    },
    infohotel: {
        flexDirection: 'row',
        marginBottom: 15,
    },

    image: {
        marginHorizontal: 10,
        borderRadius: 11,
    },
    detailhotel: {
        flexDirection: 'column',
        marginLeft: 8,
    },
    title: {
        fontSize: 15,
        lineHeight: 23.8,
        fontWeight: '700',
        color: "#000",
        paddingTop: 10,
        paddingBottom: 5,
    },
    local: {
        paddingBottom: 8,
        fontSize: 13.5,
    },
    status: {
        fontSize: 11,
        paddingVertical: 3,
        width:120,
        backgroundColor: '#FDDDDD',
        borderRadius: 6,
        textAlign: 'center',
        color: '#F86666',
    },
    infostatus: {
        marginHorizontal: 20,
    },
    line: {
        height: 1,
        backgroundColor:'#00000040',
    },
    titlestatus: {
        flexDirection: 'row',
        backgroundColor:'#FDDDDD',
        borderRadius:6,
        marginTop: 18,
        marginBottom: 8,
        paddingHorizontal:21,
        paddingVertical:2,
    },
    warn:{
        paddingTop:3.5,
    },
    content: {
        textAlign: 'center',
        lineHeight:16,
        paddingHorizontal: 5,
        paddingVertical: 5,
        fontSize: 11,
        color:'#F86666'
    },
})