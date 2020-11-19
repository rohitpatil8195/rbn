//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';
import AsyncStorage from '@react-native-community/async-storage';

// create a component
export default class Information extends Component {
    constructor(props){
        super(props);
        this.state={
            isInfo: true,
            isPass: false,
            isCheck: false,
            Email:'',
            FName:'',
            Telephone:'',
            Address:'',
            Country:'',
            City:''

        }
    }
    componentDidMount=()=>{
        this.allData();
    }

       allData =async()=>{
                    const chech = await AsyncStorage.getItem('persist:sampleRedux')
                   const js =  JSON.parse(chech);
                 
 // let authreducer = JSON.parse(js['authReducer'])
  let authreducer = JSON.parse(js['authReducer'])
  let loginobj = authreducer['loginObj'];

  let logindata = loginobj['data']
  // console.log(logindata['result'][0])
  let email = logindata['result'][0]['user_email'];
  let fName = logindata['result'][0]['user_f_name'];
  let user_addr = logindata['result'][0]['user_addr'];
   let Country = logindata['result'][0]['user_country'];
    let Telephone =logindata['result'][0]['user_mb_no'];

   let City_obj =  authreducer['cityObj'];

   let city_data = City_obj['data'] 
         let final_city;
   for (let i; i <= city_data['result'].length ; i++) {
    // final_city = city_data['result'].filter(city_data['result'][i]['city_id'] === logindata['result'][0]['user_city']);
     
  }

  //console.log("final_city",final_city)
  //console.log("final_city",typeof final_city)
//user_city

//const final_city = city_data.filter(word => word.length > 6);
//console.log(city_data['result'].length)
    console.log(city_data['result'][1]['city_id'])


   //console.log("city obj",JSON.stringify(City_obj))
  //user_country  user_addr cityObj

  this.setState({
        Email:email,
        FirstName:fName,
        Telephone:Telephone,
        Address:user_addr,
        Country:'',     
  })
 // console.log("email",email)
   //  console.log("js_parse..",JSON.stringify(Result))
//       let loginobj = authreducer['searchObj'];
// console.log("async_objdata-- "+JSON.stringify(loginobj)); ['user_email']


       }


    isInfoPressed=()=> {
        if (!this.state.isInfo) {
            this.setState({isInfo: true})
          } else {
            this.setState({isInfo: false})
          }
          this.setState({isInfo: true, isPass: false})
    }

    isPassPressed=()=> {
        if (!this.state.isPass) {
            this.setState({isPass: true})
          } else {
            this.setState({isPass: false})
          }
          this.setState({isPass: true, isInfo: false})
    }

    isCheckPressed=()=> {
        if (!this.state.isCheck) {
            this.setState({isCheck: true})
          } else {
            this.setState({isCheck: false})
          }
    }

    home = () => {
        this.props.navigation.navigate('HomeScreen')
    }

    render() {
        return (
            // Email:email,
            // FirstName:fName,
            // Telephone:Telephone,
            // Address:user_addr,
            // Country:''
            <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
                   <View style={styles.one}>
                   <View style={styles.view1}>
                       <TouchableOpacity onPress={this.home}>
                       <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                       </TouchableOpacity>
                       <Text style={styles.about}>My Information</Text>
                   </View>
                   </View>
           </ImageBackground>
           <ScrollView style={{flex: 1}}>
           <View style={styles.card}>
               {
                   this.state.isInfo == true ?
                   <TouchableOpacity onPress={this.isInfoPressed}>
                   
               <Text style={styles.textb}>My Information</Text>
               </TouchableOpacity>
                : 
                <TouchableOpacity onPress={this.isInfoPressed}>
               <Text style={styles.text}>My Information</Text>
               </TouchableOpacity>
               }
               {
                   this.state.isPass == true ?
                <TouchableOpacity onPress={this.isPassPressed}>
               <Text style={styles.textb}>Email</Text>
               </TouchableOpacity>
                : 
                <TouchableOpacity onPress={this.isPassPressed}>
               <Text style={styles.text}>Email</Text>
               </TouchableOpacity>
               }
           </View>
           {
               this.state.isInfo == true ?
               <View style={styles.card4}>
               <View style={styles.card41}>
           <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={this.state.FirstName}
                    underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40,height: 50,}} />
            {/* <View style={styles.remember}>
                                <TouchableOpacity onPress={this.isCheckPressed}>{
                                    this.state.isCheck ?
                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />   

                                :
                                <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />
   
                                }</TouchableOpacity>
                                <Text style={styles.email}>Business Address</Text>
                            </View> */}
                            {/* <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Company'
                    underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40,height: 50,}} /> */}
                     <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' ,}}>
                    <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='+00'
                    underlineColorAndroid='grey' designStyle={{ width: '25%', marginLeft: '15%', height: 50}} />
                    <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={this.state.Telephone}
                    underlineColorAndroid='grey' designStyle={{ width: '80%', marginLeft: '-25%', height: 50}} />
                    </View>
                    <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={this.state.Address}
                    underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40,height: 50,}} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                    <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Country'
                    underlineColorAndroid='grey' designStyle={{ width: '52%', marginLeft: '15%', height: 50}} />
                    <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='City'
                    underlineColorAndroid='grey' designStyle={{ width: '58%', marginLeft: '-3%', height: 50}} />
                    </View>
                    <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Zipcode'
                    underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40,height: 50,}} />
                     {/* <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Comments'
                    underlineColorAndroid='grey' designStyle={{paddingBottom: 75, width: '109%', height: 100, right: 40}} /> */}
                     <View style={styles.bottom}>
                <TouchableOpacity onPress={this.completeform} style={styles.button}>
                    <Image source={require('../../Images/success.png')} style={styles.icon} />
                    <Text style={styles.save}>Save</Text>
                </TouchableOpacity>
                </View>
                </View>
           </View>
           : 
           <View style={styles.card5}>
               <View style={styles.card51}>
                   <Text>You Want To Change Your Email Address? Enter New Email And Password.</Text>
                   <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='New Email'
                    underlineColorAndroid='grey' designStyle={{  width: '109%', right: 40,height: 50,}} />
                    <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Confirm New Email'
                    underlineColorAndroid='grey' designStyle={{  width: '109%', right: 40,height: 50,}} />
                    <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Password'
                    underlineColorAndroid='grey' designStyle={{  width: '109%', right: 40,height: 50,}} />
                    <View style={styles.bottom}>
                <TouchableOpacity onPress={this.completeform} style={styles.button}>
                    <Image source={require('../../Images/success.png')} style={styles.icon} />
                    <Text style={styles.save}>Save</Text>
                </TouchableOpacity>
                </View>
               </View>
           </View>
               
           }
           
           </ScrollView>
           </SafeAreaView>
        );
    }
}
