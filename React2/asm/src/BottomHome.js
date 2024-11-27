import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import HomeScreen from '../components/product/HomeScreen';
import RegisterScreen from '../components/user/RegisterScreen';
import UserSetting from '../components/product/Profile';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Stack_home = () => {
  return (
    <Stack.Navigator initialRouteName='HomePage' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={HomeScreen} />
    </Stack.Navigator>
  );
};

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
  } else if (route.name === 'list') {
    src = focused
      ? 'https://66.media.tumblr.com/tumblr_maw61cMU9C1rfjowdo1_500.gif'
      : 'https://scontent.xx.fbcdn.net/v/t1.15752-9/449256194_3197478160385532_902221989188634145_n.png?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Yp8EF09VtTAQ7kNvgEBn6UD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGE06DX2-oKZtlOgI7U3cNV_T9qgmCurIqdWKxAi754aQ&oe=66CD8A59';
  } else if (route.name === 'like') {
    src = focused
      ? 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chinese-food-restaurant-flyer-design-template-c2eba8734d97ca4ba6e1949e618a67c6_screen.jpg?ts=1678514701'
      : 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chinese-food-restaurant-flyer-design-template-c2eba8734d97ca4ba6e1949e618a67c6_screen.jpg?ts=1678514701';
  } else if (route.name === 'User') {
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

const Bottom_home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName='Stack_home'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => <AnimatedIcon route={route} focused={focused} />,
          tabBarStyle: {
            backgroundColor: 'black', // Change tab bar background color
            borderTopWidth: 0, // Remove top border
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen name="Home" component={Stack_home} />
        <Tab.Screen name="list" component={RegisterScreen} />
        <Tab.Screen name="User" component={UserSetting} />
      </Tab.Navigator>
    </View>
  );
};

export default Bottom_home;

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
