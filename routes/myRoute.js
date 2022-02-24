import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import AboutScreen from '../src/screens/AboutScreen';
import ContactUs from '../src/screens/ContactUs';


const screenNAvigator = createStackNavigator(
    {
        About : AboutScreen,
        Contact : ContactUs
    },
    {
        initialRouteName : 'About',
        defaultNavigationOptions : {
            headerTitleAlign : "center",
            animationEnabled : true,
    }
}
)

export default createAppContainer(screenNAvigator);