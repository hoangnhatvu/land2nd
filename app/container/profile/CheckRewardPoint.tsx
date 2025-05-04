import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ScreenWrapper, MyText, TextVariant} from '@components';
import {Colors} from '@utils';

const CheckRewardPoint = () => {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenWrapper headerTitle={'Tra cứu điểm tích luỹ'} onGoBack={onGoBack}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={styles.infoContainer}>
          <View style={styles.itemContainer}>
            <MyText
              category={TextVariant.NORMAL_TEXT}
              text={'Tên khách hàng'}
              style={styles.label}
            />
            <MyText
              category={TextVariant.HIGH_TEXT}
              text={'Anh Đạt'}
              style={styles.value}
            />
          </View>

          <View style={styles.itemContainer}>
            <MyText
              category={TextVariant.NORMAL_TEXT}
              text={'Số điện thoại'}
              style={styles.label}
            />
            <MyText
              category={TextVariant.HIGH_TEXT}
              text={'0931619939'}
              style={styles.value}
            />
          </View>

          <View style={styles.itemContainer}>
            <MyText
              category={TextVariant.NORMAL_TEXT}
              text={'Tổng chi tiêu'}
              style={styles.label}
            />
            <MyText
              category={TextVariant.HIGH_TEXT}
              text={'0'}
              style={styles.value}
            />
          </View>

          <View style={styles.itemContainer}>
            <MyText
              category={TextVariant.NORMAL_TEXT}
              text={'Tổng điểm'}
              style={styles.label}
            />
            <MyText
              category={TextVariant.HIGH_TEXT}
              text={'0'}
              style={styles.value}
            />
          </View>

          <View style={styles.itemContainer}>
            <MyText
              category={TextVariant.NORMAL_TEXT}
              text={'Đã sử dụng'}
              style={styles.label}
            />
            <MyText
              category={TextVariant.HIGH_TEXT}
              text={'0'}
              style={styles.value}
            />
          </View>

          <View style={styles.itemContainer}>
            <MyText
              category={TextVariant.NORMAL_TEXT}
              text={'Tổng điểm hiện tại'}
              style={styles.label}
            />
            <MyText
              category={TextVariant.HIGH_TEXT}
              text={'0'}
              style={styles.value}
            />
          </View>

          <View style={styles.itemContainer}>
            <MyText
              category={TextVariant.NORMAL_TEXT}
              text={'Tổng giá trị quy đổi'}
              style={styles.label}
            />
            <MyText
              category={TextVariant.HIGH_TEXT}
              text={'0'}
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

export default CheckRewardPoint;

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
