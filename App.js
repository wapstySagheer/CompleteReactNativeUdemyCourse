import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import ListScreen from './src/screens/ListScreen'
import HowMuchILearn from './src/screens/HowMuchILearn'
import ContactUs from './src/screens/ContactUs'
import AboutScreen from './src/screens/AboutScreen'
import ImageScreen from './src/screens/ImageScreen'
import StateManagement from './src/screens/StateManagement'
import AddRandomColors from './src/screens/AddRandomColors'
import SquareScreen from './src/screens/SquareScreen'
import Revision from './src/screens/Revision'
import CustomButton from './src/component/CustomComponents/Button'
import { StyleSheet } from 'react-native'
import UseReducer from './src/screens/UseReducer'
import StyleScreen from './src/screens/StyleScreen'
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='List' component={ListScreen}/>
        <Stack.Screen name='HowILearn' component={HowMuchILearn}/>
        <Stack.Screen name='Contact' component={ContactUs}/>
        <Stack.Screen name='About' component={AboutScreen}/>
        <Stack.Screen name='Image' component={ImageScreen}/>
        <Stack.Screen name="State" component={StateManagement}/>
        <Stack.Screen name='AddColor' component={AddRandomColors}/>
        <Stack.Screen name='Square' component={SquareScreen}/>
        <Stack.Screen name='Revision' component={Revision} options={{
          headerRight : ()=>{
            return <CustomButton title="headerButton" bgColor={"rgb(100,10,100)"} />
          }
        }}
        />
        <Stack.Screen name='Reducer' component={UseReducer}/>
        <Stack.Screen name="StyleScreen" component={StyleScreen}/>
      </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  btn : {
    backgroundColor : '',
    fontSize : 40
  }
})