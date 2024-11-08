import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Recently=({ navigation }) =>{
    const hotel = [
        {
            id: 1,
            title: "Intercontinental Hotel",
            imageurl: require("../assets/hotel1.jpg"),
            local: "Lagos, Nigeria",
            rate: "5.0",
            review: "(4,345 reviews)",
            price: "$205",
            night: "/night",
        },
        {
            id: 2,
            title: "Naveda Hotel",
            imageurl: require("../assets/hotel_2.jpg"),
            local: "Lagos, Nigeria",
            rate: "5.0",
            review: "(4,345 reviews)",
            price: "$107",
            night: "/night",
        },
        {
            id: 3,
            title: "Oriental Hotel",
            imageurl: require("../assets/hotel5.jpg"),
            local: "Lagos, Nigeria",
            rate: "5.0",
            review: "(4,345 reviews)",
            price: "$190",
            night: "/night",
        },
        {
            id: 4,
            title: "Federal Palace Hotel",
            imageurl: require("../assets/hotel6.jpg"),
            local: "Lagos, Nigeria",
            rate: "5.0",
            review: "(4,345 reviews)",
            price: "$200",
            night: "/night",
        },
        {
            id: 5,
            title: "Presidential Hotel",
            imageurl: require("../assets/hotel7.jpg"),
            local: "Lagos, Nigeria",
            rate: "5.0",
            review: "(4,345 reviews)",
            price: "$160",
            night: "/night",
        },
    ];
    return (
        <View style={style.container}>
            {/* ======Header======= */}
          
            <View style={style.appBar}>
                <View style={style.leftTab}>
                    <TouchableOpacity
                        style={[{ flexDirection: "row" }]}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={require("../assets/arrow.png")}
                            style={style.Img_arrow}
                        />
                    </TouchableOpacity>
                    <Text style={{fontSize:24, marginLeft:5,fontWeight:"700", }}>Recently Booked</Text>
                </View>
                <View style={style.rightTab}>
                    <Image
                        source={require("../assets/healthicons_ui-menu-negative.png")}
                        style={style.Img_arrow}
                    />
                    <Image
                        source={require("../assets/Vector1.png")}
                        style={style.Img_arrow}
                    />
                </View>
            </View>
            <View style = {{backgroundColor:"#E8F8EF", marginTop:37}}>
                <FlatList
                data={hotel}
                renderItem={({ item }) => (
                    <View style={style.flatlistContainer}>
                        <Image
                            source={item.imageurl}
                            style={[style.image, { height: 91, width: 91 }]}
                        />
                        <View style={style.detailhotel}>
                            <Text style={style.title}>{item.title}</Text>
                            <Text style={style.local}>{item.local}</Text>
                            <View style={style.rating}>
                                <AntDesign
                                    name="star"
                                    size={17}
                                    color="#FED201"
                                />
                                <Text style={style.rate}>{item.rate}</Text>
                                <Text style={style.review}>{item.review}</Text>
                            </View>
                        </View>
                        <View style={style.detailcost}>
                            <View style={style.cost}>
                                <Text style={style.price}>{item.price}</Text>
                                <Text style={style.night}>{item.night}</Text>
                            </View>
                            <View style={style.bookmark}>
                                <FontAwesome5
                                    name="bookmark"
                                    size={24}
                                    color="black"
                                />
                            </View>
                        </View>
                    </View>
                )}
            />
            </View>

            
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        marginTop: 60,
    },
    flatlistContainer: {
        backgroundColor: "#fff",
        marginVertical: 10,
        marginHorizontal: 21,
        paddingBottom: 14,
        paddingTop: 14,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
    },
    image: {
        marginHorizontal: 10,
        borderRadius: 11,
    },
    detailhotel: {
        flexDirection: "column",
        width: 180,
    },
    rating: {
        flexDirection: "row",
    },
    title: {
        fontSize: 15,
        lineHeight: 23.8,
        fontWeight: "700",
        color: "#000",
        paddingBottom: 10,
    },
    local: {
        paddingBottom: 5,
    },
    rate: {
        marginRight: 8,
        marginLeft: 2,
        fontSize: 13.5,
        fontWeight: "600",
        color: "#1AB65C",
    },
    review: {
        fontSize: 13.5,
    },
    price: {
        fontSize: 17,
        fontWeight: "700",
        color: "#1AB65C",
        paddingRight: 10,
    },
    detailcost: {
        flexDirection: "column",
        paddingBottom: 5,
        paddingLeft: 10,
    },
    bookmark: {
        paddingTop: 10,
        paddingLeft: 10,
    },
    appBar: {
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",   
        justifyContent: 'space-between'
    },
    leftTab:{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
    },
    rightTab:{
        flexDirection:'row',
        gap: 15,
    },
   
});
export default Recently;
