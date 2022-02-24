import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../component/CustomComponents/Button';

const Revision = ({navigation}) => {
    const [box , setBox] = useState([]);
  return (
    <View>
        <CustomButton title="Add New Random Color Box" bgColor="orange" onPress={()=> setBox([...box , randomColor()])} />
        <FlatList 
        data={box} 
        numColumns={2}
        renderItem={({item})=>{
            return <View style={{width: 200 , height : 200 , backgroundColor : item}}/>
        }}/>
    </View>
  )
}

export default Revision

const randomColor = ()=> {
    const red = Math.random() * 256;
    const green = Math.random() * 256;
    const blue = Math.random() * 256;
    return `rgb(${red} , ${green} , ${blue})`;
}

const styles = StyleSheet.create({
})