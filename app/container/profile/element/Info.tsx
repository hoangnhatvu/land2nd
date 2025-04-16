import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MyText, TextVariant} from '@components';
import {Colors} from '@utils';
import Item from './Item';

interface InfoProps {}

const Info = ({}: InfoProps) => {
  return (
    <View style={styles.container}>
      <MyText category={TextVariant.MAIN_TITLE} text={'Thông tin cá nhân'} />

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

export default Info;

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
