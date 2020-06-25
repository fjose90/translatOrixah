import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
    Platform,
} from "react-native";

const OrixaGridTile = (props) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
            <View
                style={{
                    ...styles.container,
                    ...{ backgroundColor: props.color },
                }}
            >
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableCmp>
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
        justifyContent: "flex-start",
        alignItems: "center",
    },

    title: {
        fontFamily: "bsw-regular",
        fontSize: 14,
    },
});

export default OrixaGridTile;
