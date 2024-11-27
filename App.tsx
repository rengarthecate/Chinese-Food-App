// import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import AppNavigation from './React2/asm/navigations/AppNavigation';
// import { Provider } from 'react-redux';
// import { store, persistor } from './React2/asm/rtk/Store';
// import { PersistGate } from 'redux-persist/integration/react';

// function App(): React.JSX.Element {
//   return (
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <SafeAreaView style={styles.container}>
//           <StatusBar />
//           <AppNavigation />
//         </SafeAreaView>
//       </PersistGate>
//     </Provider>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './Library/src/RegisterScreen';
import LoginScreen from './Library/src/LoginScreen';
import HomeScreen from './Library/src/HomeScreen';
import CreateBorrowScreen from './Library/src/createBorrowScreen';
import BottomTabNavigator from './Library/src/BottomTabNavigator';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}} />
                <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="CreateBorrow" component={CreateBorrowScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
