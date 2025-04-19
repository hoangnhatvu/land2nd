import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../../../../utils';

interface ShippingInfoProps {
  onEditPress: () => void;
}

const ShippingInfo: React.FC<ShippingInfoProps> = ({ onEditPress }) => {
  return (
    <View style={styles.shippingContainer}>
      <View style={styles.shippingHeaderContainer}>
        <Text style={styles.sectionTitle}>Thông tin nhận hàng</Text>
        <TouchableOpacity onPress={onEditPress}>
          <Text style={styles.editButton}>Sửa</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.userInfoContainer}>
        <View style={styles.iconContainer}>
          <Feather name="user" size={20} color={Colors.GRAY} />
        </View>
        <Text style={styles.userInfoText}>Hoàng Nhất Vũ - 039973627</Text>
      </View>
      
      <View style={styles.addressContainer}>
        <View style={styles.iconContainer}>
          <Feather name="map" size={20} color={Colors.GRAY} />
        </View>
        <Text style={styles.userInfoText}>
          23 đường 33, Long Thạnh Mỹ, Thủ Đức, Hồ Chí Minh
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shippingContainer: {
    marginTop: 0,
  },
  shippingHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0C1A30',
    letterSpacing: 0.2,
  },
  editButton: {
    fontSize: 14,
    fontWeight: '400',
    color: '#3669C9',
  },
  userInfoContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    position: 'relative',
    paddingLeft: 26,
  },
  addressContainer: {
    flexDirection: 'row',
    position: 'relative',
    paddingLeft: 26,
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  userInfoText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#0C1A30',
    letterSpacing: 0.2,
    lineHeight: 20,
  },
});

export default ShippingInfo;