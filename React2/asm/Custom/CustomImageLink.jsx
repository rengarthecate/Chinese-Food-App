// CustomLoginIcon.jsx
import React from 'react';
import { Image, StyleSheet } from 'react-native';

const CustomImageLink = ({ source, style }) => {
  return (
    <Image
      source={{ uri: source }}
      style= {style}
    />
  );
}

export default CustomImageLink;


