import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('./assets/aaa.png')}
            />
            <TextInput
                style={styles.input}
                placeholder="Oddział"
                placeholderTextColor="#fff"
                underlineColorAndroid="transparent"
                returnKeyType="next"
                onChangeText={(text) => setEmail(text)}
                value={email}
                blurOnSubmit={false}
                autoCorrect={false}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Hasło"
                placeholderTextColor="#fff"
                underlineColorAndroid="transparent"
                returnKeyType="next"
                onChangeText={(text) => setPassword(text)}
                value={password}
                blurOnSubmit={false}
                autoCorrect={false}
                autoCapitalize="none"
            />

            <TouchableOpacity style={styles.buttonContainer}>
                <Text onPress={() => navigation.navigate('Home')} style={styles.buttonText}>Zaloguj</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 80
    },
    input: {
        height: 50,
        fontSize: 18,
        width: '80%',
        backgroundColor: 'rgba(50,50,50,0.2)',
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 20,
        borderRadius: 25,
        paddingVertical: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        borderRadius: 25,
        width: '80%',
        marginTop: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
    },
};

export default Login;