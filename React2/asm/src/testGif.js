import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';

const testGif = () => {
  return (
    <View style={styles.container}>
      <FastImage 
        style = {styles.image}
        source ={{
          uri: 'https://i.pinimg.com/originals/57/61/5b/57615b8c0092a66c1d4058b1692955cc.gif',
          priority: FastImage.resizeMode.normal
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  )
}

export default testGif

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: 200,
        height: 200
    }
})