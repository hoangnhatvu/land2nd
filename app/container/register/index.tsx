import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormTextInput from '../../components/textInput';
import MyText, {TextVariant} from '../../components/base/BaseText';
import {Colors} from '../../utils';
// Using requires to bypass TypeScript declaration file errors
const AntDesign = require('react-native-vector-icons/AntDesign').default;
const Icon = require('react-native-vector-icons/MaterialCommunityIcons').default;
import {useNavigation} from '@react-navigation/native';

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Email không được để trống'),
  fullName: Yup.string().required('Họ tên không được để trống'),
  password: Yup.string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .required('Mật khẩu không được để trống'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Mật khẩu không khớp')
    .required('Xác nhận mật khẩu không được để trống'),
});

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (values: {
    email: string;
    fullName: string;
    password: string;
    confirmPassword: string;
  }) => {
    console.log('Register values:', values);
    // Implement your registration logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prev => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={20} color={Colors.PRIMARY_TEXT} />
        </TouchableOpacity>
        <MyText
          category={TextVariant.MAIN_TITLE}
          text="Đăng ký"
          style={styles.headerTitle}
        />
        <View style={styles.emptyRight} />
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            email: '',
            fullName: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={RegisterSchema}
          onSubmit={handleRegister}>
          {({handleSubmit}) => (
            <View style={styles.formContainer}>
              <FormTextInput
                name="email"
                label="Email"
                placeholder="test@gmail.com"
                keyboardType="email-address"
                autoCapitalize="none"
                containerStyle={styles.inputContainer}
              />

              <FormTextInput
                name="fullName"
                label="Họ và tên"
                placeholder="Nhập họ và tên của bạn"
                autoCapitalize="words"
                containerStyle={styles.inputContainer}
              />

              <FormTextInput
                name="password"
                label="Mật khẩu"
                placeholder="••••••••"
                secureTextEntry={!showPassword}
                containerStyle={styles.inputContainer}
                rightIcon={
                  <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Icon
                      name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                      size={20}
                      color={Colors.GRAY}
                    />
                  </TouchableOpacity>
                }
              />

              <FormTextInput
                name="confirmPassword"
                label="Nhập lại mật khẩu"
                placeholder="••••••••"
                secureTextEntry={!showConfirmPassword}
                containerStyle={styles.inputContainer}
                rightIcon={
                  <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                    <Icon
                      name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'}
                      size={20}
                      color={Colors.GRAY}
                    />
                  </TouchableOpacity>
                }
              />

              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => handleSubmit()}>
                <MyText
                  category={TextVariant.MEDIUM_TITLE}
                  text="Đăng ký"
                  style={styles.registerButtonText}
                />
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    textAlign: 'center',
    color: Colors.PRIMARY_TEXT,
    letterSpacing: 0.2,
  },
  emptyRight: {
    width: 36, // Match width of back button
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 24,
  },
  registerButton: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  registerButtonText: {
    color: Colors.WHITE,
  },
});

export default RegisterScreen;