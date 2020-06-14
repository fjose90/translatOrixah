import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

const OrixaMusicsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> TELA DE OrixaMusicsScreen</Text>
            <Button
                title="Ir para Musics"
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'Music'
                    });
                }} />
            {/* //botao de voltar */}
            <Button title="Voltar" onPress={() => {
                props.navigation.goBack();
            }} />
        </View>);
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
export default OrixaMusicsScreen;