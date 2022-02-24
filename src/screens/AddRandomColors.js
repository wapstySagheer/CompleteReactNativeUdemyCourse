import { View, Text, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

const AddRandomColors = () => {
    const [colors , setColors] = useState([]);
    console.log(colors);
  return (
    <View>
      <Text>AddRandomColors</Text>
      <Button title="add color" onPress={()=> setColors([...colors, randomRgb()]) }/>
        <FlatList horizontal
        data={colors} renderItem={({item})=>{
            return <View style={{height : 100 , width : 100 , backgroundColor : item}}/>
        }}
        />
    </View>
  )
}

const randomRgb = () => {
    const red = Math.random() * 256;
    const green = Math.random() * 256;
    const blue = Math.random() * 256;

    return `rgb(${red} , ${green} , ${blue})`;
}

export default AddRandomColors