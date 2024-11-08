import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Switch } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
const Security = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState({
        faceid: false,
        remember: true,
        touch: true,
    });
    const toggleSwitch = (switchName) => {
        setIsEnabled(previousState => {
            const newState = {
                ...previousState,
                [switchName]: !previousState[switchName],
            };
            Object.keys(switchName).forEach((key) => {
                if (key !== switchName && previousState[key] === true) {
                    newState[key] = false;
                }
            });
            return newState;
        });
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                        <AntDesign style={styles.arrow} name="arrowleft" size={28} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Security</Text>
                </View>
                <View style={styles.info}>
                    <View style={styles.field}>
                        <Text style={styles.content}>Face ID</Text>
                        <Switch style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
                            trackColor={{ false: '#C4C4C4', true: '#1AB65C' }}
                            thumbColor={isEnabled.faceid ? '#fff' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => toggleSwitch('faceid')}
                            value={isEnabled.faceid}
                        />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.content}>Remember me</Text>
                        <Switch style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
                            trackColor={{ false: '#C4C4C4', true: '#1AB65C' }}
                            thumbColor={isEnabled.remember ? '#fff' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => toggleSwitch('remember')}
                            value={isEnabled.remember}
                        />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.content}>Touch ID</Text>
                        <Switch style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
                            trackColor={{ false: '#C4C4C4', true: '#1AB65C' }}
                            thumbColor={isEnabled.touch ? '#fff' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => toggleSwitch('touch')}
                            value={isEnabled.touch}
                        />
                    </View>
                    <TouchableOpacity style={styles.field}>
                        <Text style={styles.content}>Google Authenticator</Text>
                        <MaterialIcons style={{ paddingTop: 11 }} name="keyboard-arrow-right" size={24} color="#1AB65C" />
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.change}>
                        <Text style={styles.changepassword}>Change Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default Security

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
        marginTop: 15,
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    content: {
        paddingTop: 15,
        paddingBottom: 14,
        fontSize: 18,
        lineHeight: 20,
        fontWeight: '400',
        color: 'black',
    },
    footer: {
        alignItems: 'center',
        marginTop: 20,
    },
    change: {
        backgroundColor: "#E8F8EF",
        borderRadius: 50,
        width: 310,
        height: 54,
        paddingVertical: 15,
    },
    changepassword: {
        textAlign: 'center',
        color: '#1AB65C',
        fontSize: 17,
        lineHeight: 20,
        fontWeight: '500',
        paddingTop: 2,
    },
})