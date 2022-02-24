import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Button = ({title , onPress , bgColor}) => {
    const [widths , setWidth] = useState(0);
   useEffect(()=>{
    setWidth(title.length*11);
   },[])
    console.log(widths) 
  return (
    <View style={{width : '100%' , alignItems : 'center' , marginVertical : 20}}>
        <Pressable style={{
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : `${bgColor}`,
            // width : widths,
            height: 50,
            paddingHorizontal : 20,
            borderRadius : 10,
        }} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    </View>
  )
}

export default Button
const styles = StyleSheet.create({
    text : {
        fontSize : 18 , 
        fontWeight : 'bold',
        color : 'white',
    }
})