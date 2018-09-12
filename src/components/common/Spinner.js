import React from 'react';
import {View,ActivityIndicator,StyleSheet} from 'react-native';

const Spinner = () => {
    return(
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={'large'}/>
        </View>
    )

};
const styles=StyleSheet.create({
    spinnerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});
export {Spinner};