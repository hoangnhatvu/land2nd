import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import React, {type ReactNode, isValidElement} from 'react';
import {BaseView, MyText, TextCategoryVariant} from '../base';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../utils';
import {TAB_BAR_HEIGHT} from '../../constants/constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ScreenWrapperProps {
  isShowBackButton?: boolean;
  children?: ReactNode;
  headerTitle?: string;
  headerTitleColor?: string;
  headerTitleCategory?: TextCategoryVariant;
  headerComponentRight?: ReactNode;
  footerComponent?: ReactNode;
  customHeader?: ReactNode;
  onGoBack?: () => void;
  hasTabBar?: boolean;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  isShowBackButton = true,
  children,
  headerTitle,
  headerTitleColor,
  headerTitleCategory = 'main.title',
  headerComponentRight,
  footerComponent,
  customHeader,
  onGoBack,
  hasTabBar = true,
}) => {
  const insets = useSafeAreaInsets();
  const BOTTOM_INSETS_WITH_BOTTOM_TAB = TAB_BAR_HEIGHT - insets.bottom;
  return (
    <BaseView>
      {isValidElement(customHeader) ? (
        customHeader
      ) : (
        <View style={styles.header}>
          {isShowBackButton && (
            <TouchableOpacity onPress={onGoBack} style={styles.backButton}>
              <Feather
                name="chevron-left"
                size={24}
                color={Colors.PRIMARY_TEXT}
              />
            </TouchableOpacity>
          )}

          <MyText
            text={headerTitle}
            category={headerTitleCategory}
            style={{color: headerTitleColor || Colors.PRIMARY_TEXT}}
          />

          <View style={styles.headerComponentRight}>
            {isValidElement(headerComponentRight) && headerComponentRight}
          </View>
        </View>
      )}

      <View
        style={[
          {height: '100%'},
          {
            paddingBottom: hasTabBar
              ? BOTTOM_INSETS_WITH_BOTTOM_TAB
              : insets.bottom,
          },
        ]}>
        {isValidElement(children) && children}
      </View>

      <View style={styles.footer}>{isValidElement(footerComponent) && footerComponent}</View>
    </BaseView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BORDER,
  },
  headerComponentRight: {
    position: 'absolute',
    right: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.WHITE,
  }
});
