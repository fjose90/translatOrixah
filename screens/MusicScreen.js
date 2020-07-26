import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MUSICS } from "../data/dummy-data";

const MusicScreen = (props) => {
    const MusicId = props.navigation.getParam("file");

    return (
        <View style={styles.screen}>
            <Text> TELA DE MusicScreen</Text>
            <Text> {MusicId}</Text>

            <Button
                title="Ir para Tela Inicial"
                onPress={() => {
                    //volta para a primeira tela da pilha
                    props.navigation.popToTop();
                    //props.navigation.replace para tela de login
                }}
            />
        </View>
    );
};

MusicScreen.navigationOptions = (navigationData) => {
    const musicId = navigationData.navigation.getParam("musicId");
    const selectedMusic = MUSICS.find((mus) => mus.id === musicId);
    return {
        headerTitle: selectedMusic.name,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default MusicScreen;
