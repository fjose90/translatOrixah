import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { ORIXA } from '../data/dummy-data';
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
                        routeName: 'Music',
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
            data={ORIXA}
            renderItem={renderGridItem}
            numColumns={3}
        />
    );
};

OrixasScreen.navigationOptions = {
    headerTitle: 'Orixás'
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default OrixasScreen;