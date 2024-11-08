import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
export default function Welcome1({navigation}) {
  useEffect(()=>{
    const timer=setTimeout(()=>{
      navigation.navigate('Start');
      return () => clearTimeout(timer);
    },5000)
  })
  return (
    <View style={styles.container_Splash}>
     <View>
      <Image
      source={require('../assets/hinhnen.jpg')}
      />
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container_Splash:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
})