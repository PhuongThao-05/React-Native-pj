import React, { useState } from 'react';
import { StatusBar, Keyboard, TouchableWithoutFeedback, SafeAreaView, Text, TextInput, Image, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const NewPassword = ({ navigation }) => {
    const goBack = () => {
        navigation.navigate("Verify")
    }
    const [rememberMe, setRememberMe] = useState(false);

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
                                    Create new password
                                </Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', marginVertical:40}}>
                            <View style={{ marginTop: 450 }}>
                                <Text style={{
                                    color: '#202020',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    letterSpacing: 0.2,
                                }}>Create your new password</Text>
                            </View>

                            <View style={{
                                width: "100%",
                                height: 53,
                                marginTop: 20,
                                borderColor: '#333',
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: "#C4C4C4",
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22
                            }}>
                                <TextInput
                                    placeholder='Password'
                                    placeholderTextColor='#000'
                                    onChangeText={(text) => setPassword(text)}

                                    style={{
                                        width: "100%",
                                        fontSize: 16,
                                        fontWeight: '500',
                                        letterSpacing: 0.2,
                                    }}
                                />

                            </View>

                            <View style={{ marginBottom: 12 }}>

                                <View style={{
                                    width: "100%",
                                    height: 48,
                                    marginTop: 31,
                                    borderColor: '#C4C4C4',
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingLeft: 22
                                }}>
                                    <TextInput
                                        placeholder='New password'
                                        onChangeText={(text) => setPassword(text)}
                                        placeholderTextColor='#000'

                                        style={{
                                            width: "100%",
                                            fontSize: 16,
                                            fontWeight: '500',
                                            letterSpacing: 0.2,
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 20,
                                marginBottom: 31,
                                marginTop: 28,
                            }}>
                                <TouchableOpacity
                                    onPress={() => setRememberMe(!rememberMe)}
                                >
                                    <View style={{
                                        width: 21,
                                        height: 21,
                                        borderRadius: 6,
                                        borderWidth: 2.8,
                                        borderColor: "#1AB65C",
                                        backgroundColor: rememberMe ? "#1AB65C" : "#fff",

                                        marginRight: 12,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        {rememberMe && (
                                            <Ionicons
                                                name="checkmark"
                                                color="#fff"
                                                size={15}
                                            />
                                        )}
                                    </View>
                                </TouchableOpacity>

                                <Text style={{
                                    fontSize: 16,
                                    color: '#000',
                                    fontWeight: '500',
                                    letterSpacing: 0.2,
                                }}>Remember me</Text>
                            </View>
                            <TouchableOpacity
                                style={{
                                    width: "100%",
                                    height: 53,

                                    marginBottom: 45,
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
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default NewPassword;
