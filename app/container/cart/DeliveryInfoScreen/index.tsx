import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper, MyText, MyButton } from '../../../components';
import { Colors } from '../../../utils';
import {DeliveryForm} from './components';

const DeliveryInfoScreen = () => {
  const navigation = useNavigation();

  const handleConfirm = () => {
    // Handle form submission here
    console.log('Confirming delivery info');
    // Navigate to next screen or show confirmation
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenWrapper
      isShowBackButton={true}
      headerTitle="Thông tin nhận hàng"
      onGoBack={handleGoBack}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <DeliveryForm />
        
        {/* Confirm button at the bottom of the form as per Figma design */}
        <View style={styles.buttonContainer}>
          <MyButton
            title="Xác nhận"
            onPress={handleConfirm}
            type="fill"
            containerStyle={styles.confirmButton}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 16,
    paddingBottom: 40,
  },
  buttonContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  confirmButton: {
    backgroundColor: Colors.PRIMARY || '#3669C9',
    borderRadius: 16,
  },
});

export default DeliveryInfoScreen;