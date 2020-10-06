//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';

// create a component
export default class Question extends Component {
    constructor(props){
        super(props);
        this.state={
            isError: false,
            isBlock: false
        }
    }

    isErrorPressed=()=> {
        if (!this.state.isError) {
            this.setState({isError: true})
          } else {
            this.setState({isError: false})
          }
          this.setState({isError: true, isBlock: false})
    }

    isBlockPressed=()=> {
        if (!this.state.isBlock) {
            this.setState({isBlock: true})
          } else {
            this.setState({isBlock: false})
          }
          this.setState({isBlock: true, isError: false})
    }

    home = () => {
        this.props.navigation.navigate('HomeScreen')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
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
              <Text style={styles.qt}>Question or Technical issue</Text>
           </View>
               <View style={styles.card4}>
               <View style={styles.card41}>
                   <View style={styles.radio}>
                           {
                            this.state.isError == true ?
                       <TouchableOpacity onPress={this.isErrorPressed} style={styles.radio1}>
                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.ricon} />
                            <Text style={styles.rtextb}>Error Message</Text>
                        </TouchableOpacity>
                           :
                       <TouchableOpacity onPress={this.isErrorPressed} style={styles.radio1}>
                           <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.ricon} />
                           <Text style={styles.rtext}>Error Message</Text>
                            </TouchableOpacity>
                           }
                            {
                            this.state.isBlock == true ?
                       <TouchableOpacity onPress={this.isBlockPressed} style={styles.radio2}>
                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.ricon} />
                            <Text style={styles.rtextb}>Blocked Account</Text>
                        </TouchableOpacity>
                           :
                       <TouchableOpacity onPress={this.isBlockPressed} style={styles.radio2}>
                           <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.ricon} />
                           <Text style={styles.rtext}>Blocked Account</Text>
                            </TouchableOpacity>
                           }
                      
                   </View>
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
                     <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Comments'
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
