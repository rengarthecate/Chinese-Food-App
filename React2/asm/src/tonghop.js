import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { } from 'react'
import { useNavigation } from '@react-navigation/native';

const tonghop = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Lab1')}>
                <Text>Bài 1</Text>
            </TouchableOpacity>
        </View>
    )
}

export default tonghop

const styles = StyleSheet.create({})