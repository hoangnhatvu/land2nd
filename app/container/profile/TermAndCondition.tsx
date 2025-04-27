import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors} from '@utils';
import {MyButton, MyText, ScreenWrapper, TextVariant} from '@components';
import {useNavigation} from '@react-navigation/native';
import {Item, WebViewSheet} from './element';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TermAndCondition = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [urlLink, setUrlLink] = useState('');

  const onOpenWebViewSheet = (url: string) => {
    setUrlLink(url);
    setIsVisible(true);
  };

  const onCloseWebViewSheet = () => {
    setIsVisible(false);
  };

  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenWrapper headerTitle="Điều khoản 2ndLand" onGoBack={onGoBack}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={styles.itemContainer}>
          <Item
            label={'Chính sách đổi trả'}
            type="outlined"
            icon={
              <Icon name="swap-horizontal" size={20} color={Colors.PRIMARY} />
            }
            onPress={() =>
              onOpenWebViewSheet('https://2handland.com/chinh-sach-doi-tra')
            }
          />
          <View style={styles.divider} />
          <Item
            label={'Chính sách bán hàng'}
            type="outlined"
            icon={<Icon name="cart-outline" size={20} color={Colors.PRIMARY} />}
            onPress={() =>
              onOpenWebViewSheet('https://2handland.com/chinh-sach-ban-hang')
            }
          />
          <View style={styles.divider} />
          <Item
            label={'Chính sách bảo mật'}
            type="outlined"
            icon={
              <Icon
                name="shield-lock-outline"
                size={20}
                color={Colors.PRIMARY}
              />
            }
            onPress={() =>
              onOpenWebViewSheet('https://2handland.com/chinh-sach-bao-mat')
            }
          />
          <View style={styles.divider} />
          <Item
            label={'Chính sách bảo hành'}
            type="outlined"
            icon={
              <Icon name="wrench-outline" size={20} color={Colors.PRIMARY} />
            }
            onPress={() =>
              onOpenWebViewSheet('https://2handland.com/chinh-sach-bao-hanh')
            }
          />
          <View style={styles.divider} />
          <Item
            label={'Chính sách kiểm hàng'}
            type="outlined"
            icon={
              <Icon
                name="check-circle-outline"
                size={20}
                color={Colors.PRIMARY}
              />
            }
            onPress={() =>
              onOpenWebViewSheet('https://2handland.com/chinh-sach-kiem-hang')
            }
          />
          <View style={styles.divider} />
          <Item
            label={'Chính sách vận chuyển và giao hàng'}
            type="outlined"
            icon={
              <Icon name="truck-outline" size={20} color={Colors.PRIMARY} />
            }
            onPress={() =>
              onOpenWebViewSheet(
                'https://2handland.com/chinh-sach-van-chuyen-va-giao-hang',
              )
            }
          />
        </View>

        <View style={styles.footer}>
          <MyText
            text={'Thông tin chủ sở hữu ứng dụng 2ndLand:'}
            category={TextVariant.NORMAL_TEXT}
          />
          <MyText
            text={'Tên công ty: 2ndLand'}
            category={TextVariant.NORMAL_TEXT}
          />
          <MyText
            text={
              'Địa chỉ trụ sở chính: 6/2 Nguyễn Bỉnh Khiêm, Phường 1, Quận Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam'
            }
            category={TextVariant.NORMAL_TEXT}
          />
          <MyText
            text={
              'Số GCN đăng ký doanh nghiệp: 8539669099 do Phòng Tài chính - Kế hoạch quận Gò Vấp cấp ngày 11/08/2020'
            }
            category={TextVariant.NORMAL_TEXT}
          />
          <MyText
            text={'Số điện thoại liên hệ: 0795507777'}
            category={TextVariant.NORMAL_TEXT}
          />
        </View>
        <WebViewSheet
          isVisible={isVisible}
          onClose={onCloseWebViewSheet}
          url={urlLink}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default TermAndCondition;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 70,
    gap: 15,
    backgroundColor: Colors.WHITE,
  },
  itemContainer: {
    padding: 16,
    gap: 20,
  },
  divider: {
    height: 2,
    backgroundColor: Colors.BACKGROUND,
    width: '100%',
  },
  footer: {
    margin: 16,
    padding: 16,
    gap: 5,
    borderRadius: 15,
    backgroundColor: Colors.BACKGROUND,
  },
});
