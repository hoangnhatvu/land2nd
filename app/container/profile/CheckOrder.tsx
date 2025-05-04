import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ScreenWrapper} from '@components';
import {Colors} from '@utils';

const CheckOrder = () => {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenWrapper headerTitle={'Tra cứu đơn online'} onGoBack={onGoBack}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}></ScrollView>
    </ScreenWrapper>
  );
};

export default CheckOrder;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 70,
    gap: 15,
    backgroundColor: Colors.WHITE,
  },
});
