import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.pop}>
                <View style={styles.poprow1}>
                    <Image source={require('../Images/success2.png')} style={styles.success2} resizeMode='center' />
                    <Text style={styles.dodg}>Delivery Tracking</Text>
                </View>
                <View style={styles.poprow2}>
                    <Image source={require('../Images/success2.png')} style={styles.success2} resizeMode='center' />
                    <Text style={styles.dodg}>Cancel Your Order</Text>
                </View>
                <View style={styles.poprow2}>
                    <Image source={require('../Images/success2.png')} style={styles.success2} resizeMode='center' />
                    <Text style={styles.dodg}>Modify Your Order</Text>
                </View>
                <View style={styles.poprow3}>
                    <Image source={require('../Images/success2.png')} style={styles.success2} resizeMode='center' />
                    <Text style={styles.dodg}>Report An Incident</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pop: {
        height: 160,
        width: '50%',
        borderRadius: 5,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        backgroundColor: '#F2F2F2',
        marginVertical: 10,
        left: '43%'
    },
    poprow1: {
        height: '24.5%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    success2: {
        height: 15,
        width: 15,
    },
    dodg: {
        fontSize: 15,
        color: 'dodgerblue',
        marginHorizontal: 5
    },
    poprow2: {
        height: '24.5%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    poprow3: {
        height: '24.5%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
})
