import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
import { useFocusEffect } from '@react-navigation/native';



import UserSetting from '../components/product/Profile';
import EditProfile from '../components/product/EditProfile';
const StackProfile = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <StackProfile.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>
      <StackProfile.Screen name="Profile" component={UserSetting} />
      <StackProfile.Screen name="EditProfile" component={EditProfile} />
    </StackProfile.Navigator>
  )
}

const AnimatedIcon = ({ route, focused }) => {
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withTiming(translateY.value, { duration: 1500 }) }],
    };
  });

  useFocusEffect(
    React.useCallback(() => {
      translateY.value = focused ? -20 : 0;
    }, [focused])
  );

  let src;
  if (route.name === 'Home') {
    src = focused
      ? 'https://66.media.tumblr.com/tumblr_maw61yp0S21rfjowdo1_500.gif'
      : 'https://scontent.xx.fbcdn.net/v/t1.15752-9/451298382_522940286840836_6802641331116346652_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=7y7_6MjOtDUQ7kNvgHtmiPu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEYNpBSUnOPrsovCaoIswHXL_X7GUJJCxX-1RdLfdYolQ&oe=66CD8917';
  } else if (route.name === 'CartScreen') {
    src = focused
      ? 'https://66.media.tumblr.com/tumblr_maw61cMU9C1rfjowdo1_500.gif'
      : 'https://scontent.xx.fbcdn.net/v/t1.15752-9/449256194_3197478160385532_902221989188634145_n.png?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Yp8EF09VtTAQ7kNvgEBn6UD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGE06DX2-oKZtlOgI7U3cNV_T9qgmCurIqdWKxAi754aQ&oe=66CD8A59';
  } else if (route.name === 'ProfileNavigation') {
    src = focused
      ? 'https://66.media.tumblr.com/82e9cd01f664ed5ba0aa117ce530506b/tumblr_mqptdzdnon1rfjowdo1_500.gif'
      : 'https://scontent.xx.fbcdn.net/v/t1.15752-9/451074436_286313547878397_5852245668233204899_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Yac6zGzlWM8Q7kNvgErIkhW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&gid=AB3q-U5W0r-iq6EuxqLNAM9&oh=03_Q7cD1QFOE-kdLpfAN1VbLhCjJen43LodRoYBWn8zeJL4WiLEBA&oe=66CD9E4B';
  }

  return (
    <Animated.View style={[animatedStyle, focused ? styles.btn : null]}>
      <FastImage source={{ uri: src }} style={{ width: 46, height: 46, borderRadius: 500 }} />
    </Animated.View>
  );
};

import HomeScreen from '../components/product/HomeScreen';
import CartScreen from '../components/product/Cart';

const Tab = createBottomTabNavigator();
const TabHome = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => <AnimatedIcon route={route} focused={focused} />,
        tabBarStyle: {
          backgroundColor: 'black', // Change tab bar background color
          borderTopWidth: 0, // Remove top border
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
      <Tab.Screen name="ProfileNavigation" component={ProfileNavigation} />
    </Tab.Navigator>
  )
}

import ProductDetails from '../components/product/ProductDetails';
import { StyleSheet } from 'react-native';
const Stack = createNativeStackNavigator();


const ProductNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='TabHome'>
      <Stack.Screen name="TabHome" component={TabHome} />
      <Stack.Screen name="Detail" component={ProductDetails} />
    </Stack.Navigator>
  )
}

export default ProductNavigation

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  }
});