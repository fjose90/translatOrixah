import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const OrixaMusicsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> TELA DE OrixaMusicsScreen</Text>
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