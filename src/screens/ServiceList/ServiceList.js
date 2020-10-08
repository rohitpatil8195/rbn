import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, Animated, Dimensions } from 'react-native';
import styles from "./Styles";
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
// import Scroller from '../../components/Scroller';


export default class ServiceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheck: false,
            isSearch: false,
            isFilter: false,
            isAir: false,
            isMaritime: false,
            isRoad: false,
            animation: new Animated.Value(0),
            isHc: false,
            isSw1: false,
            isSw2: false,
            isHd: false,
            isIi: false,
            isEi: false
        };
    }

    // onApply = () => {
    //     this.state.isHc && this.state.isHd && this.state.isEi == true ?

    // }

    isHcPressed = () => {
        if (!this.state.isHc) {
            this.setState({ isHc: true })
        } else {
            this.setState({ isHc: false })
        }
    }

    isSw1Pressed = () => {
        if (!this.state.isSw1) {
            this.setState({ isSw1: true })
        } else {
            this.setState({ isSw1: false })
        }
    }

    isHdPressed = () => {
        if (!this.state.isHd) {
            this.setState({ isHd: true })
        } else {
            this.setState({ isHd: false })
        }
    }

    isSw2Pressed = () => {
        if (!this.state.isSw2) {
            this.setState({ isSw2: true })
        } else {
            this.setState({ isSw2: false })
        }
    }

    isIiPressed = () => {
        if (!this.state.isIi) {
            this.setState({ isIi: true })
        } else {
            this.setState({ isIi: false })
        }
    }

    isEiPressed = () => {
        if (!this.state.isEi) {
            this.setState({ isEi: true })
        } else {
            this.setState({ isEi: false })
        }
    }

    componentDidMount = () => {
        this.handleOpen()
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

    isCheckPressed = () => {
        if (!this.state.isCheck) {
            this.setState({ isCheck: true })
        } else {
            this.setState({ isCheck: false })
        }
    }

    isSearchPressed = () => {
        if (!this.state.isSearch) {
            this.setState({ isSearch: true })
        } else {
            this.setState({ isSearch: false })
        }
    }

    isFilterPressed = () => {
        if (!this.state.isFilter) {
            this.setState({ isFilter: true })
        } else {
            this.setState({ isFilter: false })
        }
    }

    isAirPressed = () => {
        if (!this.state.isAir) {
            this.setState({ isAir: true })
        } else {
            this.setState({ isAir: false })
        }
        this.setState({ isAir: true, isMaritime: false, isRoad: false })
    }

    isMaritimePressed = () => {
        if (!this.state.isMaritime) {
            this.setState({ isMaritime: true })
        } else {
            this.setState({ isMaritime: false })
        }
        this.setState({ isAir: false, isMaritime: true, isRoad: false })
    }

    isRoadPressed = () => {
        if (!this.state.isRoad) {
            this.setState({ isRoad: true })
        } else {
            this.setState({ isRoad: false })
        }
        this.setState({ isAir: false, isMaritime: false, isRoad: true })
    }

    sender = () => {
        this.props.navigation.navigate('Sender', {})
    }

    forgot = () => {
        this.props.navigation.navigate('ForgotScreen', {})
    }

    register = () => {
        this.props.navigation.navigate('RegisterScreen', {})
    }

    isMenuPressed = () => {
        this.props.navigation.toggleDrawer()
    }

    serviceList = () => {
        this.props.navigation.navigate('ServiceList', {})
    }

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
            <View>
                <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
                    <View style={styles.one}>
                        <View style={styles.view1}>
                            <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                            <Text style={styles.about}>Services List</Text>
                        </View>
                        <TouchableOpacity onPress={this.handleOpen}>
                            <Image source={require('../../Images/filter-sort-blue.png')} style={styles.filter} resizeMode='center' />
                        </TouchableOpacity>
                        {/* <Image source={require('../../Images/tracking.png')} style={styles.back} resizeMode='center' /> */}
                    </View>
                </ImageBackground>
                <View style={styles.card3}>
                    <View style={styles.card2c}>
                        {
                            this.state.isAir == true ?
                                <TouchableOpacity onPress={this.isAirPressed} style={styles.compo}>
                                    <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon} />
                                    <Text style={{ color: 'dodgerblue' }}>Air</Text>
                                    <Image source={require('../../Images/plane.png')} style={styles.icon} />
                                </TouchableOpacity>

                                :
                                <TouchableOpacity onPress={this.isAirPressed} style={styles.compo}>
                                    <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon} />
                                    <Text>Air</Text>
                                    <Image source={require('../../Images/plane(1).png')} style={styles.icon} />
                                </TouchableOpacity>
                        }
                        {this.state.isMaritime ?
                            <TouchableOpacity onPress={this.isMaritimePressed} style={styles.compo1}>
                                <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon} />
                                <Text style={{ color: 'dodgerblue' }}>Maritime</Text>
                                <Image source={require('../../Images/ocean-transportation.png')} style={styles.icon} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={this.isMaritimePressed} style={styles.compo1}>
                                <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon} />
                                <Text>Maritime</Text>
                                <Image source={require('../../Images/ocean-transportation-(1).png')} style={styles.icon} />
                            </TouchableOpacity>
                        }
                        {this.state.isRoad ?

                            <TouchableOpacity onPress={this.isRoadPressed} style={styles.compo2}>
                                <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon} />
                                <Text style={{ color: 'dodgerblue' }}>Road</Text>
                                <Image source={require('../../Images/delivery-truck-with-packages-behind.png')} style={styles.icon} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={this.isRoadPressed} style={styles.compo2}>
                                <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon} />
                                <Text>Road</Text>
                                <Image source={require('../../Images/delivery-truck-with-packages-behind(1).png')} style={styles.icon} />
                            </TouchableOpacity>

                        }
                    </View>
                </View>
                <ScrollView contentContainerStyle={{ height: '100%', width: '100%' }} style={{}}>

                    {

                        this.state.isHc && this.state.isHd && this.state.isEi && this.state.isMaritime == true ?
                            <>
                                <TouchableOpacity onPress={this.sender} style={styles.card4}>
                                    <View style={styles.morehalf}>
                                        <View style={styles.half}>
                                            <View style={styles.slotc}>
                                                <Text>17 Oct 19</Text>
                                                <Text style={{ fontSize: 10 }}>Camapania, Itlay</Text>
                                            </View>
                                        </View>
                                        <Image source={require('../../Images/send.png')} style={styles.send} />

                                        <View style={styles.half}>
                                            <View style={styles.slotc}>
                                                <Text>20 Oct 19</Text>
                                                <View style={styles.line4}></View>
                                                <Text style={{ fontSize: 10 }}>Dakar, Senegal</Text>
                                            </View>
                                        </View>
                                        <View style={styles.remain}>
                                            <View style={styles.charges}>
                                                <Text >400$</Text>
                                                <Text style={{ fontSize: 8 }}>Include insurance</Text>
                                                <View style={styles.line3}></View>
                                                <Text>Type - Air</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.morehalf1}>
                                        <View style={styles.small}>
                                            <Image source={require('../../Images/product.png')} style={styles.icon} />
                                            <Text style={{ fontSize: 8 }}>Home Collection</Text>
                                        </View>
                                        <View style={styles.small}>
                                            <Image source={require('../../Images/product.png')} style={styles.icon} />
                                            <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                                        </View>
                                        <View style={styles.remain1}>
                                            <View style={styles.space}>
                                                <Text style={{ fontSize: 8 }}>Available Space:</Text>
                                                <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            </>
                            :
                            null
                    }
                </ScrollView>

                <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
                    <View style={[styles.sheet]}>
                        <Animated.View style={[styles.popup, slideUp]}>
                            <View style={styles.blueBar}>
                                <Image source={require('../../Images/filter-sort-white.png')} style={styles.icon} />
                                <Text style={{ color: 'white' }}>Services Filter</Text>
                                <TouchableOpacity onPress={this.handleClose}>
                                    <View style={styles.closeIcon}>
                                        <Image source={require('../../Images/close.png')} style={styles.icon} />
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.scroll}>
                                <View style={styles.shipping}>
                                    <View style={styles.shipping1}>
                                        <Text>Shipping</Text>
                                    </View>
                                </View>
                                <View style={styles.shipping2}>
                                    <View style={styles.shipc}>
                                        <Text style={{ color: 'grey' }}>Home Collection</Text>
                                        <TouchableOpacity onPress={this.isHcPressed}>{
                                            this.state.isHc ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon1} />

                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.icon1} />

                                        }</TouchableOpacity>
                                    </View>
                                    <View style={styles.shipc1}>
                                        <Text style={{ color: 'grey' }}>At Shipper's Warehouse</Text>
                                        <TouchableOpacity onPress={this.isSw1Pressed}>{
                                            this.state.isSw1 ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon1} />

                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.icon1} />

                                        }</TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.shipping}>
                                    <View style={styles.shipping1}>
                                        <Text>Delivery required</Text>
                                    </View>
                                </View>
                                <View style={styles.shipping2}>
                                    <View style={styles.shipc}>
                                        <Text style={{ color: 'grey' }}>Home Delivery</Text>
                                        <TouchableOpacity onPress={this.isHdPressed}>{
                                            this.state.isHd ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon1} />

                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.icon1} />

                                        }</TouchableOpacity>
                                    </View>
                                    <View style={styles.shipc1}>
                                        <Text style={{ color: 'grey' }}>At Shipper's Warehouse</Text>
                                        <TouchableOpacity onPress={this.isSw2Pressed}>{
                                            this.state.isSw2 ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon1} />

                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.icon1} />

                                        }</TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.shipping}>
                                    <View style={styles.shipping1}>
                                        <Text>Add insurance service</Text>
                                    </View>
                                </View>
                                <View style={styles.shipping2}>
                                    <View style={styles.shipc}>
                                        <Text style={{ color: 'grey' }}>Include insurance</Text>
                                        <TouchableOpacity onPress={this.isIiPressed}>{
                                            this.state.isIi ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon1} />

                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.icon1} />

                                        }</TouchableOpacity>
                                    </View>
                                    <View style={styles.shipc1}>
                                        <Text style={{ color: 'grey' }}>Exclude insurance</Text>
                                        <TouchableOpacity onPress={this.isEiPressed}>{
                                            this.state.isEi ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon1} />

                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.icon1} />

                                        }</TouchableOpacity>

                                    </View>
                                </View>
                                <View style={styles.bottom}>
                                    <TouchableOpacity style={{ width: '45%' }} onPress={this.handleClose}>
                                        <View style={styles.clear}>
                                            <Text>Clear</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: '45%' }} onPress={this.handleClose}>
                                        <View style={styles.apply}>
                                            <Text style={{ color: 'white' }}>Apply</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Animated.View>
                    </View>
                </Animated.View>
            </View>
        );
    }
}
