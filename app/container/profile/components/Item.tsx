import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {isValidElement} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../utils';

interface ItemProps {
  label: string;
  icon?: Element;
  onPress?: () => void;
}

const Item = (props: ItemProps) => {
  const {label, icon} = props;

  return (
    <TouchableOpacity style={styles.container}>
      {isValidElement(icon) ? (
        icon
      ) : (
        <View style={{width: 20, height: 20, backgroundColor: 'red'}} />
      )}
      <Text>{label}</Text>

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
});
