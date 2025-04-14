import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Item from './Item';
import {Colors} from '../../../utils';

interface UserInfoProps {}

const UserInfo = ({}: UserInfoProps) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Thông tin cá nhân</Text>

      <View style={styles.itemContainer}>
        <Item
          label={'Sửa thông tin cá nhân'}
          icon={
            <Icon name="square-edit-outline" color={Colors.GRAY} size={20} />
          }
        />
        <View style={styles.divider} />
        <Item
          label={'Đổi mật khẩu'}
          icon={<Icon name="lock-outline" color={Colors.GRAY} size={20} />}
        />
      </View>
    </View>
  );
};

export default UserInfo;

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
