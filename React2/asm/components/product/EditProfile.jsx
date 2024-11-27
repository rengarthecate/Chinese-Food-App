import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../rtk/API';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import styles from '../../styles/StyleEditProfile';

const EditProfile = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const user = useSelector(state => state.app.user);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState(user.address || '');
    const [phone, setPhone] = useState(user.phone);

    const handleUpdate = () => {
        const updatedUser = { id: user._id, name, email, address, phone };
        dispatch(updateUser(updatedUser))
            .unwrap()
            .then(() => {
                Alert.alert('Thông tin đã được cập nhật');
                navigation.goBack(); // Quay lại màn hình trước đó
            })
            .catch((error) => Alert.alert('Cập nhật thất bại', error));
    };

    return (
        <View style={styles.Wrapper}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>🦑</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.header}>Edit Profile</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Full name"
                    placeholderTextColor="#888"
                />
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    placeholderTextColor="#888"
                />
                <TextInput
                    style={styles.input}
                    value={address}
                    onChangeText={setAddress}
                    placeholder="Address"
                    placeholderTextColor="#888"
                />
                <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="Phone number"
                    placeholderTextColor="#888"
                />
                <TouchableOpacity onPress={handleUpdate} style={styles.btn} >
                    <Text style={styles.textBtn}>Update</Text>
                </TouchableOpacity>
            </View>
            <FastImage
                style={styles.img}
                source={{ uri: 'https://66.media.tumblr.com/tumblr_m9wm1fb9Xj1rfjowdo1_500.gif' }}
            />
        </View>
    );
};

export default EditProfile;


