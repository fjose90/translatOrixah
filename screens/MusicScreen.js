import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MUSICS } from "../data/dummy-data";
import Music from "../models/Music";
import { FlatList } from "react-native-gesture-handler";

const MusicScreen = (props) => {
    //pega os parametros da segunda tela
    const musicId = props.navigation.getParam("musicId");
    const musicCover = props.navigation.getParam("musicCover");
    const musicFile = props.navigation.getParam("musicFile");

    return (
        <View style={styles.screen}>
            <View>
                <Text>{musicCover}</Text>
                <Text>{musicFile}</Text>
            </View>
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
//responsavel pela navegação
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
