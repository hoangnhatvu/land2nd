import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  BottomSheet,
  FormTextInput,
  MyButton,
  MyText,
  ScreenWrapper,
  TextVariant,
} from '@components';
import {Colors} from '@utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

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
  const [isVisible, setIsVisible] = useState(false);

  const [userAvatar, setUserAvatar] = useState(
    'https://2handland.com/assets/general/image/2handland-logo.jpg',
  );

  const onGoBack = () => {
    navigation.goBack();
  };

  const onOpenImagePicker = () => {
    setIsVisible(true);
  };

  const onCloseImagePicker = () => {
    setIsVisible(false);
  };

  const handleImageOption = (option: 'library' | 'camera') => () => {
    setIsVisible(false);
    const launchFunction =
      option === 'library' ? launchImageLibrary : launchCamera;
    launchFunction({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        setUserAvatar(response.assets[0].uri ?? '');
      }
    });
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
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: userAvatar,
            }}
            style={styles.avatar}
          />
          <TouchableOpacity
            style={styles.avatarButton}
            onPress={onOpenImagePicker}>
            <Icon name="camera" size={24} color={Colors.WHITE} />
          </TouchableOpacity>
        </View>

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

        <BottomSheet
          height="20"
          isVisible={isVisible}
          onClose={onCloseImagePicker}>
          <View style={styles.bottomSheetContainer}>
            <TouchableOpacity
              style={styles.bottomSheetItem}
              onPress={handleImageOption('library')}>
              <Icon name="image" size={24} color={Colors.PRIMARY} />
              <MyText
                category={TextVariant.MEDIUM_TEXT}
                text="Chọn ảnh từ thư viện"
                style={styles.bottomSheetText}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomSheetItem}
              onPress={handleImageOption('camera')}>
              <Icon name="camera" size={24} color={Colors.PRIMARY} />
              <MyText
                category={TextVariant.MEDIUM_TEXT}
                text="Chụp ảnh"
                style={styles.bottomSheetText}
              />
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </ScrollView>
    </ScreenWrapper>
  );
};
export default EditProfile;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingBottom: 70,
    backgroundColor: Colors.WHITE,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  avatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.PRIMARY,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
  },
  bottomSheetContainer: {
    padding: 20,
  },
  bottomSheetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 10,
  },
  bottomSheetText: {
    color: Colors.PRIMARY,
  },
});
