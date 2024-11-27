import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../rtk/Reducer';

const ProductDetails = ({ route }) => {
    const navigation = useNavigation(); 

    const { item } = route.params; //route.params dùng để lấy dữ liệu từ Screen trước ( ở đây là item sản phẩm )
    const [quantity, setQuantity] = useState(1);

    const cart = useSelector(state => state.app.cart);
    //lấy hàm dispatch từ store
    const dispatch = useDispatch()
    //hàm thêm cập nhật số lượng
    const addToCart = () => {
        const existingItem = cart.find(cartItem => cartItem._id === item._id);
        if (existingItem) {
            // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng
            dispatch(addItemToCart({
                _id: item._id,
                name: item.name,
                image: item.image,
                price: item.price,
                quantity: existingItem.quantity + quantity,
            }));
        } else {
            // Nếu sản phẩm chưa có, thêm sản phẩm mới vào giỏ hàng
            dispatch(addItemToCart({
                _id: item._id,
                name: item.name,
                image: item.image,
                price: item.price,
                quantity: quantity,
            }));
        }
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
    
    const totalPrice = (item.price * quantity).toFixed(2);

    return (
        <View style={styles.container}>
            <View style={styles.imgWrap}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>🦑</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.details}>
                <View style={styles.inforContainer}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.descText}>Description</Text>
                    <Text style={styles.description}>{item.describe}</Text>
                </View>
                <View style={styles.wrapper}>
                    <View>
                        <Text style={styles.priceText}>Price</Text>
                        <Text style={styles.price}>{item.price} $</Text>
                    </View>
                </View>

                <View style={styles.Container}>
                    <View style={styles.quantityContainer}>
                        <Text style={styles.quantityText}>Quantity</Text>
                        <View style={styles.quantityControl}>
                            <TouchableOpacity onPress={decreaseQuantity}>
                                <Text style={styles.quantityBtn}> - </Text>
                            </TouchableOpacity>
                            <Text style={styles.quantityValue}>{quantity}</Text>
                            <TouchableOpacity onPress={increaseQuantity}>
                                <Text style={styles.quantityBtn}> + </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.tamTinhContainer}>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.total}>{totalPrice} $</Text>
                    </View>
                </View>

                <View style={styles.addButtonContainer}>
                    <TouchableHighlight style={styles.addButton} underlayColor="#2ecc71" onPress={addToCart}>
                        <Text style={styles.addButtonText}>Add to Cart</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.cartButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                        <Text style={styles.cartButtonText}>Go to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inforContainer: {
        borderBottomWidth: 1,
        height: '45%'
    },
    header: {
        height: '6%',
        justifyContent: 'center'
    },
    tamTinhContainer: {
        flexDirection: 'row',
        width: '25%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    
    },
    total: {
        color: 'black',
        fontSize: 17,
        fontWeight: '500',
        marginRight: 10

    },
    totalText: {
        fontSize: 15,
        color: 'black',
        fontWeight: '500',
        marginRight: 10
    },
    Container: {
        flexDirection: 'row',
        width: '100%',
        height: 90,
        justifyContent: 'center',
        marginBottom: 20,
        borderBottomWidth: 1
    },
    priceText: {
        marginTop: 30,
        fontSize: 13,
        fontWeight: '700',
        color: 'black'
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    imgWrap: {
        borderBottomWidth: 1,
        height: '47%',
    },
    details: {
        width: '90%',
        alignSelf: 'center',
        height: '52%',
    },
    backButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 500,
        marginLeft: 10,
        marginTop: 15,
        position: 'absolute',
        borderWidth: 2,
        
    },
    backButtonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    title: {
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
    },
    price: {
        fontSize: 17,
        fontWeight: '500',
        color: 'black',

    },
    description: {
        fontSize: 15,
        fontWeight: '400',
        color: 'black',
        width: '100%',
        marginBottom: 25,
        // textAlign: 'ju'
    },
    descText: {
        fontWeight: '500',
        color: 'black',
        fontSize: 15,
        marginBottom: 10,
    },
    addButtonContainer: {
        alignItems: 'center', // Canh giữa theo chiều ngang,
    },
    addButton: {
        backgroundColor: '#f54869',
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 20,
        elevation: 10,
    },
    addButtonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
    },
    cartButtonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    cartButtonText: {
        color: 'blue',
        fontSize: 16,
        textAlign: 'center',
    },
    quantityContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    quantityText: {
        fontSize: 15,
        color: 'black',
        fontWeight: '500',
        marginRight: 10
    },
    quantityControl: {
        flexDirection: 'row',
        width: '90%',

    },
    quantityValue: {
        marginHorizontal: 15,
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        // marginTop: 5
    },
    quantityBtn: {
        backgroundColor: '#f54869',
        width: 30,
        height: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        borderRadius: 500
    },
    bodyContainer: {
        height: '52%',
        backgroundColor: 'blue',
        justifyContent: 'space-between'
    },
    bottomWrap: {
        marginBottom: 20
    }
});

export default ProductDetails;
