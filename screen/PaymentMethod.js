import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';


const PaymentMethod = ({ navigation }) => {
    const [selectedMethod, setSelectedMethod] = useState(null); // state để lưu Method được chọn

    const handleNewCard = () => {
        navigation.navigate("NewCard")
    }
    const goBack = () => {
        navigation.navigate("Login")
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ marginHorizontal: 24 }}>
                <View style={{ flexDirection: 'row', top: 58, }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require("../assets/Back.png")} style={{ width: 28, height: 28, }} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: '700',
                        letterSpacing: 0.2,
                        color: '#000',
                        marginLeft: 37
                    }}>
                        Payment
                    </Text>
                </View>

                <View style={{
                    marginTop: 140,
                    flexDirection: 'row',
                    gap: 77,
                }}>
                    <View>
                        <Text style={{
                            color: '#000',
                            fontSize: 17,
                            fontWeight: '700',
                            lineHeight: 23.8,
                            letterSpacing: 0.2,
                            marginLeft: 7,
                        }}>Payment Methods</Text>
                    </View>
                    <TouchableOpacity onPress={handleNewCard}>
                        <Text style={{
                            color: '#1AB65C',
                            fontSize: 17,
                            fontWeight: '700',
                            lineHeight: 23.8,
                            letterSpacing: 0.2,
                        }}>Add New Card</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                width: '100%',
                height: 322,
                backgroundColor: '#E8F8EF',
                marginTop: 17,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <View style={styles.box}>
                    <Image source={require("../assets/PayPal.png")} style={styles.img}></Image>
                    <Text style={styles.text}>PayPal</Text>
                    <TouchableOpacity style={styles.buttonRadio}
                        onPress={() => setSelectedMethod('PayPal')}
                    >
                        {selectedMethod === 'PayPal' && <Image source={require("../assets/radiocheck.png")} />}
                    </TouchableOpacity>

                </View>

                <View style={styles.box}>
                    <Image source={require("../assets/Google.png")} style={styles.img}></Image>
                    <Text style={styles.text}>Google Pay</Text>
                    <TouchableOpacity style={styles.buttonRadio}
                        onPress={() => setSelectedMethod('Google Pay')}
                    >
                        {selectedMethod === 'Google Pay' && <Image source={require("../assets/radiocheck.png")} />}
                    </TouchableOpacity>

                </View>

                <View style={styles.box}>
                    <Image source={require("../assets/Vector.png")} style={styles.img}></Image>
                    <Text style={styles.text}>Apple Pay</Text>
                    <TouchableOpacity style={styles.buttonRadio}
                        onPress={() => setSelectedMethod('Apple Pay')}
                    >
                        {selectedMethod === 'Apple Pay' && <Image source={require("../assets/radiocheck.png")} />}
                    </TouchableOpacity>

                </View>
            </View>

            <TouchableOpacity
                onPress={handleNewCard}
                style={{
                    width: 327,
                    height: 53,
                    marginTop: 170,
                    marginLeft: 40,
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
                }}>Continue</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    box: {
        marginTop: 17,

        width: 347,
        height: 76,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyItems: 'center',
    },
    img: {
        marginLeft: 30,
    },
    text: {
        marginLeft: 5,
        flex: 0.875,
        color: '#000',
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 23.8,
        letterSpacing: 0.2,
    },
    buttonRadio: {

        width: 20,
        height: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#1AB65C',
        alignItems: 'center',
        justifyItems: 'center',

    },
});
export default PaymentMethod;
