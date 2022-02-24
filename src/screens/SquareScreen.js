import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import Rgb from '../component/ColorCounter'
import setColor from '../../helper/randomColor'
import reducer from '../../helper/reducer'



const SquareScreen = () => {
    
  const [state , runMyReducer] = useReducer(reducer , {red : 0 , green : 0 , blue : 0})
  console.log(state);
  const {red , green , blue} = state;

  return (
    <View>
      <Text>SquareScreen</Text>
      <Rgb 
        title="Red" 
        onIncrease={()=> runMyReducer({type : 'red' , payload : 15})}
        onDecrease={()=> runMyReducer({type : 'red' , payload : -15})}/>
      <Rgb 
        title="Green" 
        onIncrease={()=> runMyReducer({type : 'green' , payload : 15})} 
        onDecrease={()=> runMyReducer({type : 'green' , payload : -15})}/>
      <Rgb 
        title="Blue" 
        onIncrease={()=> runMyReducer({type : 'blue' , payload : 15})} 
        onDecrease={()=> runMyReducer({type : 'blue' , payload : -15})} />
      <View style={{height: 150 , width : 150 , backgroundColor : `rgb(${red},${green} , ${blue})`}} decrease={()=> {if(blue >= 10) setBlue(blue - 10)}}/>
    </View>
  )
}

export default SquareScreen

const styles = StyleSheet.create({})