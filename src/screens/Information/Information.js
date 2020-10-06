//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';

// create a component
export default class Information extends Component {
    constructor(props){
        super(props);
        this.state={
            isInfo: true,
            isPass: false,
            isCheck: false,
        }
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
           <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Name'
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
                    <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Telephone'
                    underlineColorAndroid='grey' designStyle={{ width: '80%', marginLeft: '-25%', height: 50}} />
                    </View>
                    <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Address'
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
