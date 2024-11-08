import { ScrollView, StyleSheet, KeyboardAvoidingView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FieldSearch from '../component/FieldSearch'
import Options from '../component/Options'
import FlatlistItem from '../component/FlatlistItem'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";
import FlatgridItem from '../component/FlatgridItem'
const SearchScreen = () => {
  //icon
  const [selectedIcon, setSelectedIcon] = useState('menu');
  const [visible, setVisible] = useState(true);
  const PressIcon = (icon) => {
    setVisible(icon==='menu');
    setSelectedIcon(icon);
    if (icon === 'menu') {
      setVisible(true);
    } else if (icon === 'grid') {
      setVisible(false);
    }
  };
  const iconstyle = (icon) => {
    return {
      color: icon == selectedIcon ? '#1AB65C' : 'black',
    };
  };
  const Listscreen = () => {
    return (
      <FlatlistItem />
    )
  };
  const GridScreen = () => {
    return (
      <FlatgridItem />
    )
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.head}>
          <FieldSearch />
          <Options />
          <View style={styles.Label}>
            <Text style={styles.content}>Recommended (484,579)</Text>
            <View style={styles.view}>
              <View style={styles.menu}  >
                <MaterialCommunityIcons style={[iconstyle('menu'), selectedIcon]} onPress={() => PressIcon('menu')} name="format-list-bulleted-square" size={25} color="black" />
              </View>
              <View style={styles.grid}>
                <MaterialCommunityIcons style={[iconstyle('grid'), selectedIcon]} onPress={() => PressIcon('grid')} name="view-grid-outline" size={25} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.foot}>
          {visible && <Listscreen />}
          {!visible && selectedIcon === 'grid' && <GridScreen />}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  head: {
    height: 200,
    backgroundColor: "#fff",
    // position:'relative',
  },
  foot: {
    flex: 1,
    backgroundColor: "#E8F8EF"
  },
  Label: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 20,
    marginHorizontal: 21,
    justifyContent: "space-between",
  },
  view: {
    flexDirection: 'row',
  },
  menu: {
    marginRight: 12,
  },
  content: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    textAlign: 'left',
  }
})