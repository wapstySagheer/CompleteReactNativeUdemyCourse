import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Rgb = ({title , onIncrease , onDecrease}) => {
  return (
    <View>
        <Text style={styles.boxText}>{title}</Text>
        <Button 
         onPress={onIncrease}
         title="Increate Color"
        />
        <Button 
        onPress={onDecrease}
        title="Decrease Color"/>
    </View>
  )
}

export default Rgb

const styles = StyleSheet.create({
    boxText : {
        backgroundColor : "orange",
        width : 80 , 
        height : 80,
        textAlign : 'center',
        paddingTop: 25,
        fontSize : 20,
        fontWeight : 'bold'
    }
})