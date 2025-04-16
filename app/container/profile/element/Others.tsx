import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MyText, TextVariant} from '@components';
import {Colors} from '@utils';
import Item from './Item';

interface OthersProps {
  onTermsAndConditions: () => void;
}

const Others = ({onTermsAndConditions}: OthersProps) => {
  return (
    <View style={styles.container}>
      <MyText category={TextVariant.MAIN_TITLE} text={'Khác'} />

      <View style={styles.itemContainer}>
        <Item
          label={'Danh sách cửa hàng'}
          icon={<Icon name="store" color={Colors.GRAY} size={20} />}
        />
        <View style={styles.divider} />
        <Item
          label={'Điều khoản 2ndLand'}
          icon={
            <Icon name="file-document-outline" color={Colors.GRAY} size={20} />
          }
          onPress={onTermsAndConditions}
        />
        <View style={styles.divider} />
        <Item
          label={'Liên hệ'}
          icon={<Icon name="phone-outline" color={Colors.GRAY} size={20} />}
        />
      </View>
    </View>
  );
};

export default Others;

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
