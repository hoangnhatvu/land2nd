import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../../utils';

interface NewsItemProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: any;
  onPress?: () => void;
}

const NewsItem: React.FC<NewsItemProps> = ({
  id,
  title,
  excerpt,
  date,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.excerpt} numberOfLines={2}>{excerpt}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={image} style={styles.image} resizeMode="cover" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 4,
  },
  contentContainer: {
    flex: 2,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'DM Sans',
    fontSize: 14,
    fontWeight: '500',
    color: '#06070C',
    marginBottom: 8,
  },
  excerpt: {
    fontFamily: 'DM Sans',
    fontSize: 12,
    fontWeight: '400',
    color: '#06070C',
    marginBottom: 8,
  },
  date: {
    fontFamily: 'DM Sans',
    fontSize: 10,
    fontWeight: '300',
    color: Colors.GRAY,
  },
  image: {
    flex: 1,
    height: 80,
    borderRadius: 10,
  },
});

export default NewsItem;