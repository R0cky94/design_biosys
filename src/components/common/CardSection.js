import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardSection = (props) => {
    return(
        <View style={styles.containerStyles}>
            {props.children}
        </View>
    );
};
const styles =StyleSheet.create({
   containerStyles: {
       borderBottomWidth: 1,
       padding: 5,
       backgroundColor:'#b7cbff',
       justifyContent: 'flex-start',
       flexDirection: 'row',
       borderColor:'#ddd',
       position: 'relative'
   }
});
export {CardSection};