import {images} from '@assets';
import {MyText, ScreenWrapper, TextVariant, MyButton} from '@components';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '@utils';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {constants} from '@constants';
import {BannerSlider} from './element';

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

const StoreDetail = ({route}: any) => {
  const navigation = useNavigation();
  const {store} = route.params;
  const {
    name,
    description,
    image,
    address,
    phoneNumber,
    email,
    operatingHours,
  } = store;

  const onGoBack = () => {
    navigation.goBack();
  };

  const onViewProducts = () => {};

  return (
    <ScreenWrapper
      headerTitle={`Chi tiết cửa hàng - ${name}`}
      onGoBack={onGoBack}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <MyText category={TextVariant.NORMAL_TEXT} text={description} />

        <Image source={{uri: image}} style={styles.image} />

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <View style={styles.iconContainer}>
              <Image source={images.ic_phone} style={styles.icon} />
              <MyText category={TextVariant.NORMAL_TEXT} text={'Hotline:'} />
            </View>
            <MyText
              category={TextVariant.NORMAL_TEXT}
              text={`${phoneNumber}`}
            />
          </View>

          <View style={styles.infoItem}>
            <View style={styles.iconContainer}>
              <Image source={images.ic_location} style={styles.icon} />
              <MyText category={TextVariant.NORMAL_TEXT} text={'Địa chỉ:'} />
            </View>
            <View style={{flex: 1}}>
              <MyText category={TextVariant.NORMAL_TEXT} text={`${address}`} />
            </View>
          </View>

          <View style={styles.infoItem}>
            <View style={styles.iconContainer}>
              <Image source={images.ic_clock} style={styles.icon} />
              <MyText category={TextVariant.NORMAL_TEXT} text={'Hoạt động:'} />
            </View>
            <MyText
              category={TextVariant.NORMAL_TEXT}
              text={`${operatingHours}`}
            />
          </View>

          <View style={styles.infoItem}>
            <View style={styles.iconContainer}>
              <Image source={images.ic_mail} style={styles.icon} />
              <MyText category={TextVariant.NORMAL_TEXT} text={'Email:'} />
            </View>
            <MyText category={TextVariant.NORMAL_TEXT} text={`${email}`} />
          </View>
        </View>

        <BannerSlider
          data={bannerSlides}
          autoplay={true}
          autoplayInterval={4000}
        />

        <MyButton
          type="outline"
          title="Xem sản phẩm từ cửa hàng này"
          onPress={onViewProducts}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default StoreDetail;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 70,
    gap: 15,
    backgroundColor: Colors.WHITE,
  },
  image: {
    width: '100%',
    height: 284,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  infoContainer: {
    marginTop: 10,
    gap: 12,
  },
  infoItem: {
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
  },
  iconContainer: {
    minWidth: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    width: 16,
    height: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.PRIMARY,
  },
});
