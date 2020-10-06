import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: 'white'
    },
    bars: {
        height: '8%',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        alignSelf: 'center',
        marginVertical: 3
    },
    roe: {
        height: '8%',
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',        
        justifyContent: 'space-between',
        marginVertical: 3
    },
    bars1: {
        height: '100%',
        width: '48%',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        alignSelf: 'center',
    },
    bottom: {
        height: '7.5%',
        width: '90%',
        alignSelf: 'center',
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancel: {
        height: '100%',
        width: '48%',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nextStep: {
        height: '100%',
        width: '48%',
        backgroundColor: 'dodgerblue',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})