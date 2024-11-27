import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import CustomImageLink from '../../Custom/CustomImageLink';
import DataItem from './DataItem';
import { useDispatch, useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import { fetchCategories, fetchProducts } from '../../rtk/API';
import { useSharedValue } from 'react-native-reanimated';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.app.products);
  const categories = useSelector((state) => state.app.categories);
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchKeyword, setSearchKeyword] = useState('');
  const viewableItems = useSharedValue([]);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const getFilteredProducts = () => {
    let filteredProducts = selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);

    if (searchKeyword) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }
    return filteredProducts;
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <View style={styles.header}>
          <FastImage
            style={styles.logo}
            source={{ uri: 'https://cdn.shopify.com/s/files/1/0428/4425/8459/files/gif_dessert.gif?v=1595656364' }}
          />
        </View>

        <View style={styles.findBarWrap}>
          <View style={styles.findBar}>
            <TextInput
              style={styles.searchText}
              placeholder='Find your food...'
              value={searchKeyword}
              onChangeText={setSearchKeyword}
            />
          </View>
        </View>

        <View style={styles.cateWrap}>
          <FlatList
            data={categories}
            horizontal
            keyExtractor={(item) => item._id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryBar}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  selectedCategory === item._id && styles.selectedCategoryButton
                ]}
                onPress={() => setSelectedCategory(item._id)}
              >
                <Text style={styles.categoryButtonText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.ProdWrapper}>
          <FlatList
            data={getFilteredProducts()}
            onViewableItemsChanged={({ viewableItems: vItems }) => {
              viewableItems.value = vItems;
            }}
            renderItem={({ item }) => {
              return <DataItem item={item} viewableItems= {viewableItems} />;
            }}
            keyExtractor={(item) => item._id}
            numColumns={2}
          />
        </View>

      </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  Wrapper: {
    height: '13%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  logo: {
    height: 140,
    width: '90%',
    borderRadius: 25,
    marginTop: 20
  },
  header: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    marginBottom: 15
  },
  avt: {
    height: 40,
    width: 40,
    borderRadius: 500,
    alignSelf: 'center',
    marginRight: 25,
    marginTop: 10
  },
  searchText: {
    fontWeight: '700',
    marginLeft: 10,

  },
  findBarWrap: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,

  },
  findBar: {
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 200,
    borderWidth: 2,
  },
  categoryBar: {
    paddingVertical: 10,
    marginLeft: 10
  },
  categoryButton: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 2
  },
  cateWrap: {
    justifyContent: 'center',
  },
  selectedCategoryButton: {
    backgroundColor: '#fbb6b6',
  },
  categoryButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold'
  },
  ProdWrapper: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
