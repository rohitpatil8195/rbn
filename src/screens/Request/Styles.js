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
    height: 600,
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 10,
    marginVertical: 10,
    alignItems: 'center',
    top: 8
},
card00: {
    height: 150,
    width: '95%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 10,
    marginBottom: 10,
    alignItems: 'center',
   top: 4
},
card1: {
    height: '20%',
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
},
search: {
    height: '50%',
    width: '83%',
    borderRadius: 30,
    borderColor: 'lightgrey',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
},
download: {
    height: '40%',
    width: '15%',
},
blue: {
    height: 38,
    width: 38,
    borderRadius: 19,
    backgroundColor:'royalblue',
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
},
mag: {
    height: 25,
    width: 25,
},
grey : {
    height: '25%',
    width: '100%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
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
},
textc2: {
    fontSize: 15,
    color: 'dodgerblue',
    marginHorizontal: 20
},
cont: {
    height: '40%',
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