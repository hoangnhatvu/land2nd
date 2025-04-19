import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MyText } from '../../../../components';
import { Colors } from '../../../../utils';
import Icon from 'react-native-vector-icons/Feather';

export interface CartItemData {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: any;
}

interface CartItemProps {
  item: CartItemData;
  onIncreaseQuantity: (id: string) => void;
  onDecreaseQuantity: (id: string) => void;
  formatPrice: (price: number) => string;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
  formatPrice
}) => {
  return (
    <View key={item.id} style={styles.productContainer}>
      <View style={styles.productImageContainer}>
        <Image 
          source={item.image} 
          style={styles.productImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.productDetailsContainer}>
        <View style={styles.productInfo}>
          <MyText 
            text={item.category} 
            category="small.text" 
            style={styles.categoryText}
          />
          <MyText 
            text={item.name} 
            category="medium.text" 
            style={styles.productName}
          />
        </View>
        <View style={styles.productPriceContainer}>
          <MyText 
            text={formatPrice(item.price)} 
            category="high.text" 
            style={styles.priceText}
          />
          <View style={styles.quantityContainer}>
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={() => onDecreaseQuantity(item.id)}
            >
              <Icon name="minus" size={16} color={Colors.PRIMARY_TEXT} />
            </TouchableOpacity>
            <MyText 
              text={item.quantity.toString()} 
              category="medium.text" 
              style={styles.quantityText}
            />
            <TouchableOpacity 
              style={[styles.quantityButton, styles.increaseButton]}
              onPress={() => onIncreaseQuantity(item.id)}
            >
              <Icon name="plus" size={16} color={Colors.WHITE} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.BORDER,
  },
  productImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#F6F6F6',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productDetailsContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  productInfo: {
    flex: 1,
  },
  categoryText: {
    color: Colors.PRIMARY_TEXT,
    marginBottom: 4,
  },
  productName: {
    color: Colors.PRIMARY_TEXT,
  },
  productPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  priceText: {
    color: Colors.RED_HIGH_LIGHT,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  increaseButton: {
    backgroundColor: Colors.PRIMARY,
  },
  quantityText: {
    marginHorizontal: 10,
  },
});

export default CartItem;