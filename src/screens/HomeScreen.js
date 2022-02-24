import { View, Text, Button , Linking, StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'
import ButtonCustom from '../component/CustomComponents/Button'
import Footer from './Footer'

const HomeScreen = ({navigation}) => {
  return (
      <>
    <View>
        <Text>HomeScreen</Text>
        <Button 
        title="list Screen" 
        onPress={()=>{
            navigation.navigate('List')
        }}
        color="red"
        />
        <View style={styles.container}>
        <TouchableOpacity 
            style={styles.opacityNavigator} 
            onPress={()=> navigation.navigate('About')}>
            <Text style={styles.textNavigator}>About Screen</Text>
        </TouchableOpacity> 

        <Button style={{margin : 30}}
        onPress={()=> navigation.navigate('Image')}
        title="Image Screen"
        />
        </View>
        <Button
         onPress={()=> navigation.navigate('State')}
         title="State"
         />
         <ButtonCustom 
         onPress={ ()=> navigation.navigate('AddColor')}
         title="Add Color Screen and other things"
         bgColor="blue"
         />
         <Button 
         onPress={ ()=> navigation.navigate('Square')}
         title="Square Screen"
         />
        <Button title="how i learn Screen" onPress={()=> navigation.navigate('HowILearn')}/>
        <ButtonCustom title="I am here" bgColor="orange" onPress={() => navigation.navigate('Revision')}/>
        <ButtonCustom title="reducer Screen" bgColor="purple" onPress={()=> navigation.navigate('Reducer')}/>
        <ButtonCustom title="Style Screen" bgColor="black" onPress={()=> navigation.navigate('StyleScreen')}/>
    </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

    container : {
        display : 'flex', 
        // alignItems : 'center',
        justifyContent : 'center',
        // height : '80%'
    },
    opacityNavigator : {
        backgroundColor :"orange", 
        textAlign : 'center',
        height : 50,         
        marginTop : 20, 
        display : 'flex', 
        alignItems : 'center',
        justifyContent : 'center',
    },
    textNavigator : {
        fontSize:20 ,
        fontWeight : 'bold' ,
        color : 'white'
    }
})