import React, { useState, useEffect } from 'react';
import { View, Text, Picker } from 'react-native';
import axios from 'axios';

const API_URL = 'http://192.168.100.27:2137/column?table=';

const Witam = () => {
    const [data, setData] = useState([]);
    const [week, setWeek] = useState('');
    const [className, setClassName] = useState('');

    useEffect(() => {
        if (className && week) {
            axios.get(API_URL + className + '&name=' + week)
                .then(response => setData(response.data))
                .catch(error => console.log(error));
        }
    }, [className, week]);

    const polishWeek = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
    const classNames = ['1a', '1b', '1c', '2a', '2b', '3a', '3b', '4a', '4b', '1at', '1bt', '1ct', '1dt', '1et', '1ft', '2at', '2bt', '2ct', '2dt', '3at', '3bt', '3ct', '3dt', '3et', '4at', '4bt', '4ct', '4dt', '4atg', '4btg', '4ctg', '4dtg', '1ab', '2ab', '3ab'];

    return (
        <View>
            <Picker
                selectedValue={week}
                onValueChange={(itemValue) => setWeek(itemValue)}>
                {polishWeek.map(week => <Picker.Item label={week} value={week} key={week} />)}
            </Picker>
            <Picker
                selectedValue={className}
                onValueChange={(itemValue) => setClassName(itemValue)}>
                {classNames.map(className => <Picker.Item label={className} value={className} key={className} />)}
            </Picker>
            <View>
                <Text>Week: {week}</Text>
                <Text>Class: {className}</Text>
                <View>
                    {data.map(item => (
                        <View key={item.id}>
                            <Text>{item.name}</Text>
                            <Text>{item.description}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default Witam;