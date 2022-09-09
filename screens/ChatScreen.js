import { Button ,View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';

const ChatScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text>ChatScreen</Text>
      <Button 
        title="Go to HomeScreen" 
        onPress={ () => navigation.navigate("Home")}
      />
    </View>
  )
}

export default ChatScreen