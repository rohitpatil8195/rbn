import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    imagebg: {
       flex: 1,
    },
    header : {
        height: 20,
        width: '90%', 
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    flag: {
        height: '100%',
        width: '10%',
    },
    flag1: {
        height: '100%',
        width: '100%'
    },
    back: {
        height: '60%',
        width: '5%',
    },
    back1: {
        height: '100%',
        width: '100%',
        transform:[{rotate: '90deg'}]
    },
    logobackground : {
        height: '8%',
        width: '45%',
        margin: 10,
        alignSelf: 'center',
    },
    scroll: {
        height: '100%',
        width: '100%',
    },
    logo : {
        height: '100%',
        width: '100%'
    },
    body: {
        flex: 2,
        backgroundColor: "white"
    },
    card: {
        height: 280,
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 30,
        alignItems: 'center'
    },
    signin: {
        fontSize: 30,
        margin: 15
    },
    b1:{
        height: 25,
        width: '90%',
    },
    email: {
        fontSize: 15,
        color: 'grey'
    },
    empty: {
        height: 20
    },
    empty1: {
        height: 10
    },
    bars: {
        height: 45,
        width: '90%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        marginVertical: 5
    },
    forgot1 : {
        height: 30,
        width: '90%',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },  
    forgot: {
        fontSize: 15,
        color: 'skyblue'
    },
    icon: {
        height: 15,
        width: 15,
        margin: 5
    },
    remember: {
        height: 40,
        width: '90%',
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    touch: {
        width: '90%', 
        alignSelf: 'center', 
        height: 45
    },
    singinbutton: {
        height: '100%',
        width: '100%',
        backgroundColor: 'dodgerblue',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    buttonicon: {
        height: 25,
        width: 25,
    },
    SIGNIN: {
        fontSize: 20,
        color: 'white',
        marginHorizontal: 10

    },
    line: {
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '90%', 
        alignSelf: 'center', 
        marginVertical: 15, 
        justifyContent: 'space-between'
    },
    line1: {
        backgroundColor: 'grey', 
        height: '2%', 
        width: '40%'
    },
    social: {
        height: '12%',
        width: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottom: {
        height: '7%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fg: {
        height: 40,
        width: 40
    },
    sheet: {
        position: "absolute",
        top: Dimensions.get("window").height,
        left: 0,
        right: 0,
        height: "100%",
        justifyContent: "flex-end",
      },
      popup: {
        backgroundColor: "#FFF",
        marginHorizontal: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        minHeight: 80,
      },
      blueBar: {
        height: '10%',
        width: '50%',
        backgroundColor: 'dodgerblue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15,
        bottom: 30
      },
      closeIcon:{
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center'
      },
      iconab: {
        height: 15,
        width: 15,
    },
    cover: {
        backgroundColor: "rgba(0,0,0,.5)",
      },
})