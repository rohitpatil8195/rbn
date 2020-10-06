import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
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
about: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 10
},
text1: {
    fontSize: 15,
    color: 'white',
},
back: {
    height: 30,
    width: 20,
    transform:[{rotate: '90deg'}]
},
card: {
    height: 430,
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 10,
    marginVertical: 10,
    alignItems: 'center',
    top: 8
},
card1: {
    height: '30%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
},
search: {
    height: '35%',
    width: '100%',
    borderRadius: 30,
    borderColor: 'lightgrey',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
},

button: {
    height: '35%',
    width: '100%',
    backgroundColor: 'royalblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
},
track: {
    color: 'white',
    textAlign: 'center'
},
blue: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor:'royalblue',
    right: 16,
    justifyContent: 'center',
    alignItems: 'center',
},
mag: {
    height: 25,
    width: 25,
},
grey : {
    height: '11%',
    width: '100%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
},
textc: {
    fontSize: 15,
    marginHorizontal: 20
},
textcc: {
    fontSize: 15,
},
textc1: {
    fontSize: 15,
    color: 'grey',
    marginHorizontal: 20
},
textc2: {
    fontSize: 15,
    color: 'dodgerblue',
    marginHorizontal: 20
},
cont: {
    height: '20%',
    width: '90%',
    marginVertical: 15,
    justifyContent: 'space-between',
},
Three: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
},
inn: {
    height: 15,
    width: 15,

}
})