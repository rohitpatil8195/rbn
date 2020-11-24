//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./Styles";

// create a component
export default class OrderComplete extends Component {
         constructor(props){
             super(props);
             this.state={
                all_data:this.props.route.params.FormData
                

             }
         }
         componentDidMount=()=>{
             console.log("this.state.order_id_No",this.state.order_id_No)
         }
    beforeOrder = () => {
        this.props.navigation.navigate('BeforeOrder')
    }
    
    home = () => {
        this.props.navigation.navigate('HomeScreen')
    }

    booking = () => {
        this.props.navigation.navigate('Bookings')
    }

    invoices = () => {
        this.props.navigation.navigate('Invoice',{invo_data:this.state.all_data })
    }

    render() {
        return (
            <SafeAreaView>
            <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
            <View style={styles.one}>
            <View style={styles.view1}>
                <TouchableOpacity onPress={this.beforeOrder}>
                <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                </TouchableOpacity>
                <Text style={styles.about}>Italy - Senegal<Text style={styles.text1}> (17 Oct - 20 Oct)</Text></Text>
            </View>
            </View>
    </ImageBackground>
    <View style={styles.view}>
    <View style={styles.card}>
        <View style={styles.circle}>
            <Image source={require('../../Images/confirmation.png')} style={styles.confirmation} resizeMode='center' />
        </View>
        <View style={styles.card1}>
            <View style={styles.card11}>
                <Text style={styles.text2}>Thank for your order!</Text>
            </View>
            <View style={styles.container}>
                <Text>Order Number :<Text style={{color: 'dodgerblue'}}>{this.state.all_data['order_id']}</Text></Text>
            </View>
            <View style={styles.vtext}>
                <Text numberOfLines={3} ellipsizeMode='middle'>You will receive shortly an e-mail with the order details and with the payment confirmation</Text>
            </View>
            <View style={styles.buttons}>
                {/* <TouchableOpacity onPress={this.booking} style={styles.booking}>
                    <Text>My Bookings</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={this.invoices} style={styles.booking}>
                    <Text>My Invoice</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.home} style={styles.Home}>
                    <Text style={{color: 'white'}}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    </View>
    </SafeAreaView>
        );
    }
}
