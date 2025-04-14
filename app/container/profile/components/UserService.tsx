import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Item from './Item';
import {Colors} from '../../../utils';

const UserService = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Chăm sóc khách hàng</Text>

      <View style={styles.itemContainer}>
        <Item
          label={'Tra cứu đơn online'}
          icon={
            <Icon name="square-edit-outline" color={Colors.GRAY} size={20} />
          }
        />
        <View style={styles.divider} />
        <Item
          label={'Tra cứu bảo hành'}
          icon={<Icon name="lock-outline" color={Colors.GRAY} size={20} />}
        />
        <View style={styles.divider} />
        <Item
          label={'Tra cứu điểm tích luỹ'}
          icon={<Icon name="lock-outline" color={Colors.GRAY} size={20} />}
        />
      </View>
    </View>
  );
};

export default UserService;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  itemContainer: {
    padding: 20,
    paddingVertical: 15,
    gap: 20,
    borderRadius: 15,
    backgroundColor: Colors.BACKGROUND,
  },
  divider: {
    height: 2,
    backgroundColor: Colors.WHITE,
    width: '100%',
  },
});
