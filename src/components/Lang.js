//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import i18n from "i18n-js";

// create a component
export default class Lang extends Component {
    render() {
        return (
            // <View style={styles.container}></View>
            <View style={styles.lang}>
                          <TouchableOpacity onPress={() => {
                              i18n.changeLanguage(i18n.language = 'it')
                          }} style={styles.one1}>
                            <Image source={require('../Images/download.png')} style={styles.flag} />
                            <Text style={styles.con}>Italian</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => {
                              i18n.changeLanguage(i18n.language = 'fr')
                          }} style={styles.two2}>
                            <Image source={require('../Images/download-(1).png')} style={styles.flag} />
                            <Text style={styles.con}>French</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => {
                              i18n.changeLanguage(i18n.language = 'en')
                          }} style={styles.three3}>
                            <Image source={require('../Images/download-(2).png')} style={styles.flag} />
                            <Text style={styles.con}>English</Text>
                          </TouchableOpacity>

                        </View>
        );
    }
}

const styles = StyleSheet.create({
    // container: {
    //     height: 100,
    //     width: '70%',
    //     backgroundColor: 'white',
    //     borderRadius: 10,
    //     position: 'absolute',
    //     marginLeft: 120,
    //     bottom: '-30%'
    // }
    lang: {
        height: 150, 
        width: '40%', 
        backgroundColor: 'lightgrey', 
        position: 'absolute',
        borderRadius: 10, 
        marginLeft: 195,
        marginTop: 50,
        elevation: 11,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    one1: {
        height: '33%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    two2: {
        height: '33%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white'
    },
    three3: {
        height: '33%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    con: {
        fontSize: 15,
        marginHorizontal: 10
    },
    flag: {
        height: '50%',
        width: '25%'
    },
})