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
        justifyContent: 'space-between'
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
    back: {
        height: 30,
        width: 30,
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
        backgroundColor: "rgba(0,0,0,.5)",borderColor:'black',borderWidth:1
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
        height: '8%',marginTop:'5%',
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
        width: 25,
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
        height: '5%',
        width: '100%',
        backgroundColor: 'white',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',borderColor:'black',borderWidth:1
    },
    card2c: {
        height: '100%',
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    card3: {
        height: '4%',
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    card4: {
        height: '100%',
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 10,
        justifyContent: 'center',
        marginVertical: 5
    },
    //this is replaced  cardN by card 4
    cardN: {
        marginTop:4,
        height: '80%',
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 10,
        justifyContent: 'center',
        marginVertical:55
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
        justifyContent: 'center',
    },
    morehalf1: {
        height: '25%',
        width: '70%',
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        height: 15,
        width: 15,
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
        height: '7%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fg: {
        height: 40,
        width: 40
    }
})