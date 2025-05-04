import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Info, Others, Service} from './element';
import {Colors} from '@utils';
import {MyButton, ScreenWrapper} from '@components';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {APP_SCREEN} from '@constants';

const Profile = () => {
  const navigation = useNavigation();

  const onLogout = () => {};

  const onEditProfile = () => {
    navigation.navigate(APP_SCREEN.EDIT_PROFILE as never);
  };

  const onListStore = () => {
    navigation.navigate(APP_SCREEN.STORE_LIST as never);
  };

  const onTermsAndConditions = () => {
    navigation.navigate(APP_SCREEN.TERM_CONDITION as never);
  };

  const onCheckOrder = () => {
    navigation.navigate(APP_SCREEN.CHECK_ORDER as never);
  };

  const onCheckWarranty = () => {
    navigation.navigate(APP_SCREEN.CHECK_WARRANTY as never);
  };

  const onCheckRewardPoint = () => {
    navigation.navigate(APP_SCREEN.CHECK_REWARD_POINT as never);
  };

  return (
    <ScreenWrapper customHeader={<Header />}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <Info onEditProfile={onEditProfile} />
        <Service
          onCheckOrder={onCheckOrder}
          onCheckWarranty={onCheckWarranty}
          onCheckRewardPoint={onCheckRewardPoint}
        />
        <Others
          onListStore={onListStore}
          onTermsAndConditions={onTermsAndConditions}
        />
        <MyButton title={'Đăng xuất'} type="outline" onPress={() => {}} />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 70,
    gap: 15,
    backgroundColor: Colors.WHITE,
  },
});
