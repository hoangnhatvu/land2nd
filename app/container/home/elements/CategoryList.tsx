import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CategoryItem from './CategoryItem';
import {Colors} from '../../../utils';
import {MyText} from '../../../components';

interface CategoryListProps {
  title: string;
  onSeeAllPress?: () => void;
}

const CategoryList: React.FC<CategoryListProps> = ({title, onSeeAllPress}) => {
  const categories = [
    {
      id: '1',
      title: 'Muốn mua',
      icon: 'cart-outline',
      iconColor: Colors.CATEGORY_2,
      backgroundColor: Colors.CATEGORY_LIGHT_2,
    },
    {
      id: '2',
      title: 'Muốn thuê',
      icon: 'home-outline',
      iconColor: Colors.CATEGORY_1,
      backgroundColor: Colors.CATEGORY_LIGHT_1,
    },
    {
      id: '3',
      title: 'Muốn bán',
      icon: 'tag-outline',
      iconColor: Colors.CATEGORY_3,
      backgroundColor: Colors.CATEGORY_LIGHT_3,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MyText
          category="main.title"
          style={{color: Colors.PRIMARY_TEXT}}
          text={title}
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {categories.map(category => (
          <CategoryItem
            key={category.id}
            title={category.title}
            icon={category.icon}
            iconColor={category.iconColor}
            backgroundColor={category.backgroundColor}
            onPress={() => console.log(`Category pressed: ${category.title}`)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  scrollContent: {
    paddingHorizontal: 8,
  },
});

export default CategoryList;
