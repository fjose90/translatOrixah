import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const OrixasScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>TELA DE OrixasScreen</Text>
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