import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper } from '../../../components';
import { Colors } from '../../../utils';
import { ProductItem, ShippingInfo, CheckoutButton } from './components';
import { CART_STACK } from '../../../constants';

const {DELIVERY_INFO_SCREEN} = CART_STACK;

// Mock data for products
const products = [
  {
    id: '1',
    name: 'Tai nghe Mashall Major IV',
    category: 'Tai nghe cũ',
    price: '1.500.000 đ',
    quantity: 2,
    image: require('../../../../assets/images/figma/headphone_sony.png'),
  },
  {
    id: '2',
    name: 'Tai nghe Mashall Major IV',
    category: 'Tai nghe cũ',
    price: '1.500.000 đ',
    quantity: 2,
    image: require('../../../../assets/images/figma/headphone_sony.png'),
  },
  {
    id: '3',
    name: 'Tai nghe Mashall Major IV',
    category: 'Tai nghe cũ',
    price: '1.500.000 đ',
    quantity: 2,
    image: require('../../../../assets/images/figma/headphone_sony.png'),
  },
];

const OrderScreen = () => {
  const navigation = useNavigation();
  
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleEditShippingInfo = () => {
    navigation.navigate(DELIVERY_INFO_SCREEN as never);
  };

  const handleCheckout = () => {
    // Handle checkout process
  };

  return (
    <ScreenWrapper 
      headerTitle="Đặt hàng"
      isShowBackButton={true}
      onGoBack={handleGoBack}
    >
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <ShippingInfo onEditPress={handleEditShippingInfo} />

          <Text style={styles.sectionTitle}>Danh sách sản phẩm</Text>
          
          {products.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
              quantity={item.quantity}
              image={item.image}
            />
          ))}
        </ScrollView>
        
        <CheckoutButton 
          totalPrice="4.500.000 đ"
          onPress={handleCheckout}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  scrollContainer: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0C1A30',
    marginBottom: 16,
    letterSpacing: 0.2,
    marginTop: 20,
  },
});

export default OrderScreen;