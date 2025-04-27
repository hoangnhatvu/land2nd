import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {FormTextInput, MyButton, ScreenWrapper} from '@components';
import {Colors} from '@utils';

const EditProfileSchema = Yup.object().shape({
  name: Yup.string().required('Họ tên không được để trống'),
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Email không được để trống'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{9,11}$/, 'Số điện thoại không hợp lệ')
    .required('Số điện thoại không được để trống'),
});

const EditProfile = () => {
  const navigation = useNavigation();

  const [userAvatar, setUserAvatar] = useState(
    'https://2handland.com/wp-content/uploads/2023/08/2handland-logo.png',
  );

  const onGoBack = () => {
    navigation.goBack();
  };

  const handleSubmit = (values: {
    name: string;
    email: string;
    phone: string;
  }) => {
    console.log('Submitted values:', values);
  };

  return (
    <ScreenWrapper headerTitle="Sửa thông tin cá nhân" onGoBack={onGoBack}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: userAvatar,
          }}
          style={styles.avatar}
        />
        <Formik
          initialValues={{
            name: 'Trịnh Trần Phương Tuấn',
            email: 'hiu@gmail.com',
            phone: '09xxx123xxx',
          }}
          validationSchema={EditProfileSchema}
          onSubmit={handleSubmit}>
          {({handleSubmit}) => (
            <View style={{}}>
              <View style={styles.infoContainer}>
                <FormTextInput
                  name="name"
                  label="Họ và tên"
                  placeholder="Nhập tên của bạn"
                  keyboardType="default"
                />
                <FormTextInput
                  name="email"
                  label="Email"
                  placeholder="Nhập email của bạn"
                  keyboardType="email-address"
                />
                <FormTextInput
                  name="phone"
                  label="Số điện thoại"
                  placeholder="Nhập số điện thoại của bạn"
                  keyboardType="phone-pad"
                />
              </View>
              <MyButton title="Cập nhật" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </ScreenWrapper>
  );
};
export default EditProfile;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingBottom: 70,
    gap: 15,
    backgroundColor: Colors.WHITE,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
  infoContainer: {
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
  },
});
