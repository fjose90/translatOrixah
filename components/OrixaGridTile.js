import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const OrixaGridTile = (props) => {
    return (
        <TouchableOpacity style={{ flex: 1 }} onPress={props.onSelect}>
            <View
                style={{
                    ...styles.container,
                    ...{ backgroundColor: props.color },
                }}
            >
                <Text style={styles.Text} numberOfLines={2}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },

    title: {
        fontFamily: "open-sans-bold",
        fontSize: 15,
        textAlign: "right",
    },
});

export default OrixaGridTile;
