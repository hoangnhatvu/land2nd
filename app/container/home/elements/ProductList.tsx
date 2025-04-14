import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ViewStyle,
} from 'react-native';
import {Colors} from '@utils';
import { MyText, ProductCard, ProductCardType } from '@components';

// Mock data for product items
const mockProducts = [
  {
    id: '1',
    title: 'Tai nghe Mashall Major IV',
    category: 'Tai nghe cũ',
    price: '1.500.000 đ',
    image: require('../../../../assets/images/figma/headphone_marshall.png'), // Placeholder - replace with actual images
    rating: 4.6,
  },
  {
    id: '2',
    title: 'Sony CH510',
    category: 'Tai nghe cũ',
    price: '1.500.000 đ',
    image: require('../../../../assets/images/figma/headphone_marshall.png'), // Placeholder - replace with actual images
    rating: 4.6,
  },
  {
    id: '3',
    title: 'Tai nghe Mashall Major IV',
    category: 'Tai nghe cũ',
    price: '1.500.000 đ',
    image: require('../../../../assets/images/figma/headphone_marshall.png'), // Placeholder - replace with actual images
    rating: 4.6,
  },
];

// Mock data for category items
const mockCategoryProducts = [
  {
    id: '1',
    title: 'Laptop',
    image: require('../../../../assets/images/figma/headphone_marshall.png'),
  },
  {
    id: '2',
    title: 'Tai nghe',
    image: require('../../../../assets/images/figma/headphone_marshall.png'),
  },
  {
    id: '3',
    title: 'Điện thoại',
    image: require('../../../../assets/images/figma/headphone_marshall.png'),
  },
];

interface ProductListProps {
  title: string;
  onSeeAllPress?: () => void;
  products?: any[]; // In a real app, you'd use a proper type for your product data
  cardType?: ProductCardType;
  contanerStyle?: ViewStyle;
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  onSeeAllPress,
  products = mockProducts,
  cardType = 'standard',
  contanerStyle,
}) => {
  // Use appropriate mock data based on card type
  const displayProducts =
    cardType === 'category' ? mockCategoryProducts : products;

  return (
    <View style={contanerStyle}>
      <View style={styles.header}>
        <MyText
          category="main.title"
          style={{color: Colors.PRIMARY_TEXT}}
          text={title}
        />
        <TouchableOpacity onPress={onSeeAllPress}>
          <MyText
            category="small.title"
            style={{color: Colors.PRIMARY}}
            text={'Xem tất cả'}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {displayProducts.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            image={product.image}
            rating={product.rating}
            type={cardType}
            onPress={() => console.log(`Product pressed: ${product.title}`)}
            onAddToCart={
              cardType === 'standard'
                ? () => console.log(`Add to cart: ${product.title}`)
                : undefined
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  scrollContent: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});

export default ProductList;
