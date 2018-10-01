import React from 'react';
import {View,StyleSheet} from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyles}>
            {props.children}
        </View>
    );
};
const styles  = StyleSheet.create({
   containerStyles:{
       borderWidth: 1,
       borderRadius:2,
       borderColor:'#6274dd',
       borderBottomWidth: 0,
       shadowColor: '#000',
       shadowOffset: {width:0, height:20},
       shadowOpacity: 0.8,
       shadowRadius: 2,
       elevation: 1,
       marginTop: 60,
       marginLeft: 5,
       marginRight: 5.

   }
});
export {Card};