import { View, Text, Button } from 'react-native'
import React from 'react'

const AboutScreen = (props) => {
  return (
    <View>
      <Text>AboutScreen</Text>
      <Button 
      onPress={()=> props.navigation.navigate('Contact')} 
      title="Contact Us"/>
      <Button
      title="Home Screen" onPress={()=> props.navigation.navigate('Home')}
      />
    </View>
  )
}

export default AboutScreen