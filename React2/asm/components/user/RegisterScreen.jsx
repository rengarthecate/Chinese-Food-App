import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../../src/Style';
import CustomButton from '../../Custom/CustomButton';
import CustomImageLink from '../../Custom/CustomImageLink';
import iconStyles from '../../src/styleLoginIcon';
import { useDispatch } from 'react-redux';
import { register } from '../../rtk/API';

const RegisterScreen = (props) => {
    const { navigation } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isFocusedName, setIsFocusedName] = useState(false);
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPhone, setIsFocusedPhone] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [checkboxColor, setCheckboxColor] = useState('#a8a8ab');

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const dispatch = useDispatch();

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
        setCheckboxColor(isChecked ? '#a8a8ab' : '#73b9fa');
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone) => {
        const re = /^\d{10}$/;
        return re.test(String(phone));
    };

    const handleRegister = async () => {
        if (!name || !email || !phone || !password) {
            Alert.alert('Validation Error', 'Không được bỏ trống');
            return;
        }

        if (!validateEmail(email)) {
            Alert.alert('Validation Error', 'Định dạng email không hợp lệ');
            return;
        }

        if (!validatePhone(phone)) {
            Alert.alert('Validation Error', 'Số điện thoại phải bao gồm 10 chữ số');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Validation Error', 'Mật khẩu phải có ít nhất 6 ký tự');
            return;
        }

        try {
            const action = await dispatch(register({
                name,
                email,
                password,
                phone
            }));
            if (register.fulfilled.match(action)) {
                Alert.alert('Success', 'Đăng ký thành công !');
                setTimeout(() => navigation.navigate('Login'), 2000);
            } else {
                Alert.alert('Registration Failed', action.payload || 'An error occurred.');
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred: ' + error.message);
        }
    };

    return (
        <View style={[styles.container]}>
            <View style={styles.imgRegisterWrap}>
                <CustomImageLink
                    style={styles.imageRegister}
                    source={'https://scontent.xx.fbcdn.net/v/t1.15752-9/449176813_289177474220355_3041555223861898229_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=2W5wODo7OKkQ7kNvgGm69VY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGP2fmHt9xHoeL7pAHs94bqNu1BDDCHnnUob6LGzGzQ_A&oe=66AD9327'} />
            </View>

            <View style={styles.body}>
                <View style={[styles.titleWrap, { marginTop: 0 }]}>
                    <Text style={styles.title1}>Register</Text>
                    <Text style={[styles.title2, { marginTop: 10 }]}>Create an account</Text>
                </View>

                <View style={styles.inputWrap}>
                    <TextInput
                        style={[styles.input, isFocusedName && styles.inputFocused]}
                        placeholder='Full name'
                        placeholderTextColor={'#a8a8ab'}
                        value={name}
                        onChangeText={setName}
                        onFocus={() => setIsFocusedName(true)}
                        onBlur={() => setIsFocusedName(false)}
                    />
                    <TextInput
                        style={[styles.input, isFocusedEmail && styles.inputFocused]}
                        placeholder='Email'
                        placeholderTextColor={'#a8a8ab'}
                        value={email}
                        onChangeText={setEmail}
                        onFocus={() => setIsFocusedEmail(true)}
                        onBlur={() => setIsFocusedEmail(false)}
                    />
                    <TextInput
                        style={[styles.input, isFocusedPhone && styles.inputFocused]}
                        placeholder='Phone number'
                        placeholderTextColor={'#a8a8ab'}
                        value={phone}
                        onChangeText={setPhone}
                        onFocus={() => setIsFocusedPhone(true)}
                        onBlur={() => setIsFocusedPhone(false)}
                    />
                    <TextInput
                        style={[styles.input, isFocusedPassword && styles.inputFocused]}
                        placeholder='Password'
                        placeholderTextColor={'#a8a8ab'}
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                        onFocus={() => setIsFocusedPassword(true)}
                        onBlur={() => setIsFocusedPassword(false)}
                    />
                </View>

                <View style={styles.bodyMethod}>
                    <View style={styles.termWrap1}>
                        <View style={styles.termWrap2}>
                            <Text style={styles.termText}>To register an account, you must agree to the </Text>
                            <Text style={styles.term}>{''} Terms & </Text>
                        </View>
                        <View style={styles.termWrap2}>
                            <Text style={styles.term}>Condition  </Text>
                            <Text style={styles.termText}>and  </Text>
                            <Text style={styles.term}>Private Policy </Text>
                        </View>
                    </View>
                    <CustomButton title={'Đăng ký'} onPress={handleRegister} />
                    <View style={styles.slice}>
                        <Text style={styles.sliceSign}>_______________________</Text>
                        <Text style={styles.sliceText}>Or</Text>
                        <Text style={styles.sliceSign}>_______________________</Text>
                    </View>
                </View>

                <View style={styles.loginMethod}>
                    <View style={styles.loginIconWrap}>
                        <TouchableOpacity>
                            <CustomImageLink style={iconStyles.loginIcon} source={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/900px-Facebook_Logo_2023.png?20231011121526'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <CustomImageLink style={iconStyles.loginIcon} source={'https://w7.pngwing.com/pngs/338/520/png-transparent-g-suite-google-play-google-logo-google-text-logo-cloud-computing.png'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerWrap}>
                        <Text style={styles.sliceText}>I already have an account</Text>
                        <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.registerText}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default RegisterScreen;
