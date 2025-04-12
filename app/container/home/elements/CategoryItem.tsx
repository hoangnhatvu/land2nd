import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../utils';
import {MyText} from '../../../components';

interface CategoryItemProps {
  title: string;
  icon: string;
  iconColor: string;
  backgroundColor: string;
  onPress?: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  title,
  icon,
  iconColor,
  backgroundColor,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.iconContainer, {backgroundColor}]}>
        <Icon name={icon} size={20} color={iconColor} />
      </View>
      <MyText
        category="medium.text"
        style={{color: Colors.PRIMARY_TEXT}}
        text={title}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 12,
    width: 80,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default CategoryItem;
