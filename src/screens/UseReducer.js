import { StyleSheet, Text, View } from 'react-native'
import React , {useReducer} from 'react'
import Button from '../component/CustomComponents/Button';

const reducer = (initialState , action) =>{
    switch(action.type){
        case 'red' : 
        return {...initialState , red : initialState.red + action.amount};
        case 'green' : 
        return {...initialState , green : initialState.green + action.amount};
        case 'blue' : 
        return {...initialState , blue : initialState.blue + action.amount};
        default : return initialState;
    }
}

const UseReducer = () => {

    const [state , runMyReducer] = useReducer(reducer , {red : 0 , green : 100 , blue : 0});
    const {red , green , blue} = state;
    
  return (
    <View>
      <Text>UseReducer</Text>
      <Text style={{textAlign: 'center' , fontSize : 30 , fontWeight : 'bold'}}>{red}</Text>
      <Button title="red" bgColor="red" onPress={()=> runMyReducer({type : 'red' , amount : 15})}/>
      <Button title="red" bgColor="red" onPress={()=> runMyReducer({type : 'red' , amount : -15})}/>
      <Text style={{textAlign: 'center' , fontSize : 30 , fontWeight : 'bold'}}>{green}</Text>
      <Button title="green" bgColor="green" onPress={()=> runMyReducer({type : 'green' , amount : 15})}/>
      <Button title="green" bgColor="green" onPress={()=> runMyReducer({type : 'green' , amount : -15})}/>
      <Text style={{textAlign: 'center' , fontSize : 30 , fontWeight : 'bold'}}>{blue}</Text>
      <Button title="green" bgColor="blue" onPress={()=> runMyReducer({type : 'blue' , amount : 15})}/>
      <Button title="green" bgColor="blue" onPress={()=> runMyReducer({type : 'blue' , amount : -15})}/>
    </View>
  )
}

export default UseReducer

const styles = StyleSheet.create({})