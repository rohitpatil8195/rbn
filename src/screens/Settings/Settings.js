//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Image, Switch, TouchableOpacity } from 'react-native';
import styles from "./Styles";
import i18n from "i18n-js";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { triggerLogout } from '../../actions';

// create a component
class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitchOn: true
        }
    }

    logout=()=>{
        this.props.navigation.replace('Login', {})
        this.props.triggerLogout();
    }

    render() {
        return (
            <SafeAreaView>
                 <ImageBackground source={require('../../Images/header-bg.png')} style={styles.imagebg} resizeMode='cover'>
                        <View style={styles.one}>
                        <View style={styles.view1}>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                            </TouchableOpacity>
                            <Text style={styles.about}>{i18n.t('Settings')}</Text>
                        </View>
                        </View>
                </ImageBackground>
                <View style={styles.v}>
                    <View style={styles.v1}>
                        <Text style={{marginHorizontal: 10}}>{i18n.t('Notification')}</Text>
                        <Switch
                            onValueChange={isSwitchOn => this.setState({ isSwitchOn })} style={{ fontWeight: "400", marginHorizontal: 10}}
                            value={this.state.isSwitchOn} onChange={() => this.setState({ isSwitchOn: false })} />
                    </View>
                    <TouchableOpacity onPress={this.logout} style={styles.v1}>
                    <Text style={{marginHorizontal: 10}}>{i18n.t('Logout')}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    let {
      loginObj
    } = state.authReducer
  
  
    return { loginObj }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        triggerLogout
    }, dispatch)
  }
  
  export default connect(
    mapStateToProps, mapDispatchToProps
  )(Settings);