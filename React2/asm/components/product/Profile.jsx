import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import CustomImageLink from '../../Custom/CustomImageLink'
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../rtk/Reducer';
import { useDispatch, useSelector } from 'react-redux';

const UserSetting = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const user = useSelector(state => state.app.user);

    const handleLogout = () => {
        Alert.alert(
            "Log out",
            "Are you sure you want to log out",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Yes",
                    onPress: () => {
                        dispatch(logout());
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    PROFILE
                </Text>
            </View>
            <View style={styles.header2}>
                <CustomImageLink
                    style={styles.avt}
                    source={'https://scontent.xx.fbcdn.net/v/t1.15752-9/450467105_365349389650909_4487766446311908477_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=3roiIQZ87n0Q7kNvgFUd2sV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFdv9uh_VU4OpsQr8dOKFSRwxcGLymv5Q-C24BcHnnIIw&oe=66BB311B'}
                />
                <View style={styles.headerWrap}>
                    <Text style={styles.name}>
                        {user.name}
                    </Text>
                    <Text style={styles.gmail}>
                        {user.email}
                    </Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.body1}>
                    <View style={styles.titleWrap}>
                        <Text style={styles.bodyTitle}>
                            Settings
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                        <Text style={styles.text}>
                            Change Information
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>
                        My Orders
                    </Text>
                    <Text style={styles.text}>
                        Q & A
                    </Text>
                    <Text style={styles.text}>
                        About Us
                    </Text>
                    <View style={styles.titleWrap}>
                        <Text style={styles.bodyTitle}>
                            Security and Terms
                        </Text>
                    </View>
                    <Text style={styles.text}>
                        Terms and Conditions
                    </Text>
                    <Text style={styles.text}>
                        Private Policy
                    </Text>
                    <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                        <Text style={[styles.text, { color: 'red', fontWeight: 'bold' }]}>
                            Log out
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}

export default UserSetting

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    header2: {
        width: '100%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    headerWrap: {
        marginRight: 20
    },
    title: {
        fontWeight: '500',
        color: 'black',
        fontSize: 16
    },
    avt: {
        width: 45,
        height: 45,
        borderRadius: 500,
        marginRight: 20
    },
    name: {
        fontWeight: '500',
        color: 'black',
        fontSize: 16
    },
    gmail: {
        color: 'gray',
        fontSize: 13,
        fontWeight: '400'
    },
    bodyContainer: {
        width: '100%',
        height: '83%',
        alignItems: 'center',
    },
    body1: {
        width: '75%',
    },
    bodyTitle: {
        color: 'grey',
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 5
    },
    titleWrap: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginTop: '10%'

    },
    text: {
        color: 'black',
        marginTop: '10%',
        fontWeight: '600'
    },

})