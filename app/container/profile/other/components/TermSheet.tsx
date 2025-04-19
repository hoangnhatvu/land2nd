import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {BottomSheet} from '@components';

interface TermSheetProps {
  isVisible: boolean;
  onClose: () => void;
  url: string;
}

const TermSheet = ({isVisible, onClose, url}: TermSheetProps) => {
  return (
    <BottomSheet isVisible={isVisible} onClose={onClose}>
      <WebView
        source={{uri: url}}
        style={{flex: 1}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
      <View></View>
    </BottomSheet>
    // <BottomSheet snapPoints={['90%']}>
    //   <WebView
    //     source={{uri: url}}
    //     style={{flex: 1}}
    //     javaScriptEnabled={true}
    //     domStorageEnabled={true}
    //     startInLoadingState={true}
    //     scalesPageToFit={true}
    //   />
    // </BottomSheet>
  );
};

export default TermSheet;

const styles = StyleSheet.create({
  container: {},
});
