import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { constants } from '../../../constants';

interface BannerItem {
  id: string;
  imageUrl: string;
  onPress?: () => void;
}

interface BannerSliderProps {
  data: BannerItem[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

const BannerSlider: React.FC<BannerSliderProps> = ({
  data,
  autoplay = true,
  autoplayInterval = 3000,
}) => {
  const carouselRef = useRef(null);

  const renderItem = ({item}: {item: BannerItem}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={item.onPress}
        activeOpacity={0.9}>
        <Image style={styles.imageStyle} source={{uri: item.imageUrl}} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        width={constants.width}
        height={150}
        autoPlay={autoplay}
        autoPlayInterval={autoplayInterval}
        loop
        enabled
        scrollAnimationDuration={1000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  itemContainer: {
    height: 150,
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default BannerSlider;
