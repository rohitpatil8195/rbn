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
    safe: {
        flex: 1,
    },
    view1: {
        flexDirection: 'row',
        width: '40%',
        height: '80%',
        alignItems: 'center'
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
        color: 'white',
        marginHorizontal: 10
    },
    scroll: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    scrl: {
        height: '89%',
        width: '100%',
        alignSelf: 'center',
    },
    cardscrl: {
        height: 930,
        width: '90%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent:'center',
        elevation: 10
    },
    scrl1:{
        height: '95%',
        width: '90%',
    },
    author: {
        height: '18%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    para: {
        flexDirection: 'column'
    },
    imageView:{
        height: '80%',
        width: '40%',
    },
    image1: {
        height: '100%',
        width: '100%',
    },
    back: {
        height: 30,
        width: 20,
        transform:[{rotate: '90deg'}]
    },
    logobackground : {
        height: '30%',
        width: '50%',
    },
    logo : {
        height: '100%',
        width: '100%'
    },
    body: {
        flex: 2,
        backgroundColor: "white"
    },
    pcard:{
        height: '28%',
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },  
    subView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        height: 100,
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
      closeIcon:{
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center'
      },
    search: {
        height: 50,
        width: '38%',
        backgroundColor: 'dodgerblue',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    searchCard: {
        height: '10%',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    searchCard1: {
        height: '85%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        elevation: 10,
        alignItems: 'center'
    },
    searchCard2: {
        height: '90%',
        width: '85%',
        alignItems: 'center'
    },
    searchCard3: {
        height: '90%',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchIcon:{
        height: 25,
        width: 25
    },
    hide: {
        height: '31%',
    },
    filter: {
        height: '100%',
        width: '25%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    card: {
        height: 155,
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
        elevation: 10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    card1: {
        height: 50,
        width: '60%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    card2: {
        height: 150,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 20,
        justifyContent: 'space-between'
    },
    card21: {
        height: '47%',
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    card211: {
        height: '100%',
        width: '48%',
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    card3: {
        height: 200,
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue'
    },
    card31: {
        height: '100%',
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue'
    },
    card4: {
        height: 380,
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 5,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card41: {
        height: '90%',
        width: '90%',
    },
    card411: {
        height: '38%',
        width: '100%',
        alignItems: 'center',
    },
    avatar: {
        height: 80,
        width: 80
    },
    jn: {
        fontSize: 20,
        color: 'grey',
    },
    jn1: {
        fontSize: 12,
        color: 'grey',
    },
    slot: {
        height: '80%',
        width: '29%',
        marginHorizontal: 5
    },
    slot1 :{
        height: '80%',
        width: '60%',
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    small: {
        height: '100%',
        width: '46%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    morehalf1: {
        height: '25%',
        width: '70%',
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    remain: {
        height: '90%',
        width: '39%',
        bottom: 5,
        alignItems: 'flex-end',
        justifyContent: 'center'
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
    charges: {
        height: '100%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },  
    line3:{
        backgroundColor: 'grey', 
        height: '2%', 
        width: '100%',
        top: 2,
    },
    sl1: {
        height: '100%',
        width: '48%',
        backgroundColor: 'yellow'
    },
    slotc: {
        height: '100%',
        width: '100%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    slotc1: {
        height: '30%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    send: {
        height: 15,
        width: 15,
        marginHorizontal: 5,
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
    day: {
        height: '60%',
        width: '55%',
        justifyContent: 'center'
    },
    vertical: {
        height: '90%',
        width: '12%',
        alignItems: 'center'
    },
    vertical1: {
        height: '90%',
        width: '83%',
    },  
    twoicons: {
        height: '75%',
        width: '70%',
        alignItems: 'center',
    },
    dotted: {
        height: 50,
        width: 30,
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
        fontSize: 12,
        color: 'grey',
        marginHorizontal: 5
    },
    empty: {
        height: 20
    },
    bars: {
        height: '10%',
        width: '90%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey'
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
        height: 25,
        width: 25,
    },
    remember: {
        height: 20,
        width: '90%',
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
        width: '100%', 
        alignSelf: 'center', 
    },
    line1: {
        backgroundColor: 'grey', 
        height: '2%', 
        width: '80%'
    },
    line2: {
        backgroundColor: 'grey', 
        height: '2%', 
        width: '10%'
    },
    down: {
        height: 25,
        width: 25
    },
    social: {
        height: '12%',
        width: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottom: {
        height: 80,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    fg: {
        height: 40,
        width: 40
    },
    side: {
        height: '20%',
        width: '57%',
    },
    below: {
        height: '16%',
        width: '100%',
        marginVertical: 10
    },
    author1: {
        height: '16%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageView1:{
        height: '85%',
        width: '40%',
    },
    below1: {
        height: '15%',
        width: '100%',
        marginVertical: 10
    },
    remaining: {
        height: '29%',
        width: '100%',
    },
    arrows : {
        height: 40,
        width: '90%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 50
    },
    arrows1: {
        height: '100%',
        width: '18%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconL: {
        height: 20,
        width: 20,
        transform:[{rotate: '180deg'}]
    },
    iconR: {
        height: 20,
        width: 20,
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