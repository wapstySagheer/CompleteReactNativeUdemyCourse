import { StyleSheet, Text, TextInput, View , Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../component/CustomComponents/Button'
import { onChange } from 'react-native-reanimated';

const StateManagement = () => {
    const initialState = 0;
    const [name , setName] = useState('sagheer');
    const [counter , setCounter] = useState(initialState);
    useEffect(()=>{
      setName(name);
    })
  return (
    <View>
      <Text>StateManagement</Text>
      <Text>My name is : {name}</Text>
      <TextInput style={styles.textInput} onChangeText={(text)=> setName(text)} value={name}/>
    
    <View>
      <CustomButton title="Reset" bgColor="orange" onPress={initialState}/>
      <Button onPress={()=> {
          if(counter <= 50){setCounter(counter+5)}else{alert('limit cross! You are not allowed to incrase more!')}}} title="Increment" />
      <Button onPress={()=> setCounter(counter-1)} title="Decrement"/>
      <Text style={{fontSize:40 , textAlign : "center"}}>{counter}</Text>
    </View>
    
    </View>
  )
}

export default StateManagement

const styles = StyleSheet.create({
  textInput : {
    backgroundColor : 'violet',
    width : 300, 
    height : 50,
    color : 'white',
    fontSize : 30 ,
    textAlign : 'center'
  }
})