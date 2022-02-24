import { View, Text, Button } from 'react-native'
import React from 'react'

const ContactUs = (props) => {
  return (
    <View>
      <Text>ContactUs</Text>
      <Button
      title="About US"
      onPress={()=> props.navigation.navigate('About')}
      />
    </View>
  )
}

export default ContactUs