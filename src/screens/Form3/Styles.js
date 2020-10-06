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
        height: '100%',
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
    belowgoods: {
        height: '30%',
        width: '90%',
        backgroundColor: 'yellow',
        alignItems: 'center',
    },
    lastbottom: {
        height: '25%',
        width: '90%',
        backgroundColor: 'red'
    },
    down: {
        height: 30,
        width: 20,
        marginHorizontal: 10
    },
    downup: {
        height: 30,
        width: 20,
        transform:[{rotate: '180deg'}],
        marginHorizontal: 10
    },
    card: {
        height: 180,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
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
    card31: {
        height: 50,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card32: {
        height: 800,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center',
    },
    cardv5: {
        height: 170,
        width: '90%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardv51:{
        height: '90%',
        width: '95%',
    },
    cardv511: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardv5111: {
        height: '100%',
        width: '65%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    goods: {
        height: '5%',
        width: '90%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    upload: {
        height: '25%',
        width: '90%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        bottom: 20
    },  
    plus: {
        height: '3%',
        width: '90%',
        bottom: 100,
        alignItems: 'flex-end'
    }, 
    plus1: {
        height: '100%',
        width: '10%',
        top: 60
    } ,
    ship: {
        height: '5%',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },  
    v1: {
        height: '100%',
        width: '50%',
        justifyContent: 'center'
    },
    v2: {
        height: '100%',
        width: '45%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    v21: {
        height: '100%',
        width: '40%',
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    v22: {
        height: '100%',
        width: '50%',
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    check1: {
        height: '4%',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
    },
    check2: {
        height: '6%',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    cardv2: {
        height: '90%',
        width: '90%',
        margin: 5,
        justifyContent: 'center',
    },
    cardv3: {
        height: '100%',
        width: '90%',
        flexDirection:'row',
        alignItems: 'center',
    },
    cardv4: {
        height: '5%',
        width: '90%',
        alignItems: 'center',
        marginVertical: 5,
        justifyContent: 'center',
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
    calendar: {
        height: 15,
        width: 15,
    },
    Home2 : {
        height: '45%',
        width: '100%',
    },
    card5: {
        height: 300,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    declare: {
        height: '90%',
        width: '90%',
        alignItems: 'center'
    },
    card51: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    card52: {
        height: '40%',
        width: '90%',

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
    bottom: {
        height: 70,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    safe: {
        flex: 1,
    },
    icon: {
        height: 15,
        width: 15,
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
    yesno: {
        height: '100%',
        width: '30%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    cstm: {
        height: 200,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})