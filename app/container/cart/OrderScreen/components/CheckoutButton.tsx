import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

interface CheckoutButtonProps {
  totalPrice: string;
  onPress: () => void;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ totalPrice, onPress }) => {
  return (
    <TouchableOpacity style={styles.checkoutButton} onPress={onPress}>
      <Text style={styles.checkoutButtonText}>Đặt hàng ({totalPrice})</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkoutButton: {
    backgroundColor: '#3669C9',
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default CheckoutButton;