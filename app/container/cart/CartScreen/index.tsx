import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ScreenWrapper } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { CartItem, CheckoutButton, CartItemData } from './components';
import { CART_STACK } from '@constants';
import { Colors } from '@utils';

const {ORDER_SCREEN} = CART_STACK

const CartScreen: React.FC = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState<CartItemData[]>([
    {
      id: '1',
      name: 'Tai nghe Mashall Major IV',
      category: 'Tai nghe cũ',
      price: 1500000,
      quantity: 1,
      image: require('../../../../assets/images/figma/headphone_marshall.png'),
    },
    {
      id: '2',
      name: 'Tai nghe Mashall Major IV',
      category: 'Tai nghe cũ',
      price: 1500000,
      quantity: 1,
      image: require('../../../../assets/images/figma/headphone_marshall.png'),
    },
    {
      id: '3',
      name: 'Tai nghe Mashall Major IV',
      category: 'Tai nghe cũ',
      price: 1500000,
      quantity: 1,
      image: require('../../../../assets/images/figma/headphone_marshall.png'),
    },
  ]);

  const increaseQuantity = (id: string) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ';
  };

  const handleCheckout = () => {
    console.log('Checkout pressed with total:', getTotalPrice());
    // Navigate to checkout screen

    navigation.navigate(ORDER_SCREEN as never)
  };

  return (
    <ScreenWrapper
      headerTitle="Giỏ hàng"
      isShowBackButton={false}
      onGoBack={() => navigation.goBack()}
      footerComponent={
        <CheckoutButton 
          totalPrice={formatPrice(getTotalPrice())}
          onPress={handleCheckout}
        />
      }
    >
      <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onIncreaseQuantity={increaseQuantity}
            onDecreaseQuantity={decreaseQuantity}
            formatPrice={formatPrice}
          />
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
  },
});

export default CartScreen;