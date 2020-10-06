//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from "./Styles";
import Popup from '../../components/Popup';

// create a component
export default class MyClass extends Component {
    constructor(props){
        super(props)
        this.state={
            isDot1: false,
            isDot2: false
        }
    }

    isDot1Pressed=()=> {
        if (!this.state.isDot1) {
            this.setState({isDot1: true})
          } else {
            this.setState({isDot1: false})
          }
    // this.setState({ isDot1: true, isDot2: false })
    }

    isDot2Pressed=()=> {
        if (!this.state.isDot2) {
            this.setState({isDot2: true})
          } else {
            this.setState({isDot2: false})
          }
    // this.setState({ isDot2: true, isDot1: false })
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
                       <Text style={styles.about}>My Bookings</Text>
                   </View>
                   </View>
           </ImageBackground>
                        <ScrollView style={styles.scrl} contentContainerStyle={styles.scroll}>
                        
                        <View style={styles.card4}>
                        {
                                    this.state.isDot1 == true ?
                                    <Popup />
                                    :
                                    null
                                }
                            <View style={styles.circle} />
                            <View style={styles.cardView}>
                            <View style={styles.cardv1}>
                                  <Text style={{color: 'grey'}}>Order No. - <Text style={{color: 'skyblue'}}>54</Text></Text>
                                  <TouchableOpacity style={styles.men} onPress={this.isDot1Pressed}>
                                  <Image source={require('../../Images/menu-(1).png')} style={styles.men1} />
                                  </TouchableOpacity>
                              </View>
                              <View style={styles.cardv2}>
                                <View style={styles.cardv21}>
                                    <View style={styles.card211}>
                                        <View style={styles.card2111}>
                                            <Text style={styles.card2111a}>17 Oct 19</Text>
                                            <View style={styles.line}></View>
                                            <Text style={styles.card2111b}>Campania, Italy</Text>
                                        </View>
                                        <View style={styles.card2112}>
                                            <Image source={require('../../Images/product.png')} style={styles.product} />
                                            <Text style={styles.cardHome}>Home Collection</Text>
                                        </View>
                                    </View>
                                    <View style={styles.card212}>
                                        <Image source={require('../../Images/send.png')} style={styles.arr} />
                                    </View>
                                    <View style={styles.card211}>
                                    <View style={styles.card2111}>
                                            <Text style={styles.card2111a}>20 Oct 19</Text>
                                            <View style={styles.line}></View>
                                            <Text style={styles.card2111b}>Campania, Italy</Text>
                                        </View>
                                        <View style={styles.card2112}>
                                            <Image source={require('../../Images/product.png')} style={styles.product} />
                                            <Text style={styles.cardHome}>At Shippers Warehouse</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.cardv22}>
                                    <Text style={styles.cardv221}>400 €</Text>
                                    <Text style={styles.cardHome}>Shipping Amount</Text>
                                    <View style={styles.line1}></View>
                                    <Text style={styles.car}>Carrier - <Text style={{color: 'dodgerblue'}}>Air</Text></Text>
                                    <View style={styles.processing}>
                                        <Text style={styles.white}>Processing</Text>
                                    </View>
                                    <Text style={styles.invo}>Invoice / Payment-<Text style={{color: 'dodgerblue'}}>54</Text></Text>
                                </View>
                              </View>
                              <View style={styles.cardv3}>
                                  <Text style={styles.sendtext}>Sender / Recipient - alok shah/yatin shah</Text>
                                  {/* <View style={styles.redbot}>
                                      <Text style={styles.sendtext}>Label Pickup Ref. - <Text style={{color: 'dodgerblue'}}>54</Text></Text>
                                      <View style={styles.row}>
                                          <Text style={styles.sendtext}>custom Duty Recap - </Text>
                                          <Image source={require('../../Images/invoice.png')} style={styles.product} />
                                      </View>
                                  </View> */}
                              </View>
                            </View>
                            <View style={styles.circle1} />
                          </View>
                          <View style={styles.card4}>
                          {
                                    this.state.isDot2 == true ?
                                    <Popup />
                                    :
                                    null
                                }
                            <View style={styles.circle} />
                            <View style={styles.cardView}>
                            <View style={styles.cardv1}>
                                  <Text style={{color: 'grey'}}>Order No. - <Text style={{color: 'skyblue'}}>54</Text></Text>
                                  <TouchableOpacity style={styles.men} onPress={this.isDot2Pressed}>
                                  <Image source={require('../../Images/menu-(1).png')} style={styles.men1} />
                                  </TouchableOpacity>
                              </View>
                              <View style={styles.cardv2}>
                                <View style={styles.cardv21}>
                                <View style={styles.card211}>
                                    <View style={styles.card2111}>
                                            <Text style={styles.card2111a}>17 Oct 19</Text>
                                            <View style={styles.line}></View>
                                            <Text style={styles.card2111b}>Campania, Italy</Text>
                                        </View>
                                        <View style={styles.card2112}>
                                            <Image source={require('../../Images/product.png')} style={styles.product} />
                                            <Text style={styles.cardHome}>Home Collection</Text>
                                        </View>
                                </View>
                                    <View style={styles.card212}>
                                    <Image source={require('../../Images/send.png')} style={styles.arr} />
                                    </View>
                                    <View style={styles.card211}>
                                        <View style={styles.card2111}>
                                            <Text style={styles.card2111a}>20 Oct 19</Text>
                                            <View style={styles.line}></View>
                                            <Text style={styles.card2111b}>Campania, Italy</Text>
                                        </View>
                                        <View style={styles.card2112}>
                                            <Image source={require('../../Images/product.png')} style={styles.product} />
                                            <Text style={styles.cardHome}>At Shippers Warehouse</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.cardv22}>
                                <Text style={styles.cardv221}>400 €</Text>
                                    <Text style={styles.cardHome}>Shipping Amount</Text>
                                    <View style={styles.line1}></View>
                                    <Text style={styles.car}>Carrier - <Text style={{color: 'dodgerblue'}}>Air</Text></Text>
                                    <View style={styles.processing}>
                                        <Text style={styles.white}>Processing</Text>
                                    </View>
                                    <Text style={styles.invo}>Invoice / Payment-<Text style={{color: 'dodgerblue'}}>54</Text></Text>
                                </View>
                              </View>
                              <View style={styles.cardv3}>
                              <Text style={styles.sendtext}>Sender / Recipient - alok shah/yatin shah</Text>
                                  {/* <View style={styles.redbot}>
                                      <Text style={styles.sendtext}>Label Pickup Ref. - <Text style={{color: 'dodgerblue'}}>54</Text></Text>
                                      <View style={styles.row}>
                                          <Text style={styles.sendtext}>custom Duty Recap - </Text>
                                          <Image source={require('../../Images/invoice.png')} style={styles.product} />
                                      </View>
                                  </View> */}
                              </View>
                            </View>
                            <View style={styles.circle1} />
                          </View>
                        </ScrollView>
           </SafeAreaView>
        );
    }
}
{/* <View style={styles.cardView}>
                              <View style={styles.cardv1}>
                                  <Text style={{color: 'grey'}}>Order No. - <Text style={{color: 'skyblue'}}>54</Text></Text>
                                  <Image source={require('../../Images/menu-(1).png')} style={styles.men} />
                              </View>
                          </View> */}

