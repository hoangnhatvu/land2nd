import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UserHeader, UserInfo, UserOthers, UserService} from './components';
import {Colors} from '@utils';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserHeader />
      <UserInfo />
      <UserService />
      <UserOthers />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 10,
    backgroundColor: Colors.WHITE,
  },
});
