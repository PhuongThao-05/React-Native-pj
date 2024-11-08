import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TextInput, Image, TouchableOpacity, View } from 'react-native';


const Forgotpassword = ({ navigation }) => {
    const handleVerify=()=>{
        navigation.navigate("Verify")
     }
     const goBack=()=>{
        navigation.navigate("Login")
     }
    
    return (
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
                        Forgot password
                    </Text>
                </View>

                <View style={{
                    alignItems: 'center',
                    marginTop: 100,

                }}>
                    <Image source={require("../assets/lock.png")} ></Image>
                </View>

                <View>
                    <Text style={{
                        color: '#202020',
                        fontSize: 16,
                        fontWeight: 500,
                        letterSpacing: 0.2,
                    }}>Select which contact details should we use to reset your password</Text>
                </View>
                <View style={{
                    height: 120,
                    borderWidth: 3,
                    borderRadius: 10,
                    borderColor: "#1AB65C",
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 16,
                    gap: 10,
                }}>
                    <View style={{

                        marginLeft: 19,
                    }}>
                        <View style={{
                            backgroundColor: '#E8F8EF',
                            width: 72,
                            height: 72,
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            borderRadius: 100,

                        }}>
                            <Image source={require("../assets/sms.png")} ></Image>

                        </View>

                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',

                    }}>
                        <Text style={{
                            fontSize: 17,
                            color: '#595959',
                        }}>via SMS: </Text>

                        <Text style={{
                            fontSize: 17,
                            fontWeight: '500',
                            color: '#000',
                        }}>+234111******99</Text>
                    </View>
                </View>

                <View style={{
                    height: 120,
                    borderWidth: 3,
                    borderRadius: 10,
                    borderColor: "#1AB65C80",
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 24,
                    gap: 10,
                }}>
                    <View style={{

                        marginLeft: 19,
                    }}>
                        <View style={{
                            backgroundColor: '#E8F8EF',
                            width: 72,
                            height: 72,
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            borderRadius: 100,

                        }}>
                            <Image source={require("../assets/mail.png")} ></Image>

                        </View>

                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',

                    }}>
                        <Text style={{
                            fontSize: 17,
                            color: '#595959',
                        }}>via Email: </Text>

                        <Text style={{
                            fontSize: 17,
                            fontWeight: '500',
                            color: '#000',
                        }}>kez***9@your domain.com</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={handleVerify}
                    style={{
                        width: "100%",
                        height: 53,
                        marginTop:51,
                        marginBottom:45,
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
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

export default Forgotpassword;