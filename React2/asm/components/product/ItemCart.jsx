import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeItem, changeQuantity } from '../../rtk/Reducer';

const ItemCart = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        dispatch(removeItem(item._id));
    };

    const increaseQuantity = () => {
        dispatch(changeQuantity({ _id: item._id, quantity: item.quantity + 1 }));
    };

    const decreaseQuantity = () => {
        if (item.quantity > 1) {
            dispatch(changeQuantity({ _id: item._id, quantity: item.quantity - 1 }));
        } else {
            handleRemoveItem(); // Remove item if quantity reaches 0
        }
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price} $</Text>
                <TouchableOpacity style={styles.removeButton} onPress={handleRemoveItem}>
                    <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.quantityControl}>

                <TouchableOpacity style={styles.controlBtn} onPress={increaseQuantity}>
                    <Text style={styles.controlBtnText}> + </Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity style={styles.controlBtn} onPress={decreaseQuantity}>
                    <Text style={styles.controlBtnText}> - </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 20,
        width: '95%',
        alignSelf: 'center',
        elevation: 10,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    details: {
        flex: 1,
        marginLeft: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    price: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600',
        marginVertical: 10

    },
    quantity: {
        fontSize: 14,
        color: 'black',
        fontWeight: '700',
        marginVertical: 5
    },
    quantityControl: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 10,
    },
    controlBtn: {
        backgroundColor: '#f54869',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginHorizontal: 5,
    },
    controlBtnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    removeButton: {
        paddingVertical: 5,
        backgroundColor: '#f54869',
        borderRadius: 8,
        width: 100
        
    },
    removeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default ItemCart;
