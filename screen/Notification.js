import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image,Switch } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
const Notification = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState({
        generalNotification: true,
        sound: true,
        vibrate:false,
        appUp:true,
        newservice:false,
        newtips:false,
      });   
      const toggleSwitch = (switchName) => {
        setIsEnabled(previousState => {
          // tạo state mới với switch được bật/tắt
          const newState = {
            ...previousState,
            [switchName]: !previousState[switchName],
          };
          // kiểm tra switch trước đó với switch mới bật
          Object.keys(switchName).forEach((key) => {
            if (key !== switchName && previousState[key] === true) {
              newState[key] = false; // tắt switch trước đó
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
                    <Text style={styles.title}>Notification</Text>
                </View>
                <View style={styles.info}>
                    <View style={styles.field}>
                        <Text style={styles.content}>General Notification</Text>
                        <Switch  style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
                            trackColor={{ false: '#C4C4C4', true: '#1AB65C' }}
                            thumbColor={isEnabled.generalNotification ? '#fff' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={()=>toggleSwitch('generalNotification')}
                            value={isEnabled.generalNotification}
                        />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.content}>Sound</Text>
                        <Switch  style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
                            trackColor={{ false: '#C4C4C4', true: '#1AB65C' }}
                            thumbColor={isEnabled.sound ? '#fff' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={()=>toggleSwitch('sound')}
                            value={isEnabled.sound}
                        />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.content}>Vibrate</Text>
                        <Switch  style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
                            trackColor={{ false: '#C4C4C4', true: '#1AB65C' }}
                            thumbColor={isEnabled.vibrate ? '#fff' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={()=>toggleSwitch('vibrate')}
                            value={isEnabled.vibrate}
                        />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.content}>App Updates</Text>
                        <Switch  style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
                            trackColor={{ false: '#C4C4C4', true: '#1AB65C' }}
                            thumbColor={isEnabled.appUp ? '#fff' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={()=>toggleSwitch('appUp')}
                            value={isEnabled.appUp}
                        />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.content}>New Service Available</Text>
                        <Switch  style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
                            trackColor={{ false: '#C4C4C4', true: '#1AB65C' }}
                            thumbColor={isEnabled.newservice ? '#fff' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={()=>toggleSwitch('newservice')}
                            value={isEnabled.newservice}
                        />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.content}>New tips Available</Text>
                        <Switch  style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
                            trackColor={{ false: '#C4C4C4', true: '#1AB65C' }}
                            thumbColor={isEnabled.newtips ? '#fff' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={()=>toggleSwitch('newtips')}
                            value={isEnabled.newtips}
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

export default Notification

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
        marginTop:15,
    },
    field: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
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