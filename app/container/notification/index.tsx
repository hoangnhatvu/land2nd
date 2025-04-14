import { View, Text, SectionList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScreenWrapper } from '../../components'
import { MyText } from '../../components';
import { images } from '../../../assets';
import { Colors } from '../../utils';

const notifications = [
  {
    "status": "order_placed",
    "orderCode": null,
    "message": "Cảm ơn Trịnh Trần Phương Tuấn đã đặt hàng tại 2ndLand",
    "time": "09:35",
    "isSeen": false
  },
  {
    "status": "delivered",
    "orderCode": "SO75389568",
    "message": "Đơn hàng SO75389568 đã được giao thành công!",
    "time": "09:35",
    "isSeen": false
  },
  {
    "status": "delivering",
    "orderCode": "SO75389568",
    "message": "Đơn hàng SO75389568 đang  được giao tới tay bạn!",
    "time": "09:00",
    "isSeen": true
  },
  {
    "status": "shipped",
    "orderCode": "SO75389568",
    "message": "Đơn hàng SO75389568 đã được đóng gói và giao cho đơn vị vận chuyển",
    "time": "08:00",
    "isSeen": true
  },
  {
    "status": "picking",
    "orderCode": "SO75389568",
    "message": "Người gửi đang lấy hàng cho đơn SO75389568",
    "time": "07:35",
    "isSeen": true
  }
]

const notificationIcons: any = {
  'order_placed': images.ic_love,
  'delivered': images.ic_delivered,
  'delivering': images.ic_delivering,
  'shipped': images.ic_shipped,
  'picking': images.ic_picking
}

const Notification = () => {
  const sections = processNotifications(notifications);

  const renderSectionHeader = ({ section }: any) => {
    return (
      <MyText
        category='main.title'
        text={section.title}
        style={styles.sectionHeader}
      />
    )
  }

  const renderItem = ({ item }: any) => {
    const { status, message, time, isSeen } = item;

    return (
      <TouchableOpacity style={[styles.item, {
        backgroundColor: !isSeen ? Colors.PRIMARY_CONTAINER : Colors.WHITE,
      }]}>
        <Image
          source={notificationIcons[status]}
          style={styles.itemIcon}
        />

        <View style={styles.itemContent}>
          <MyText
            category='content.text'
            text={message}
          />
          <MyText
            category='category.text'
            text={time}
            style={{ color: Colors.GRAY }}
          />
        </View>

        {!isSeen && <View style={styles.indicator} />}
      </TouchableOpacity>
    )
  }

  return (
    <ScreenWrapper
      isShowBackButton={false}
      headerTitle='Thông báo'
    >
      <SectionList
        sections={sections}

        keyExtractor={(item, index) => item.message + index}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={renderItem}
      />
    </ScreenWrapper>
  );
};

export default Notification

const styles = StyleSheet.create({
  sectionHeader: {
    marginLeft: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  itemIcon: {
    width: 32,
    height: 32
  },
  itemContent: {
    gap: 10,
    flex: 1
  },
  indicator: {
    width: 7,
    height: 7,
    borderRadius: 50,
    backgroundColor: Colors.PRIMARY,
  }
})


const processNotifications = (notifications: any[]) => {
  const newNotifications = notifications.filter(notification => !notification.isSeen);
  const seenNotifications = notifications.filter(notification => notification.isSeen);

  return [
    {
      title: 'Mới',
      data: newNotifications
    },
    {
      title: 'Đã xem',
      data: seenNotifications
    }
  ];
};