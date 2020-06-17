import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from "react-native";
import ORIXAS from "../data/dummy-data";

const numColumns = 3;

const OrixasScreen = (props) => {
    const renderGrid = (itemData) => {
        return (
            <TouchableOpacity
                styles={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: "OrixaMusics",
                        params: {
                            OrixaId: itemData.item.id,
                        },
                    });
                }}
            >
                <View>
                    <Text>{itemData.item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <FlatList
            data={ORIXAS}
            keyExtractor={(item, index) => item.id}
            renderItem={renderGrid}
            numColumns={numColumns}
        />
    );
};

OrixasScreen.navigationOptions = {
    headerTitle: "Orixás",
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
});

export default OrixasScreen;
