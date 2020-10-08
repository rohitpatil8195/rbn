//import liraries
import React, { Component, useEffect,useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, } from 'react-native';
import i18n from "i18n-js";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

let FIRSTNAME, EMAIL, USER_IMAGE

const SubDrawerComponent = (props) => {
const [Email , setEmail] = useState('');
const [Name , setName] = useState('')
  const navigation = useNavigation();

  useEffect(() => {
  
  
  userInfo = async () => {
    FIRSTNAME = await AsyncStorage.getItem('FIRST_NAME');
    EMAIL = await AsyncStorage.getItem('EMAIL');
    // USER_IMAGE = await AsyncStorage.getItem('USER_IMAGE');
    console.log('firstname', FIRSTNAME)
    console.log('email', FIRSTNAME)

    let chech = await AsyncStorage.getItem('persist:sampleRedux');
    
    let js = JSON.parse(chech)
    //let finlaAuth = await JSON.parse(js['authReducer'])['loginObj']['data']['result']
    //console.log(finlaAuth)
   let authreducer = JSON.parse(js['authReducer'])
   let loginobj = authreducer['loginObj'];
   let logindata = loginobj['data']
    console.log(logindata['result'][0])
   let email = logindata['result'][0]['user_email']
   let fName = logindata['result'][0]['user_f_name']
    setEmail(email);
    setName(fName);
   //console.log("data is : " + Email)
    const keys = await AsyncStorage.getAllKeys();
   // console.log("keyss;;"+keys)
    //console.log("name is"+ Email); 
  }
  userInfo()
})
console.log("name issssss"+ Email);
  //const parsed  = JSON.stringify(FIRSTNAME)
  //console.log("data isaa : " + userInfo(Email))


  return (
    <View>
      <ImageBackground source={require('../Images/sidebar-bg.png')} style={Styles.v1} resizeMode='stretch'>
        <TouchableOpacity onPress={() => navigation.navigate('Settings', {})} style={Styles.v2}>
          <Image source={require('../Images/settings.png')} style={Styles.setting} resizeMode='center' />
        </TouchableOpacity>
        <Image source={require('../Images/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.jpg')} style={Styles.proImage} resizeMode='contain' />
        <Text style={{ fontSize: 20, color: 'white' }}>{Name}</Text>
        <Text style={{ fontSize: 12, color: 'white' }}>{Email}</Text>
      </ImageBackground>
      <View style={Styles.v3}>
        <TouchableOpacity onPress={() => navigation.navigate('Bookings', {})} style={Styles.v4}>
          <Text style={{ marginHorizontal: 10 }}>{i18n.t('My Bookings')}</Text>
          <Image source={require('../Images/arrow-point-to-right.png')} style={Styles.arrow} resizeMode='center' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Information', {})} style={Styles.v4}>
          <Text style={{ marginHorizontal: 10 }}>{i18n.t('My Information')}</Text>
          <Image source={require('../Images/arrow-point-to-right.png')} style={Styles.arrow} resizeMode='center' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Invoice', {})} style={Styles.v4}>
          <Text style={{ marginHorizontal: 10 }}>{i18n.t('My Invoice')}</Text>
          <Image source={require('../Images/arrow-point-to-right.png')} style={Styles.arrow} resizeMode='center' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Request', {})} style={Styles.v4}>
          <Text style={{ marginHorizontal: 10 }}>{i18n.t('My Requests')}</Text>
          <Image source={require('../Images/arrow-point-to-right.png')} style={Styles.arrow} resizeMode='center' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Delivery', {})} style={Styles.v4}>
          <Text style={{ marginHorizontal: 10 }}>{i18n.t('Delivery Tracking')}</Text>
          <Image source={require('../Images/arrow-point-to-right.png')} style={Styles.arrow} resizeMode='center' />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.v4}>
          <Text style={{ marginHorizontal: 10 }}>{i18n.t('Help Center')}</Text>
          <Image source={require('../Images/arrow-point-to-right.png')} style={Styles.arrow} resizeMode='center' />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.v4}>
          <Text style={{ marginHorizontal: 10 }}>{i18n.t('Privacy Policy')}</Text>
          <Image source={require('../Images/arrow-point-to-right.png')} style={Styles.arrow} resizeMode='center' />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.v4}>
          <Text style={{ marginHorizontal: 10 }}>Terms & Conditions</Text>
          <Image source={require('../Images/arrow-point-to-right.png')} style={Styles.arrow} resizeMode='center' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  v1: {
    height: '55%',
    width: '100%',
    alignItems: 'center',
  },
  v2: {
    height: '8%',
    width: '15%',
    alignItems: 'center',
    marginVertical: 3,
    alignSelf: 'flex-end',
    marginHorizontal: 10
  },
  setting: {
    height: '100%',
    width: '90%',
  },
  proImage: {
    height: 100,
    width: 100,
    borderRadius: 250
  },
  v3: {
    height: '50%',
    width: '90%',
    alignSelf: 'center',
    bottom: '22%',
    justifyContent: 'space-between',
  },
  v4: {
    height: '11%',
    width: '100%',
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  arrow: {
    height: 15,
    width: 15,
    transform: [{ rotate: '-90deg' }],
    marginHorizontal: 10
  }
})

export default SubDrawerComponent
