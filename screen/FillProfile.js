import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { MaterialIcons } from '@expo/vector-icons';
const FillProfile = ({ navigation }) => {
    const gender = [
        { label: 'Nữ', value: '1' },
        { label: 'Nam', value: '2' },
    ];
    const [value, setValue] = useState(null);
    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === value && (
                    <AntDesign style={styles.icon} name="checkcircleo" size={20} color="#1AB65C" />
                )}
            </View>
        );
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                        <AntDesign style={styles.arrow} name="arrowleft" size={28} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Edit Profile</Text>
                </View>
                <View style={styles.info}>
                    <View style={styles.field}>
                        <TextInput style={styles.input} placeholder='Full Name' placeholderTextColor={'black'} />
                    </View>
                    <View style={styles.field}>
                        <TextInput style={styles.input} placeholder='Nickname' placeholderTextColor={'black'} />
                    </View>
                    <View style={styles.field}>
                        <TextInput style={styles.input} placeholder='Date of Birth' placeholderTextColor={'black'} />
                        <Image style={{
                            position: 'absolute', top: 19,
                            right: 12,
                            zIndex: 1,
                        }} source={require("../assets/Calendar.png")} />
                    </View>
                    <View style={styles.field}>
                        <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'black'} />
                        <Image style={{
                            position: 'absolute', top: 19,
                            right: 12,
                            zIndex: 1,
                        }} source={require("../assets/email.png")} />
                    </View>
                    <View style={styles.field}>
                        <View style={styles.flat}>
                            <Image source={require("../assets/Nigeria.png")} />
                            <MaterialIcons style={{ bottom: 2 }} name="keyboard-arrow-down" size={24} color="black" />
                        </View>
                        <TextInput style={[styles.input, { paddingLeft: 75, }]} placeholder='Phone Number' placeholderTextColor={'black'} />
                    </View>
                    <View style={styles.field}>
                        <Dropdown
                            style={[styles.input, { paddingRight: 12, }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={gender}
                            // search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Gender"
                            // searchPlaceholder="Search..."
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                            }}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.update}>
                        <Text style={styles.updateEdit}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default FillProfile

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
        paddingLeft: 16,
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
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 17,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    flat: {
        position: 'absolute',
        flexDirection: 'row',
        gap: 4,
        top: 19,
        left: 19,
        zIndex: 1,
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 35,
    },
    update: {
        backgroundColor: "#1AB65C",
        borderRadius: 50,
        width: 340,
        height: 54,
        paddingVertical: 15,
        elevation: 3,
    },
    updateEdit: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 17,
        lineHeight: 20,
        fontWeight: '600',
        paddingTop: 2,
    },
})