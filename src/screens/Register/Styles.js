import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    imagebg: {
       flex: 1,
        alignItems: 'center',
    },
    header : {
        height: 20,
        width: '90%', 
        justifyContent: 'space-between',
        marginVertical: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    flag: {
        height: '100%',
        width: '10%'
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
        height: '4.5%',
        width: '50%',
        margin: 20,
        alignSelf: 'center'
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
        height: '81%',
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 20,
        elevation: 10,
        alignItems: 'center'
    },
    err: {
        color: 'red',
        fontSize: 12
    },
    signin: {
        fontSize: 30,
        margin: 10
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
    bars: {
        height: '4.5%',
        width: '90%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
    },
    scroll: {
        width: '100%'
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
        height: 30,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    terms: {
        height: 30,
        width: '90%',
        marginBottom: 10,
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
        justifyContent: 'center'
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
        height: '3%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    fg: {
        height: 40,
        width: 40
    },
    tele: {
        height: '4.5%',
        width: '90%',
        borderColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bars1: {
        height: '100%',
        width: '33%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey'
    },
    bars2: {
        height: '100%',
        width: '65%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey'
    },
    centeredView: {
        flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        height: '50%', 
        width: '85%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        elevation: 5
      },
      key: {
          height: '30%',
          width: '30%',
          marginVertical: 30,
      },
      text: {
          height: '30%',
          width: '55%',
          alignItems: 'center',
      },
      done: {
          height: '15%',
          width: '80%',
          backgroundColor: 'dodgerblue',
          justifyContent: 'center',
          alignItems: 'center'
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