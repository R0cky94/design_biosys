import React from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';

const Input = ({label,onChangeText,value,placeHolder,secureTextEntry}) => {
    const {inputStyle,labelStyle,containerStyle}= styles;

        return (
            <View style={containerStyle}>
                <Text style={labelStyle}>{label}</Text>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeHolder}
                    autoCorrect={false}
                    style={inputStyle}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
        );
};
const styles =StyleSheet.create({
   inputStyle:{
       color:'#000',
       paddingLeft: 5,
       paddingRight: 5,
       fontSize:18,
       flex: 2,
   },
   labelStyle:{
       fontSize: 18,
       paddingLeft: 20,
       flex: 1,
       color: '#000'
   },
   containerStyle:{
       height: 40,
       flex:1,
       alignItems:'center',
       flexDirection: 'row'
   }
});

export {Input} ;