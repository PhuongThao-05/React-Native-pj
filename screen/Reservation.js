import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    SafeAreaView,
   
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function Reservation({ navigation }) {
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectSearch, setSelectedSearch] = useState("");
    const handlePress = (button) => {
        setSelectedButton(button);
    };

    const buttonStyle = (button) => {
        return {
            backgroundColor: button == selectedButton ? "#1AB65C" : "#fff",
        };
    };

    const textStyle = (button) => {
        return {
            color: button == selectedButton ? "#fff" : "#1AB65C",
        };
    };
    //icon
    const [selectedIcon, setSelectedIcon] = useState(null);

    const PressIcon = (icon) => {
        setSelectedIcon(icon);
    };

    const iconstyle = (icon) => {
        return {
            color: icon == selectedIcon ? "#1AB65C" : "black",
        };
    };
    const handlePayment=()=>{
        navigation.navigate("PaymentMethod")
     }
    

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginTop: 30,
            }}
        >
            <TouchableOpacity 
                style = {{flexDirection:"row",marginTop:20,}}
                onPress={() => navigation.navigate("Date")}>
                <Image
                source={require("../assets/arrow.png")}
                style={style.Img_arrow}/>
            <Text style={{ fontSize: 24, marginLeft: 5, fontWeight: "700" }}>Name of Reservation </Text>
            </TouchableOpacity>
            
        </View>
        <View style={style.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity
                        style={[style.button, buttonStyle("nut1")]}
                        onPress={() => handlePress("nut1")}
                    >
                        <Text style={[style.text, textStyle("nut1")]}>
                            Mr.
                        </Text>
                     
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            style.button,
                            { width: 135, height: 35 },
                            buttonStyle("nut2"),
                        ]}
                        onPress={() => handlePress("nut2")}
                    >
                        <Text style={[style.text, textStyle("nut2")]}>
                            Mrs.
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[style.button, buttonStyle("nut3")]}
                        onPress={() => handlePress("nut3")}
                    >
                        <Text style={[style.text, textStyle("nut3")]}>
                            Ms.
                        </Text>
                    </TouchableOpacity>
                    </ScrollView>
                    </View>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={style.app}>
                <View style={style.info}>
                    <View style={style.field}>
                        <TextInput style={style.input} placeholder='Full Name' placeholderTextColor={'black'} />
                    </View>
                    <View style={style.field}>
                        <TextInput style={style.input} placeholder='Nickname' placeholderTextColor={'black'} />
                    </View>
                    <View style={style.field}>
                        <TextInput style={style.input} placeholder='Date of Birth' placeholderTextColor={'black'} />
                        <Image style={{
                            position: 'absolute', top: 19,
                            right: 12,
                            zIndex: 1,
                        }} source={require("../assets/Calendar_1.png")} />
                    </View>
                    <View style={style.field}>
                        <TextInput style={style.input} placeholder='Email' placeholderTextColor={'black'} />
                        <Image style={{
                            position: 'absolute', top: 19,
                            right: 12,
                            zIndex: 1,
                        }} source={require("../assets/Message.png")} />
                    </View>
                    <View style={style.field}>
                        <View style={style.flat}>
                            <Image source={require("../assets/Nigeria.png")} />
                            <MaterialIcons style={{ bottom: 2 }} name="keyboard-arrow-down" size={24} color="black" />
                        </View>
                        <TextInput style={[style.input, { paddingLeft: 75, }]} placeholder='Phone Number' placeholderTextColor={'black'} />
                    </View>
                </View>
                </View>
            </SafeAreaView>
            <TouchableOpacity
             onPress={handlePayment}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 27,
                        backgroundColor: "#1AB65C",
                        width: 370,
                        height: 58,
                        marginBottom:20,
                        marginHorizontal:20,

                    }}>
                    <Text style={{
                          color: "#fff",
                          fontSize: 17,
                          fontStyle: "normal",
                          fontWeight: "700",
                          lineHeight: 24,
                          letterSpacing: 1,
                    }}>Continue</Text>
                </TouchableOpacity>
        </View>
        );
    }
const style = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 40,
        marginLeft: 22,

    },
    button: {
        backgroundColor: "#fff",
        marginHorizontal: 3.5,
        borderRadius: 50,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#1AB65C",
        width: 100,
        height: 35,
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600",
        color: "#1AB65C",
        paddingHorizontal: 11,
        paddingVertical: 5,
    },
    app:{
            flex: 1,
            paddingTop: 25,
            paddingHorizontal: 21,
    },
    info: {
        marginTop: 35,
    },
    field: {
        marginBottom: 28,
    },
    input: {
        backgroundColor: '#F2F2F2',
        paddingLeft: 19,
        paddingTop: 15,
        paddingBottom: 14,
        borderRadius: 10,
        height: 54,
        fontSize: 17,
        lineHeight: 20,
        fontWeight: '400',
        color: 'black',
        borderColor: '#C4C4C4',
        borderWidth: 1,
    },
    flat: {
        position: 'absolute',
        flexDirection: 'row',
        gap: 4,
        top: 19,
        left: 19,
        zIndex: 1,
    },

});
export default Reservation;
    