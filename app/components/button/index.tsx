import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {Colors} from '../../utils';
import MyText from '../base/BaseText';

export type ButtonType = 'fill' | 'outline';

interface MyButtonProps {
  title: string;
  onPress: () => void;
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  width?: number | string;
}

const MyButton: React.FC<MyButtonProps> = ({
  title,
  onPress,
  type = 'fill',
  disabled = false,
  loading = false,
  containerStyle,
  textStyle,
  width = '100%',
}) => {
  const buttonStyles = [
    styles.button,
    {width: width as ViewStyle['width']},
    type === 'fill' ? styles.fillButton : styles.outlineButton,
    disabled &&
      (type === 'fill' ? styles.disabledFill : styles.disabledOutline),
    containerStyle,
  ];

  const textStyles = [
    type === 'fill' ? styles.fillText : styles.outlineText,
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={type === 'fill' ? Colors.WHITE : Colors.PRIMARY}
        />
      ) : (
        <MyText
          category='button.text'
          style={StyleSheet.flatten(textStyles)}
          text={title}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fillButton: {
    backgroundColor: Colors.PRIMARY,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
  fillText: {
    color: Colors.WHITE,
  },
  outlineText: {
    color: Colors.PRIMARY,
  },
  disabledFill: {
    backgroundColor: Colors.LIGHT_GRAY,
    borderColor: Colors.LIGHT_GRAY,
  },
  disabledOutline: {
    borderColor: Colors.LIGHT_GRAY,
  },
  disabledText: {
    color: Colors.GRAY,
  },
});

export default MyButton;
