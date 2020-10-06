import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
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
        width: '50%',
        height: '80%',
        alignItems: 'center',
    },
    imagebg: {
        height: Dimensions.get('window').height * 0.1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        height: '10%',
        width: '90%',

    },
    filter: {
        height: 20,
        width: 20,

    },
    about: {
        fontSize: 20,
        color: 'black',
        marginHorizontal: 10
    },
    back: {
        height: 20,
        width: 20,
        transform: [{ rotate: '90deg' }]
    },
    logobackground: {
        height: '30%',
        width: '50%',
    },
    logo: {
        height: '100%',
        width: '100%'
    },
    card4: {
        height: 80,
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 10,
        justifyContent: 'center',
        marginVertical: 5
    },
    slotc: {
        height: '100%',
        width: '100%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    morehalf: {
        height: '60%',
        width: '70%',
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    half: {
        height: '100%',
        width: '44.1%'
    },
    send: {
        height: 15,
        width: 15,
        marginHorizontal: 5,
    },
    remain: {
        height: '90%',
        width: '39%',
        bottom: 5,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    charges: {
        height: '100%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line3: {
        backgroundColor: 'grey',
        height: '2%',
        width: '100%',
        top: 2,
    },
    small: {
        height: '100%',
        width: '46%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    morehalf1: {
        height: '25%',
        width: '70%',
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        height: 15,
        width: 15,
    },
    remain1: {
        height: '141%',
        width: '39%',
        bottom: 8,
        marginHorizontal: 16,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    space: {
        height: '80%',
        width: '80%',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card2c: {
        height: '100%',
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    card3: {
        height: '4%',
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    compo: {
        height: '100%',
        width: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    compo1: {
        height: '100%',
        width: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    compo2: {
        height: '100%',
        width: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    cover: {
        backgroundColor: "rgba(0,0,0,.5)",
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
        height: '8%',
        width: '50%',
        backgroundColor: 'dodgerblue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15,
        bottom: 30
    },
    closeIcon: {
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scroll: {
        height: 350,
        width: '100%',
        alignItems: 'center'
      },
      card: {
        height: "100%",
        width: '100%',
      },
      shipping: {
          height: '7%',
          width: '100%',
          backgroundColor: 'lightgrey',
          alignItems: 'center',
          justifyContent: 'center'
      },
      shipping1: {
        height: '100%',
        width: '90%',
    },
    shipping2: {
      height: '12%',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    shipc: {
        height: '40%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    shipc1: {
        height: '35%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    icon1: {
        height:15,
        width: 15
    },
    bottom: {
        height: '10%',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4
    },
    clear: {
        height: '100%',
        width: '100%',
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    
    },
    apply: {
        height: '100%',
        width: '100%',
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
})