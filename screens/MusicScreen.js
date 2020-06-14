import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

const MusicScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> TELA DE MusicScreen</Text>
            <Button title="Ir para Tela Inicial" onPress={() => {
                //volta para a primeira tela da pilha
                props.navigation.popToTop();
                //props.navigation.replace para tela de login
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
export default MusicScreen;