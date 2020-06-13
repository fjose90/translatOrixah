import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const MusicScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> TELA DE MusicScreen</Text>
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