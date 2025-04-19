import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MyText, FormTextInput } from '../../../../components';
import { Colors } from '../../../../utils';
import { TextVariant } from '../../../../components/base/BaseText';

// Define validation schema
const DeliverySchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^[0-9]{9,11}$/, 'Số điện thoại không hợp lệ')
    .required('Số điện thoại không được để trống'),
  fullName: Yup.string().required('Họ và tên không được để trống'),
  province: Yup.string().required('Tỉnh/Thành phố không được để trống'),
  district: Yup.string().required('Quận/Huyện không được để trống'),
  ward: Yup.string().required('Phường/Xã không được để trống'),
  address: Yup.string(),
});

const DeliveryForm = () => {
  const handleSubmit = (values: {
    phoneNumber: string;
    fullName: string;
    province: string;
    district: string;
    ward: string;
    address: string;
  }) => {
    console.log('Form submitted with values:', values);
  };

  return (
    <Formik
      initialValues={{
        phoneNumber: '093348243',
        fullName: 'Hoàng Nhất Vũ',
        province: 'Dak Lak',
        district: 'Krong Nang',
        ward: 'Eatoh',
        address: '12 Võ Thị Sáu',
      }}
      validationSchema={DeliverySchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <View style={styles.formContainer}>
          {/* Contact Information Section */}
          <MyText
            category={TextVariant.MEDIUM_TITLE}
            text="Thông tin liên hệ"
            style={styles.sectionTitle}
          />

          <FormTextInput
            name="phoneNumber"
            label="Số điện thoại (*)"
            placeholder="Nhập số điện thoại của bạn"
            keyboardType="phone-pad"
            containerStyle={styles.inputContainer}
          />

          <FormTextInput
            name="fullName"
            label="Họ và tên (*)"
            placeholder="Nhập họ và tên của bạn"
            autoCapitalize="words"
            containerStyle={styles.inputContainer}
          />

          {/* Address Information Section */}
          <MyText
            category={TextVariant.MEDIUM_TITLE}
            text="Địa chỉ"
            style={styles.sectionTitle}
          />

          <FormTextInput
            name="province"
            label="Tỉnh/ Thành phố (*)"
            placeholder="Chọn Tỉnh/ Thành phố"
            containerStyle={styles.inputContainer}
          />

          <FormTextInput
            name="district"
            label="Quận/ Huyện (*)"
            placeholder="Chọn Quận/ Huyện"
            containerStyle={styles.inputContainer}
          />

          <FormTextInput
            name="ward"
            label="Phường/ Xã (*)"
            placeholder="Chọn Phường/ Xã"
            containerStyle={styles.inputContainer}
          />

          <FormTextInput
            name="address"
            label="Địa chỉ cụ thể"
            placeholder="Nhập địa chỉ cụ thể của bạn"
            containerStyle={styles.inputContainer}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    width: '100%',
  },
  sectionTitle: {
    color: Colors.PRIMARY_TEXT || '#0C1A30',
    fontSize: 16,
    marginBottom: 16,
    marginTop: 8,
  },
  inputContainer: {
    marginBottom: 16,
  },
});

export default DeliveryForm;