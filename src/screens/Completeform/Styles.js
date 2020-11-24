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
        justifyContent: 'space-between',
    },
    imagebg: {
        height: Dimensions.get('window').height*0.1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        height: 350,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardv1: {
        height:'90%',
        width: '90%',
    },
    Textc1: {
        fontSize: 15,
    },
    Textc2: {
        fontSize: 15,
        color: 'grey'
    },
    scrl: {
        height: '90%',
        width: '100%',
        alignSelf: 'center',
    },
    scroll: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    card1: {
        height: 50,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        marginVertical: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    card2: {
        height: 150,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    safe: {
        flex: 1,
    },
    card21: {
        height: '90%',
        width: '90%',
        
    },
    card3: {
        height: 60,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card31: {
        height: '90%',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    card32: {
        height: '100%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    compo: {
        height: '100%',
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    compo1: {
        height: '100%',
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    icon1: {
        height: 15,
        width: 15,
    },
    card4: {
        height: 510,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card41: {
        height: '95%',
        width: '90%',
        alignItems: 'center'
    },
    card42: {
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    align: {
        marginHorizontal: 10
    },
    card421: {
        height: '10%',
        width: '100%',
        flexDirection: 'row'
    },
    card43: {
        height: '20%',
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card431: {
        height: '90%',
        width: '90%',
    },
    card432: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        height: 1,
        width: '90%',
        backgroundColor: 'lightgrey',
        marginVertical: 10
    },  
    upload: {
        height: '10%',
        width: '100%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    }, 
    qua: {
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    q1: {
        height: '100%',
        width: '30%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    q2:{
        height: '100%',
        width: '65%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card5: {
        height: 120,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card6: {
        height: 150,
        width: '90%',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card7 : {
        height: 210,
        width: '90%',
        marginVertical: 10
    },
    card7s: {
        height: 70,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:20,
        
    },
    card7s1: {
        height: '100%',
        width: '49%',
        justifyContent: 'space-between'
    },
    card71: {
        height: 50,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center'
       
    },
    card72: {
        height: 30,
        width: '90%',
        flexDirection: 'row',
    },
    card73: {
        height: 30,
        width: '90%',
        flexDirection: 'row',
    },
    sender: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20
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
    down: {
        height: 30,
        width: 20,
        marginHorizontal: 10
    },
    downup: {
        height: 30,
        width: 20,
        marginHorizontal: 10,
        transform:[{rotate: '180deg'}]
    },
    about: {
        fontSize: 20,
        color: 'black',
        marginHorizontal: 10
    },
    view1: {
        flexDirection: 'row',
        width: '85%',
        height: '80%',
        alignItems: 'center',
    },
    text1: {
        fontSize: 15,
        color: 'white',
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
    bottom: {
        height: 70,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
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
    b1:{
        height: 25,
        width: '90%',
    },
    email: {
        fontSize: 15,
        color: 'grey'
    },
    bars: {
        height: '15%',
        width: '90%',
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
          width: '65%',
          alignItems: 'center',
          marginVertical: 10
      },
      done: {
        height: 50,
        width: '90%',
        backgroundColor: 'dodgerblue',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
      }
})