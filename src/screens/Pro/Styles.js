import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    v1: {
        height: Dimensions.get('window').height*0.3,
        width: '100%'
    },
    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },
    plus: {
        height: 55,
        width: 55,
        backgroundColor: 'dodgerblue',
        borderRadius: 27,
        alignSelf: 'flex-end',
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        top: 27
    },
    ave: {
        height: '5%',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    Apart: {
        height: '3%',
        width: '90%',
        alignSelf: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    follower: {
        flexDirection: 'row',
        height: '3%',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    stat: {
        height: '3%',
        width: '90%',
        alignItems: 'flex-end',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    exc: {
        height: '4%',
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    borders: {
        height: '100%',
        width: '30%',
        borderRadius: 5,
        flexDirection: 'row'
    },
    sec1: {
        height: '100%',
        width: '35%',
        backgroundColor: 'lightgreen',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sec2: {
        height: '100%',
        width: '65%',
        backgroundColor: 'skyblue',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    add: {
        height: '5%',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'flex-end'
    },
    loc: {
        height: '7%',
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    loc1: {
        height: '100%',
        width: '85%',
    },
    loc2: {
        height: '100%',
        width: '15%',
        alignItems: 'center'
    },
    loc11: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    loc12: {
        height: '50%',
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    mod1: {
        height: '10%',
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    mod2: {
        height: '20%',
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    scroll: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})