import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

const OrixasScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>TELA DE OrixasScreen</Text>
            <Button title="Ir para Orixas Musics" />
        </View>);
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
export default OrixasScreen;