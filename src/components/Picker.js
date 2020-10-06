//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

// create a component
export default class PickerComponent extends Component {

    state = {
        language: 'english'
    }

    render() {
        return (
            <View style={{height: '25%', width: '100%', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
                <Picker 
                    label='Product Category'
                    style={{width: '100%'}}
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex)=> this.setState({language: itemValue})}
                >
                    <Picker.item label='Spanish' value='spanish' />
                    <Picker.item label='English' value='english' />
                </Picker>
            </View>
        );
    }
}
