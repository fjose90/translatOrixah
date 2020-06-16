import React from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { ORIXAS } from '../data/dummy-data';
import OrixaGridTile from '../components/OrixaGridTile';

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};
const numColumns = 3;
const OrixasScreen = props => {

    //renderizar os nomes dos orixás
    const renderGridItem = itemData => {
        if (itemData.item.empty === true) {
            return (
                <OrixaGridTile style={{ backgroundColor: 'transparent' }}


                />
            );


        }

        return (
            <OrixaGridTile style={styles.itemInvisible}
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
            data={formatData(ORIXAS, numColumns)}
            renderItem={renderGridItem}
            numColumns={numColumns}
        />
    );
};

OrixasScreen.navigationOptions = {
    headerTitle: 'Orixás',

};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
});
export default OrixasScreen;