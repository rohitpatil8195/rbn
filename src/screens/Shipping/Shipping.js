//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';

// create a component
export default class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollect: false,
            isDelivered: false,
            isDamage: false,
            isLoss: false,
            isDelay: false
        }
    }

    isCollectPressed = () => {
        if (!this.state.isCollect) {
            this.setState({ isCollect: true })
        } else {
            this.setState({ isCollect: false })
        }
        this.setState({ isCollect: true, isDelivered: false, isDamage: false, isLoss: false, isDelay: false })
    }

    isDeliveredPressed = () => {
        if (!this.state.isDelivered) {
            this.setState({ isDelivered: true })
        } else {
            this.setState({ isDelivered: false })
        }
        this.setState({ isCollect: false, isDelivered: true, isDamage: false, isLoss: false, isDelay: false })
    }

    isDamagePressed = () => {
        if (!this.state.isDamage) {
            this.setState({ isDamage: true })
        } else {
            this.setState({ isDamage: false })
        }
        this.setState({ isCollect: false, isDelivered: false, isDamage: true, isLoss: false, isDelay: false })
    }

    isLossPressed = () => {
        if (!this.state.isLoss) {
            this.setState({ isLoss: true })
        } else {
            this.setState({ isLoss: false })
        }
        this.setState({ isCollect: false, isDelivered: false, isDamage: false, isLoss: true, isDelay: false })
    }

    isDelayPressed = () => {
        if (!this.state.isDelay) {
            this.setState({ isDelay: true })
        } else {
            this.setState({ isDelay: false })
        }
        this.setState({ isCollect: false, isDelivered: false, isDamage: false, isLoss: false, isDelay: true })
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
                        <Text style={styles.qt}>Shipping</Text>
                    </View>
                    <View style={styles.card4}>
                        <View style={styles.card41}>
                            <View style={styles.radio}>
                                {
                                    this.state.isCollect == true ?
                                        <TouchableOpacity onPress={this.isCollectPressed} style={styles.radio1}>
                                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.ricon} />
                                            <Text style={styles.rtextb}>My package is not collected</Text>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={this.isCollectPressed} style={styles.radio1}>
                                            <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.ricon} />
                                            <Text style={styles.rtext}>My package is not collected</Text>
                                        </TouchableOpacity>
                                }
                                {
                                    this.state.isDelivered == true ?
                                        <TouchableOpacity onPress={this.isDeliveredPressed} style={styles.radio1}>
                                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.ricon} />
                                            <Text style={styles.rtextb}>My package is not delivered</Text>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={this.isDeliveredPressed} style={styles.radio1}>
                                            <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.ricon} />
                                            <Text style={styles.rtext}>My package is not delivered</Text>
                                        </TouchableOpacity>
                                }
                                {
                                    this.state.isDamage == true ?
                                        <TouchableOpacity onPress={this.isDamagePressed} style={styles.radio1}>
                                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.ricon} />
                                            <Text style={styles.rtextb}>Damage</Text>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={this.isDamagePressed} style={styles.radio1}>
                                            <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.ricon} />
                                            <Text style={styles.rtext}>Damage</Text>
                                        </TouchableOpacity>
                                }
                                {
                                    this.state.isLoss == true ?
                                        <TouchableOpacity onPress={this.isLossPressed} style={styles.radio1}>
                                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.ricon} />
                                            <Text style={styles.rtextb}>Loss</Text>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={this.isLossPressed} style={styles.radio1}>
                                            <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.ricon} />
                                            <Text style={styles.rtext}>Loss</Text>
                                        </TouchableOpacity>
                                }
                                {
                                    this.state.isDelay == true ?
                                        <TouchableOpacity onPress={this.isDelayPressed} style={styles.radio1}>
                                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.ricon} />
                                            <Text style={styles.rtextb}>Delay</Text>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={this.isDelayPressed} style={styles.radio1}>
                                            <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.ricon} />
                                            <Text style={styles.rtext}>Delay</Text>
                                        </TouchableOpacity>
                                }

                            </View>
                            <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Order Number'
                                underlineColorAndroid='grey' designStyle={{ width: '110%', right: 50, height: 50 }} />
                            <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Label Number'
                                underlineColorAndroid='grey' designStyle={{ width: '110%', right: 50, height: 50 }} />
                            <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Name'
                                underlineColorAndroid='grey' designStyle={{ width: '110%', right: 50, height: 50 }} />
                            <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Entity'
                                underlineColorAndroid='grey' designStyle={{ width: '110%', right: 50, height: 50 }} />
                            <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Email'
                                underlineColorAndroid='grey' designStyle={{ width: '110%', right: 50, height: 50 }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                                <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='+00'
                                    underlineColorAndroid='grey' designStyle={{ width: 60, marginLeft: '12%', height: 50 }} />
                                <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Telephone'
                                    underlineColorAndroid='grey' designStyle={{ width: '90%', marginLeft: '-35%', height: 50 }} />
                            </View>
                            <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Message'
                                underlineColorAndroid='grey' designStyle={{ paddingBottom: 75, width: '110%', height: 100, right: 50 }} />
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
