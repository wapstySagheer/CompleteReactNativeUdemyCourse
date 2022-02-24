import React from "react";
import {View , Text , StyleSheet , FlatList, Dimensions , Button} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
const ListScreen = ({navigation }) =>{
    const familyBioData = [
        {name: "ameer syed" , age: 75},
        {name: "jamila syed" , age: 55},
        {name: "rabia syed" , age: 38},
        {name: "abdul wajid syed" , age: 36},
        {name: "arfa syed" , age: 34},
        {name: "muzlifa syed" , age: 32},
        {name: "bashar syed" , age: 30},
        {name: "sajra syed" , age: 28},
        {name: "hajra syed" , age: 26},
        {name: "sagheer syed" , age : 24}
    ]
    return(
        <View style={{height : '100%'}}>
        <FlatList 
        style={styles.card}
        data={familyBioData}
        renderItem={({item})=>{
            return <View style={styles.container}>
                <Text style={styles.text}>{item.name} - Age {item.age}</Text>
            </View>
        }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text>Click on ME</Text>
        </TouchableOpacity>

        <Button 
        onPress={()=> navigation.goBack()}
        title="Go Back"
        />
        </View>
    )

}

const styles = StyleSheet.create({
    card : {
        width: Dimensions.get('window').width,
        backgroundColor : 'green'
    },
    container : {
        // width: Dimensions.get('window').width,
        // height: 100,
        display:'flex',
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor:'orange',
        margin : 40,
    },
    text : {
        color: 'white',
        fontSize: 40
    },
})

export default ListScreen;