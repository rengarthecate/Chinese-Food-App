import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import WelcomeScreen from '../components/user/WelcomeScreen';
import RegisterScreen from '../components/user/RegisterScreen';
import SplashScreen from '../src/SplashScreen';
const UserNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
            <Stack.Screen name="Login" component={WelcomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
    )
}

export default UserNavigation