import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Test = () => {
    const [showPassword, setShowPassword] = useState(true);

    const eye = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/448819654_1435113557195762_5161734984442237093_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=X1zrRzsHtYoQ7kNvgGnNZRd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFM0d1WGhGcO9fv1S6Na0U_DkNjC-qBq99C_2VR4wdK3A&oe=66A5E922';
    const eyeOff = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/448809228_409904888715930_6410961221044065333_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=EW78jSyheZYQ7kNvgHfGXNd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHfb8atnIa99wcF4Ith59QGJyNC179IWF9ek89xt7NgyA&oe=66A5E79A';

    return (
        <View style={styles.wrapper}>
            <TextInput
                placeholder='Password'
                secureTextEntry={showPassword}
                style={styles.input}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image
                    style={styles.icon}
                    source={{ uri: showPassword ? eye : eyeOff }}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    input: {
        flex: 1,
        padding: 10,
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
});

export default Test;
