import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ORIXAS, MUSICS } from "../data/dummy-data";
import MusicItem from "../components/MusicItem";
import Colors from "../constants/Colors";

const OrixaMusicsScreen = (props) => {
    const orixaId = props.navigation.getParam("orixaId");

    const renderMusicItem = (itemData) => {
        return (
            <MusicItem title={itemData.item.title} onSelectMusic={() => {}} />
        );
    };

    const displayedMusic = MUSICS.filter(
        (music) => music.orixaIds.indexOf(orixaId) >= 0
    );

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMusic}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMusicItem}
                style={{ width: "100%" }}
            ></FlatList>
        </View>
    );
};

//para passar os parametros para segunda tela
OrixaMusicsScreen.navigationOptions = (navigationData) => {
    const orixaId = navigationData.navigation.getParam("orixaId");
    const selectedOrixa = ORIXAS.find((cat) => cat.id === orixaId);
    return {
        headerTitle: selectedOrixa.name,
        headerStyle: {
            backgroundColor:
                Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
    };
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
});
export default OrixaMusicsScreen;
