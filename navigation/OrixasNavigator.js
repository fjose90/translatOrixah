
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from 'react-native';
import Colors from '../constants/Colors';

import OrixasScreen from '../screens/OrixasScreen';
import OrixaMusicsScreen from '../screens/OrixaMusicsScreen';
import MusicScreen from '../screens/MusicScreen';

const OrixasNavigator = createStackNavigator({
    Orixas: {
        screen: OrixasScreen,
    },

    OrixaMusics: {
        screen: OrixaMusicsScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.primaryColor
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : 'white'
        }
    },

    Music: {
        screen: MusicScreen,
    }

},
    {
        // initialRouteName: 'Categories',//configura tela inicial 
        //mode: 'modal',//para transição personalizada entre telas
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.primaryColor
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : 'white'
        }
    }


);

export default createAppContainer(OrixasNavigator);