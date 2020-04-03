import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home'
import Map from '../screens/map'

const screens = {
    Home: {
        screen: Home
    },
    Map: {
        screen: Map
    }
}

const HomeStack = createStackNavigator({screens})

export default createAppContainer(HomeStack);