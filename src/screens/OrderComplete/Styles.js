import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    imagebg: {
        height: Dimensions.get('window').height*0.1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    one: {
        height: '70%',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    view1: {
        flexDirection: 'row',
        width: '85%',
        height: '80%',
        alignItems: 'center',
    },back: {
        height: 30,
        width: 20,
        transform:[{rotate: '90deg'}]
    },
    about: {
        fontSize: 20,
        color: 'black',
        marginHorizontal: 10
    },
    text1: {
        fontSize: 15,
        color: 'white',
    },
    view: {
        height: '85%',
        alignItems: 'center',
        paddingVertical: 100
    },
    card: {
        height: 300,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    circle: {
        height: 120,
        width: 120,
        backgroundColor: 'white',
        borderRadius: 60,
        bottom: 60,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirmation: {
        height: 70,
        width: 70
    },
    card1: {
        height: '75%',
        width: '90%',
        bottom: 60,
        alignItems: 'center'
    },
    card11: {
        height:'20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text2: {
        color: 'dodgerblue',
        fontSize: 20
    },
    container: {
        height: '15%',
        width: '70%',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    vtext:{
        height: '25%',
        width: '100%',
        marginVertical: 10,
    },
    buttons: {
        height: '25%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    booking: {
        height: '75%',
        width: '47%',
        backgroundColor: 'lightgrey',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Home: {
        height: '75%',
        width: '47%',
        backgroundColor: 'dodgerblue',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    }
})