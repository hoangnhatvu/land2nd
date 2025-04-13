import { View, Text } from 'react-native'
import React from 'react'
import { ScreenWrapper } from '../../components'

const Notification = () => {
  return (
    <ScreenWrapper
      isShowBackButton={false}
      headerTitle='Thông báo'
    >
      <View style={{ flex: 1 }}>
        <Text>Notification</Text>
      </View>
    </ScreenWrapper>
  )
}

export default Notification