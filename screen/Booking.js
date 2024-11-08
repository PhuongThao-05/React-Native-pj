import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import ScreenUpcoming from '../component/ScreenUpcoming';
import ScreenCompleted from '../component/ScreenCompleted';
import ScreenCanceled from '../component/ScreenCanceled';

const Booking = () => {
  const [selectedButton, setSelectedButton] = useState('nut1');
  const [visible, setVisible] = useState(true);

  const handlePress = (button) => {
    setVisible(button==="nut1");
    setSelectedButton(button);
    if (button === 'nut1') {
      setVisible(true);
    } else if (button === 'nut2') {
      setVisible(false);
    } else if (button === 'nut3') {
      setVisible(false);
    }
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
  const Upcoming = () => {
    return (
      <ScreenUpcoming />
    )
  };
  const Completed = () => {
    return (
        <ScreenCompleted />
    )
  };
  const Canceled = () => {
    return (
      <ScreenCanceled />
    )
  };
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.title}>
            <View style={styles.logo}>
              <Image source={require("../assets/logo.jpg")} style={[styles.logoimg, { height: 40, width: 70 }]} />
              <TextInput style={styles.header} placeholder='My Booking' placeholderTextColor={'black'} />
            </View>
            <TouchableOpacity style={styles.search}>
              <Feather name="search" size={28} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.option}>
          <TouchableOpacity style={[styles.button, { marginLeft: 21 }, buttonStyle('nut1'), selectedButton]} onPress={() => handlePress('nut1')}>
            <Text style={[styles.text, textStyle('nut1'), selectedButton]}>Up Coming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, buttonStyle('nut2'), selectedButton]} onPress={() => handlePress('nut2')}>
            <Text style={[styles.text, textStyle('nut2'), selectedButton]}>Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, buttonStyle('nut3'), selectedButton]} onPress={() => handlePress('nut3')}>
            <Text style={[styles.text, textStyle('nut3'), selectedButton]}>Canceled</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.selected]}>
          {visible && <Upcoming />}
          {!visible && selectedButton === 'nut2' && <Completed />}
          {!visible && selectedButton === 'nut3' && <Canceled />}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Booking

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  head: {
    // flex:0.15,
    height: 85,
    backgroundColor: "#E8F8EF",
  },
  title: {
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 21,
    paddingBottom: 5,
  },
  logo: {
    flexDirection: "row",
  },
  header: {
    paddingLeft: 10,
    paddingTop: 19,
    paddingBottom: 5,
    borderRadius: 10,
    height: 54,
    fontSize: 24,
    lineHeight: 34,
    fontWeight: '600',
    color: 'black',
  },
  logoimg: {
    marginTop: 12,
    marginBottom: 10,
  },
  search: {
    marginTop: 19,
    marginBottom: 10,
    marginRight: 16,
  },
  option: {
    flexDirection: 'row',
    marginTop: 8,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#fff',
    marginHorizontal: 3.5,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#1AB65C",
    width: 112,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: "#1AB65C",
    paddingHorizontal: 11,
    paddingVertical: 5,
  },
  selected: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#E8F8EF",
  },
})