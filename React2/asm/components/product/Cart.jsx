import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../rtk/Reducer';
import ItemCart from './ItemCart';

const CartScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.app.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const renderItem = ({ item }) => <ItemCart item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.Wrapper}>
        <Text style={styles.title}>Your Cart</Text>
        <TouchableOpacity style={styles.clearButton} onPress={handleClearCart}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.list}
      />
      <View style={styles.Wrapper}>
      <Text style={styles.totalText}>Total: {calculateTotal()} $</Text>
        <TouchableOpacity style={styles.purchase}>
          <Text style={styles.purchaseText}>Purchase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  list: {
    paddingBottom: 16,
    marginTop: 20
  },
  clearButton: {
    backgroundColor: '#f54869',
    paddingVertical: 17,
    paddingHorizontal: 10,
    borderRadius: 500,
    elevation: 10,
    alignSelf: 'center',
  },
  clearButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
  Wrapper: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center'
  },
  purchase:{
    backgroundColor: '#f54869',
    borderRadius: 20
  },
  purchaseText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 60,
    paddingVertical: 10,
  }
});

export default CartScreen;
