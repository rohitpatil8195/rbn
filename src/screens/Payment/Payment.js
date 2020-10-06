//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';

// create a component
export default class Payment extends Component {
    constructor(props){
        super(props);
        this.state={
            isPayment: false,
            isInvoice: false,
        }
    }

    isPaymentPressed=()=> {
        if (!this.state.isPayment) {
            this.setState({isPayment: true})
          } else {
            this.setState({isPayment: false})
          }
    this.setState({ isPayment: true, isInvoice: false })
    }

    isInvoicePressed=()=> {
        if (!this.state.isInvoice) {
            this.setState({isInvoice: true})
          } else {
            this.setState({isInvoice: false})
          }
    this.setState({ isPayment: false, isInvoice: true })
    }

    home = () => {
        this.props.navigation.navigate('HomeScreen')
    }

    render() {
        return (
            <SafeAreaView>
            <ImageBackground source={require('../../Images/header-bg.png')} style={styles.imagebg} resizeMode='cover'>
                   <View style={styles.one}>
                   <View style={styles.view1}>
                       <TouchableOpacity onPress={this.home}>
                       <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                       </TouchableOpacity>
                       <Text style={styles.about}>Contact Us</Text>
                   </View>
                   </View>
           </ImageBackground>
           <ScrollView style={styles.scrl} contentContainerStyle={styles.scroll}>
           <View style={styles.card}>
              <Text style={styles.qt}>Payment & Invoice</Text>
           </View>
               <View style={styles.card4}>
               <View style={styles.card41}>
                   <View style={styles.radio}>
                           {
                            this.state.isPayment == true ?
                       <TouchableOpacity onPress={this.isPaymentPressed} style={styles.radio1}>
                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.ricon} />
                            <Text style={styles.rtextb}>Payment</Text>
                        </TouchableOpacity>
                           :
                       <TouchableOpacity onPress={this.isPaymentPressed} style={styles.radio1}>
                           <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.ricon} />
                           <Text style={styles.rtext}>Payment</Text>
                            </TouchableOpacity>
                           }
                            {
                            this.state.isInvoice == true ?
                       <TouchableOpacity onPress={this.isInvoicePressed} style={styles.radio1}>
                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.ricon} />
                            <Text style={styles.rtextb}>Invoice</Text>
                        </TouchableOpacity>
                           :
                       <TouchableOpacity onPress={this.isInvoicePressed} style={styles.radio1}>
                           <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.ricon} />
                           <Text style={styles.rtext}>Invoice</Text>
                            </TouchableOpacity>
                           }
                          
                   </View>
                      <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Invoice'
                    underlineColorAndroid='grey' designStyle={{ width: '110%', right: 50,height: 50}} />
                    <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Name'
                    underlineColorAndroid='grey' designStyle={{ width: '110%', right: 50,height: 50}} />
                            <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Entity'
                    underlineColorAndroid='grey' designStyle={{ width: '110%', right: 50,height: 50}} />
                    <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Email'
                    underlineColorAndroid='grey' designStyle={{ width: '110%', right: 50,height: 50}} />
                     <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                    <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='+00'
                    underlineColorAndroid='grey' designStyle={{ width: 60, marginLeft: '12%', height: 50}} />
                    <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Telephone'
                    underlineColorAndroid='grey' designStyle={{ width: '90%', marginLeft: '-35%', height: 50}} />
                    </View>
                     <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Message'
                    underlineColorAndroid='grey' designStyle={{paddingBottom: 75, width: '110%', height: 100, right: 50}} />
                     <View style={styles.bottom}>
                    <TouchableOpacity onPress={this.completeform} style={styles.button}>
                    <Image source={require('../../Images/success.png')} style={styles.icon} />
                    <Text style={styles.save}>Send Your Message</Text>
                </TouchableOpacity>
                </View>
                </View>
           </View>
          
           
           </ScrollView>
           </SafeAreaView>
        );
    }
}
