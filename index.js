/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import testGif from './React2/asm/src/testGif';
import SplashScreen from './React2/asm/src/SplashScreen';
import Demo5 from './React2/Labs/lab3/Demo5';
// import HomeScreen from './React2/asm/components/product/HomeScreen';
import AnimatedHeader from './React2/Labs/lab3/ScrollHeader';
import CameraTest from './React2/Labs/lab4/Camera';
import LoginScreen from './TotNghiep/test/InputScreen';
import PickScreen from './TotNghiep/test/PickScreen';
import HomeScreen from './TotNghiep/test/HomeScreen';
AppRegistry.registerComponent(appName, () => HomeScreen );
