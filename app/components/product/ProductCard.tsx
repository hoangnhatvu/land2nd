import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MyText} from '@components';
import {Colors} from '@utils';
import { constants } from '@constants';

export type ProductCardType = 'standard' | 'simple' | 'category';

interface ProductCardProps {
  id: string;
  title: string;
  category?: string;
  price?: string;
  image: any;
  rating?: number;
  type?: ProductCardType;
  onPress?: () => void;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  category,
  price,
  image,
  rating,
  type = 'standard',
  onPress,
  onAddToCart,
}) => {
  if (type === 'category') {
    return (
      <TouchableOpacity
        style={[styles.container, styles.categoryContainer]}
        onPress={onPress}>
        <Image source={image} style={styles.categoryImage} resizeMode="cover" />
        <View style={styles.categoryLabelContainer}>
          <MyText
            text={title}
            category="medium.text"
            style={{color: Colors.WHITE}}
            numberOfLines={1}
          />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.container, type === 'simple' && styles.simpleContainer]}
      onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        {type === 'standard' && rating && (
          <View style={styles.ratingContainer}>
            <Icon name="star" size={12} color={Colors.YELLOW} />
            <MyText
              text={rating}
              category="small.text"
              style={{color: Colors.WHITE}}
            />
          </View>
        )}
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          {category && (
            <MyText
              text={category}
              category="small.text"
              style={{color: Colors.PRIMARY_TEXT}}
            />
          )}
          <MyText
            text={title}
            category="medium.text"
            style={{color: Colors.PRIMARY_TEXT, minHeight: 40}}
            numberOfLines={2}
          />
        </View>

        {type === 'standard' && price && (
          <View style={styles.priceContainer}>
            <MyText
              text={price}
              category="high.text"
              style={{color: Colors.RED_HIGH_LIGHT, alignSelf: 'flex-end'}}
              numberOfLines={2}
            />
            {onAddToCart && (
              <TouchableOpacity
                style={styles.cartButton}
                onPress={e => {
                  e.stopPropagation();
                  onAddToCart();
                }}>
                <Image
                  source={{uri: 'ic_cart'}}
                  style={{
                    width: 12,
                    height: 12,
                    tintColor: Colors.WHITE,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: constants.width / 2 - 26,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    shadowColor: Colors.BLACK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  simpleContainer: {
    // Specific styles for the simple card type if needed
  },
  categoryContainer: {
    position: 'relative',
    height: 198,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 153,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  categoryLabelContainer: {
    position: 'absolute',
    left: 0,
    bottom: 20,
    backgroundColor: Colors.SECONDARY,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  ratingContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  contentContainer: {
    padding: 10,
  },
  infoContainer: {
    gap: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartButton: {
    width: 24,
    height: 24,
    borderRadius: 8,
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductCard;
