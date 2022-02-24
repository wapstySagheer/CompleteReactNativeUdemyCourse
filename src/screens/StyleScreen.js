import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StyleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.childOne}>StyleScreen</Text>
      <Text style={styles.childTwo}>StyleScreen</Text>
      <Text style={styles.childThree}>StyleScreen</Text>
    </View>
  )
}

export default StyleScreen;

const styles = StyleSheet.create({
    container : {
        borderColor : 'black' , 
        borderWidth : 5 , 
        alignItems : 'center',
        height : 400
        
    }, 
    childOne : {
        // textAlign : 'center',
        flex : 4,
        marginVertical : 10,
        marginHorizontal : 10 , 
        paddingHorizontal : 10,
        paddingVertical : 10,
        borderColor : 'red' , 
        borderWidth : 3 ,

    },
    childTwo: {
        // textAlign : 'center',
        flex : 2,
        marginVertical : 10,
        marginHorizontal : 10 , 
        paddingHorizontal : 10,
        paddingVertical : 10,
        borderColor : 'red' , 
        borderWidth : 3
    },
    childThree : {
        // textAlign : 'center',
        flex : 4,
        marginVertical : 10,
        marginHorizontal : 10 , 
        paddingHorizontal : 10,
        paddingVertical : 10,
        borderColor : 'red' , 
        borderWidth : 3
    },
})