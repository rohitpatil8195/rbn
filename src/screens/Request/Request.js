//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';

// create a component
export default class Request extends Component {
    constructor(props){
        super(props);
        this.state={
            isInfo: false,
            isPass: false
        }
    }

    login = () => {
        this.props.navigation.navigate('HomeScreen', {})
    }

    render() {
        return (
               <SafeAreaView>
            <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
                   <View style={styles.one}>
                   <View style={styles.view1}>
                       <TouchableOpacity onPress={this.login}>
                       <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                       </TouchableOpacity>
                       <Text style={styles.about}>My Requests</Text>
                   </View>
                   </View>
           </ImageBackground>
           <View style={styles.card}>
               <View style={styles.card1}>
                   <View style={styles.search}>
                   <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Search By Number'
                     designStyle={{ width: '80%', right: 20, height: 65}} />
                    <View style={styles.blue}>
                        <Image source={require('../../Images/magnifying-glass.png')} style={styles.mag} />
                    </View>
                   </View>
                   <Image source={require('../../Images/download120.png')} style={styles.download} resizeMode='center' />
               </View>
               <View style={styles.grey}>
                   <Text style={styles.textc}>Requests Date : <Text style={styles.textc1}>21-05-2020</Text></Text>
                   <Text style={styles.textc}>Number : <Text style={styles.textc1}>12345</Text></Text>
               </View>
               <View style={styles.cont}>
                    <View style={styles.Three}>
                   <Text style={styles.textcc}>Type Of Requests : <Text style={styles.textc1}>Error Message</Text></Text>
                    </View>
                    <View style={styles.Three}>
                   <Text style={styles.textcc}>Status : <Text style={styles.textc2}>Processed</Text></Text>
                    </View>
                    <View style={styles.Three}>
                   <Text style={styles.textcc}>Reply Date : <Text style={styles.textc1}>21-05-2020</Text></Text>
                    </View>               
               </View>
               <View style={styles.grey}>
                   <Text style={styles.textc}>Requests Date : <Text style={styles.textc1}>21-05-2020</Text></Text>
                   <Text style={styles.textc}>Number : <Text style={styles.textc1}>12345</Text></Text>
               </View>
               <View style={styles.cont}>
               <View style={styles.Three}>
                   <Text style={styles.textcc}>Type Of Requests : <Text style={styles.textc1}>Error Message</Text></Text>
                    </View>
                    <View style={styles.Three}>
                   <Text style={styles.textcc}>Status : <Text style={styles.textc2}>Processed</Text></Text>
                    </View>
                    <View style={styles.Three}>
                   <Text style={styles.textcc}>Reply Date : <Text style={styles.textc1}>21-05-2020</Text></Text>
                    </View>           
               </View>
               </View>
           </SafeAreaView>
        );
    }
}
