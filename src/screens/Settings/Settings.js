//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Image, Switch, TouchableOpacity } from 'react-native';
import styles from "./Styles";
import i18n from "i18n-js";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { triggerLogout } from '../../actions';
import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

// create a component
class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitchOn: true
        }
    }
componentDidMount=async()=>{
    let chech = await AsyncStorage.getItem('persist:sampleRedux');
    let js = JSON.parse(chech);
   let authreducer = JSON.parse(js['authReducer'])
   let loginmediaobj = authreducer['loginMediaObj'];
   console.log("log obj",loginmediaobj)
}

    logoutOptions=async()=>{
    

if(GoogleSignin  != true){
   this.signOut();
   console.log("google")
   this.logout();
}else{
    this.logout();
    console.log("async")
}
}

    signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          this.setState({ user: null }); // Remember to remove the user from your app's state as well
          this.props.navigation.replace('Login', {})
        } catch (error) {
          console.error(error);
        }
      }             
          logout=()=>{
        this.props.navigation.replace('Login', {})
        this.props.triggerLogout();
        //AsyncStorage.clear()
      
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
                    <TouchableOpacity onPress={this.logoutOptions} style={styles.v1}>
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