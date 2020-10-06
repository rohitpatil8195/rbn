//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, Animated, Dimensions, TouchableOpacity } from 'react-native';
import styles from "./Styles";
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNav from '../../components/TabNav';
import Contactscrl from '../../components/Contactscrl';

// create a component
export default class About extends Component {
    constructor(props){
        super(props);
        this.state = {
          isHome: false,
            isAbout: true,
            isPersonal: false,
            isCheck: false,
            isSearch: false,
            isFilter: false,
            isAir: false,
            isMaritime: false,
            isRoad: false,
            animation: new Animated.Value(0)
        }
    }

    isHomePressed=()=> {
        if (!this.state.isHome) {
            this.setState({isHome: true})
          } else {
            this.setState({isHome: false})
          }
          this.setState({isHome: true, isAbout: false, isPersonal: false, isContact: false})
        this.props.navigation.navigate('HomeScreen', {})
    }

    isPersonalPressed=()=> {
        if (!this.state.isPersonal) {
            this.setState({isPersonal: true})
          } else {
            this.setState({isPersonal: false})
          }
          this.setState({isHome: false, isAbout: false, isPersonal: true, isContact: false})
          this.props.navigation.toggleDrawer()
      }

    isAboutPressed=()=> {
        if (!this.state.isAbout) {
            this.setState({isAbout: true})
          } else {
            this.setState({isAbout: false})
          }
          this.setState({isHome: false, isAbout: true, isPersonal: false, isContact: false})
          this.props.navigation.navigate('About', {})
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
            <SafeAreaView style={styles.safe} >
                <ImageBackground source={require('../../Images/header-bg.png')} style={styles.imagebg} resizeMode='cover'>
                        <View style={styles.one}>
                        <View style={styles.view1}>
                            <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                            <Text style={styles.about}>About Us</Text>
                        </View>
                        </View>
                </ImageBackground>
                        <ScrollView style={{flex: 1}}>
                            <View style={styles.cardscrl}>
                                <View style={styles.scrl1}>
                                    <View style={styles.author}>
                                    <View style={styles.imageView}>
                                    <Image source={require('../../Images/ab-1.png')} style={styles.image1} />
                                    </View>
                                    <View style={styles.side}>
                                    <Text style={{fontSize: 12.5}}>CHI SIAMO{"\n"}Sono un giovane di origini senegalesi che, nel 
                                    corso della mia esperienza decennale nel settore della logistica in Italia,
                                    ho colto I'esigenza di facilitare il trasporto di merce B2B e B2C try 
                                    catch I'italia e il continente africano, in particolare il West Africa.</Text>
                                    </View>
                                    </View> 
                                <View style={styles.below}>
                                    <Text>Partendo da questa intuizione, ho coinvolto un 
                                        imprenditore del settore con consolidata esperienza e
                                        una giovance specializzata nella consulenza d'azienda
                                        e, insieme, abbiamo creato Exilium, una piattaforma 
                                        dove I'offerta di servizi di trasporto e sdoganamento
                                        dall'Italia al West Africa e la domanda di privati e
                                        aziende si incontrano con pochi semplici click.
                                    </Text>
                                </View>
                                <View style={styles.author1}>
                                <View style={styles.imageView1}>
                                    <Image source={require('../../Images/ab-2.png')} style={styles.image1} />
                                    </View>
                                    <View style={styles.side}>
                                    <Text style={{fontSize: 12.5}}>MISSION{"\n"}La nostra missione e di offire
                                    a tutti gli spedizionieri, soprattuto i piu piccoli specializzati nel groupage,
                                    la possibilitia di accrescere la propia visibilitia presso potenziali nuovi 
                                    clienti; dall'altro lato la nostra missione e fornie soluzioni di </Text>
                                    </View>
                                </View>
                                    <View style={styles.below1}>
                                        <Text>trasporto flessibili, sicure e tracciate ad un prezzo
                                            comptitvo, includendo la possibilita di gestire la procedura
                                            di sdoganamento internamete online.
                                            {"/n"}Inoltre, la nostra piattaforma mira a introdurre delle
                                            best practice nel settore dei trasporti che collegano I'Italia con
                                            il West Africa e facilitare I'acceso ai canali di spedizone.
                                        </Text>
                                    </View>
                                    <View style={styles.remaining}>
                                        <Text>LA NOSTRA OFFERTA</Text>
                                        <Text>Exilium e un network di spedizionieri specializzati nei
                                            servizi di trasporto marittimo, aereo e su gomma che collegano
                                            Italia con i Paesi del West Africa.
                                            I nostri Clienti possonao contare su una rete di spedizionieri
                                            certificati che offrono servizi rapidi e sicuri grazie all'utilizo
                                            di una piattaforma technologica che consente loro I'acquisto dei servizi
                                            di trasporto e sdoganamento internamete online.
                                            I nostri clienti hanno  la possibilita di agguiungere servizi
                                            addizionali quali la roccolta e la consegna a domicilio
                                            o I'assicurazione.
                                            Ogni servizio di trasporto e internamete traciato dalla
                                            conferma dell'acquisto al momento della consegna
                                            presso il luogo di destino.
                                        </Text>
                                    </View>
                                    </View>
                            </View>
                            <View style={styles.card2}>
                                <View style={styles.card21}>
                                <View style={styles.card211}>
                                    <Text style={{fontSize: 25, color: 'dodgerblue', fontWeight: 'bold'}}>1400</Text>
                                    <Text style={{fontSize: 15, color: 'dodgerblue', fontWeight: 'bold'}}>Delivered Packages</Text>
                                </View>
                                <View style={styles.card211}>
                                <Text style={{fontSize: 25, color: 'dodgerblue', fontWeight: 'bold'}}>18</Text>
                                    <Text style={{fontSize: 15, color: 'dodgerblue', fontWeight: 'bold'}}>Countries Covered</Text>

                                </View>

                                </View>
                                <View style={styles.card21}>
                                <View style={styles.card211}>
                                <Text style={{fontSize: 25, color: 'dodgerblue', fontWeight: 'bold'}}>99990</Text>
                                    <Text style={{fontSize: 15, color: 'dodgerblue', fontWeight: 'bold'}}>Satisfied Clients</Text>

                                </View>
                                <View style={styles.card211}>
                                <Text style={{fontSize: 25, color: 'dodgerblue', fontWeight: 'bold'}}>140</Text>
                                    <Text style={{fontSize: 15, color: 'dodgerblue', fontWeight: 'bold'}}>Tons of Goods</Text>

                                </View>

                                </View>
                            </View>
                                <View style={styles.card3}>
                                <ImageBackground style={styles.card31} source={require('../../Images/services-bg.jpg')}>
                                    <Image source={require('../../Images/play-button.png')} style={styles.icon} ></Image>
                                </ImageBackground>
                                </View>
                                <View style={styles.bottom}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'grey'}}>OUR CUSTOMERS</Text>
                                </View>
                                <View style={styles.card4}>
                                <View style={styles.card41}>
                                <View style={styles.card411}>
                                    <Image source={require('../../Images/avatar.png')} style={styles.avatar} />
                                    <Text style={styles.jn}>John Doe</Text>
                                    <Text style={styles.jn1}>Lorem Ipsum</Text>
                                </View>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                </View>
                                </View>
                                <View style={styles.arrows}>
                                    <View style={styles.arrows1}>
                                    <Image source={require('../../Images/arrow-pointing-to-right.png')} style={styles.iconL} resizeMode='center' />
                                    <Image source={require('../../Images/arrow-pointing-to-right.png')} style={styles.iconR} resizeMode='center' />
                                    </View>
                                </View>
                        </ScrollView>
                        <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
          <View style={[styles.sheet]}>
            <Animated.View style={[styles.popup, slideUp]}>
                <View style={styles.blueBar}>
            <Image source={require('../../Images/phone-contact.png')} style={styles.iconab} />
            <Text style={{color: 'white'}}>Contact Us</Text>
            <TouchableOpacity onPress={this.handleClose}>
                <View style={styles.closeIcon}>
                  <Image source={require('../../Images/close.png')} style={styles.iconab} />
                  </View>
                </TouchableOpacity>
                </View>
              
              <Contactscrl />
            </Animated.View>
          </View>
        </Animated.View>
                        <TabNav onClick={this.isHomePressed} personClick={this.isPersonalPressed} contactClick={this.handleOpen} />
            </SafeAreaView>
        );
    }
}
