import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    one: {
        height: '70%',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    view1: {
        flexDirection: 'row',
        width: '85%',
        height: '80%',
        alignItems: 'center',
    },
    imagebg: {
        height: Dimensions.get('window').height*0.1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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
    back: {
        height: 30,
        width: 20,
        transform:[{rotate: '90deg'}]
    },
    card: {
        height: 50,
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
        top: 8
    },
    text: {
        fontSize: 20,
    },
    textb: {
        fontSize: 20,
        color: 'dodgerblue'
    },
    scroll: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    scrl: {
        height: '90%',
        width: '100%',
        alignSelf: 'center',
    },
    card4: {
        height: 450,
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    card41: {
        height: '95%',
        width: '90%',
    },
    remember: {
        height: 20,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        height: 15,
        width: 15,
    },
    email: {
        fontSize: 15,
        color: 'grey',
        marginHorizontal: 5
    },
    bottom: {
        height: 70,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        top: 35
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: 'dodgerblue',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    save: {
        fontSize: 15,
        color: 'white',
        marginHorizontal: 10
    },
    card5: {
        height: 360,
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    card51: {
        height: '90%',
        width: '90%',
    },
})