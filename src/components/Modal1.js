import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Modal1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ismodalVisible: false,
    };
  }

  setModalVisible = (visible) => {
    this.setState({ ismodalVisible: visible });
  }

  render() {
    const { ismodalVisible } = this.state;

    return (
        <Modal
        animationType='fade'
        transparent={true}
        visible={this.props.ismodalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
          <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
              <Image source={require('../Images/contact.png')} resizeMode='contain' style={Styles.key} />
              <View style={Styles.text}>
                  <Text style={{fontSize: 30, fontWeight: 'bold', marginVertical: 5}}>Congrats!</Text>
                  <Text style={{color: 'grey', textAlign: 'center'}}>Your account is created!</Text>
              </View>
              <TouchableOpacity style={Styles.done} onPress={this.props.onClick}>
                  <Text style={{fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, color: 'white'}}>Done</Text>
              </TouchableOpacity>
          </View>
          </View>
          </Modal>
    );
  }
}

const Styles = StyleSheet.create({

    centeredView: {
        flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        height: '50%', 
        width: '85%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        elevation: 5
      },
      key: {
          height: '30%',
          width: '30%',
          marginVertical: 30,
      },
      text: {
          height: '30%',
          width: '55%',
          alignItems: 'center',
      },
      done: {
          height: '15%',
          width: '80%',
          backgroundColor: 'dodgerblue',
          justifyContent: 'center',
          alignItems: 'center'
      }

})