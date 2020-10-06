//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Animated, Dimensions, ScrollView } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';
import Lang from '../../components/Lang';
import TabNav from '../../components/TabNav';
import Contactscrl from '../../components/Contactscrl';
import i18n from "i18n-js";
import { validateAll } from "indicative/validator";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { triggerAuthForgot } from '../../actions';
import Loader from '../../components/Loader';

// create a component
class ForgotScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck1: false,
      islang: false,
      isHome: false,
      isAbout: false,
      isPersonal: false,
      isCheck: false,
      isSearch: false,
      isFilter: false,
      isAir: false,
      isMaritime: false,
      isRoad: false,
      animation: new Animated.Value(0),
      email: '',
      errors: {},
      error: '',
      isProcessing: false,
    }
  }

  onChangeTextEmail = (text) => {
    this.setState({ email: text })
  }

  validationRules = {
    email: 'required|email',
  };

  validtionMessages = {
    'email.required': 'Please Enter the email',
  };

  onForgotPasswordValidation = async () => {
    const data = this.state;
    try {
      await validateAll(data, this.validationRules, this.validtionMessages);
    } catch (error) {
      const formattedErrors = {};
      error.forEach(errors => formattedErrors[errors.field] = errors.message);
      this.setState({ errors: formattedErrors });
      return false
    }
    // this.onForgotApi();
    return true
  };

  onForgotApi = () => {
    this.setState({ isProcessing: true });

    console.log("call " + this.state.email.toLowerCase());
    const isFormValid = this.onForgotPasswordValidation();
    if (!isFormValid) {
      this.setState({ isProcessing: false });
      return false
    }
    let formdata = new FormData();
    formdata.append("user_email", this.state.email.toLowerCase())

    this.props.triggerAuthForgot(formdata, this.onForgotSuccess, this.onForgotError)

  }

  onForgotSuccess = () => {
    this.setState({ isProcessing: false });
    alert('Email has been sent')
  }

  onForgotError = () => {
    this.setState({ isProcessing: false });

    alert('Something went wrong')
  }

  isLangPressed = () => {
    if (!this.state.islang) {
      this.setState({ islang: true })
    } else {
      this.setState({ islang: false })
    }
  }

  forgot = () => {
    this.props.navigation.navigate('ForgotScreen', {})
  }

  isHomePressed = () => {
    if (!this.state.isHome) {
      this.setState({ isHome: true })
    } else {
      this.setState({ isHome: false })
    }
    this.setState({ isHome: true, isAbout: false, isPersonal: false, isContact: false })
    this.props.navigation.navigate('HomeScreen', {})
  }

  isPersonalPressed = () => {
    if (!this.state.isPersonal) {
      this.setState({ isPersonal: true })
    } else {
      this.setState({ isPersonal: false })
    }
    this.setState({ isHome: false, isAbout: false, isPersonal: true, isContact: false })
  }

  isAboutPressed = () => {
    if (!this.state.isAbout) {
      this.setState({ isAbout: true })
    } else {
      this.setState({ isAbout: false })
    }
    this.setState({ isHome: false, isAbout: true, isPersonal: false, isContact: false })
    this.props.navigation.navigate('About', {})
  }

  handleOpen = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  handleClose = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  login = () => {
    this.props.navigation.navigate('Login', {})
  }

  render() {
    const screenHeight = Dimensions.get("window").height;

    const backdrop = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 0.01],
            outputRange: [screenHeight, 0],
            extrapolate: "clamp",
          }),
        },
      ],
      opacity: this.state.animation.interpolate({
        inputRange: [0.01, 0.5],
        outputRange: [0, 1],
        extrapolate: "clamp",
      }),
    };

    const slideUp = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0.01, 1],
            outputRange: [0, -1 * screenHeight],
            extrapolate: "clamp",
          }),
        },
      ],
    };

    return (
      <ImageBackground source={require('../../Images/1-login-bg.png')} style={styles.imagebg} resizeMode='cover'>

        <View style={styles.header}>
          <TouchableOpacity onPress={this.login} style={styles.back}>
            <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back1} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.isLangPressed} style={styles.flag}>
            <Image source={require('../../Images/download-(2).png')} style={styles.flag1} />
          </TouchableOpacity>
        </View>
        {
          this.state.islang == true ?
            <Lang />
            :
            null
        }
        <View style={styles.logobackground}>
          <Image source={require('../../Images/logo.png')} style={styles.logo} resizeMode='contain' />
        </View>
        <View style={styles.card}>
          <Loader loading={this.state.isProcessing} />
          <Text style={styles.signin}>{i18n.t('Forgot Password')}</Text>
          <View style={styles.empty1}></View>
          <View style={styles.b1}>
            <Text style={styles.email}>{i18n.t('Email Id')}</Text>
          </View>
          <View style={styles.bars}>
            <TextInputComponent source={require('../../Images/envelope.png')} onChangeText={this.onChangeTextEmail} placeholder={i18n.t('Username')} Ref={input => { this.userName = input }}
              errorStyle={{ marginTop: '-6%' }} error={this.state.errors['email']} />
          </View>
          <View style={styles.empty}></View>

          <TouchableOpacity style={styles.touch} onPress={() => this.onForgotApi()}>
            <View style={styles.singinbutton}>
              <Image source={require('../../Images/success.png')} style={styles.buttonicon} resizeMode='center' />
              <Text style={styles.SIGNIN}>{i18n.t('Get New Password')}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
          <View style={[styles.sheet]}>
            <Animated.View style={[styles.popup, slideUp]}>
              <View style={styles.blueBar}>
                <Image source={require('../../Images/phone-contact.png')} style={styles.iconab} />
                <Text style={{ color: 'white' }}>{i18n.t('Contact Us')}</Text>
                <TouchableOpacity onPress={this.handleClose}>
                  <View style={styles.closeIcon}>
                    <Image source={require('../../Images/close.png')} style={styles.iconab} />
                  </View>
                </TouchableOpacity>
              </View>

              <Contactscrl />
            </Animated.View>
          </View>
        </Animated.View>
        <TabNav contactClick={this.handleOpen} />
      </ImageBackground>

    );
  }
}


const mapStateToProps = (state) => {
  let {
    forgotObj
  } = state.authReducer


  return { forgotObj }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    triggerAuthForgot
  }, dispatch)
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ForgotScreen);