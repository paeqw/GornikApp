import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Home({ navigation }) {
    return (
        <View>

            <TouchableOpacity>
                <Text onPress={() => navigation.navigate('Witam')} style={styles.buttonText}></Text>
            </TouchableOpacity>
            <Text>Welcome to the home screen!</Text>
        </View>
    );
}
const styles = {
    buttonText: {
        height: 40,
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'rgba(50,50,50,0.2)',
        fontWeight: '700',
        fontSize: 20,
    },
};
export default Home;