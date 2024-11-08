import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import React from 'react';
const Options = () => {
    //button
    const [selectedButton, setSelectedButton] = useState(null);

    const handlePress = (button) => {
        setSelectedButton(button);
    };

    const buttonStyle = (button) => {
        return {
            backgroundColor: button == selectedButton ? '#1AB65C' : '#fff',
        };
    };

    const textStyle = (button) => {
        return {
            color: button == selectedButton ? '#fff' : '#1AB65C',
        };
    };
    
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={[styles.button, { marginLeft: 21 }, buttonStyle('nut1')]} onPress={() => handlePress('nut1')}>
                    <Text style={[styles.text, textStyle('nut1')]}>All Hotel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, buttonStyle('nut2')]} onPress={() => handlePress('nut2')}>
                    <Text style={[styles.text, textStyle('nut2')]}>Recommended</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, buttonStyle('nut3')]} onPress={() => handlePress('nut3')}>
                    <Text style={[styles.text, textStyle('nut3')]}>Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { marginRight: 21 }, buttonStyle('nut4')]} onPress={() => handlePress('nut4')}>
                    <Text style={[styles.text, textStyle('nut4')]}>Trending</Text>
                </TouchableOpacity>
            </ScrollView>           
        </View>
    );
};

export default Options

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    button: {
        backgroundColor: '#fff',
        marginHorizontal: 3.5,
        borderRadius: 50,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#1AB65C"
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: "#1AB65C",
        paddingHorizontal: 11,
        paddingVertical: 5,
    },
    ScrollView: {
        flexDirection: 'row',
    },  
})

