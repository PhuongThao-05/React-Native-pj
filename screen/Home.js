import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Home=({navigation}) =>{
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectSearch, setSelectedSearch] = useState("");
    const handlePress = (button) => {
        setSelectedButton(button);
    };

    const buttonStyle = (button) => {
        return {
            backgroundColor: button == selectedButton ? "#1AB65C" : "#fff",
        };
    };

    const textStyle = (button) => {
        return {
            color: button == selectedButton ? "#fff" : "#1AB65C",
        };
    };
    //icon
    const [selectedIcon, setSelectedIcon] = useState(null);

    const PressIcon = (icon) => {
        setSelectedIcon(icon);
    };

    const iconstyle = (icon) => {
        return {
            color: icon == selectedIcon ? "#1AB65C" : "black",
        };
    };

    return (
        <View style={style.appBarWrapper}>
            <View style={style.appBar}>
                {
                    <Image
                        source={require("../assets/Logo.png")}
                        style={{ width: 70, height: 40 }}
                    />
                }
               <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:280}} >
                    <Text style={style.location}>Agoda</Text>
                    
                    <View style={{flexDirection:"row"}}>
                        {
                            <Image
                                source={require("../assets/notification.png")}
                                style={style.Img}
                            />
                        }

                        {
                            <Image
                                source={require("../assets/bookmark.png")}
                                style={{marginLeft:10}}
                            />
                        }
                    </View>
               </View>
            </View>
            <View style={{ marginLeft: 22 }}>
                <Text style={style.Welcom_Text}>Hello, Kezia</Text>
            </View>
            <View style={style.searchContainer}>
                <TouchableOpacity style={style.PayButton}>
                    <Feather name="search" size={24} style={style.searchIcon} />
                </TouchableOpacity>
                <View style={style.searchWrapper}>
                    <TextInput
                        style={style.searchInput}
                        onChangeText={text => setSelectedSearch(text)}
                        value={selectSearch}
                        placeholder="Search"
                       
                    />
                </View>
                <Image
                    source={require("../assets/Group.png")}
                    style={style.Icon_Group}
                />
            </View>
            
            <View style={style.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity
                        style={[style.button, buttonStyle("nut1")]}
                        onPress={() => handlePress("nut1")}
                    >
                        <Text style={[style.text, textStyle("nut1")]}>
                            All Hotel
                        </Text>
                     
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            style.button,
                            { width: 135, height: 35 },
                            buttonStyle("nut2"),
                        ]}
                        onPress={() => handlePress("nut2")}
                    >
                        <Text style={[style.text, textStyle("nut2")]}>
                            Recommended
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[style.button, buttonStyle("nut3")]}
                        onPress={() => handlePress("nut3")}
                    >
                        <Text style={[style.text, textStyle("nut3")]}>
                            Popular
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            style.button,
                            { marginRight: 21 },
                            buttonStyle("nut4"),
                        ]}
                        onPress={() => handlePress("nut4")}
                    >
                        <Text style={[style.text, textStyle("nut4")]}>
                            Trending
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={style.ScrollView_Menu}>
                <ScrollView
                    style={style.menu}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity style={style.ScrollView_Img_travel} onPress={()=>navigation.navigate("Detailbooking")}>  
                        <View style={style.star}>
                            <Image style={{marginRight:5,width:14, height:14}} source={require("../assets/star_1.png")}/>
                            <Text style={{fontSize:13,color:"white"}}>5.0</Text>
                        </View>
                        <Image
                            source={require("../assets/hotel9.jpg")}
                            style={style.Img_travel}
                        />
                        <View style = {style.Img_Text}>
                            
                                <Text style ={ style.Img_Text_Name}> Intercontinental Hotel</Text>
                                <Text style ={ style.Img_Text_Logo}> Lagos, Nigeria </Text>
                            <View style ={style.Text_Time}>
                                <Text style ={ style.Img_Text_Price}>$205</Text>
                                <Text style={{color:"white",fontWeight:"500",right:10,}}>/night</Text>
                            </View>
                       </View>   
                    </TouchableOpacity>

                    <View style={style.ScrollView_Img_travel}>
                        <View style={style.star}>
                            <Image style={{marginRight:5, width:14, height:14}} source={require("../assets/star_1.png")}/>
                            <Text style={{fontSize:13,color:"white"}}>5.0</Text>
                        </View>
                        <Image
                            source={require("../assets/hotel8.jpg")}
                            style={style.Img_travel}
                        />
                        <View style = {style.Img_Text}>
                            <Text style ={ style.Img_Text_Name}> Nevada Hotel</Text>
                            <Text style ={ style.Img_Text_Logo}> Lagos, Nigeria </Text>
                            <View style ={style.Text_Time}>
                                <Text style ={ style.Img_Text_Price}>$107</Text>
                                 <Text style={{color:"white",fontWeight:"500",right:10,}}>/night</Text>
                            </View>
                        </View>
                        
                    </View>

                
                </ScrollView>  
            </View>
            <View style={style.Book}>
                <Text style={style.Book_Name}>Recently Booked</Text>
                <TouchableOpacity
                 onPress={()=>navigation.navigate("Recently")}
                >
                    <Text style={style.Book_Name1}>See All</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={style.footer_hotel}>
                <View style={style.navi_footer}>
                    <Image
                        source={require("../assets/home.png")}
                        style={style.Img_navi_footer}
                    />
                    <Text style={style.text_footer}>Home</Text>
                </View>
                <View style={style.navi_footer}>
                    <Image
                        source={require("../assets/search.png")}
                        style={style.Img_navi_footer}
                    />
                    <Text style={style.text_footer}>Search</Text>
                </View>
                <View style={style.navi_footer}>
                    <Image
                        source={require("../assets/negative.png")}
                        style={style.Img_navi_footer}
                    />
                    <Text style={style.text_footer}>Booking</Text>
                </View>
                <View style={style.navi_footer}>
                    <Image
                        source={require("../assets/account.png")}
                        style={style.Img_navi_footer}
                    />
                    <Text style={style.text_footer}>Profile</Text>
                </View>
            </View> */}
        </View>
    );
};
const style = StyleSheet.create({
    appBarWrapper: {
        paddingTop: 57,
        //marginHorizontal:22,
        height: 850,
        position: "relative",
        backgroundColor:"#fff",
    },
    appBar: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 22,
    },
    location: {
        color: "#585858",
        fontSize: 30,
        fontWeight: "400",
        lineHeight: 34,
        letterSpacing: 0.5,
        fontStyle: "normal",
        marginLeft:15,
    },
  
    Welcom_Text: {
        color: "#000",
        fontSize: 32,
        fontWeight: "600",
        lineHeight: 45,
        letterSpacing: 0.5,
        fontStyle: "normal",
        marginTop:15,
    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 18,
        backgroundColor: "#e3e3e3",
        height: 60,
        width: 360,
        paddingLeft: 15,
        borderRadius: 15,
        marginTop: 20,
    },
    searchIcon: {
        marginHorizontal: 10,
        color: "gray",
        height: 24,
        width: 24,
    },
    searchWrapper: {
        flex: 1,
        marginRight: "small",
        zIndex: 1,
    },
    searchInput: {

        padding: 10,
        marginLeft: 5,
        fontSize: 16
    },
    Icon_Group:{
        right:10,
    },
    ScrollView_Menu: {
        marginLeft: 22,

    },
    ScrollView_Img_travel:{
        position:"relative",
    },
    star:{
        flexDirection:"row",
        width:60,
        height:35,
        backgroundColor:"#1AB65C",
        justifyContent: "center",
        alignItems:"center",
        borderRadius:20,
        position:"absolute",
        top:60,
        right:30,
        zIndex:1,
    },
    container: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 40,
        marginLeft: 22,
    },
    button: {
        backgroundColor: "#fff",
        marginHorizontal: 3.5,
        borderRadius: 50,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#1AB65C",
        width: 100,
        height: 35,
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600",
        color: "#1AB65C",
        paddingHorizontal: 11,
        paddingVertical: 5,
    },
   
    ScrollView: {
        flexDirection: "row",
    }, 
   
    Img_travel: {
        width: 266,
        height: 355,
        borderRadius: 20,
        marginRight: 10,
        marginTop: 40,
        
    },
  
    Img_Text:{
       
        position: "absolute",
        bottom:20,
        left:20,
        fontWeight:"bold",
        
    },
    Img_Text_Name:{
        color: "#ffffff",
        fontSize:20,
        fontStyle:"normal",
        fontWeight:"700",
        lineHeight: 28,
        letterSpacing:0.5,
        right: 20,
    },
    Img_Text_Logo:{
        color: "#ffffff",
        fontSize:17,
        right:20,
    },
    Img_Text_Price:{
        color: "#ffffff",
        fontSize:17,
        right:14,
        fontWeight:"700",
    },
    Text_Time:{
        alignItems: "center",
        width: 100,
        flexDirection: "row",
    },
   
    Img_Text_Night:{
        color: "#000",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 31,
        letterSpacing: 1,
         marginTop: 7,
    },
    Icon:{
        position:"absolute",
        bottom:20,
        left:210,
        fontWeight:"bold",
    },
    Book:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 21,
    },
    Book_Name:{
        color: "#000",
        fontSize: 19,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 27,
    },
    Book_Name1:{
        color: "#1AB65C",
        fontSize: 16,
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: 27,
    },
    footer_hotel: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        backgroundColor: "#fff",
        width: 411,
        height: 100,
        bottom: 1,
        borderRadius: 12,
    },
    navi_footer: {
        alignItems: "center",
    },
    Img_navi_footer: {
        marginBottom: 5,
        width: 28,
        height: 28,
    },
});

export default Home;
