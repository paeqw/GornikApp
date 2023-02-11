import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login.js';
import Home from './Home.js';
import Plan from './Plan.js';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Costam">
                <Stack.Screen name="Zaloguj się" component={Login} />
                <Stack.Screen name="Plan" component={Plan} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = {
    container: {
        backgroundColor: 'rgba(50,50,50,0.2)'
    },
};
export default App;
// npm run android
