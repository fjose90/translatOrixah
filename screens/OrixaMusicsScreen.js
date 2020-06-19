import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ORIXAS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const OrixaMusicsScreen = (props) => {
    const orixaId = props.navigation.getParam("orixaId");
    const selectedOrixa = ORIXAS.find((cat) => cat.id === orixaId);
    return (
        <FlatList>
            <Text> TELA DE OrixaMusicsScreen</Text>
            <Text>{selectedOrixa.name}</Text>
            <Button
                title="Ir para Musics"
                onPress={() => {
                    props.navigation.navigate({
                        routeName: "Music",
                    });
                }}
            />
            {/* //botao de voltar */}
            <Button
                title="Voltar"
                onPress={() => {
                    props.navigation.goBack();
                }}
            />
        </FlatList>
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
        //justifyContent: "center",
        //alignItems: "center",
    },
});
export default OrixaMusicsScreen;
