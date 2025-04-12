import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  KeyboardTypeOptions,
} from 'react-native';
import {useField} from 'formik';
import {Colors} from '../../utils';
import MyText from '../base/BaseText';
import {FONT_FAMILY_REGULAR} from '../../utils/styles/typography';

interface FormTextInputProps {
  name: string;
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  errorTextStyle?: TextStyle;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}

const FormTextInput: React.FC<FormTextInputProps> = ({
  name,
  label,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  containerStyle,
  labelStyle,
  inputStyle,
  errorTextStyle,
  onBlur: customOnBlur,
  onFocus,
  icon,
  rightIcon,
  disabled = false,
}) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (text: string) => {
    helpers.setValue(text);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    field.onBlur(name);
    if (customOnBlur) {
      customOnBlur(e);
    }
  };

  const hasError = meta.touched && meta.error;

  return (
    <View style={[styles.container, containerStyle]}>
      <MyText
        category="sub.title"
        text={label}
        style={StyleSheet.flatten([
          {color: Colors.PRIMARY_TEXT, marginBottom: 16},
          labelStyle,
        ])}
      />
      <View
        style={[
          styles.inputContainer,
          hasError ? styles.inputContainerError : undefined,
          disabled && styles.disabledInput,
        ]}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput
          value={field.value}
          onChangeText={handleChange}
          onBlur={handleBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          placeholderTextColor={Colors.PLACEHOLDER_TEXT}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          style={[
            styles.input,
            icon ? styles.inputWithIcon : undefined,
            inputStyle,
          ].filter(Boolean)}
          editable={!disabled}
        />
        {rightIcon && (
          <View style={styles.rightIconContainer}>{rightIcon}</View>
        )}
      </View>
      {hasError && (
        <MyText
          category="small.title"
          text={meta.error}
          style={StyleSheet.flatten([
            {color: Colors.RED_HIGH_LIGHT, marginTop: 8},
            errorTextStyle,
          ])}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  inputContainerError: {
    borderWidth: 1,
    borderColor: Colors.RED_HIGH_LIGHT,
  },
  input: {
    flex: 1,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.PRIMARY_TEXT,
    padding: 0,
  },
  inputWithIcon: {
    marginLeft: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  rightIconContainer: {
    marginLeft: 10,
  },
  errorText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
    color: Colors.RED_HIGH_LIGHT,
    marginTop: 4,
  },
  disabledInput: {
    opacity: 0.5,
  },
});

export default FormTextInput;
