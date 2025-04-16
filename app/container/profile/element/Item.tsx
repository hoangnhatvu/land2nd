import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {isValidElement} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '@utils';
import {MyText, TextVariant} from '@components';

interface ItemProps {
  label: string;
  icon?: Element;
  onPress?: () => void;
  type?: 'outlined' | 'fill';
}

const Item = (props: ItemProps) => {
  const {label, icon, type = 'fill', onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        type === 'outlined' && styles.outlinedContainer,
      ]}>
      {isValidElement(icon) ? icon : <View style={{width: 20, height: 20}} />}
      <MyText category={TextVariant.MEDIUM_TEXT} text={label} />

      <Icon
        name="chevron-right"
        color={Colors.PRIMARY}
        size={24}
        style={{position: 'absolute', right: 0}}
      />
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  outlinedContainer: {
    backgroundColor: 'transparent',
  },
});
