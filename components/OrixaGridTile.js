import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
    Platform,
    ImageBackground,
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
                }}
            >
                <ImageBackground
                    style={styles.image}
                    source={require("../assets/img/backOrixa.png")}
                    resizeMode="cover"
                />
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

        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "hidden",
    },

    title: {
        fontFamily: "bsw-regular",
        fontSize: 14,
    },
    image: {
        width: "100%",
        height: "100%",
    },
});

export default OrixaGridTile;
