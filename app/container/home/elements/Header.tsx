import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Colors, Mixins} from '../../../utils';
import {MyText} from '../../../components';

interface HeaderProps {
  onNotificationPress?: () => void;
  onCartPress?: () => void;
  notificationCount?: number;
  cartCount?: number;
}

const Header: React.FC<HeaderProps> = ({
  onNotificationPress,
  onCartPress,
  notificationCount = 0,
  cartCount = 0,
}) => {
  return (
    <View style={styles.container}>
      <MyText
        category="medium.title"
        style={{
          color: Colors.PRIMARY,
        }}
        text={'2handLand'}
      />
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onNotificationPress}>
          <Image
            source={{uri: 'ic_notification'}}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
          {notificationCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {notificationCount > 9 ? '9+' : notificationCount}
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={onCartPress}>
          <Image
            source={{uri: 'ic_cart'}}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
          {cartCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {cartCount > 9 ? '9+' : cartCount}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.BORDER,
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: Colors.WHITE,
  },
  iconContainer: {
    position: 'absolute',
    right: 16,
    top: 18,
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: Colors.RED_HIGH_LIGHT,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: Colors.WHITE,
    fontSize: 10,
    fontWeight: '500',
  },
});

export default Header;
