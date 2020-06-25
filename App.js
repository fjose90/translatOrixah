import React, { useState } from "react";
import { StyleSheet } from "react-native";
//importar screens melhora o procesamento nativo
import { enableScreens } from "react-native-screens";

//importar as fontes e dar um expo install expo-font
import * as Font from "expo-font";
import { AppLoading } from "expo";

enableScreens();

//importando a pilha de navigator
import OrixasNavigator from "./navigation/OrixasNavigator";

//adicionar função para buscar as fontes personalizadas
const fetchFonts = () => {
    return Font.loadAsync({
        "bsw-regular": require("./assets/fonts/BerkshireSwash-Regular.ttf"),
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);
    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
            />
        );
    }
    return <OrixasNavigator />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
