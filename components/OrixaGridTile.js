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
                    style={{
                        ...styles.image,
                        ...{ backgroundColor: props.color },
                    }}
                    source={require("../assets/img/backOrixaMold.png")}
                    resizeMode="contain"
                >
                    <Text style={styles.title} numberOfLines={2}>
                        {props.title}
                    </Text>
                </ImageBackground>
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
        shadowRadius: 5,
        elevation: 3,
        padding: 5,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },

    title: {
        fontFamily: "bsw-regular",
        fontSize: 25,
        textAlign: "center",
    },
    image: {
        width: "100%",
        height: "100%",

        //overflow: "hidden",
    },
});

export default OrixaGridTile;
