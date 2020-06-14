import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from 'react-native';

import OrixasScreen from '../screens/OrixasScreen';
import OrixaMusicsScreen from '../screens/OrixaMusicsScreen';
import MusicScreen from '../screens/MusicScreen';

const OrixasNavigator = createStackNavigator({
    Orixas: OrixasScreen,
    OrixaMusics: OrixaMusicsScreen,
    Music: {
        screen: MusicScreen,
    }


});

export default createAppContainer(OrixasNavigator);