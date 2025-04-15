import {StyleSheet, ScrollView, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ScreenWrapper} from '@components';
import {Colors} from '@utils';
import {CategoryList, ProductGrid} from './components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProductItem } from './components/ProductGrid';

// Define TypeScript interfaces for our data
interface Category {
  id: string;
  name: string;
  icon: string;
  backgroundColor: string;
  iconColor: string;
}

// Mock category data
const categories: Category[] = [
  {
    id: '1',
    name: 'Tất cả',
    icon: 'apps',
    backgroundColor: Colors.CATEGORY_LIGHT_1,
    iconColor: Colors.CATEGORY_1,
  },
  {
    id: '2',
    name: 'Tai nghe cũ',
    icon: 'headset',
    backgroundColor: Colors.CATEGORY_LIGHT_4,
    iconColor: Colors.CATEGORY_4,
  },
  {
    id: '3',
    name: 'Loa cũ',
    icon: 'speaker',
    backgroundColor: Colors.CATEGORY_LIGHT_1,
    iconColor: Colors.CATEGORY_1,
  },
  {
    id: '4',
    name: 'Máy tính cũ',
    icon: 'laptop',
    backgroundColor: Colors.CATEGORY_LIGHT_3,
    iconColor: Colors.CATEGORY_3,
  },
  {
    id: '5',
    name: 'Máy tính bảng cũ',
    icon: 'tablet',
    backgroundColor: Colors.CATEGORY_LIGHT_2,
    iconColor: Colors.CATEGORY_2,
  },
  {
    id: '6',
    name: 'Điện thoại cũ',
    icon: 'cellphone',
    backgroundColor: Colors.CATEGORY_LIGHT_1,
    iconColor: Colors.CATEGORY_1,
  },
];

// Mock products data
const products: ProductItem[] = [
  {
    id: '1',
    title: 'Điện thoại Relme',
    category: 'Điện thoại',
    price: '2.500.000 đ',
    image: require('../../../assets/images/figma/headphone_marshall.png'),
    rating: 4.6,
  },
  {
    id: '2',
    title: 'Điện thoại Oppo',
    category: 'Điện thoại',
    price: '3.200.000 đ',
    image: require('../../../assets/images/figma/headphone_sony.png'),
    rating: 4.4,
  },
  {
    id: '3',
    title: 'Điện thoại Iphone',
    category: 'Điện thoại',
    price: '15.900.000 đ',
    image: require('../../../assets/images/figma/headphone_category.png'),
    rating: 4.8,
  },
  {
    id: '4',
    title: 'Điện thoại Samsun',
    category: 'Điện thoại',
    price: '8.500.000 đ',
    image: require('../../../assets/images/figma/laptop_category.png'),
    rating: 4.7,
  },
  {
    id: '5',
    title: 'Điện thoại Huawei',
    category: 'Điện thoại',
    price: '4.300.000 đ',
    image: require('../../../assets/images/figma/news_laptop.png'),
    rating: 4.5,
  },
  {
    id: '6',
    title: 'Điện thoại Nokia',
    category: 'Điện thoại',
    price: '1.900.000 đ',
    image: require('../../../assets/images/figma/headphone_sony.png'),
    rating: 4.2,
  },
];

const Shopping = ({navigation}: any) => {
  const [activeCategory, setActiveCategory] = useState('1');

  const handleCategoryPress = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleProductPress = (product: ProductItem) => {
    console.log(`Product pressed: ${product.title}`);
  };

  const handleAddToCart = (product: ProductItem) => {
    console.log(`Add to cart: ${product.title}`);
  };

  const handleBackPress = () => {
    navigation.goBack()
  };

  // Header Right Component with Search and Cart icons
  const HeaderRight = () => (
    <View style={styles.headerRight}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => console.log('Search pressed')}>
        {/* @ts-ignore */}
        <Icon name="magnify" size={22} color={Colors.PRIMARY_TEXT} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => console.log('Cart pressed')}>
        {/* @ts-ignore */}
        <Icon
          name="filter-outline"
          size={22}
          color={Colors.PRIMARY_TEXT}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScreenWrapper
      headerTitle="Muốn mua"
      isShowBackButton={true}
      onGoBack={handleBackPress}
      hasTabBar={false}
      headerComponentRight={<HeaderRight />}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoryList
          categories={categories}
          activeCategory={activeCategory}
          onCategoryPress={handleCategoryPress}
        />

        <ProductGrid
          products={products}
          onProductPress={handleProductPress}
          onAddToCart={handleAddToCart}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Shopping;

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  iconButton: {
  },
});
