import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ProductCard, { ProductCardType } from './ProductCard';
import { Colors } from '../../../utils';

// Mock data for product items
const mockProducts = [
  {
    id: '1',
    title: 'Tai nghe Mashall Major IV',
    category: 'Tai nghe cũ',
    price: '1.500.000 đ',
    image: require('../../../../assets/images/apple.png'), // Placeholder - replace with actual images
    rating: 4.6,
  },
  {
    id: '2',
    title: 'Sony CH510',
    category: 'Tai nghe cũ',
    price: '1.500.000 đ',
    image: require('../../../../assets/images/apple.png'), // Placeholder - replace with actual images
    rating: 4.6,
  },
  {
    id: '3',
    title: 'Tai nghe Mashall Major IV',
    category: 'Tai nghe cũ',
    price: '1.500.000 đ',
    image: require('../../../../assets/images/apple.png'), // Placeholder - replace with actual images
    rating: 4.6,
  },
];

// Mock data for category items
const mockCategoryProducts = [
  {
    id: '1',
    title: 'Laptop',
    image: require('../../../../assets/images/apple.png'),
  },
  {
    id: '2',
    title: 'Tai nghe',
    image: require('../../../../assets/images/apple.png'),
  },
  {
    id: '3',
    title: 'Điện thoại',
    image: require('../../../../assets/images/apple.png'),
  },
];

interface ProductListProps {
  title: string;
  onSeeAllPress?: () => void;
  products?: any[]; // In a real app, you'd use a proper type for your product data
  cardType?: ProductCardType;
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  onSeeAllPress,
  products = mockProducts,
  cardType = 'standard',
}) => {
  // Use appropriate mock data based on card type
  const displayProducts = cardType === 'category' ? mockCategoryProducts : products;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onSeeAllPress}>
          <Text style={styles.seeAllText}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {displayProducts.map((product) => (
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
            onAddToCart={cardType === 'standard' ? () => console.log(`Add to cart: ${product.title}`) : undefined}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontFamily: 'DM Sans',
    fontSize: 16,
    fontWeight: '500',
    color: Colors.PRIMARY_TEXT,
    letterSpacing: 0.2,
  },
  seeAllText: {
    fontFamily: 'DM Sans',
    fontSize: 12,
    fontWeight: '500',
    color: Colors.PRIMARY,
  },
  scrollContent: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});

export default ProductList;