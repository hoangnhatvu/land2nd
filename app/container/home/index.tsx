import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from './elements/Header';
import SearchBar from './elements/SearchBar';
import CategoryList from './elements/CategoryList';
import ProductList from './elements/ProductList';
import Banner from './elements/Banner';
import BannerSlider from './elements/BannerSLider';
import NewsList from './elements/NewsList';
import {BaseView, HomeSkeleton, ScreenWrapper} from '@components';

const buyProducts = [
  {
    id: '1',
    title: 'Tai nghe Mashall Major IV',
    category: 'Tai nghe cũ',
    price: '1.500.000 đ',
    image: require('../../../assets/images/figma/headphone_marshall.png'),
    rating: 4.6,
  },
  {
    id: '2',
    title: 'Sony CH510',
    category: 'Tai nghe cũ',
    price: '1.500.000 đ',
    image: require('../../../assets/images/figma/headphone_sony.png'),
    rating: 4.6,
  },
  {
    id: '3',
    title: 'Tai nghe Mashall Major IV',
    category: 'Tai nghe cũ',
    price: '1.500.000 đ',
    image: require('../../../assets/images/figma/headphone_category.png'),
    rating: 4.6,
  },
];

const sellProducts = [
  {
    id: '1',
    title: 'Điện thoại Relme',
    category: 'Điện thoại',
    price: '1.500.000 đ',
    image: require('../../../assets/images/figma/laptop_category.png'),
    rating: 4.6,
  },
  {
    id: '2',
    title: 'Ipad',
    category: 'Máy tính bảng',
    price: '1.500.000 đ',
    image: require('../../../assets/images/figma/news_laptop.png'),
    rating: 4.6,
  },
  {
    id: '3',
    title: 'Điện thoại Relme',
    category: 'Điện thoại',
    price: '1.500.000 đ',
    image: require('../../../assets/images/figma/headphone_sony.png'),
    rating: 4.6,
  },
];

const rentProducts = [
  {
    id: '1',
    title: 'Laptop',
    image: require('../../../assets/images/figma/laptop_category.png'),
  },
  {
    id: '2',
    title: 'Tai nghe',
    image: require('../../../assets/images/figma/headphone_category.png'),
  },
  {
    id: '3',
    title: 'Điện thoại',
    image: require('../../../assets/images/figma/news_laptop.png'),
  },
];

const bannerSlides = [
  {
    id: '1',
    imageUrl:
      'https://cdn.24h.com.vn/upload/1-2024/images/2024-03-01/image3-1709273752-75-width1999height1500.jpg',
    onPress: () => console.log('Slide 1 pressed'),
  },
  {
    id: '2',
    imageUrl:
      'https://cdn.24h.com.vn/upload/1-2024/images/2024-03-01/image3-1709273752-75-width1999height1500.jpg',
    onPress: () => console.log('Slide 2 pressed'),
  },
  {
    id: '3',
    imageUrl:
      'https://cdn.24h.com.vn/upload/1-2024/images/2024-03-01/image3-1709273752-75-width1999height1500.jpg',
    onPress: () => console.log('Slide 3 pressed'),
  },
];

const Home = React.memo(() => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <BaseView>
        <Header
          notificationCount={3}
          cartCount={1}
          onNotificationPress={() => console.log('Notification pressed')}
          onCartPress={() => console.log('Cart pressed')}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          <HomeSkeleton.HomeScreenSkeleton />
        </ScrollView>
      </BaseView>
    );
  }

  return (
    <ScreenWrapper
      customHeader={
        <Header
          notificationCount={3}
          cartCount={1}
          onNotificationPress={() => console.log('Notification pressed')}
          onCartPress={() => console.log('Cart pressed')}
        />
      }>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSearch={() =>
            console.log('Search pressed with query:', searchQuery)
          }
        />

        <BannerSlider
          data={bannerSlides}
          autoplay={true}
          autoplayInterval={4000}
        />

        <CategoryList title="Bạn cần gì?" />

        <ProductList
          title="Muốn mua"
          products={buyProducts}
          contanerStyle={{marginTop: 50}}
          cardType="standard"
          onSeeAllPress={() => console.log('See all buy products')}
        />

        <Banner
          title="Đồ cũ, đồ 2nd đa lĩnh vực lớn nhất"
          subtitle=""
          imageUrl={require('../../../assets/images/figma/headphone_marshall.png')}
          onPress={() => console.log('Banner 2 pressed')}
        />

        {/* Simple product card type */}
        <ProductList
          title="Muốn bán"
          products={sellProducts}
          contanerStyle={{marginTop: 24}}
          cardType="simple"
          onSeeAllPress={() => console.log('See all sell products')}
        />

        <Banner
          title="2handland - Đơn vị thu mua đồ cũ nhiều lĩnh vực uy tín"
          imageUrl={require('../../../assets/images/figma/headphone_marshall.png')}
          onPress={() => console.log('Banner 3 pressed')}
        />

        {/* Category product card type */}
        <ProductList
          title="Muốn thuê"
          products={rentProducts}
          contanerStyle={{marginTop: 24}}
          cardType="category"
          onSeeAllPress={() => console.log('See all rent products')}
        />

        <NewsList
          title="Tin tức mới nhất"
          onSeeAllPress={() => console.log('See all news')}
        />
      </ScrollView>
    </ScreenWrapper>
  );
});

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 24,
  },
});

export default Home;
