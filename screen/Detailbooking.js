import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from "react-native";

function Detailbooking({ navigation }) {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image
                    source={require("../assets/Rectangle.png")}
                    style={style.Img_haven}
                />
            </View>

            <View style={style.container_conten}>
                <ScrollView>
                    <View
                        style={{
                            marginHorizontal: 18,
                            borderBottomWidth: 1,
                            borderColor: "rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        <View>
                            <Text style={style.Presidential_Name}>
                                Presidential Hotel
                            </Text>
                        </View>
                        <View style={style.conten_address}>
                            {
                                <Image
                                    source={require("../assets/icons8-location-48.png")}
                                    style={style.Icon_address}
                                />
                            }
                            <Text style={style.content_address_Address}>
                                12 Eze Adele Road Rumuomasi Lagos Nigeria
                            </Text>
                        </View>
                    </View>

                    <View style={style.Gallery}>
                        <Text style={style.Gallery_Name}>Gallery Photos</Text>
                        <Text style={style.Gallery_Name1}>See All</Text>
                    </View>

                    <ScrollView
                        style={{ marginLeft: 21 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={style.ScrollView_Img_travel}>
                            <Image
                                source={require("../assets/Rectangle_1.png")}
                                style={style.Img_travel}
                            />
                        </View>
                        <View style={style.ScrollView_Img_travel}>
                            <Image
                                source={require("../assets/Rectangle_2.png")}
                                style={style.Img_travel}
                            />
                        </View>
                        <View style={style.ScrollView_Img_travel}>
                            <Image
                                source={require("../assets/Rectangle_3.png")}
                                style={style.Img_travel}
                            />
                        </View>
                        <View style={style.ScrollView_Img_travel}>
                            <Image
                                source={require("../assets/images.jpg")}
                                style={style.Img_travel}
                            />
                        </View>
                    </ScrollView>

                    <View style={{ paddingHorizontal: 21 }}>
                        <View style={style.Detail_Content}>
                            <Text style={style.Detail}>Details</Text>
                        </View>
                        <View style={style.Select_Detail}>
                            <View style={style.Select_Detail_Content}>
                                <Image
                                    source={require("../assets/Vector1.png")}
                                    style={{ marginBottom: 7 }}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    Hotels
                                </Text>
                            </View>

                            <View style={style.Select_Detail_Content}>
                                <Image
                                    source={require("../assets/bx_hotel.png")}
                                    style={style.Icon_Select}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    4 Bedrooms
                                </Text>
                            </View>

                            <View style={style.Select_Detail_Content}>
                                <Image
                                    source={require("../assets/bxs_bath.png")}
                                    style={style.Icon_Select}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    2 Bathrooms
                                </Text>
                            </View>
                            <View style={style.Select_Detail_Content}>
                                <Image
                                    source={require("../assets/Vector_2.png")}
                                    style={style.Icon_Select}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    3000 sqft
                                </Text>
                            </View>
                        </View>

                        <View style={style.Descripsion}>
                            <Text style={style.Descripsion_Content}>
                                Descripsion
                            </Text>
                            <Text style={style.Text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna
                                aliqua.Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt aliqua.
                                <Text
                                    style={{
                                        color: "#1AB65C",
                                        fontWeight: "600",
                                    }}
                                >
                                    {" "}
                                    Read more...{" "}
                                </Text>
                            </Text>
                        </View>
                        <View style={style.Facilities}>
                            <View style={style.Facilities_Icon}>
                                <Image
                                    source={require("../assets/bx_swim.png")}
                                    style={style.Icon_Select}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    Swimming Pool
                                </Text>
                            </View>
                            <View style={style.Facilities_Icon}>
                                <Image
                                    source={require("../assets/fa-solid_wifi.png")}
                                    style={style.Icon_Select}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    WiFi
                                </Text>
                            </View>
                            <View style={style.Facilities_Icon}>
                                <Image
                                    source={require("../assets/ic_outline-restaurant-menu.png")}
                                    style={style.Icon_Select}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    Restaurant
                                </Text>
                            </View>
                            <View style={style.Facilities_Icon}>
                                <Image
                                    source={require("../assets/mdi_car-brake-parking.png")}
                                    style={style.Icon_Select}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    Parking
                                </Text>
                            </View>
                            <View style={style.Facilities_Icon}>
                                <Image
                                    source={require("../assets/ic_baseline-meeting-room.png")}
                                    style={style.Icon_Select}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    Meeting Room
                                </Text>
                            </View>
                            <View style={style.Facilities_Icon}>
                                <Image
                                    source={require("../assets/ic_outline-elevator.png")}
                                    style={style.Icon_Select}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    Elevator
                                </Text>
                            </View>
                            <View style={style.Facilities_Icon}>
                                <Image
                                    source={require("../assets/1_Vector.png")}
                                    style={style.Icon_Select}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    Fitness Center
                                </Text>
                            </View>
                            <View style={style.Facilities_Icon}>
                                <Image
                                    source={require("../assets/ri_24-hours-line.png")}
                                    style={style.Icon_Select}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    24-hours Open
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={style.Review}>
                        <Text
                            style={{
                                color: "#000",
                                fontSize: 19,
                                fontStyle: "normal",
                                fontWeight: "600",
                            }}
                        >
                            Review
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                paddingRight: 100,
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                source={require("../assets/Star_2.png")}
                                style={style.Icon_Select}
                            />
                            <Text
                                style={{
                                    color: "#1AB65C",
                                    fontSize: 14,
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    marginRight: 5,
                                    marginLeft:4,
                                }}
                            >
                                5.0
                            </Text>
                            <Text
                                style={{
                                    color: "#3D3D3D",
                                    fontSize: 14,
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                }}
                            >
                                (4,345 reviews)
                            </Text>
                        </View>
                        <View>
                            <Text
                                style={{
                                    color: "#1AB65C",
                                    fontSize: 19,
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    marginRight: 20,
                                }}
                            >
                                See All
                            </Text>
                        </View>
                    </View>
                    <View style={style.sortListContainer}>
                        <View style={style.title}>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    source={require("../assets/Ellipse_4.png")}
                                    style={{marginRight:10,}}
                                />
                                <View>
                                    <Text style={{color:"#000",fontSize:17, fontWeight:"600",lineHeight:24,letterSpacing:0.2,fontStyle:"normal",}}>Nonso Davies</Text>
                                    <Text style={{color:"#000",fontSize:15,lineHeight:21,letterSpacing:0.2,}}>Jan 20, 2025</Text>
                                </View>
                                <View style={style.star}>
                                    <Image
                                        style={{
                                            marginRight: 5,
                                            width: 14,
                                            height: 14,
                                        }}
                                        source={require("../assets/Star2.png")}
                                    />
                                    <Text style={{ fontSize: 13, color: "white" }}> 5.0</Text>
                                </View>
                            </View>

                            <Text style={style.comment}>
                            The rooms are very elegant and the natural views are amazing can’t wait to come back again
                            </Text>
                        </View>
                        <View style={style.title}>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    source={require("../assets/Ellipse_5.png")}
                                    style={{marginRight:10,}}
                                />
                                <View>
                                    <Text style={{color:"#000",fontSize:17, fontWeight:"600",lineHeight:24,letterSpacing:0.2,fontStyle:"normal",}}>Peter Shege</Text>
                                    <Text style={{color:"#000",fontSize:15,lineHeight:21,letterSpacing:0.2,}}>Jan 09, 2025</Text>
                                </View>
                                <View style={style.star}>
                                    <Image
                                        style={{
                                            marginRight: 5,
                                            width: 14,
                                            height: 14,
                                        }}
                                        source={require("../assets/Star2.png")}
                                    />
                                    <Text style={{ fontSize: 13, color: "white" }}> 5.0</Text>
                                </View>
                            </View>

                            <Text style={style.comment}>
                            Very nice hotel, my friends and I are very satisfied with the service!
                            </Text>
                        </View>
                        <View style={style.title}>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    source={require("../assets/Ellipse.png")}
                                    style={{marginRight:10,}}
                                />
                                <View>
                                    <Text style={{color:"#000",fontSize:17, fontWeight:"600",lineHeight:24,letterSpacing:0.2,fontStyle:"normal",}}>Ivande Othawa</Text>
                                    <Text style={{color:"#000",fontSize:15,lineHeight:21,letterSpacing:0.2,}}>Jan 20, 2025</Text>
                                </View>
                                <View style={style.star}>
                                    <Image
                                        style={{
                                            marginRight: 5,
                                            width: 14,
                                            height: 14,
                                        }}
                                        source={require("../assets/Star2.png")}
                                    />
                                    <Text style={{ fontSize: 13, color: "white" }}> 5.0</Text>
                                </View>
                            </View>

                            <Text style={style.comment}>
                            Very nice and comfortable hotel, thank you for accompanying my vacation!
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={style.Button}
                        >
                        <View style = {{flexDirection:"row"}}> 
                            <Text style={{color:"#1AB65C",fontSize:17, fontWeight:"600",lineHeight:24,letterSpacing:0.2,fontStyle:"normal",}}>More</Text>
                            <Image
                                    source={require("../assets/Line_6.png")}
                                    style={{marginLeft:10,marginTop:10,}}
                                />
                        </View>
                       
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View style={style.DescripsionFooter}>
                <View style={style.DescripsionContainer}>
                    <Text style={style.DescripsionTitle}>$205</Text>
                    <Text style={style.DescripsionText}>/night</Text>
                </View>
                <TouchableOpacity
                    style={style.PayButton}
                    onPress={() => navigation.navigate("Date")}
                >
                    <Text style={style.ButtonText}>Book Now!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor:"white",
    },

    header: {
        width: "100%",
        height: "30%",
    },
    Img_haven: {
        width: "100%",
        height: "100%",
    },

    container_conten: {
        height: "60%",
    },
    Presidential_Name: {
        color: "#000",
        fontSize: 29,
        lineHeight: 44,
        letterSpacing: 1,

        fontWeight: "700",
        paddingTop: 15,
    },
    conten_address: {
        flexDirection: "row",
        paddingTop: 7,
        justifyContent: "center",
        marginBottom: 30,
    },

    Icon_address: {
        width: 12,
        height: 12,
        marginTop: 4,
    },
    content_address_Address: {
        color: "#202020",
        textAlign: "center",
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontStyle: "normal",
        flexDirection: "row",
    },
    Gallery: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 21,
    },
    Gallery_Name: {
        color: "#000",
        textAlign: "center",
        fontSize: 19,
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: 27,
        letterSpacing: 1,
    },
    Gallery_Name1: {
        color: "#1AB65C",

        fontSize: 19,
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: 27,
        letterSpacing: 1,
    },
    Detail_Content: {
        paddingTop: 9,
    },
    Detail: {
        fontSize: 22,
        color: "#000",
        fontSize: 22,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 27,
        letterSpacing: 1,
    },
    Img_travel: {
        width: 130,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    Select_Detail: {
        marginTop: 20,
        height: 40,
        flexDirection: "row",
        fontWeight: "900",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 25,
        color: "#000",
        marginHorizontal: 20,
        justifyContent: "space-between",
    },
    Select_Detail_Content: {
        justifyContent: "center",
        alignItems: "center",
    },
    Descripsion_Content: {
        paddingTop: 2,
        paddingBottom: 20,
        color: "#000",

        fontSize: 19,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 26,
        letterSpacing: 1,
    },
    Facilities: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 30,
        flexWrap: "wrap",
    },
    Facilities_Icon: {
        width: 80,
        height: 80,
        left: 15,
    },
    Review: {
        marginTop: 20,
        marginLeft: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor:"white",
        borderRadius: 10,
        padding: 10,
        elevation:8,
        marginBottom:20,
    },
 
    sortListContainer: {
        marginTop: 16,
    },
    star: {
        flexDirection: "row",
        width: 60,
        height: 35,
        backgroundColor: "#1AB65C",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        position: "absolute",
        top: 0,
        right: 10,
        zIndex: 1,
    },
    Button:{
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        borderRadius: 27,
    
       backgroundColor: "E8F8EF",
        width: 380,
        height: 53,
        marginLeft: 18,
        marginBottom: 1,
    },
        
    DescripsionFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        height: "10%",
        marginHorizontal: 18,
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.25)",
        // backgroundColor:"white",
        // borderWidth:1,
        
    },
    Descripsion_Text: {
        color: "#000",

        fontSize: 20,
        fontStyle: "normal",
        lineHeight: 28,
        letterSpacing: 1,
        fontWeight: "600",
        marginTop: 11,
    },
    Text: {
        color: "#616161",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 19,
        letterSpacing: 0.2,
    },
    DescripsionContainer: {
        alignItems: "center",
        width: 100,
        flexDirection: "row",
    },
    DescripsionTitle: {
        color: "#1AB65C",

        fontSize: 22,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 31,
        letterSpacing: 1,
    },
    DescripsionText: {
        color: "#000",
        fontSize: 11,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 31,
        letterSpacing: 1,
        marginTop: 7,
    },
    PayButton: {
        alignItems: "center",
        justifyContent: "center",
        height: 36,
        borderRadius: 27,
        backgroundColor: "#1AB65C",
        width: 238,
        height: 53,
        marginLeft: 26,
        marginBottom: 1,
    },
    ButtonText: {
        color: "#fff",
        fontSize: 17,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 24,
        letterSpacing: 1,
    },
});
export default Detailbooking;
