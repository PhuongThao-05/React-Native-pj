import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, Image, TouchableOpacity, View } from 'react-native';


const Verify = ({ navigation }) => {
    const goBack = () => {
        navigation.navigate("Forgotpassword")
    }
    const handleNewpw=()=>{
        navigation.navigate("NewPassword")
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
                    <Image source={require("../assets/Protect.png")} ></Image>
                </View>

                <View style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        color: '#202020',
                        fontSize: 16,
                        fontWeight: 500,
                        letterSpacing: 0.2,
                    }}>Code has been sent to +234111******99</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', gap:17, alignContent:'center', justifyContent:'center', marginTop:41}}>
                    <View style={{
                        width: 64,
                        height: 56,
                        borderWidth: 3,
                        borderRadius: 10,
                        borderColor: "#1AB65C80",
                    }}>
                    </View>
                    <View style={{
                        width: 64,
                        height: 56,
                        borderWidth: 3,
                        borderRadius: 10,
                        borderColor: "#1AB65C80",
                       
                    }}>
                    </View>
                    <View style={{
                        width: 64,
                        height: 56,
                        borderWidth: 3,
                        borderRadius: 10,
                        borderColor: "#1AB65C80",
                    }}>
                    </View>
                    <View style={{
                        width: 64,
                        height: 56,
                        borderWidth: 3,
                        borderRadius: 10,
                        borderColor: "#1AB65C80",
                    }}>
                    </View>
                </View>

                <View style={{display:'flex',flexDirection:'row',  alignContent:'center', justifyContent:'center',marginTop:41}}>
                    <Text style={{
                        color: '#202020',
                        fontSize:15,
                        fontWeight:'500',

                    }}
                    >Resend code in </Text> 
                     <Text style={{
                        color: '#1AB65C',
                        fontSize:15,
                        fontWeight:'500',}}>52s</Text>
                </View>
                <TouchableOpacity
                 onPress={handleNewpw}
                    style={{
                        width: "100%",
                        height: 53,
                        marginTop: 190,
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
                    }}>Verify</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

export default Verify;