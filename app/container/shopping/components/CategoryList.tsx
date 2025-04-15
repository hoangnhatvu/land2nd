import React from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MyText, TextVariant } from '@components';
import { Colors } from '@utils';

interface Category {
  id: string;
  name: string;
  icon: string;
  backgroundColor: string;
  iconColor: string;
}

interface CategoryListProps {
  categories: Category[];
  activeCategory: string;
  onCategoryPress: (categoryId: string) => void;
}

const CategoryList = ({ categories, activeCategory, onCategoryPress }: CategoryListProps) => {
  const renderItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        activeCategory === item.id && styles.activeCategoryItem
      ]}
      onPress={() => onCategoryPress(item.id)}
    >
      <View style={[styles.categoryIconContainer, { backgroundColor: item.backgroundColor }]}>
        {/* @ts-ignore */}
        <Icon name={item.icon} size={20} color={item.iconColor} />
      </View>
      <MyText
        category={TextVariant.CATEGORY_TEXT}
        text={item.name}
        style={StyleSheet.flatten([
          styles.categoryText,
          activeCategory === item.id && styles.activeCategoryText
        ])}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.categoryListContainer}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryListContainer: {
    paddingVertical: 16,
  },
  categoryList: {
    paddingHorizontal: 16,
    gap: 8
  },
  categoryItem: {
    alignItems: 'center',
    width: 70,
  },
  activeCategoryItem: {
    // Add styles for active category if needed
  },
  categoryIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryText: {
    color: Colors.PRIMARY_TEXT,
    textAlign: 'center',
  },
  activeCategoryText: {
    color: Colors.PRIMARY,
    fontWeight: '500',
  },
});

export default CategoryList;