import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const FieldSearch = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <View style={styles.search}>
                    <Feather name="search" size={24} color="#C4C4C4" />
                </View>
                <TextInput style={styles.field} placeholder='Search'/>
                <View style={styles.filter}>
                    <FontAwesome5 name="sliders-h" size={24} color="#1AB65C"/>
                </View>
            </View>
        </View>       
    )
}

export default FieldSearch

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:21,
        paddingTop:25,
        paddingBottom:12,
    },
    inner:{
    flexDirection:'row',
    },
    field:{
        backgroundColor:'#F2F2F2',
        paddingLeft:56,
        paddingRight:16,
        paddingTop:16,
        paddingBottom:18,
        borderRadius:10,
        flex:1,
        height:54,
        fontSize:16,
        lineHeight:20,
        fontWeight:'400',
    },
    search:{
        position:'absolute',
        top:14,
        left:20,
        zIndex:1,
    },
    filter:{
        position:'absolute',
        top:14,
        right:16,
        zIndex:1,
    }
})