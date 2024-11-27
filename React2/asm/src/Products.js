import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Products from './data';
import CustomImageLink from '../Custom/CustomImageLink';
import CategoryProductList from './CategoryProductList';

const ProductsScreen = () => {
  // tạo State cho danh mục được chọn
  const [selectedCategory, setSelectedCategory] = useState('All');
  // tạo Trạng Thái (State) Cho Từ Khóa Tìm Kiếm
  const [searchKeyword, setSearchKeyword] = useState('');

  const categories = [
    'All',
    'Noodle',
    'Dimsum',
    'Desserts',
    'Drinks',
    'Combos',
  ];

  const getFilteredProducts = () => {
    // tạo hàm rỗng để chứa các sản phẩm đã lọc
    let filteredProducts = [];
    // selectedCategory đã được khai báo useState mặc định là All nên sẽ hiện đầu tiên khi vào app
    if (selectedCategory === 'All') {
      filteredProducts = Products.flatMap(category => category.data); //flatMap để lấy tất cả sản phẩm trong file data Products
    } else {
      const selectedCategoryData = Products.find(category => category.danhmuc === selectedCategory); //mục được chọn sẽ tương ứng với tên của danh mục được tìm bằng hàm find trong data
      filteredProducts = selectedCategoryData ? selectedCategoryData.data : []; //sau đó hàm những sản phẩm đã lọc sẽ tương ứng với mục đã chọn, nếu không có sẽ là hàm rỗng
    }
    if (searchKeyword) {
      filteredProducts = filteredProducts.filter(product =>  //sản phẩm đã lọc sẽ hoạt động bằng hàm filter
        product.name.toLowerCase().includes(searchKeyword.toLowerCase()) // nó sẽ giữ lại tên các sản phẩm bằng includes để xem nó có chứa các từ khóa đó trong tên sản phẩm không, toLowerCase để chuyển các từ khóa về chữ viết thường 
      );
    }
    return filteredProducts; //trả về sản phẩm đã lọc
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
      >
        <View style={styles.header}>
          <View style={styles.Wrapper}>
            <CustomImageLink
              style={styles.logo}
              source={'https://scontent.xx.fbcdn.net/v/t1.15752-9/449176813_289177474220355_3041555223861898229_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=2W5wODo7OKkQ7kNvgGm69VY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGP2fmHt9xHoeL7pAHs94bqNu1BDDCHnnUob6LGzGzQ_A&oe=66AD9327'}
            />
            <CustomImageLink
              style={styles.avt}
              source={'https://vnn-imgs-f.vgcloud.vn/2019/11/08/17/thanh-long-anh-hung-tren-phim-anh-ke-xau-ngoai-doi-2.jpg'}
            />
          </View>
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
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  selectedCategory === item && styles.selectedCategoryButton
                ]}
                onPress={() => setSelectedCategory(item)}
              >
                <Text style={styles.categoryButtonText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryBar}
          />
        </View>

        <View style={styles.ProdWrapper}>
          {/* {Products.map((category, index) => (
            <CategoryProductList key={index} category={category} />
          ))} */}

          <FlatList
            data={Products}
            renderItem={({ item }) => <CategoryProductList item={item} />}
          />
        </View>

      </KeyboardAvoidingView>
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  Wrapper: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    height: '11%',
    width: '100%',
  },
  avt: {
    height: 40,
    width: 40,
    borderRadius: 500,
    alignSelf: 'center',
    marginRight: 25,
    marginTop: 10
  },
  logo: {
    height: 100,
    width: 100,
    marginLeft: 10,
  },
  searchText: {
    fontWeight: '700',
    marginLeft: 10
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
    borderWidth: 2
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
    justifyContent: 'center'
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
    marginHorizontal: 10,
    marginTop: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
