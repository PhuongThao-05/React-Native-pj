import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
    Touchable,
    TouchableOpacity,
    Button,
    SafeAreaView,
    TextInput,
} from "react-native";

import React, { useState } from "react";
import moment from "moment";
import { Calendar } from "react-native-calendars";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Date = ({ navigation }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    // const checkin = new Date();
    const [date, setDate] = useState(moment());
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const [datetime, setdatetime] = useState(moment().format("YYYY-MM-DD"));
    const handleConfirm = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần +1
        const year = date.getFullYear();
        const formattedDate = `${year}-${month}-${day}`;
        setdatetime(formattedDate);
        hideDatePicker();
    };
    const [number, setNumber] = useState(0);

    const increaseNumber = () => {
        setNumber(number + 1);
    };

    const decreaseNumber = () => {
        setNumber(number - 1);
    };
    return (
        <View
            style={{ flex: 1, backgroundColor: "white", position: "relative" }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 30,
                }}
            >
                <TouchableOpacity
                    style={{ flexDirection: "row", marginTop: 20 }}
                    onPress={() => navigation.navigate("Detailbooking")}
                >
                    <Image
                        source={require("../assets/arrow.png")}
                        style={style.Img_arrow}
                    />
                    <Text
                        style={{
                            fontSize: 24,
                            marginLeft: 13,
                            fontWeight: "700",
                        }}
                    >
                        Select Date
                    </Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={{ marginTop: 20 }}>
                <Calendar />
            </SafeAreaView>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginLeft: 10,
                }}
            >
                <View style={{ flex: 1, marginTop: 15 }}>
                    <Text
                        style={{
                            color: "#202020",
                            fontSize: 17,
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: 23.8,
                            letterSpacing: 0.2,
                            marginLeft: 10,
                        }}
                    >
                        Check in
                    </Text>

                    <View>
                        <TouchableOpacity
                            style={{
                                paddingVertical: 15,
                                paddingHorizontal: 10,
                                marginHorizontal: 10,
                                width: 155,
                                height: 45,
                                borderRadius: 10,
                                borderWidth: 0.5,
                                borderColor: "#EDEDEE",
                                // elevation: 1,
                            }}
                            activeOpacity={0}
                            onPress={showDatePicker}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-around",
                                }}
                            >
                                <Text style={{ flexDirection: "row" }}>
                                    {datetime}
                                </Text>
                                <Image
                                    source={require("../assets/Calendar_1.png")}
                                    style={{}}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
                <View style={{ flex: 1, marginTop: 15 }}>
                    <Text
                        style={{
                            color: "#202020",
                            fontSize: 17,
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: 23.8,
                            letterSpacing: 0.2,
                            marginLeft: 15,
                        }}
                    >
                        Check out{" "}
                    </Text>

                    <TouchableOpacity
                        style={{
                            paddingVertical: 15,
                            paddingHorizontal: 10,
                            marginHorizontal: 10,
                            width: 155,
                            height: 45,
                            borderRadius: 10,
                            borderWidth: 0.5,
                            borderColor: "#EDEDEE",
                        }}
                        activeOpacity={0}
                        onPress={showDatePicker}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-around",
                            }}
                        >
                            <Text style={{ flexDirection: "row" }}>
                                {datetime}
                            </Text>
                            <Image
                                source={require("../assets/Calendar_1.png")}
                                style={{}}
                            />
                        </View>
                    </TouchableOpacity>

                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
            </View>
            <View style={style.Guest_number}>
                <Text
                    style={{
                        color: "#202020",
                        fontSize: 17,
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: 23.8,
                        letterSpacing: 0.2,
                        marginTop: 40,
                        marginLeft: 20,
                    }}
                >
                    Guest
                </Text>
                <View style={style.button_number}>
                    <TouchableOpacity
                        style={style.button}
                        onPress={decreaseNumber}
                    >
                        <Text style={style.numberText}>-</Text>
                    </TouchableOpacity>

                    <Text style={style.numberText}>{number}</Text>

                    <TouchableOpacity
                        style={style.button}
                        onPress={increaseNumber}
                    >
                        <Text style={style.numberText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ position: "absolute", bottom: 10 }}>
                <Text
                    style={{
                        color: "#202020",
                        fontSize: 18,
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: 25,
                        letterSpacing: 0.2,
                        textAlign: "center",
                        marginTop: 80,
                    }}
                >
                    Total: $525
                </Text>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 27,
                        backgroundColor: "#1AB65C",
                        width: 370,
                        height: 58,
                        marginBottom: 20,

                        marginHorizontal: 20,
                    }}
                    onPress={() => navigation.navigate("Reservation")}
                >
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 17,
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: 24,
                            letterSpacing: 1,
                        }}
                    >
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    button_number: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 18,
        justifyContent: "space-around",
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#EDEDEE",
        marginTop: 30,
    },
    button: {
        width: 47,
        height: 47,
        backgroundColor: "#E8F8EF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    numberText: {
        fontSize: 20,
    },
});
export default Date;
