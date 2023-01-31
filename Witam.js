import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PolishDays = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];
const ClassNames = ["1a", "1b", "1c", "2a", "2b", "3a", "3b", "4a", "4b", "1at", "1bt", "1ct", "1dt", "1et", "1ft", "2at", "2bt", "2ct", "2dt", "3at", "3bt", "3ct", "3dt", "3et", "4at", "4bt", "4ct", "4dt", "4atg", "4btg", "4ctg", "4dtg", "1ab", "2ab", "3ab"];

const Witam = () => {
    const [selectedDay, setSelectedDay] = useState(PolishDays[0]);
    const [selectedClass, setSelectedClass] = useState(ClassNames[0]);
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

    console.log(apiData);
    return (
        <View style={styles.container}>
            <View style={styles.dropdownContainer}>
                <Text style={styles.dropdownLabel}>Day:</Text>
                <Picker
                    selectedValue={selectedDay}
                    style={styles.dropdown}
                    onValueChange={(itemValue) => setSelectedDay(itemValue)}
                >
                    {PolishDays.map((day) => (
                        <Picker.Item key={day} label={day} value={day} />
                    ))}
                </Picker>
                <Text style={styles.dropdownLabel}>Class:</Text>
                <Picker
                    selectedValue={selectedClass}
                    style={styles.dropdown}
                    onValueChange={(itemValue) => setSelectedClass(itemValue)}
                >
                    {ClassNames.map((className) => (
                        <Picker.Item key={className} label={className} value={className} />
                    ))}
                </Picker>
            </View>
            <View style={styles.tableContainer}>
                {Array.isArray(apiData) && apiData.map((row) => (
                    <View key={row.id} style={styles.tableRow}>
                        <Text style={styles.tableCell}>{row.id}</Text>
                        <Text style={styles.tableCell}>{row.subject}</Text>
                        <Text style={styles.tableCell}>{row.teacher}</Text>
                    </View >
                ))}
                <TouchableOpacity>
                    <Text onPress={fetchData}>Costam</Text>
                </TouchableOpacity>
            </View >

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    dropdownContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        marginBottom: 20,
    },
    dropdownLabel: {
        fontSize: 18,
    },
    dropdown: {
        width: "40%",
    },
    tableContainer: {
        width: "80%",
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        padding: 10,
    },
    tableCell: {
        width: "33.33%",
        fontSize: 16,
    },
});
export default Witam;