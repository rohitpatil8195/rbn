//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';

// create a component
export default class Delivery extends Component {
    constructor(props){
        super(props);
        this.state={
            isInfo: false,
            isPass: false
        }
    }

    home = () => {
        this.props.navigation.navigate('HomeScreen')
    }

    render() {
        return (
            <SafeAreaView>
            <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
                   <View style={styles.one}>
                   <View style={styles.view1}>
                       <TouchableOpacity onPress={this.home}>
                       <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                       </TouchableOpacity> 
                       <Text style={styles.about}>Delivery tracking</Text>
                   </View>
                   </View>
           </ImageBackground>
           <View style={styles.card}>
               <View style={styles.card1}>
                   <View style={styles.search}>
                   <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Search by shipment code or tracking no'
                     designStyle={{ width: '80%', right: 20, height: 65}} />
                    <View style={styles.blue}>
                        <Image source={require('../../Images/magnifying-glass.png')} style={styles.mag} />
                    </View>
                   </View>
                   <TouchableOpacity style={styles.button}>
                       <Text style={styles.track}>Digit your shipping code to verify your delivery status</Text>
                   </TouchableOpacity>
               </View>
               <View style={styles.grey}>
                   <Text style={styles.textc}>Date : <Text style={styles.textc1}>21-05-2020</Text></Text>
               </View>
               <View style={styles.cont}>
                    <View style={styles.Three}>
                   <Text style={styles.textcc}>Event : <Text style={styles.textc1}>Lorem Ipsum</Text></Text>
                    </View>
                    <View style={styles.Three}>
                    </View>
                    <View style={styles.Three}>
                    </View>               
               </View>
               </View>
               </SafeAreaView>
        );
    }
}