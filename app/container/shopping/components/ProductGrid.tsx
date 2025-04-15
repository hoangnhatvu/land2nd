import React from 'react';
import {StyleSheet, View, FlatList, ListRenderItemInfo} from 'react-native';
import ProductCard, {
  ProductCardType,
} from '../../../components/product/ProductCard';

export interface ProductItem {
  id: string;
  title: string;
  category?: string;
  price?: string;
  image: any;
  rating?: number;
}

interface ProductGridProps {
  products: ProductItem[];
  numColumns?: number;
  cardType?: ProductCardType;
  gap?: number;
  onProductPress?: (product: ProductItem) => void;
  onAddToCart?: (product: ProductItem) => void;
  contentContainerStyle?: object;
  scrollEnabled?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  numColumns = 2,
  cardType = 'standard',
  gap = 10,
  onProductPress,
  onAddToCart,
  contentContainerStyle,
  scrollEnabled = false,
}) => {
  const renderItem = ({item, index}: ListRenderItemInfo<ProductItem>) => {
    const isLastColumn = (index + 1) % numColumns === 0;
    const isLastRow =
      Math.ceil(products.length / numColumns) ===
      Math.ceil((index + 1) / numColumns);

    return (
      <View style={[styles.itemContainer]}>
        <ProductCard
          id={item.id}
          title={item.title}
          category={item.category}
          price={item.price}
          image={item.image}
          rating={item.rating}
          type={cardType}
          onPress={() => onProductPress && onProductPress(item)}
          onAddToCart={() => onAddToCart && onAddToCart(item)}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      scrollEnabled={scrollEnabled}
      columnWrapperStyle={{gap: 20}}
      contentContainerStyle={[styles.container, contentContainerStyle]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    paddingHorizontal: 16,
    gap: 20,
  },
  itemContainer: {},
});

export default ProductGrid;
