import StepIndicator from '../../components/StepIndicator';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';

export default class Proform extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StepIndicator />
        <View style={styles.bars}>
          <TextInputComponent  onChangeText={this.onChangeTextEmail} placeholder='First Name' Ref={input => { this.userName = input }} />
        </View>
        <View style={styles.bars}>
          <TextInputComponent  onChangeText={this.onChangeTextEmail} placeholder='Last Name' Ref={input => { this.userName = input }} />
        </View>
        <View style={styles.bars}>
          <TextInputComponent  onChangeText={this.onChangeTextEmail} placeholder='Phone' Ref={input => { this.userName = input }} />
        </View>
        <View style={styles.bars}>
          <TextInputComponent  onChangeText={this.onChangeTextEmail} placeholder='Email' Ref={input => { this.userName = input }} />
        </View>
        <View style={styles.bars}>
          <TextInputComponent  onChangeText={this.onChangeTextEmail} placeholder='Country' Ref={input => { this.userName = input }} />
        </View>
        <View style={styles.roe}>
        <View style={styles.bars1}>
          <TextInputComponent  onChangeText={this.onChangeTextEmail} placeholder='State' Ref={input => { this.userName = input }} />
        </View>
        <View style={styles.bars1}>
          <TextInputComponent  onChangeText={this.onChangeTextEmail} placeholder='City' Ref={input => { this.userName = input }} />
        </View>
        </View>
        <View style={styles.bars}>
          <TextInputComponent  onChangeText={this.onChangeTextEmail} placeholder='Address' Ref={input => { this.userName = input }} />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.cancel}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextStep}>
            <Text style={{color: 'white'}}>Next Step</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
