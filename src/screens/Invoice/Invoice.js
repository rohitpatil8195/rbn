//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';

// create a component
export default class Invoice extends Component {
    constructor(props){
        super(props);
        this.state={
            isInfo: false,
            isPass: false,
            all_data:this.props.route.params.invo_data,
            
        }
    }

    login = () => {
        this.props.navigation.navigate('HomeScreen', {})
    }
   // {"Amount": "", "Payment": {"create_time": "2014-07-18T18:46:55Z", "id": "PAY-18X32451H0459092JKO7KFUI", "intent": "sale", "state": "approved"}, "order_id": "608"}

    
    render() {
        return (
            <SafeAreaView>
            <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
                   <View style={styles.one}>
                   <View style={styles.view1}>
                       <TouchableOpacity onPress={this.login}>
                       <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                       </TouchableOpacity>
                       <Text style={styles.about}>Invoice</Text>
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
                   <Image source={require('../../Images/download120.png')} style={styles.download} resizeMode='center' />
               </View>
               <View style={styles.grey}>
                   <Text style={styles.textc}>Date : <Text style={styles.textc1}>21-05-2020</Text></Text>
                   <Text style={styles.textc}>Order Number :{ this.state.all_data != undefined? <Text style={styles.textc1}>{this.state.all_data['order_id']}</Text>:null}</Text>
               </View>
               <View style={styles.cont}>
                    <View style={styles.six}>
                   <Text style={styles.textcc}>Invoice Number : { this.state.all_data !=  undefined? <Text style={styles.textc2}>{this.state.all_data['order_id']}</Text>:null}</Text>
                    </View>
                    <View style={styles.six}>
                   <Text style={styles.textcc}>Amount Incl. VAT ($) :{ this.state.all_data!=undefined? <Text style={styles.textc1}>{this.state.all_data['Amount']}</Text>:null }</Text>
                    </View>
                    <View style={styles.six}>
                   <Text style={styles.textcc}>Payment Date ::{ this.state.all_data !=  undefined? <Text style={styles.textc1}>{this.state.all_data['Payment']['create_time']}</Text>:null}</Text>
                    </View>
                    <View style={styles.six}>
                   <Text style={styles.textcc}>Payment Method : <Text style={styles.textc1}>Credit Card</Text></Text>
                    </View>
                    <View style={styles.six}>
                   <Text style={styles.textcc}>Status :  { this.state.all_data != undefined? <Text style={styles.textc2}>{this.state.all_data['Payment']['state']}</Text>:null}</Text>
                    </View>
                    <View style={styles.six}>
                   <Text style={styles.textcc}>Auto Declaration Invoice :</Text>
                   <Image source={require('../../Images/invoice.png')} style={styles.inn} resizeMode='center' />
                    </View>
               
               </View>
            </View>
           </SafeAreaView>
        );
    }
}
