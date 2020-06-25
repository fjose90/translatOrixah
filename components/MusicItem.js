import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const MusicItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onselectMusic}>
            <View style={styles.screen}>
                <Text style={styles.text}> {props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: { fontFamily: "bsw-regular" },
});
export default MusicItem;
