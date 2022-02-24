import { StyleSheet, Text, View , FlatList, Dimensions } from 'react-native'
import React from 'react'
import ImageDetails from '../component/ImageDetails';
import 'react-native-gesture-handler'

const ImageScreen = () => {
    const dataImage = [
        {
            imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScDZQz95kkZ9AMQCFsLvr3KwcY8Nf05pTmJn9mQnrgAixaYtzrefgYRT7qj9MSa67AsP8&usqp=CAU",
            imageName : "Forest"
        },
        {
            imageUrl : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            imageName : "Mountain"
        },
        {
            imageUrl : "https://cdn.wallpapersafari.com/80/9/cMJe2I.jpg",
            imageName : "Desert"
        },
        {
            imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScDZQz95kkZ9AMQCFsLvr3KwcY8Nf05pTmJn9mQnrgAixaYtzrefgYRT7qj9MSa67AsP8&usqp=CAU",
            imageName : "Forest"
        },
        {
            imageUrl : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            imageName : "Mountain"
        },
        {
            imageUrl : "https://cdn.wallpapersafari.com/80/9/cMJe2I.jpg",
            imageName : "Desert"
        },
    ]
  return (
    <View style={{height : '100%'}}>
        <FlatList style={{height : 400}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataImage} 
            renderItem={({item})=>{
               return <ImageDetails title={item.imageName} imageSource={item.imageUrl}/>
            }}
        />
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            data={dataImage} 
            renderItem={({item})=>{
               return <ImageDetails title={item.imageName} imageSource={item.imageUrl}/>
            }}
        />
    </View>
  )
}

export default ImageScreen;

const styles = StyleSheet.create({})