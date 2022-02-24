import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

const HowMuchILearn = ({navigation}) => {
  return (
    <View>
      <Text>HowMuchILearn</Text>
      <Button 
      onPress={()=> navigation.navigate('Home')}
      title="go to home screen" />
    </View>
  )
}

export default HowMuchILearn

const styles = StyleSheet.create({})