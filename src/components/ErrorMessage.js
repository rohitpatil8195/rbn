import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const ErrorMessage = ({errorValue,errorStyle}) => (
    <View style={[errorStyle]} >
        <Text style={[styles.errorText]}>{errorValue}</Text>
    </View>
);

const styles = StyleSheet.create({
    errorStyle:{
        backgroundColor: 'yellow'
    },
    errorText: {
        color: 'red',
        marginLeft:'1%',
        fontSize:12
    }
});

export default ErrorMessage
