import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../src/Style';
import CustomButton from '../../Custom/CustomButton';
import CustomImageLink from '../../Custom/CustomImageLink';
import iconStyles from '../../src/styleLoginIcon';
import { login } from '../../rtk/API';
import FastImage from 'react-native-fast-image';
import axios from 'axios';

const WelcomeScreen = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [checkboxColor, setCheckboxColor] = useState('#a8a8ab');
  const [isFocusedUser, setIsFocusedUser] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const dispatch = useDispatch()

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    setCheckboxColor(isChecked ? '#a8a8ab' : '#00a8f3');
  };

  const handleLogin = () => {
    dispatch(login({
      email: email, 
      password: password
    }))
  };

  const LoginCheck = () => {
    return (
      <View style={styles.passwordMethod}>
        <TouchableOpacity style={styles.checkStyle} onPress={toggleCheckbox}>
          <Text style={[styles.checkText, { color: checkboxColor }]}> Remember me </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.forgotText}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgWrap}>
        <FastImage source = {{uri: 'https://64.media.tumblr.com/668d105fc2701311bfcef33d2771a40e/370b02f259511df9-d6/s1280x1920/b22c8e6e834c0722cf2951aedfcb90bddfef8f87.gif' }} style={styles.image} />
      </View>

      <View style={styles.body}>
        <View style={styles.titleWrap}>
          <Text style={styles.title1}>Welcome</Text>
          <Text style={styles.title2}>Log in your account</Text>
        </View>

        <View style={styles.inputWrap}>
          <TextInput
            style={[styles.input, isFocusedUser && styles.inputFocused]}
            placeholder='Email or phone number'
            placeholderTextColor={'#a8a8ab'}
            value={email}
            onChangeText={setEmail}
            onFocus={() => setIsFocusedUser(true)}
            onBlur={() => setIsFocusedUser(false)}
          />
          <View
            style={[styles.passwordContainer, isFocusedPassword && styles.inputFocused]}
            onFocus={() => setIsFocusedPassword(true)}
            onBlur={() => setIsFocusedPassword(false)}
          >
            <TextInput
              placeholder='Password'
              style={styles.inputPassword}
              placeholderTextColor={"#a8a8ab"}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />  
            <TouchableOpacity onPress={toggleShowPassword}>
              <Icon
                name={showPassword ? 'eye' : 'eye-off'}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bodyMethod}>
          <LoginCheck />
          <CustomButton title={'Log in'} onPress={handleLogin} />
          <View style={styles.slice}>
            <Text style={styles.sliceSign}>_______________________</Text>
            <Text style={styles.sliceText}>Or</Text>
            <Text style={styles.sliceSign}>_______________________</Text>
          </View>
        </View>

        <View style={styles.loginMethod}>
          <View style={[styles.loginIconWrap, { marginTop: 10 }]}>
            <TouchableOpacity>
              <CustomImageLink style={iconStyles.loginIcon} source={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/900px-Facebook_Logo_2023.png?20231011121526'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CustomImageLink style={iconStyles.loginIcon} source={'https://w7.pngwing.com/pngs/338/520/png-transparent-g-suite-google-play-google-logo-google-text-logo-cloud-computing.png'} />
            </TouchableOpacity>
          </View>
          <View style={styles.registerWrap}>
            <Text style={styles.sliceText}>Don't have an account ?</Text>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerText}>Create account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
