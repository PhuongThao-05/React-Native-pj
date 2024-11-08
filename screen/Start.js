import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text,Image, TouchableOpacity, View } from 'react-native';

const Start = ({navigation}) => {

    const handleLogin = () =>{
        navigation.navigate("Login")
    }
    const handleSignup = () =>{
      navigation.navigate("Signup")
  }
  const styles = StyleSheet.create({
    separatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      marginTop:44,
      marginBottom:46,
    },
    separator: {  
      borderBottomColor: "#000",
      borderBottomWidth: 1,
      flex: 1,
      
    },
    separatorText: {
      marginHorizontal: 10,
      fontSize: 16,
      
    },

  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{
            color: "#000",
            fontSize: 45,
            fontWeight: 700,
            marginTop: 90,
            textAlign: 'center',
            letterSpacing: 0.2,
          }}>
            Let's you in
          </Text>
        </View>

        <View style={{ marginTop: 80 }}>
        <TouchableOpacity style={{
          width: "100%",
          height:53,
          borderRadius: 10,
          borderWidth: 1,
          boderColor: '#C4C4C4',
          background: '#FFF',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
          <Image source={require("../assets/Facebook.png")} style={{ width: 31, height: 31, marginLeft: 51 }} /> 
        <Text style={{ 
          fontSize: 17,
          fontWeight:500, 
          color:'#000',
          marginLeft: 8,
          letterSpacing: 0.2,
           }}>Continue with Facebook</Text>
          
        </TouchableOpacity>
        </View>

          <View>
        <TouchableOpacity style={{
          width: "100%",
          height:53,
          marginTop:23,
          borderRadius: 10,
          borderWidth: 1,
          boderColor: '#C4C4C4',
          background: '#FFF',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
          <Image source={require("../assets/Google.png")} style={{ width: 26, height: 26, marginLeft: 60 }} /> 
        <Text style={{ 
          fontSize: 17,
          fontWeight:500, 
          color:'#000',
          marginLeft: 8,
          letterSpacing: 0.2,
           }}>Continue with Google</Text>
          
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={{
          width: "100%",
          height:53,
          marginTop:23,
          borderRadius: 10,
          borderWidth: 1,
          boderColor: '#C4C4C4',
          background: '#FFF',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
           <Image source={require("../assets/Vector.png")}style={{ width: 22, height: 26, marginLeft: 68 }} /> 
        <Text style={{ 
          fontSize: 17,
          fontWeight:500, 
          color:'#000',
          marginLeft: 8,
          letterSpacing: 0.2,
           }}>Continue with Apple</Text>
          
        </TouchableOpacity>
        </View>

        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <Text style={styles.separatorText}>or</Text>
          <View style={styles.separator} />
        </View>

        <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          width: "100%",
          height: 53,
          marginBottom:65,
          backgroundColor: '#1AB65C',
          borderRadius: 26.5,
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Text style={{ color: '#fff', fontSize: 17 }}>Sign in with password</Text>
        </TouchableOpacity>

        
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
  <Text style={{ fontSize: 16, color: '#000', textAlign: 'center', marginRight: 5 }}>Don't have an account?</Text>
  <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
    <Text style={{ color: '#1AB65C', fontWeight: 'bold' }}>Sign up</Text>
  </TouchableOpacity>
</View>
        
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Start;
