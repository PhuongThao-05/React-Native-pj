import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
const ViewTicket = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                        <AntDesign style={styles.arrow} name="arrowleft" size={28} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.title}> Ticket</Text>
                </View>
                <View style={styles.ticket}>
                    <Image source={require("../assets/tickethotel.png")}></Image>
                    <View style={styles.infohotel}>
                        <Text style={styles.namehotel}>Intercontinental Hotel</Text>
                        <Image source={require("../assets/QR.png")} style={{ width: 220, height: 220, marginTop: 10 }}></Image>
                    </View>
                    <View style={styles.detail}>
                        <View style={{ flexDirection: 'row', gap: 65, marginBottom: 28, }}>
                            <View>
                                <Text style={styles.label}>Name</Text>
                                <Text style={styles.labelvalue}>Kezia Williams</Text>
                            </View>
                            <View>
                                <Text style={styles.label}>Phone Number</Text>
                                <Text style={styles.labelvalue}>+234 702 2347 642</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 78, marginBottom: 28, }}>
                            <View>
                                <Text style={styles.label}>Check in</Text>
                                <Text style={styles.labelvalue}>Dec 16,2022</Text>
                            </View>
                            <View>
                                <Text style={styles.label}>Check out</Text>
                                <Text style={styles.labelvalue}>Dec 18,2022</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 20, marginBottom: 28, }}>
                            <View>
                                <Text style={styles.label}>Hotel</Text>
                                <Text style={styles.labelvalue}>Intercontinental Hotel</Text>
                            </View>
                            <View>
                                <Text style={styles.label}>Guest</Text>
                                <Text style={styles.labelvalue}>3</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.download}>
                        <Text style={styles.downloadticket}>DownLoad Ticket</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default ViewTicket

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 21,
    },
    header: {
        flexDirection: 'row',
    },
    arrow: {
        paddingTop: 5,
    },
    title: {
        fontSize: 24,
        lineHeight: 34,
        fontWeight: '700',
        paddingLeft: 25,
    },
    ticket: {
        alignItems: 'center',
    },
    infohotel: {
        position: 'absolute',
        zIndex: 1,
        top: 40,
    },
    namehotel: {
        fontSize: 20,
        lineHeight: 30,
        fontWeight: '600',
        paddingLeft: 12,
    },
    detail: {
        position: 'absolute',
        zIndex: 1,
        top: 370,
    },
    button: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 28,
    },
    download: {
        backgroundColor: "#1AB65C",
        borderRadius: 50,
        width: 340,
        height: 54,
        paddingVertical: 15,
        elevation: 3,
    },
    downloadticket: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 17,
        lineHeight: 20,
        fontWeight: '600',
        paddingTop: 2,
    },
    label: {
        fontSize: 17,
        lineHeight: 24,
        paddingBottom: 5,
        fontWeight: '400',
        color: '#515151',
    },
    labelvalue: {
        fontSize: 15,
        lineHeight: 21,
        fontWeight: '600',
    },
})