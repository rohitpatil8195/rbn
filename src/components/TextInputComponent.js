import React, { Component } from 'react';
import { View, Text, TextInput, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';

export default class TextInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //alert(JSON.stringify(this.props))
  }
  render() {
    return (
      <View style={{ flexDirection: 'column', width: '92%', }}>
        <View
          style={{
            height: Dimensions.get('window').height * 0.08,
            width: '100%',
            flexDirection: 'row',
            marginBottom: 10,
            justifyContent: 'flex-start',
          }}>
          {this.props.isIconrequired ?
            <View
              style={{
                height: 50,
                width: '15%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={this.props.source}
                style={[{
                  height: '60%',
                  width: '60%',
                  resizeMode: 'contain',
                }, this.props.imageStyle]}></Image>
            </View>
            : null}
          <TextInput
            onEndEditing={this.props.onEndEditing}
            editable={this.props.editable}
            ref={this.props.Ref}
            onChangeText={(text) => this.props.onChangeText(text, this.props.placeholder)}
            style={[{
              height: 50,
              width: this.props.isIconrequired ? '90%' : '100%',
            }, this.props.designStyle]}
            onTouchStart={this.props.onTouchStart}
            // underlineColorAndroid='skyblue'
            underlineColorAndroid={this.props.underlineColorAndroid}
            value={this.props.value}
            keyboardType={this.props.keyboardType}
            maxLength={this.props.maxLength}
            secureTextEntry={this.props.secureTextEntry}
            placeholder={this.props.placeholder}></TextInput>


        </View>
        {this.props.error ? <ErrorMessage errorValue={this.props.error} errorStyle={this.props.errorStyle} /> : null}
      </View>
    );
  }
}

TextInputComponent.propTypes = {
  isIconrequired: PropTypes.bool,
  placeholder: PropTypes.string,
  // isDropdownSmall: PropTypes.bool,
  // isFeildOptional: PropTypes.bool,
  // isCreateAppointment: PropTypes.bool,
  // onSelect: PropTypes.func,
  // resetValue: PropTypes.func,
  onChangeText: PropTypes.func,
  // onDropdownWillHide: PropTypes.func,
};
TextInputComponent.defaultProps = {
  isIconrequired: true,
  // isDropdownSmall: false,
  // isCreateAppointment: false,
  // isFeildOptional: false,
  placeholder: 'default prop',
  onChangeText: () => {
    // alert('defaul value')
  },
  // onDropdownWillShow: () => {

  // },
  // onDropdownWillHide: () => {

  // },
  // resetValue: () => {

  // },
}