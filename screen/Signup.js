import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, Image, TouchableOpacity, View,Alert } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import Back from '../assets/Back.png';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
const Signup = () => {
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const navigation = useNavigation();
    const handleSignup = async () => {
       
        try {
            const response = await axios.post(
              'http://192.168.1.9:3000/api/users',
              {
                 username,
                 password
              }
            );
            if(username==="" || password===""){
                Alert.alert('Chưa nhập mật khẩu hoặc tài khoản');
              }else{
                if(response.data){
                  Alert.alert('Thông báo','Đăng kí thành công');
                  navigation.navigate("FillProfile")
                }
              }
          } catch (error) {
            console.error('Error logging in:', error);
            Alert.alert('Registration Failed', 'An error orcurred. Please try again later')
          }
    }
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const styles = StyleSheet.create({
        separatorContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 40,

        },
        separator: {
            borderBottomColor: "#000",
            borderBottomWidth: 1,
            flex: 1,
        },
        separatorText: {
            marginHorizontal: 10,
            fontSize: 16

        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 20,
        },
        button: {
            backgroundColor: '#fff',
            borderWidth: 1,
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
        },

    });
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            <View style={{ position: 'absolute', top: 58, left: 14 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require("../assets/Back.png")} style={{ width: 28, height: 28, }} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 45,
                        flexDirection: 'column',
                        fontWeight: '500',
                        marginVertical: 50,
                        marginTop:80,
                        color: '#333',
                    }}>
                        Create your Account
                    </Text>
                </View>

                <View style={{
                    width: "100%",
                    height: 53,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: "#C4C4C4",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22
                }}>
                    <TextInput
                        placeholder='Username'
                        placeholderTextColor='#000'
                        onChangeText={(text) =>setUserName(text) }
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
                        marginTop: 23,
                        borderColor: '#C4C4C4',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Password'
                            placeholderTextColor='#000'
                            secureTextEntry={!showPassword}
                            onChangeText={(text) => setPassword(text)}
                            style={{
                                width: "100%",
                                fontSize: 16,
                                fontWeight: '500',
                                letterSpacing: 0.2,
                            }}
                        />

                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                right: 12,


                            }}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Ionicons name={showPassword ? "eye-off" : "eye"} />
                        </TouchableOpacity>


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
                     onPress={(handleSignup) }
                    style={{
                        width: "100%",
                        height: 53,
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
                    }}>Sign up</Text>
                </TouchableOpacity>

                <View style={styles.separatorContainer}>
                    <View style={styles.separator} />
                    <Text style={styles.separatorText}>or continue with:</Text>
                    <View style={styles.separator} />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button,
                    {
                        width: 81,
                        height: 55,
                        marginRight: 30,
                        marginLeft: 43,
                        borderRadius: 13,
                        borderColor: '#C4C4C4',
                    }]}>
                         <Image source={require("../assets/Facebook.png")} style={{ width: 41, height: 41, }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button,
                    {
                        width: 81,
                        height: 55,
                        marginRight: 30,
                        borderRadius: 13,
                        borderWidth: 1,
                        borderColor: '#C4C4C4',
                        justifyContent: 'center',
                    }]}>
                         <Image source={require("../assets/Google.png")}style={{ width: 32, height: 32, }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button,
                    {
                        width: 81,
                        height: 55,
                        marginRight: 30,
                        borderRadius: 13,
                        borderWidth: 1,
                        borderColor: '#C4C4C4',
                        justifyContent: 'center',
                    }]}>
                         <Image source={require("../assets/Vector.png")} style={{}} />
                    </TouchableOpacity>
                </View>

            </View>

            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

export default Signup;