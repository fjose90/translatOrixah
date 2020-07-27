import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { ORIXAS } from "../data/dummy-data";
import OrixaGridTile from "../components/OrixaGridTile";

const numColumns = 3;

const OrixasScreen = (props) => {
    const renderItem = (itemData) => {
        if (itemData.item.empty) {
            return <View style={[styles.gridItem, styles.itemEmpty]} />;
        }

        return (
            <View style={styles.gridItem}>
                <OrixaGridTile
                    color={itemData.item.color}
                    title={itemData.item.name}
                    onSelect={() => {
                        props.navigation.navigate({
                            routeName: "OrixaMusics",
                            params: {
                                orixaId: itemData.item.id,
                            },
                        });
                    }}
                />
            </View>
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
            //style={styles.container}
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
        margin: 8,
        height: 150, //Dimensions.get("window").width / numColumns,
        borderRadius: 10,
        overflow: "hidden",
    },
    itemEmpty: {
        backgroundColor: "transparent",
    },
});

export default OrixasScreen;
