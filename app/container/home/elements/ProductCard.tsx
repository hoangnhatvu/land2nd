import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../../utils';

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
  // Render category card (Type 3)
  if (type === 'category') {
    return (
      <TouchableOpacity 
        style={[styles.container, styles.categoryContainer]} 
        onPress={onPress}
      >
        <Image source={image} style={styles.categoryImage} resizeMode="cover" />
        <View style={styles.categoryLabelContainer}>
          <Text style={styles.categoryLabel}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  // Render simple card (Type 2) or standard card (Type 1)
  return (
    <TouchableOpacity 
      style={[styles.container, type === 'simple' && styles.simpleContainer]} 
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        {type === 'standard' && rating && (
          <View style={styles.ratingContainer}>
            <Icon name="star" size={12} color="#FFC120" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        )}
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          {category && (
            <Text style={styles.categoryText}>{category}</Text>
          )}
          <Text 
            style={styles.titleText} 
            numberOfLines={2}
          >
            {title}
          </Text>
        </View>
        
        {type === 'standard' && price && (
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{price}</Text>
            {onAddToCart && (
              <TouchableOpacity 
                style={styles.cartButton} 
                onPress={(e) => {
                  e.stopPropagation();
                  onAddToCart();
                }}
              >
                <Icon name="plus" size={14} color={Colors.WHITE} />
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
    width: 151,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    overflow: 'hidden',
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
    height: 120,
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
    right: 0,
    top: 20,
    backgroundColor: Colors.SECONDARY,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  categoryLabel: {
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'DM Sans',
  },
  ratingContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  ratingText: {
    color: Colors.WHITE,
    fontSize: 10,
    fontWeight: '400',
    marginLeft: 3,
  },
  contentContainer: {
    padding: 10,
  },
  infoContainer: {
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: '300',
    color: Colors.PRIMARY_TEXT,
    letterSpacing: 0.2,
    marginBottom: 4,
    fontFamily: 'DM Sans',
  },
  titleText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.PRIMARY_TEXT,
    letterSpacing: 0.2,
    fontFamily: 'DM Sans',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.RED_HIGH_LIGHT || '#FE3A30',
    letterSpacing: 0.2,
    fontFamily: 'DM Sans',
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