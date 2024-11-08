import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, Modal } from 'react-native'
import React from 'react'
import BottomSheet from 'react-native-simple-bottom-sheet';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const ScreenUpcoming = () => {
    const navigation = useNavigation();
    const handleTicket = () => { navigation.navigate("ViewTicket") };
    const hotel = [
        {
            id: 1,
            title: "Intercontinental Hotel",
            imageurl: require("../assets/hotel1.jpg"),
            local: "Lagos, Nigeria",
            status: "Paid",
        },
        {
            id: 2,
            title: "Naveda Hotel",
            imageurl: require("../assets/hotel2.jpg"),
            local: "Lagos, Nigeria",
            status: "Paid",
        },
        {
            id: 3,
            title: "Oriental Hotel",
            imageurl: require("../assets/hotel3.jpg"),
            local: "Lagos, Nigeria",
            status: "Paid",
        },
        {
            id: 4,
            title: "Federal Palace Hotel",
            imageurl: require("../assets/hotel4.jpg"),
            local: "Lagos, Nigeria",
            status: "Paid",
        },
    ]
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
    const handlePressopen = () => {
        setIsBottomSheetVisible(true);
    };
    const handlePressclose = () => {
        setIsBottomSheetVisible(false);
    };
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
                            <View style={styles.btndecision}>
                                <TouchableOpacity style={styles.button} onPress={handlePressopen}>
                                    <Text style={[styles.btnname, { color: '#1AB65C' }]}>Cancel Booking</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, { backgroundColor: '#1AB65C' }]} onPress={handleTicket} >
                                    <Text style={[styles.btnname, { color: '#fff' }]}>View Ticket</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                }
                showsVerticalScrollIndicator={false}
            />
            {isBottomSheetVisible && (
                <View style={styles.overlay}>
                    <BottomSheet isVisible={isBottomSheetVisible} style={{ paddingHorizontal: 21, position: 'absolute', }}>
                        <Text style={{ textAlign: 'center', color: '#F75555', fontSize: 22, fontWeight: '700' }}>Cancel Booking</Text>
                        <Text style={{ height: 1, backgroundColor: '#00000040', marginBottom: 15, marginTop: 11, }} />
                        <Text style={{ textAlign: 'center', color: '#515151', fontSize: 18, fontWeight: '600', paddingHorizontal: 10, lineHeight: 25 }}>
                            Are you sure you want to cancel your hotel bookings?</Text>
                        <Text style={{ textAlign: 'center', color: '#515151', fontSize: 12, fontWeight: '400', paddingHorizontal: 10, lineHeight: 16, paddingTop: 5 }}>
                            Only 80% of the money you can refund from your payment according to our policy</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, height: 48 }}>
                            <TouchableOpacity style={[styles.btnconfirm, { backgroundColor: '#E8F8EF' }]} onPress={handlePressclose}>
                                <Text style={[styles.btnname, { color: '#1AB65C' }]}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnconfirm, { backgroundColor: '#1AB65C' }]}>
                                <Text style={[styles.btnname, { color: '#fff' }]}>Yes, Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </BottomSheet>
                </View>
            )}
        </View>
    )
}

export default ScreenUpcoming

const styles = StyleSheet.create({
    containner: {
        flexGrow: 1,
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
        width: 67.5,
        backgroundColor: '#DBF8E6',
        borderRadius: 6,
        textAlign: 'center',
        color: '#1AB65C',
    },
    infostatus: {
        marginHorizontal: 20,
    },
    line: {
        height: 1,
        backgroundColor: '#00000040',
    },
    btndecision: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 18,
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#1AB65C",
        width: 125,
        marginHorizontal: 8,
    },
    btnname: {
        textAlign: 'center',
        paddingHorizontal: 11,
        paddingVertical: 6,
        fontSize: 14,
        fontWeight: '600',
    },
    btnconfirm: {
        borderRadius: 50,
        elevation: 5,
        width: 160,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // overlay: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //     minHeight: '100%',
    //   },
})