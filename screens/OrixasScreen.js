import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';

import { ORIXA } from '../data/dummy-data';

//renderizar os nomes dos orixás
const renderGridItem = (NameData) => {
    return <View style={styles.gridItem}>
        <Text>{NameData.item.name}</Text>
    </View>
};

const OrixasScreen = props => {
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={ORIXA}
            numColumns={2}
            renderItem={renderGridItem}

        />

    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1
    },
});
export default OrixasScreen;