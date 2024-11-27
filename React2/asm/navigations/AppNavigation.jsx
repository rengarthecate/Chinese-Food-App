import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { useSelector } from 'react-redux';
import UserNavigation from './UserNavigation';
import ProductNavigation from './ProductNavigation';

const AppNavigation = () => {
  const user = useSelector(state => state.app.user);
  console.log(user);
  return (
    <NavigationContainer>
      {
        user ? <ProductNavigation /> : <UserNavigation />
      }
    </NavigationContainer>
  );
};

export default AppNavigation;
