import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {MyText, ScreenWrapper, TextVariant} from '@components';
import {Colors} from '@utils';

const CheckWarranty = () => {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenWrapper headerTitle={'Tra cứu bảo hành'} onGoBack={onGoBack}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={styles.infoContainer}>
          <View style={styles.itemContainer}>
            <MyText
              category={TextVariant.NORMAL_TEXT}
              text={'Sản phẩm'}
              style={styles.label}
            />
            <MyText
              category={TextVariant.HIGH_TEXT}
              text={
                'Laptop Asus Vivobook Go E1504FA - Ryzen 5-7520U - Ram 16/500GB SSD - Pin 100% - Màu bạc - Ngoại hình: 98% - Body - Kèm sạc'
              }
              style={styles.value}
            />
          </View>

          <View style={styles.itemContainer}>
            <MyText
              category={TextVariant.NORMAL_TEXT}
              text={'Ngày mua'}
              style={styles.label}
            />
            <MyText
              category={TextVariant.HIGH_TEXT}
              text={'10:43:22 23-04-2025'}
              style={styles.value}
            />
          </View>

          <View style={styles.itemContainer}>
            <MyText
              category={TextVariant.NORMAL_TEXT}
              text={'Bảo hành'}
              style={styles.label}
            />
            <MyText
              category={TextVariant.HIGH_TEXT}
              text={'3 tháng'}
              style={styles.value}
            />
          </View>

          <View style={styles.itemContainer}>
            <MyText
              category={TextVariant.NORMAL_TEXT}
              text={'Ngày hết hạn'}
              style={styles.label}
            />
            <MyText
              category={TextVariant.HIGH_TEXT}
              text={'10:43:22 23-04-2025'}
              style={styles.value}
            />
          </View>
        </View>

        <MyText
          category={TextVariant.CATEGORY_TEXT}
          text={
            'Lưu ý: Điểm được tích ở cửa hàng nào chỉ được sử dụng được ở cửa hàng đó. Cám ơn quý khách!!!'
          }
          style={styles.note}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default CheckWarranty;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 70,
    gap: 15,
    backgroundColor: Colors.WHITE,
  },
  infoContainer: {
    backgroundColor: Colors.BACKGROUND,
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: Colors.PRIMARY_TEXT,
  },
  value: {
    flex: 1,
    color: Colors.PRIMARY_TEXT,
    textAlign: 'right',
  },
  note: {
    color: Colors.RED_HIGH_LIGHT,
    marginTop: 10,
  },
});
