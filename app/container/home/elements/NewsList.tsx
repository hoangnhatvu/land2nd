import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import NewsItem from './NewsItem';
import { MyButton, MyText } from '../../../components';
import { Colors } from '../../../utils';

// Mock data for news items
const mockNews = [
  {
    id: '1',
    title: 'Hướng dẫn cách tắt laptop đúng cách, tăng độ bền, tuổi thọ',
    excerpt: 'Tại sao việc tắt laptop đúng cách lại ...',
    date: '13-07-2025',
    image: require('../../../../assets/images/figma/news_laptop.png'),
  },
  {
    id: '2',
    title: 'Cách xóa video trên TikTok đơn giản trong vài phút',
    excerpt: 'TikTok có những quy định nghiêm ...',
    date: '13-07-2025',
    image: require('../../../../assets/images/figma/headphone_category.png'),
  },
  {
    id: '3',
    title: '3 cách tua nhanh video trên iPhone đơn giản, dễ thực hiện',
    excerpt: 'Tua nhanh video trên iPhone ...',
    date: '13-07-2025',
    image: require('../../../../assets/images/figma/laptop_category.png'),
  },
];

interface NewsListProps {
  title: string;
  onSeeAllPress?: () => void;
  news?: any[]; // In a real app, you'd use a proper type for your news data
}

const NewsList: React.FC<NewsListProps> = ({
  title,
  onSeeAllPress,
  news = mockNews,
}) => {
  return (
    <View style={styles.container}>
      <MyText
        category="main.title"
        style={{ color: Colors.PRIMARY_TEXT, marginBottom: 16 }}
        text={title}
      />      
      {news.map((item) => (
        <NewsItem
          key={item.id}
          id={item.id}
          title={item.title}
          excerpt={item.excerpt}
          date={item.date}
          image={item.image}
          onPress={() => console.log(`News item pressed: ${item.title}`)}
        />
      ))}
      
      <View style={styles.buttonContainer}>
        <MyButton
          title="Xem tất cả tin tức"
          type="outline"
          onPress={onSeeAllPress || (() => {})}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16
  },
  buttonContainer: {
    marginTop: 8,
  },
});

export default NewsList;