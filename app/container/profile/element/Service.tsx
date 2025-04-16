import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MyText, TextVariant} from '@components';
import {Colors} from '@utils';
import Item from './Item';

const Service = () => {
  return (
    <View style={styles.container}>
      <MyText category={TextVariant.MAIN_TITLE} text={'Chăm sóc khách hàng'} />

      <View style={styles.itemContainer}>
        <Item
          label={'Tra cứu đơn online'}
          icon={<Icon name="magnify" color={Colors.GRAY} size={20} />}
        />
        <View style={styles.divider} />
        <Item
          label={'Tra cứu bảo hành'}
          icon={
            <Icon name="shield-check-outline" color={Colors.GRAY} size={20} />
          }
        />
        <View style={styles.divider} />
        <Item
          label={'Tra cứu điểm tích luỹ'}
          icon={<Icon name="star-outline" color={Colors.GRAY} size={20} />}
        />
      </View>
    </View>
  );
};

export default Service;

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
