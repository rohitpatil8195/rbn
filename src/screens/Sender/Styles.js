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
    header : {
        height: '10%',
        width: '90%',
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
    scroll: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    scrl: {
        height: 600,
        width: '100%',
        alignSelf: 'center',
    },
    para: {
        flexDirection: 'column'
    },
    imageView:{
        height: '25%',
        width: '40%',
        backgroundColor: 'yellow'
    },
    image1: {
        height: '75%',
        width: '100%',
    },
    back: {
        height: 30,
        width: 20,
        transform:[{rotate: '90deg'}]
    },
    card: {
        height: 730,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        alignItems: 'center'
    },  
    card21: {
        height: '90%',
        width: '90%',
    },
    card1: {
        height: 50,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        marginVertical: 5,
        justifyContent: 'center'
    },  
    sender: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20
    },
    button: {
        height: 50,
        width: '80%',
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
    safe: {
        flex: 1
    },  
    bottom: {
        height: 70,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    icon: {
        height: 20,
        width: 20,
    },
})