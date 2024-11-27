import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomImageLink from '../Custom/CustomImageLink';
import FastImage from 'react-native-fast-image';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 4000);

        return () => clearTimeout(timer); // Clean up timer if the component unmounts
    }, [navigation]);

    return (
        <View style={styles.container}>
            <FastImage
                style={styles.image}
                source={{
                    uri: 'https://media1.tenor.com/m/tCL3HGcaV4UAAAAd/raccoon-dance.gif',
                    priority: FastImage.resizeMode.normal
                }}
                resizeMode={FastImage.resizeMode.contain}
            />
            
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        width: 250,
        height: 250,
        borderRadius: 500,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    text:{
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 30,
        fontSize: 25
    }

});

export default SplashScreen;
