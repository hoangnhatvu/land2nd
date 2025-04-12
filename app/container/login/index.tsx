import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from './element/LoginForm';
import BaseView from '../../components/base/BaseView';

const Login = () => {
  return (
    <BaseView style={styles.container}>
      <LoginForm />
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Login;