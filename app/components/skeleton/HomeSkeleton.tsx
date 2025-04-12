import React from 'react';
import { View, StyleSheet } from 'react-native';
import Skeleton from './Skeleton';
import MyText, { TextVariant } from '../base/BaseText';

interface SkeletonSectionProps {
  title: string;
  showTitle?: boolean;
}

// Skeleton for Banner
export const BannerSkeleton: React.FC = () => (
  <View style={styles.bannerContainer}>
    <Skeleton width="100%" height={120} borderRadius={10} />
  </View>
);

// Skeleton for Banner Slider
export const BannerSliderSkeleton: React.FC = () => (
  <View style={styles.sliderContainer}>
    <Skeleton width="100%" height={160} borderRadius={10} />
    <View style={styles.paginationContainer}>
      <Skeleton width={8} height={8} borderRadius={4} style={styles.paginationDot} />
      <Skeleton width={8} height={8} borderRadius={4} style={styles.paginationDot} />
      <Skeleton width={8} height={8} borderRadius={4} style={styles.paginationDot} />
    </View>
  </View>
);

// Skeleton for Category List
export const CategoryListSkeleton: React.FC<SkeletonSectionProps> = ({ title, showTitle = true }) => (
  <View style={styles.sectionContainer}>
    {showTitle && (
      <MyText category={TextVariant.MEDIUM_TITLE} text={title} style={styles.sectionTitle} />
    )}
    <View style={styles.categoryContainer}>
      {[...Array(5)].map((_, index) => (
        <View key={index} style={styles.categoryItem}>
          <Skeleton width={60} height={60} borderRadius={30} />
          <Skeleton width={60} height={16} style={styles.categoryTitle} />
        </View>
      ))}
    </View>
  </View>
);

// Skeleton for Standard Product List
export const StandardProductListSkeleton: React.FC<SkeletonSectionProps> = ({ title, showTitle = true }) => (
  <View style={styles.sectionContainer}>
    {showTitle && (
      <View style={styles.sectionHeader}>
        <MyText category={TextVariant.MEDIUM_TITLE} text={title} style={styles.sectionTitle} />
        <Skeleton width={60} height={16} />
      </View>
    )}
    <View style={styles.productRowContainer}>
      {[...Array(3)].map((_, index) => (
        <View key={index} style={styles.standardProductCard}>
          <Skeleton width="100%" height={120} borderRadius={10} />
          <Skeleton width="80%" height={16} style={styles.productTitle} />
          <Skeleton width="50%" height={14} style={styles.productCategory} />
          <View style={styles.productFooter}>
            <Skeleton width="40%" height={16} />
            <Skeleton width={60} height={16} />
          </View>
        </View>
      ))}
    </View>
  </View>
);

// Skeleton for Simple Product List
export const SimpleProductListSkeleton: React.FC<SkeletonSectionProps> = ({ title, showTitle = true }) => (
  <View style={styles.sectionContainer}>
    {showTitle && (
      <View style={styles.sectionHeader}>
        <MyText category={TextVariant.MEDIUM_TITLE} text={title} style={styles.sectionTitle} />
        <Skeleton width={60} height={16} />
      </View>
    )}
    <View style={styles.productRowContainer}>
      {[...Array(3)].map((_, index) => (
        <View key={index} style={styles.simpleProductCard}>
          <Skeleton width="100%" height={100} borderRadius={10} />
          <Skeleton width="80%" height={16} style={styles.productTitle} />
          <Skeleton width="50%" height={14} style={styles.productCategory} />
        </View>
      ))}
    </View>
  </View>
);

// Skeleton for Category Product List
export const CategoryProductListSkeleton: React.FC<SkeletonSectionProps> = ({ title, showTitle = true }) => (
  <View style={styles.sectionContainer}>
    {showTitle && (
      <View style={styles.sectionHeader}>
        <MyText category={TextVariant.MEDIUM_TITLE} text={title} style={styles.sectionTitle} />
        <Skeleton width={60} height={16} />
      </View>
    )}
    <View style={styles.productRowContainer}>
      {[...Array(3)].map((_, index) => (
        <View key={index} style={styles.categoryProductCard}>
          <Skeleton width="100%" height={80} borderRadius={10} />
          <Skeleton width="60%" height={16} style={styles.productTitle} />
        </View>
      ))}
    </View>
  </View>
);

// Skeleton for News List
export const NewsListSkeleton: React.FC<SkeletonSectionProps> = ({ title, showTitle = true }) => (
  <View style={styles.sectionContainer}>
    {showTitle && (
      <View style={styles.sectionHeader}>
        <MyText category={TextVariant.MEDIUM_TITLE} text={title} style={styles.sectionTitle} />
        <Skeleton width={60} height={16} />
      </View>
    )}
    {[...Array(2)].map((_, index) => (
      <View key={index} style={styles.newsItem}>
        <Skeleton width={80} height={80} borderRadius={10} />
        <View style={styles.newsContent}>
          <Skeleton width="90%" height={16} style={styles.newsTitle} />
          <Skeleton width="70%" height={14} style={styles.newsDate} />
          <Skeleton width="60%" height={14} style={styles.newsCategory} />
        </View>
      </View>
    ))}
  </View>
);

// Skeleton for entire Home screen
export const HomeScreenSkeleton: React.FC = () => (
  <View style={styles.mainContainer}>
    <View style={styles.headerSkeleton}>
      <Skeleton width={120} height={24} />
      <View style={styles.headerIcons}>
        <Skeleton width={24} height={24} borderRadius={12} style={styles.headerIcon} />
        <Skeleton width={24} height={24} borderRadius={12} />
      </View>
    </View>
    
    <View style={styles.searchBarSkeleton}>
      <Skeleton width="100%" height={46} borderRadius={8} />
    </View>
    
    <BannerSliderSkeleton />
    
    <CategoryListSkeleton title="Bạn cần gì?" />
    
    <BannerSkeleton />
    
    <StandardProductListSkeleton title="Muốn mua" />
    
    <BannerSkeleton />
    
    <SimpleProductListSkeleton title="Muốn bán" />
    
    <BannerSkeleton />
    
    <CategoryProductListSkeleton title="Muốn thuê" />
    
    <NewsListSkeleton title="Tin tức mới nhất" />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 24,
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  headerSkeleton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 16,
  },
  searchBarSkeleton: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  bannerContainer: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  sliderContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  paginationDot: {
    marginHorizontal: 4,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryTitle: {
    marginTop: 8,
  },
  productRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  standardProductCard: {
    width: '30%',
    borderRadius: 10,
    padding: 8,
  },
  simpleProductCard: {
    width: '30%',
    borderRadius: 10,
    padding: 8,
  },
  categoryProductCard: {
    width: '30%',
    borderRadius: 10,
    padding: 8,
  },
  productTitle: {
    marginTop: 8,
  },
  productCategory: {
    marginTop: 4,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  newsItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  newsContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  newsTitle: {
    marginBottom: 4,
  },
  newsDate: {
    marginBottom: 4,
  },
  newsCategory: {},
});

export default {
  BannerSkeleton,
  BannerSliderSkeleton,
  CategoryListSkeleton,
  StandardProductListSkeleton,
  SimpleProductListSkeleton,
  CategoryProductListSkeleton,
  NewsListSkeleton,
  HomeScreenSkeleton,
};