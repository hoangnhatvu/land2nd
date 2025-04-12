import React, { useCallback, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Toast, { BaseToast, ToastProps } from 'react-native-toast-message';
import { StyleSheet, Alert, PermissionsAndroid } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store/store';
import MainNavigator from './app/navigator';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  const toastConfig = {
    success: useCallback(
      (props: ToastProps) => (
        <BaseToast
          {...props}
          style={[styles.baseToast, { backgroundColor: '#4CAF50' }]}
          contentContainerStyle={styles.toastContainer}
          text1Style={styles.textStyleToast}
        />
      ),
      [],
    ),
    error: useCallback(
      (props: ToastProps) => (
        <BaseToast
          {...props}
          style={[styles.baseToast, { backgroundColor: '#F44336' }]}
          contentContainerStyle={styles.toastContainer}
          text1Style={styles.textStyleToast}
        />
      ),
      [],
    ),
  };

  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <NavigationContainer>
          <BottomSheetModalProvider>
            <MainNavigator />
          </BottomSheetModalProvider>
          <Toast config={toastConfig} />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  textStyleToast: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
  baseToast: {
    width: '70%',
    borderLeftColor: 'transparent',
    borderRadius: 30,
    height: 35,
  },
  toastContainer: { paddingHorizontal: 15 },
});

export default App;