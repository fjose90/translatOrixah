import React from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { ORIXAS } from '../data/dummy-data';
import OrixaGridTile from '../components/OrixaGridTile';



const OrixasScreen = props => {

    //renderizar os nomes dos orixás
    const renderGridItem = itemData => {
        return (
            <OrixaGridTile
                title={itemData.item.name}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'OrixaMusics',
                        params: {
                            orixaId: itemData.item.id
                        }
                    });
                }}
            />
        );
    };
    return (
        <FlatList
            data={ORIXAS}
            renderItem={renderGridItem}
            numColumns={3}
        />
    );
};

OrixasScreen.navigationOptions = {
    headerTitle: 'Orixás',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default OrixasScreen;