import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Table, Row, Rows } from 'react-native-table-component';

const Witam = () => {
    let isDataLoaded = false;
    const [selectedDay, setSelectedDay] = useState('Poniedziałek');
    const [selectedName, setSelectedName] = useState('1a');
    const [tableData, setTableData] = useState([]);

    const days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];
    const names = ['1a', '1b', '1c', '2a', '2b', '3a', '3b', '4a', '4b', '1at', '1bt', '1ct', '1dt', '1et', '1ft', '2at', '2bt', '2ct', '2dt', '3at', '3bt', '3ct', '3dt', '3et', '4at', '4bt', '4ct', '4dt', '4atg', '4btg', '4ctg', '4dtg', '1ab', '2ab', '3ab'];

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`http://192.168.100.27:2137/column?table=${selectedName}&name=${selectedDay}`);
            const jsonData = await response.json();
            let tempData = jsonData.map(val => {
                return val.split(/[\s,;]+/)
            });
            setTableData(tempData);
        } catch (error) {
            console.error(error);
        }
    }, [selectedDay, selectedName])

    useEffect(() => {
        fetchData();
    }, [fetchData])
    isDataLoaded = true;



    return (
        <View>
            <View>
                <Text>Wybierz dzień tygodnia:</Text>
                <Picker
                    selectedValue={selectedDay}
                    onValueChange={(itemValue) => {
                        setSelectedDay(itemValue);
                        fetchData();
                    }}
                >
                    {days.map((day) => (
                        <Picker.Item key={day} label={day} value={day} />
                    ))}
                </Picker>
            </View>

            <View>
                <Text>Wybierz oddział:</Text>
                <Picker
                    selectedValue={selectedName}
                    onValueChange={(itemValue) => {
                        setSelectedName(itemValue);
                        fetchData();
                    }}
                >
                    {names.map((name) => (
                        <Picker.Item key={name} label={name} value={name} />
                    ))}
                </Picker>
            </View>
            {/* {isDataLoaded ?
                <Table>
                    <Row data={['Przedmiot', 'Klasa']} />
                    {tableData.length > 0 ?
                        tableData.map((rowData, index) => (
                            <Rows key={index} data={rowData} />
                        )) :
                        <Text>Wybierz dzień tygodnia oaz oddział</Text>
                    }
                </Table>
                :
                <Text>Loading...</Text>
            } */}

        </View>
    );
};


export default Witam;
