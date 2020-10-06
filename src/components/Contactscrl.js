import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
const cards = Array(20).fill(0);

const Contactscrl = (props) => {
const navigation = useNavigation();
    return (
    <View style={styles.scroll}>
        <View style={styles.bar}>
            <TouchableOpacity onPress={() => {navigation.navigate('Question', {})}} style={styles.bar1}>
                <Image source={require('../Images/success2.png')} style={styles.icon} />
                <Text style={styles.blue}>Question or Technical issue</Text>
            </TouchableOpacity>
            <View style={styles.bar2}>
                <Image source={require('../Images/arrow-point-to-right.png')} style={styles.arrow} />
            </View>
        </View>     
        <View style={styles.bar}>
            <TouchableOpacity onPress={() => {navigation.navigate('Shipping', {})}} style={styles.bar1}>
                <Image source={require('../Images/success2.png')} style={styles.icon} />
                <Text style={styles.blue}>Shipping</Text>
            </TouchableOpacity>
            <View style={styles.bar2}>
                <Image source={require('../Images/arrow-point-to-right.png')} style={styles.arrow} />
            </View>
        </View>            
        <View style={styles.bar}>
            <TouchableOpacity onPress={() => {navigation.navigate('Payment', {})}} style={styles.bar1}>
                <Image source={require('../Images/success2.png')} style={styles.icon} />
                <Text style={styles.blue}>Payment & Invoice</Text>
            </TouchableOpacity>
            <View style={styles.bar2}>
                <Image source={require('../Images/arrow-point-to-right.png')} style={styles.arrow} />
            </View>
        </View>            
        <View style={styles.bar}>
            <TouchableOpacity onPress={() => {navigation.navigate('Modify', {})}} style={styles.bar1}>
                <Image source={require('../Images/success2.png')} style={styles.icon} />
                <Text style={styles.blue}>Modify or Cancel</Text>
            </TouchableOpacity>
            <View style={styles.bar2}>
                <Image source={require('../Images/arrow-point-to-right.png')} style={styles.arrow} />
            </View>
        </View>            
        <View style={styles.bar}>
            <TouchableOpacity onPress={() => {navigation.navigate('Other', {})}} style={styles.bar1}>
                <Image source={require('../Images/success2.png')} style={styles.icon} />
                <Text style={styles.blue}>Other</Text>
            </TouchableOpacity>
            <View style={styles.bar2}>
                <Image source={require('../Images/arrow-point-to-right.png')} style={styles.arrow} />
            </View>
        </View>                      

    </View>
    );
  
}

const styles = StyleSheet.create({
  scroll: {
    height: 200,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  bar: {
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bar1: {
    height: '100%',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bar2: {
      height: '100%',
      width: '8%',
  },
  blue: {
    fontSize: 15,
    color: 'royalblue',
    marginHorizontal: 10
  },
  card: {
    height: "100%",
    width: '100%',
  },
  shipping: {
      height: '7%',
      width: '100%',
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'center'
  },
  shipping1: {
    height: '100%',
    width: '90%',
},
shipping2: {
  height: '12%',
  width: '90%',
  alignItems: 'center',
  justifyContent: 'space-around',
},
shipc: {
    height: '40%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
},
shipc1: {
    height: '35%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
},
arrow: {
    height: 15,
    width: 15,
    transform:[{rotate: '270deg'}]
},
icon: {
    height:15,
    width: 15
},
bottom: {
    height: '10%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4
},
clear: {
    height: '100%',
    width: '100%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5

},
apply: {
    height: '100%',
    width: '100%',
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
}
});

export default Contactscrl;