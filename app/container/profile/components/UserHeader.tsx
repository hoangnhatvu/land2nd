import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {MyText, TextVariant} from '@components';

interface UserHeaderProps {
  userAvatar?: string;
  userName?: string;
  userPhone?: string;
}

const UserHeader = ({
  userAvatar = 'https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/1/20/ngan-ngam-thay-ca-si-jack-j97-72912.jpg?width=0&s=ER3DsZM0IogAHY5-stcutw',
  userName = 'Trịnh Trần Phương Tuấn',
  userPhone = '039289918',
}: UserHeaderProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: userAvatar,
        }}
        style={styles.avatar}
      />

      <View style={styles.infoContainer}>
        <MyText
          category={TextVariant.BUTTON_TEXT}
          text={userName}
          style={styles.name}
        />
        <MyText
          category={TextVariant.CONTENT_TEXT}
          text={userPhone}
          style={styles.phoneNumber}
        />
      </View>
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  infoContainer: {
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
  },
  name: {
    fontWeight: '500',
  },
  phoneNumber: {
    color: '#06070C',
    letterSpacing: 0.2,
  },
});
