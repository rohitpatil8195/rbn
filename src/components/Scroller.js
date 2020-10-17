import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

// const randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
// const cards = Array(20).fill(0);

class Scroller extends Component {
    constructor(props){
        super(props);
        this.state = {
            isCheck1: false,
            isCheck2: false,
            isCheck3: false,
            isCheck4: false,
            isCheck5: false,
            isCheck6: false,
        }
    }

    isCheckPressed1=()=> {
        if (!this.state.isCheck1) {
            this.setState({isCheck1: true})
          } else {
            this.setState({isCheck1: false})
          }
         
    }

    isCheckPressed2=()=> {
        if (!this.state.isCheck2) {
            this.setState({isCheck2: true})
          } else {
            this.setState({isCheck2: false})
          }
         
    }

    isCheckPressed3=()=> {
        if (!this.state.isCheck3) {
            this.setState({isCheck3: true})
          } else {
            this.setState({isCheck3: false})
          }
    }

    isCheckPressed4=()=> {
        if (!this.state.isCheck4) {
            this.setState({isCheck4: true})
          } else {
            this.setState({isCheck4: false})
          }
    }
    
    isCheckPressed5=()=> {
        if (!this.state.isCheck5) {
            this.setState({isCheck5: true})
          } else {
            this.setState({isCheck5: false})
          }
    }

    isCheckPressed6=()=> {
        if (!this.state.isCheck6) {
            this.setState({isCheck6: true})
          } else {
            this.setState({isCheck6: false})
          }
    }

  render() {
    return (
    <View style={styles.scroll1}>
                <View style={styles.shipping00}>
                    <View style={styles.shipping1}>
                        <Text>Shipping</Text>
                    </View>
                </View>
                <View style={styles.shipping2}>
                    <View style={styles.shipc}>
                        <Text style={{color: 'grey'}}>Home Collection</Text>
                        <TouchableOpacity onPress={this.isCheckPressed1}>{
                                    this.state.isCheck1 ? 
                                <Image source={require('../Images/black-check-box-with-white-check.png')} style={styles.iconzzz} />   

                                :
                                <Image source={require('../Images/check-box-empty.png')} style={styles.iconzzz} />
   
                                }</TouchableOpacity>
                    </View>
                    <View style={styles.shipc1}>
                    <Text style={{color: 'grey'}}>At Shipper's Warehouse</Text>
                    <TouchableOpacity onPress={this.isCheckPressed2}>{
                                    this.state.isCheck2 ?
                                <Image source={require('../Images/black-check-box-with-white-check.png')} style={styles.iconzzz} />   

                                :
                                <Image source={require('../Images/check-box-empty.png')} style={styles.iconzzz} />
   
                                }</TouchableOpacity>
                    </View>
                </View>
                <View style={styles.shipping00}>
                <View style={styles.shipping1}>
                        <Text>Delivery required</Text>
                </View>
                </View>
                <View style={styles.shipping2}>
                    <View style={styles.shipc}>
                    <Text style={{color: 'grey'}}>Home Delivery</Text>
                    <TouchableOpacity onPress={this.isCheckPressed3}>{
                                    this.state.isCheck3 ?
                                <Image source={require('../Images/black-check-box-with-white-check.png')} style={styles.iconzzz} />   

                                :
                                <Image source={require('../Images/check-box-empty.png')} style={styles.iconzzz} />
   
                                }</TouchableOpacity>
                    </View>
                    <View style={styles.shipc1}>
                    <Text style={{color: 'grey'}}>At Shipper's Warehouse</Text>
                    <TouchableOpacity onPress={this.isCheckPressed4}>{
                                    this.state.isCheck4 ?
                                <Image source={require('../Images/black-check-box-with-white-check.png')} style={styles.iconzzz} />   

                                :
                                <Image source={require('../Images/check-box-empty.png')} style={styles.iconzzz} />
   
                                }</TouchableOpacity>
                    </View>
                </View>
                <View style={styles.shipping00}>
                <View style={styles.shipping1}>
                        <Text>Add insurance service</Text>
                </View>
                </View>
                <View style={styles.shipping2}>
                    <View style={styles.shipc}>
                    <Text style={{color: 'grey'}}>Include insurance</Text>
                    <TouchableOpacity onPress={this.isCheckPressed5}>{
                                    this.state.isCheck5 ?
                                <Image source={require('../Images/black-check-box-with-white-check.png')} style={styles.iconzzz} />   

                                :
                                <Image source={require('../Images/check-box-empty.png')} style={styles.iconzzz} />
   
                                }</TouchableOpacity>
                    </View>
                    <View style={styles.shipc1}>
                    <Text style={{color: 'grey'}}>Exclude insurance</Text>
                    <TouchableOpacity onPress={this.isCheckPressed6}>{
                                    this.state.isCheck6 ?
                                <Image source={require('../Images/black-check-box-with-white-check.png')} style={styles.iconzzz} />   

                                :
                                <Image source={require('../Images/check-box-empty.png')} style={styles.iconzzz} />
   
                                }</TouchableOpacity>

                    </View>
                </View>
                <View style={styles.bottomzzz}>
                    <TouchableOpacity style={{ width: '45%'}}>
                    <View style={styles.clearzzz}>
                        <Text>Clear</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '45%'}}>
                    <View style={styles.applyzzz}>
                        <Text style={{color: 'white'}}>Apply</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll1: {
    height: 350,
    width: '100%',
    alignItems: 'center'
  },
  
  shipping00: {
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
iconzzz: {
    height:15,
    width: 15
},
bottomzzz: {
    height: '10%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4
},
clearzzz: {
    height: '100%',
    width: '100%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5

},
applyzzz: {
    height: '100%',
    width: '100%',
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
}
});

export default Scroller;