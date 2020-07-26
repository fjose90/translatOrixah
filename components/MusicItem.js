import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const MusicItem = (props) => {
    return (
        <View style={styles.musicPadding}>
            <TouchableOpacity onPress={props.onSelectMusic}>
                <View style={styles.musicItem}>
                    <View style={styles.musicRow}>
                        <Image
                            style={styles.imgAlbum}
                            source={require("../assets/img/albumMusic.png")}
                        ></Image>
                        <Text style={styles.text} numberOfLines={1}>
                            {props.title}
                        </Text>
                    </View>
                    <View />
                </View>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    musicPadding: { padding: 5 },
    musicItem: {
        height: 80, //dimension
        width: "100%",
        backgroundColor: "blue",
        borderRadius: 10,
        overflow: "hidden",
        padding: 10,
    },

    musicRow: {
        flexDirection: "row",
    },
    imgAlbum: {
        backgroundColor: "red",
        width: 46,
        height: 50,
    },
    musicHeader: {
        height: "85%",
    },
    musicDetail: {
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        height: "15%",
    },
    text: {
        fontFamily: "bsw-regular",
        fontSize: 30,
        textAlign: "right",
    },
});
export default MusicItem;
