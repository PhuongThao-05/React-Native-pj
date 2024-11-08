import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,Keyboard, TouchableWithoutFeedback, Text, TextInput, StyleSheet, Image, TouchableOpacity, View } from 'react-native';


const NewCard = ({ navigation }) => {

    const goBack = () => {
        navigation.navigate("PaymentMethod")
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 1, marginHorizontal: 24 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 58, }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require("../assets/Back.png")} style={{ width: 28, height: 28, }} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 24,
                        flexDirection: 'column',
                        fontWeight: '700',
                        letterSpacing: 0.2,
                        color: '#000',
                        marginLeft: 10,
                    }}>
                        New Card
                    </Text>
                </View>

                <View style={{
                    marginTop: 120,

                }}>
                    <Image source={require("../assets/Card.png")} style={{ width: 350, height: 220, borderRadius: 21, }} />
                </View>
                <View style={styles.box1}

                >
                    <TextInput
                        placeholder='Full Name'
                        placeholderTextColor='#000'
                        style={{
                            width: "100%",
                            fontSize: 17,
                            fontWeight: '500',
                            letterSpacing: 0.2,
                        }}
                    />
                </View>
                <View style={styles.box2}
                >
                    <TextInput
                        placeholder='Card Number'
                        placeholderTextColor='#000'
                        style={{
                            width: "100%",
                            fontSize: 17,
                            fontWeight: '500',
                            letterSpacing: 0.2,
                        }}
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap:32 }}>
                    <View style={styles.box3}
                    >
                        <TextInput
                            placeholder='Date'
                            placeholderTextColor='#000'
                            style={{
                                width: "100%",
                                fontSize: 17,
                                fontWeight: '500',
                                letterSpacing: 0.2,
                            }}
                        />
                    </View>
                    <View style={styles.box3}
                    >
                        <TextInput
                            placeholder='CVV'
                            placeholderTextColor='#000'
                            style={{
                                width: "100%",
                                fontSize: 17,
                                fontWeight: '500',
                                letterSpacing: 0.2,
                            }}
                        />
                    </View>
                </View>

                <TouchableOpacity

                    style={{

                        height: 53,
                        marginTop:100,
                        backgroundColor: '#1AB65C',
                        borderRadius: 26.5,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 17,
                        fontWeight: '600',
                        letterSpacing: 0.2,
                    }}>Add new card</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    box1: {
        width: 355,
        height: 53,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#C4C4C4",
        backgroundColor: '#F2F2F2',
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22,
        marginTop: 69,
    },
    box2: {
        width: 355,
        height: 53,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#C4C4C4",
        backgroundColor: '#F2F2F2',
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22,
        marginTop: 24,
    },
    box3: {
        width: '47%',
        height: 53,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#C4C4C4",
        backgroundColor: '#F2F2F2',
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22,
        marginTop: 24,
    },

});

export default NewCard;
