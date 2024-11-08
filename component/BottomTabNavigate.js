import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screen/Home.js'
import SearchScreen from '../screen/SearchScreen.js'
import Booking from '../screen/Booking.js'
import Profile from '../screen/Profile.js'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Tab=createBottomTabNavigator();
   
const BottomTabs=()=>{
    return(
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
            options={{
                tabBarLabel: "Home",tabBarActiveTintColor:'#1AB65C',tabBarStyle:{height:70, paddingBottom: 6,
                    paddingTop:10,} ,headerShown: false,headerTitleAlign: 'center',
                tabBarIcon: ({ focused }) => focused ? (<AntDesign name="home" size={30} color="#1AB65C" />) :
                    <AntDesign name="home" size={28} color="black" />
            }}/>
        <Tab.Screen name="Search" component={SearchScreen}
           options={{
                tabBarLabel: "Search",tabBarActiveTintColor:'#1AB65C',tabBarStyle:{height:70, paddingBottom: 6,
                    paddingTop:10,} , headerShown: false,headerTitleAlign: 'center',
                tabBarIcon: ({ focused }) => focused ? <Ionicons name="search" size={30} color="#1AB65C" /> :
                    <Ionicons name="search-outline" size={28} color="black" />
            }} />
             <Tab.Screen name="Booking" component={Booking}
            options={{
                tabBarLabel: "Booking",tabBarActiveTintColor:'#1AB65C',tabBarStyle:{height:70, paddingBottom: 6,
                    paddingTop:10,} , headerShown: false,headerTitleAlign: 'center',
                tabBarIcon: ({ focused }) => focused ? <AntDesign name="hearto" size={30} color="#1AB65C" /> :
                <AntDesign name="hearto" size={28} color="black" />
            }} />
             <Tab.Screen name="Profile" component={Profile}
            options={{
                tabBarLabel: "Profile",tabBarActiveTintColor:'#1AB65C',tabBarStyle:{height:70, paddingBottom: 6,
                    paddingTop:10,} , headerShown: false,headerTitleAlign: 'center',
                tabBarIcon: ({ focused }) => focused ?<Ionicons name="person-outline" size={30} color="#1AB65C" /> :
                <Ionicons name="person-outline" size={28} color="black" />
            }} />
    </Tab.Navigator>
    
    );
}
export default BottomTabs

