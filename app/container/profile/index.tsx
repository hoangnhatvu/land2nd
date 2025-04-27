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

  const onTermsAndConditions = () => {
    navigation.navigate(APP_SCREEN.TERM_CONDITION as never);
  };

  return (
    <ScreenWrapper customHeader={<Header />}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <Info onEditProfile={onEditProfile} />
        <Service />
        <Others onTermsAndConditions={onTermsAndConditions} />
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
