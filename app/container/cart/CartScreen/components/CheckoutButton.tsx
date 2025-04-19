import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MyText } from '../../../../components';
import { Colors } from '../../../../utils';

interface CheckoutButtonProps {
  totalPrice: string;
  onPress: () => void;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ totalPrice, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
      >
        <MyText
          text={`Đặt hàng (${totalPrice})`}
          category="button.text"
          style={styles.buttonText}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: Colors.WHITE,
    fontWeight: '500',
  }
});

export default CheckoutButton;