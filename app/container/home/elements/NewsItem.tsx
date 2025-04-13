import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors} from '../../../utils';
import {MyText} from '../../../components';

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
        <MyText
          category="medium.text"
          style={{color: Colors.PRIMARY_TEXT}}
          text={title}
          numberOfLines={2}
        />
        <MyText
          category="normal.text"
          style={{color: Colors.PRIMARY_TEXT}}
          text={excerpt}
          numberOfLines={1}
        />
        <MyText
          category="small.text"
          style={{color: Colors.GRAY}}
          text={date}
          numberOfLines={1}
        />
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
    marginBottom: 16,
  },
  contentContainer: {
    flex: 2,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    height: 80,
    borderRadius: 10,
  },
});

export default NewsItem;
