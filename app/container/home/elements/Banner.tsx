import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Colors} from '../../../utils';
import {MyText} from '../../../components';

interface BannerProps {
  title: string;
  subtitle?: string;
  imageUrl: any; // In a real app, this could be a string URL or a require statement
  backgroundColor?: string;
  onPress?: () => void;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  imageUrl,
  backgroundColor = Colors.SECONDARY,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        source={imageUrl}
        style={styles.background}
        imageStyle={styles.imageStyle}>
        <View style={[styles.overlay, {backgroundColor}]}>
          <View style={styles.content}>
            <MyText
              category="large.text"
              style={{color: Colors.WHITE}}
              text={title}
            />
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 10,
    overflow: 'hidden',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '50%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  content: {
    padding: 16,
    justifyContent: 'center',
    height: '100%',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    fontWeight: '400',
    color: Colors.WHITE,
  },
});

export default Banner;
