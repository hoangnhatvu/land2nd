import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

interface ProductItemProps {
  id: string;
  name: string;
  category: string;
  price: string;
  quantity: number;
  image: any;
}

const ProductItem: React.FC<ProductItemProps> = ({
  name,
  category,
  price,
  quantity,
  image
}) => {
  return (
    <View style={styles.productItem}>
      <Image source={image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <View style={styles.productDetails}>
          <Text style={styles.productCategory}>{category}</Text>
          <Text style={styles.productName}>{name}</Text>
        </View>
        <View style={styles.productPriceContainer}>
          <Text style={styles.productPrice}>{price}</Text>
          <Text style={styles.productQuantity}>Số lượng: {quantity}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5E5',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productDetails: {
    flex: 1,
    gap: 4,
  },
  productCategory: {
    fontSize: 10,
    color: '#0C1A30',
    fontWeight: '300',
    letterSpacing: 0.2,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0C1A30',
  },
  productPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FE3A30',
    letterSpacing: 0.2,
  },
  productQuantity: {
    fontSize: 10,
    color: '#0C1A30',
    fontWeight: '300',
    letterSpacing: 0.2,
  },
});

export default ProductItem;