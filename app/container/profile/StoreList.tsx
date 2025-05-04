import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors} from '@utils';
import {MyButton, MyText, ScreenWrapper, TextVariant} from '@components';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {APP_SCREEN} from '@constants';
import {images} from '@assets';

const stores = [
  {
    id: 1,
    name: '2handland Gò Vấp',
    address:
      '6/2 Nguyễn Bỉnh Khiêm, Phường 1, Quận Gò Vấp, Thành phố Hồ Chí Minh',
    description:
      '2handland chi nhánh Gò Vấp, thành lập năm 2022, là điểm đến uy tín cho việc mua bán các sản phẩm cũ đã qua sử dụng.',
    image: 'https://2handland.com/assets/general/image/2handland-logo.jpg',
    email: '2handlandcngovap@gmail.com',
  },
  {
    id: 2,
    name: '2handland Tân Phú',
    address: '186 Đ. Độc Lập, Tân Thành, Tân Phú, Hồ Chí Minh',
    description:
      '2handland Tân Phú là chi nhánh thứ 2 của 2handland, ra mắt vào 1/10/2024 với một không gian hoàn toàn mới.',
    image: 'https://2handland.com/assets/general/image/2handland-logo.jpg',
    email: '2handlandtanphu@gmail.com',
  },
];

const {STORE_DETAIL} = APP_SCREEN;

const ListStore = () => {
  const navigation = useNavigation<any>();

  const onGoBack = () => {
    navigation.goBack();
  };

  const onSelect = (store: any) => {
    navigation.navigate(STORE_DETAIL, {store});
  };

  return (
    <ScreenWrapper headerTitle="Danh sách cửa hàng" onGoBack={onGoBack}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        {stores.map(store => (
          <TouchableOpacity
            key={store.id}
            style={styles.card}
            onPress={() => onSelect(store)}>
            <View style={styles.imageContainer}>
              <Image source={{uri: store.image}} style={styles.image} />
              <View style={styles.textContainer}>
                <MyText
                  category={TextVariant.MEDIUM_TEXT}
                  text={store.name}
                  style={styles.text}
                />
                <MyText
                  category={TextVariant.SMALL_TEXT}
                  text={store.address}
                  style={styles.text}
                />
                <View style={styles.imageContainer}>
                  <TouchableOpacity>
                    <Image source={images.ic_facebook} style={styles.icon} />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image source={images.ic_zalo} style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.textContainer}>
              <MyText
                category={TextVariant.CATEGORY_TEXT}
                text={store.description}
                style={styles.text}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default ListStore;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 70,
    marginHorizontal: 18,
    gap: 15,
    backgroundColor: Colors.WHITE,
  },
  card: {
    padding: 16,
    gap: 10,
    borderRadius: 12,
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  imageContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 10,
  },
  textContainer: {
    gap: 5,
    flex: 1,
  },
  text: {
    color: Colors.PRIMARY_TEXT,
  },
});
