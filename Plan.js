import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PolishDays = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];
const ClassNames = ["1a", "1b", "1c", "2a", "2b", "3a", "3b", "4a", "4b", "1at", "1bt", "1ct", "1dt", "1et", "1ft", "2at", "2bt", "2ct", "2dt", "3at", "3bt", "3ct", "3dt", "3et", "4at", "4bt", "4ct", "4dt", "4atg", "4btg", "4ctg", "4dtg", "1ab", "2ab", "3ab"];

const Plan = (props) => {
    useEffect(() => {
        fetchData(selectedDay, selectedClass)
    }, []);
    const { route } = props;
    const oddzial = route.params?.oddzial || ClassNames[0];
    const [selectedDay, setSelectedDay] = useState(PolishDays[0]);
    const [selectedClass, setSelectedClass] = useState(oddzial);
    const [apiData, setApiData] = useState([]);

    const fetchData = async (day, className) => {
        try {
            const response = await fetch("http://192.168.100.27:2137/column?table=" + className + "&name=" + day);
            const data = await response.json();
            setApiData(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const times = [
        " 7:10- 7:55",
        " 8:00- 8:45",
        " 8:55- 9:40",
        " 9:50-10:35",
        "10:50-11:35",
        "11:45-12:30",
        "12:40-13:25",
        "13:35-14:20",
        "14:25-15:10",
        "15:15-16:00"
    ];

    console.log(apiData);
    return (
        <View style={styles.container1}>
            <View style={styles.dropdownContainer}>
                <Picker
                    selectedValue={selectedDay}
                    style={styles.dropdown}
                    onValueChange={(itemValue) => { setSelectedDay(itemValue); fetchData(selectedDay, selectedClass) }}
                >
                    {PolishDays.map((day) => (
                        <Picker.Item key={day} label={day} value={day} />
                    ))}
                </Picker>
                <Picker
                    selectedValue={selectedClass}
                    style={styles.dropdown1}
                    onValueChange={(itemValue) => { setSelectedClass(itemValue); fetchData(selectedDay, selectedClass) }}
                >
                    {ClassNames.map((className) => (
                        <Picker.Item key={className} label={className} value={className} />
                    ))}
                </Picker>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={apiData}
                    renderItem={({ item, index }) => (
                        <View style={styles.row}>
                            <View style={styles.left}>
                                <Text style={styles.text}>{times[index]}</Text>
                            </View>
                            <View style={styles.right}>
                                <Text style={styles.text}>{item}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>




        </View >
    );
};

const styles = StyleSheet.create({
    row: {
        borderRadius: 20,
        flexDirection: 'row',
        borderWidth: 1,
        padding: 10,
        marginVertical: 5
    },
    left: {
        width: '30%',
        alignItems: 'center'
    },
    right: {
        width: '70%',
        paddingLeft: 10
    },
    text: {
        fontSize: 18
    },
    container: {
        borderRadius: 10,
        backgroundColor: "#717171",
        flex: 1,
        alignItems: "center",
        padding: 5
    },
    container1: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        backgroundColor: "#252525"
    },
    dropdownContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
    dropdown: {
        width: "42%",
        backgroundColor: "#717171",
        padding: 10,
        marginHorizontal: 10,
    },
    dropdown1: {
        width: "32%",
        backgroundColor: "#717171",
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
});

export default Plan;