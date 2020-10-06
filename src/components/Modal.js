import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import TextInputComponent from '../components/TextInputComponent';
import DropDown from '../components/DropDown';

class ModalComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            userName: '',
            password: '',
            ismodalVisible: false,
        }
    }

  setModalVisible = () => {
    this.setState({ ismodalVisible: !this.state.ismodalVisible });
  }

  onChangeTextEmail =(text)=>{
    this.setState({userName:text},)         
  }

  maxfigureadd = () => {
    this.props.navigation.navigate('MaxfigureAdd', {})
  }

  render() {
    const { ismodalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType='none'
          transparent={true}
          visible={this.props.ismodalVisible}
          onRequestClose={() => { this.closeModal
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#89f7fe', '#66a6ff']} style={styles.headerView}>
                <View style={{height: '100%', width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 18, color: 'white'}}>Time Warning</Text>
              <TouchableHighlight
                style={{ backgroundColor: "#2196F3", borderRadius: 20 }}
                onPress={() => { 
                  this.props.closeModal()
                }}
              >
                <Image source={require('../images/close.png')} style={styles.image}></Image>
              </TouchableHighlight>
                </View>
              </LinearGradient>
              <View style={{height: 25, width: '50%', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', backgroundColor: 'red'}}>
                <Text>Prepare Time</Text>
              </View>
              <View style={{height: 25, width: '50%', justifyContent: 'center', alignSelf: 'center', alignItems: 'center'}}>
              <Text>Lasts Seconds</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: 300, 
    width: '90%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
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
  headerView: {
    height: 50,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center'
  },
  image: {
    height: 30,
    width: 30
  },
  add: {
    height: 35,
    width: 100,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ModalComponent;
