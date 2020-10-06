//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, Animated, Dimensions } from 'react-native';
import styles from "./Styles";
import Contactscrl from '../../components/Contactscrl';

// create a component
class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            isCheck: false,
            isSearch: false,
            isFilter: false,
            isAir: false,
            isMaritime: false,
            isRoad: false,
            animation: new Animated.Value(0)
        }
    }

    handleOpen = () => {
        Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      };

      handleClose = () => {
        Animated.timing(this.state.animation, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      };


    render() {
        const screenHeight = Dimensions.get("window").height;

        const backdrop = {
            transform: [
              {
                translateY: this.state.animation.interpolate({
                  inputRange: [0, 0.01],
                  outputRange: [screenHeight, 0],
                  extrapolate: "clamp",
                }),
              },
            ],
            opacity: this.state.animation.interpolate({
              inputRange: [0.01, 0.5],
              outputRange: [0, 1],
              extrapolate: "clamp",
            }),
          };
      
          const slideUp = {
            transform: [
              {
                translateY: this.state.animation.interpolate({
                  inputRange: [0.01, 1],
                  outputRange: [0, -1 * screenHeight],
                  extrapolate: "clamp",
                }),
              },
            ],
          };

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.handleOpen}>
                <Text>Contact</Text>
                </TouchableOpacity>
                <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
          <View style={[styles.sheet]}>
            <Animated.View style={[styles.popup, slideUp]}>
                <View style={styles.blueBar}>
            <Image source={require('../../Images/phone-contact.png')} style={styles.icon} />
            <Text style={{color: 'white'}}>Contact Us</Text>
            <TouchableOpacity onPress={this.handleClose}>
                <View style={styles.closeIcon}>
                  <Image source={require('../../Images/close.png')} style={styles.icon} />
                  </View>
                </TouchableOpacity>
                </View>
              
              <Contactscrl />
            </Animated.View>
          </View>
        </Animated.View>
            </View>
        );
    }
}


//make this component available to the app
export default Contact;
