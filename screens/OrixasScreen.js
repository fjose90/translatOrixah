import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
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
            <View style={styles.gridItem}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate({
                            routeName: "OrixaMusics",
                            params: {
                                OrixaId: itemData.item.id,
                            },
                        });
                    }}
                >
                    <View style={styles.container}>
                        <Text style={styles.text} numberOfLines={2}>
                            {itemData.item.name}
                        </Text>
                    </View>
                </TouchableOpacity>
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
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "blue",
    },
    container: {
        flex: 1,

        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
        padding: 15,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    itemEmpty: {
        backgroundColor: "transparent",
    },
    text: {
        fontFamily: "open-sans-bold",
        fontSize: 12,
        textAlign: "right",
    },
});

export default OrixasScreen;
