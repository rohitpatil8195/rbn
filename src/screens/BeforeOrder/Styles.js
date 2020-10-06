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
    back: {
        height: 30,
        width: 20,
        transform:[{rotate: '90deg'}]
    },
    bottom: {
        height: 70,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
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
    icon: {
        height: 15,
        width: 15,
    },
    save: {
        fontSize: 15,
        color: 'white',
        marginHorizontal: 10
    },
    card1: {
        height: 50,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        marginVertical: 5,
        justifyContent: 'center',
    },
    card2: {
        height: 80,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    invoice: {
        height: '90%',
        width: '90%',
    },    
    sr: {
        height:'40%',
        width: '85%',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },  
    send: {
        height:'100%',
        width: '40%',
        flexDirection: 'row'
    }, 
    icon1: {
        height: 15,
        width: 15,
    },
    compo: {
        height: '100%',
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    reci: {
        height:'100%',
        width: '40%',
        flexDirection: 'row'
    },
    sender: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20
    },
    card4: {
        height: 180,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Home: {
        height: '90%',
        width: '90%',
        
    },
    Home1 : {
        height: '45%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    Home2 : {
        height: '45%',
        width: '100%',
    },
})