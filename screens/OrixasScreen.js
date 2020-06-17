import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import { ORIXAS } from "../data/dummy-data";

const numColumns = 3;

const OrixasScreen = (props) => {
    const renderItem = (itemData) => {
        if (itemData.item.empty) {
            return <View style={[styles.gridItem, styles.itemEmpty]} />;
        }

        return (
            <TouchableOpacity
                style={styles.gridItem}
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
    //cria itens ocultos para que o último elemento não ocupe toda a largura
    const createRows = (data, numColumns) => {
        const rows = Math.floor(data.length / numColumns);
        let lastRowElements = data.length - rows * numColumns;
        while (lastRowElements !== numColumns && lastRowElements !== 0) {
            data.push({
                id: `empty-${lastRowElements}`,
                name: `empty-${lastRowElements}`,
                empty: true,
            });
            lastRowElements++;
        }
        return data;
    };

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={createRows(ORIXAS, numColumns)}
            renderItem={renderItem}
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
        margin: 10,
        height: Dimensions.get("window").width / numColumns,
        backgroundColor: Colors.secundaryColor,
    },
    itemEmpty: {
        backgroundColor: "transparent",
    },
});

export default OrixasScreen;
