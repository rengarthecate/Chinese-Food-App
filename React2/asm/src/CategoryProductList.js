import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DataItem from '../components/product/DataItem';

const CategoryProductList = ({ category }) => {
  return (
    <View>
      <Text style={styles.categoryTitle}> {category.danhmuc} </Text>
        <FlatList
          data={category.data}
          renderItem={({ item }) => <DataItem item={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CategoryProductList;
