import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormTextInput, MyButton } from '../../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../../utils';

// Define validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values: { email: string; password: string }) => {
    setLoading(true);
    console.log('Form submitted with values:', values);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <View style={styles.formContainer}>
            <FormTextInput
              name="email"
              label="Email"
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              icon={<Icon name="email-outline" size={20} color={Colors.PRIMARY_TEXT} />}
            />
            
            <FormTextInput
              name="password"
              label="Password"
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              icon={<Icon name="lock-outline" size={20} color={Colors.PRIMARY_TEXT} />}
              rightIcon={
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Icon 
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'} 
                    size={20} 
                    color={Colors.GRAY} 
                  />
                </TouchableOpacity>
              }
            />
            
            {/* Fill Button Example */}
            <MyButton 
              title="Đăng nhập"
              onPress={() => handleSubmit()}
              disabled={false}
              loading={loading}
              containerStyle={styles.loginButton}
            />
            
            {/* Outline Button Example */}
            <MyButton 
              title="Đăng ký"
              type="outline"
              onPress={() => console.log('Register pressed')}
              containerStyle={styles.registerButton}
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  formContainer: {
    padding: 20,
  },
  loginButton: {
    marginTop: 20,
  },
  registerButton: {
    marginTop: 15,
  },
});

export default LoginForm;