import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity 
        style={styles.button} 
        onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    width: '85%',
    backgroundColor: '#f54869',
    height: 50,
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 5,
    elevation: 10
},
buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
},
})