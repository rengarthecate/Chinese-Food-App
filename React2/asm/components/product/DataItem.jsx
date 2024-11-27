import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React, {useState} from 'react'
import ProductDetail from './ProductDetails';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { addItemToCart } from '../../rtk/Reducer';

import { useDispatch, useSelector } from 'react-redux';


const DataItem = React.memo(({ item, viewableItems }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Detail', { item });
  };
  const dispatch = useDispatch()
  const cart = useSelector(state => state.app.cart);
  const [quantity, setQuantity] = useState(1);

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
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(item => item.isViewable)
        .find(viewableItems => viewableItems.item._id === item._id),
    );



    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, [])



  return (
    <TouchableOpacity style={[styles.container]} onPress={handlePress} activeOpacity={0.9}>
      <Animated.View style={[styles.item, rStyle]}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.priceText}>{item.price} $</Text>
          <TouchableOpacity style={styles.addButton} onPress={addToCart}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </TouchableOpacity>
  )
})

export default DataItem

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    justifyContent: 'center',
    width: 170,
    height: 200,
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
    elevation: 10,
    marginBottom: 20,
    // borderWidth: 1
  },
  image: {
    width: '80%',
    height: '50%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  textContainer: {
    width: '100%',
  },
  text: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  priceText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black'
  },
  addButton: {
    backgroundColor: '#f54869',
    padding: 5,
    borderRadius: 10,
    elevation: 10
  },
  addButtonText: {
    color: 'white',
    paddingHorizontal: 6,
    paddingVertical: 0,
    fontWeight: 'bold',
    fontSize: 15
  }
})
