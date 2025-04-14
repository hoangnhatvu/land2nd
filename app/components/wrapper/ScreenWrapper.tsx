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

interface ScreenWrapperProps {
  isShowBackButton?: boolean;
  children: ReactNode;
  headerTitle: string;
  headerTitleColor?: string;
  headerTitleCategory?: TextCategoryVariant;
  headerComponentRight?: ReactNode;
  footerComponent?: ReactNode;
  onGoBack?: () => void;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  isShowBackButton = true,
  children,
  headerTitle,
  headerTitleColor,
  headerTitleCategory = 'main.title',
  headerComponentRight,
  footerComponent,
  onGoBack,
}) => {
  return (
    <BaseView>
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

      <View style={styles.contentContainer}>
        {isValidElement(children) && children}
      </View>

      <View>{isValidElement(footerComponent) && footerComponent}</View>
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
    paddingVertical: 17.5,
    shadowColor: '#000',
    backgroundColor: Colors.WHITE,
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  headerComponentRight: {
    position: 'absolute',
    right: 20,
  },
  contentContainer: {
    flex: 1,
  },
});
