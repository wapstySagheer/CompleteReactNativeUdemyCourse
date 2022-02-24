import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ImageDetails = ({title , imageSource}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{uri: imageSource}}/>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ImageDetails

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        margin : 10,
    },
    image : {
        width : 200,
        height : 200,
        borderRadius : 20
    },
    text : {
        fontSize : 25,
        color : 'black'
    }
})