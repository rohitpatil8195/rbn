//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, Animated, Dimensions, KeyboardAvoidingView, BackHandler } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';
import Lang from '../../components/Lang';
import TabNav from '../../components/TabNav';
import Contactscrl from '../../components/Contactscrl';
import i18n from "i18n-js";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from '../../components/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import { validateAll } from "indicative/validator";
import { triggerAuthLogin,triggerMediaAuthLogin } from '../../actions';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

GoogleSignin.configure({
  webClientId: '596560908982-giv90tn5os0c66eijqaosgegssbanea9.apps.googleusercontent.com',
  offlineAccess: true
})

let backPressed = 0;

// create a component
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckl: false,
      islang: false,
      isAbout: false,
      isHome: false,
      isCheck: false,
      isSearch: false,
      isFilter: false,
      isAir: false,
      isMaritime: false,
      isRoad: false,
      isPersonal: false,
      animation: new Animated.Value(0),
      userName: '',
      password: '',
      error: null,
      user_id: '',
      errors: {},
      isProcessing: false,
      displayPassword: false,
      address: "",
      firstName: '',
      showTick: false,
      userGoogleInfo: {},
      loaded: false,
      userDetails: [],
      userName1: '',
      email: '',
      userId: '',
      fbuserName:''
    }
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
  }

  handleBackButton = () => {
    if (this.props.navigation.isFocused()) {
      if (backPressed == 0) {
        BackHandler.exitApp();
      }
    }
  };

  onChangeTextEmail = (text) => {
    this.setState({ userName: text })
  }

  onChangeTextPassword = (text) => {
    this.setState({ password: text })
  }

  validationRules = {
    userName: 'required',
    password: 'required',
  };
  validtionMessages = {
    'userName.required': 'Enter valid Email',
    'password.required': 'Enter valid Password',
  };

  validateLoginForm = async () => {
    const num = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/';
    if (!num === (this.state.password)) {
      this.setState({
        error: "Enter Valid Password",
        show: false
      })
    }
    // var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    // if (!pattern.test(input["email"])) {
    //   isValid = false;
    //   errors["email"] = "Please enter valid email address.";
    // }


    const data = this.state;
    try {
      await validateAll(data, this.validationRules, this.validtionMessages);
    } catch (error) {
      const formattedErrors = {};
      error.forEach(errors => formattedErrors[errors.field] = errors.message);
      this.setState({ errors: formattedErrors });
      return false
    }
    return true
  };

  // storeId = async () => {
  //   try {
  //     await AsyncStorage.setItem('USER_ID', this.state.user_id.toString())
  //   } catch (error) {
  //       console.error("Something Token Went Wrong");
  //   }
  // }

  // storeId = async () => {
  //   try {
  //     await AsyncStorage.setItem('USER_ID', this.state.user_id.toString())
  //     await AsyncStorage.setItem('USER_ADDRESS', this.state.address.toString())
  //     await AsyncStorage.setItem('USER_NAME', this.state.firstName.toString())

  //   } catch (error) {
  //     console.error("Something Token Went Wrong");
  //   }
  // }

  onLogin = () => {
    this.setState({ isProcessing: true });
    const isFormValid = this.validateLoginForm();
    if (!isFormValid) {
      this.setState({ isProcessing: false });
      return false
    }
    let formdata = new FormData();
    formdata.append("user_name", this.state.userName.toLowerCase().trim())
    formdata.append("user_password", this.state.password.trim())
    this.props.triggerAuthLogin(formdata, this.onLoginSuccess, this.onLoginError);
    //console.log(this.state.userName.toLowerCase().trim());
    //this.props.navigation.navigate('email', { data:this.state.userName.toLowerCase().trim()}) 
  }
 
  

  onLoginSuccess = (data) => {
    this.setState({ isProcessing: false });
    let user_detail =(data['result'][0]['user_id']);
    let user_ord_id = user_detail['user_id']
    console.log("login data "+user_detail)
   // console.log(formdata)
     //this.onProfileDetails(data)

    this.props.navigation.replace('HomeScreen',  {user_ord_id:user_detail})

  }

  onProfileDetails = (data) => {
    let obj = []
    obj = data.result
    console.log('sdff', data)
    obj.map(function (el) {
      this.state.userName1 = el.user_name;
      this.state.email = el.user_email;
      this.state.userId = el.user_id;
    })
    this.setState({
      userName1: this.state.userName1,
      email: this.state.email,
      userId: this.state.userId
    })
    console.log('firstName', this.state.userName1)
  }

  storeId = async () => {
    try {
      await AsyncStorage.setItem('USER_ID', this.state.userId.toString())
      await AsyncStorage.setItem('FIRST_NAME', this.state.userName1.toString())
      await AsyncStorage.setItem('EMAIL', this.state.email.toString())
   console.log(USER_ID)
    } catch (error) {
      console.error("Something Token Went Wrong");
    }
  }
 
  onLoginError = () => {
    console.log('errorlogin')
    this.setState({ isProcessing: false });


  }

  isChecklPressed = () => {
    if (!this.state.isCheckl) {
      this.setState({ isCheckl: true })
    } else {
      this.setState({ isCheckl: false })
    }
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

  register = () => {
    this.props.navigation.navigate('RegisterScreen', {})
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
    this.props.navigation.toggleDrawer()
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

  componentDidMount() {
    let language = 'en'
    // this.props.selectLanguage(language)
  }
 //loginMediaObj triggerMediaAuthLogin


 getResponseInfo = (error, result) => {
  if (error) {
    //Alert for the Error
    alert('Error fetching data: ' + error.toString());
  } else {
    //response alert
    console.log(JSON.stringify(result));
    this.setState({
            fbuserName: result.name,
            fbToken: result.id,
            fbProfilePic:  result.picture.data.url
    })
  }
};

 onLogout = () => {
  //Clear the state after logout
  this.setState({
    fbuserName: null,
    fbToken: null,
    fbProfilePic:  null
})
};








navigateFbAfterLog=({ navigation })=>{
  this.props.navigation.replace('HomeScreen',  {})
}

 handleFacebookLogin() {
  LoginManager.logInWithPermissions(['public_profile']).then(function(result) {
    if (result.isCancelled) {
      console.log("Login Cancelled");
   
    } else {
      console.log("Login Success permission granted:" + result.grantedPermissions);
       this.navigateFbAfterLog();
    }
  }, function(error) {
     console.log("some error occurred!!");
  })
}



    onSocialLog=()=>{
       let formdata = new FormData();
      formdata.append("user_f_name",this.state.userGoogleInfo['user']['name'])
      formdata.append("user_l_name" ,this.state.userGoogleInfo['user']['familyName'])
      formdata.append("comp_name", "")
     formdata.append("user_country","")
     formdata.append("user_city", "")
     formdata.append("user_pin_code", "")
      formdata.append("user_s_name", "")
      formdata.append("user_email", this.state.userGoogleInfo['user']['email'])
      formdata.append("user_password","")
      formdata.append("user_mb_no", "")
      formdata.append("user_img",  this.state.userGoogleInfo['user']['photo'])
      formdata.append("user_media_id", this.state.userGoogleInfo['idToken'])
      formdata.append("loginType", "Google")
      // formdata.append("comp_privacy", this.state.privacy)
      console.log('formdatain', JSON.stringify(formdata))
      this.props.triggerMediaAuthLogin(formdata, this.onMediaLoginSuccess, this.onMediaLoginError)
   //   this.props.navigation.replace('HomeScreen',  {})
  }
  onMediaLoginError=(data)=>{
    console.log("data",data)
    this.props.navigation.replace('HomeScreen',  {})
    }
  // handleFacebookLogin() {
  //    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
  //     function (result) {
  //       if (result.isCancelled) {
  //         console.log('Login cancelled')
  //       } else {
  //         console.log('Login success with permissions: ' + result.grantedPermissions.toString())
  //       }
  //     },
  //     function (error) {
  //       console.log('Login fail with error: ' + error)
  //     }
  //   )
  // }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userGoogleInfo: userInfo})
      //userInfo.user.email 
      await AsyncStorage.setItem('USER_ID',this.state.userGoogleInfo['user']['id'].toString())
      await AsyncStorage.setItem('FIRST_NAME', this.state.userGoogleInfo['user']['name'].toString())
      await AsyncStorage.setItem('EMAIL', this.state.userGoogleInfo['user']['email'].toString())
      // this.props.navigation.replace('HomeScreen',  {})
      // let formdata = new FormData();
      // formdata.append("user_name",  userInfo.user.id.toLowerCase().trim())
      // formdata.append("user_password", this.state.password.trim())
      // this.props.triggerAuthLogin(formdata, this.onLoginSuccess, this.onLoginError);

    //   let formdata = new FormData();
    //   formdata.append("user_f_name", userInfo.user.name)
    //   formdata.append("user_l_name",userInfo.user.familyName)
    //   // formdata.append("comp_name", this.state.CompanyName)
    // //  formdata.append("user_city", this.state.citySelect)
    // //  formdata.append("user_pin_code", this.state.cityZip)
    //   // formdata.append("user_s_name", this.state.Districts)
    //   formdata.append("user_email", userIhis.state.password)
    //   //formdata.append("user_mb_no", thisnfo.user.email.toLowerCase())
    //   //formdata.append("user_password", t.state.code1)
    //   // formdata.append("comp_terms", this.state.term)
    //   // formdata.append("comp_privacy", this.state.privacy)
    //   console.log('formdatain', JSON.stringify(formdata))
    //   this.props.triggerAuthRegister(formdata, this.onSignUpSuccess, this.onSignUpError)
    console.log('before', this.state.userGoogleInfo['user']['name'])
    console.log("before")
         this.onSocialLog();
      console.log('ssss', this.state.userGoogleInfo['idToken'])
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('cancel')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('in progress')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('service not available')
      } else {
        // some other error happened
        console.log('developer error')
      }
    }
  };

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
        <ScrollView style={styles.scroll}>

          <View style={styles.header}>
            {/* <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} /> */}

            <TouchableOpacity onPress={this.isLangPressed} style={{ height: '100%', width: '10%', alignItems: 'flex-end' }}>
              <Image source={require('../../Images/download-(2).png')} style={styles.flag} />
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
            <Text style={styles.signin}>{i18n.t('SIGN IN')}</Text>
            <View style={styles.b1}>
              <Text style={styles.email}>{i18n.t('Email Id')}</Text>
            </View>
            <View style={styles.bars}>
              <TextInputComponent source={require('../../Images/envelope.png')} onChangeText={this.onChangeTextEmail} placeholder={i18n.t('Username')} Ref={input => { this.userName = input }}
                error={this.state.errors['userName']} errorStyle={{ marginTop: '-6%' }} />
            </View>
            <View style={styles.empty}></View>
            <View style={styles.b1}>
              <Text style={styles.email}>{i18n.t('Password')}</Text>
            </View>
            <View style={styles.bars}>
              <TextInputComponent source={require('../../Images/key.png')} onChangeText={this.onChangeTextPassword} placeholder={i18n.t('Password')} Ref={input => { this.userName = input }}
                error={this.state.errors['password']} errorStyle={{ marginTop: '-6%' }} secureTextEntry={!this.state.displayPassword} />
            </View>
            <View style={styles.forgot1}>
              <Image source={require('../../Images/forgot.png')} style={styles.icon} resizeMode='contain' />
              <Text onPress={this.forgot} style={styles.forgot}>{i18n.t('Forgot password')}</Text>
            </View>
            <View style={styles.remember}>
              <TouchableOpacity onPress={this.isChecklPressed}>{
                this.state.isCheckl ?
                  <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />

                  :
                  <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

              }</TouchableOpacity>
              <Text style={styles.email}>{i18n.t('Remember my account')}</Text>
            </View>
            <TouchableOpacity style={styles.singinbutton} onPress={() => this.onLogin()}>
              <Image source={require('../../Images/sign-in.png')} style={styles.buttonicon} resizeMode='center' />
              <Text style={styles.SIGNIN}>{i18n.t('SIGN IN')}</Text>
            </TouchableOpacity>
            <View style={styles.line}>
              <View style={styles.line1} />
              <Text style={styles.email}>OR</Text>
              <View style={styles.line1} />
            </View>
            <View style={styles.social}>
         
      <LoginButton style={styles.fg} 
        readPermissions={["public_profile"]}
        onLoginFinished={(error, result) => {
          if (error) {

          } else if (result.isCancelled) {

          } else {
            AccessToken.getCurrentAccessToken()
              .then((data) => {
                callback(data.accessToken)
              })
              .catch(error => {
                console.log(error)
              })
              this.props.navigation.replace('HomeScreen',  {})
          }
        }} />
              {/* <TouchableOpacity onPress={this.handleFacebookLogin}>
                <Image source={require('../../Images/facbook.png')} style={styles.fg} resizeMode='center' />
              </TouchableOpacity> */}
              <TouchableOpacity onPress={this.signIn}>
                <Image source={require('../../Images/google.png')} style={styles.fg} resizeMode='center' />
              </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
              <Text>{i18n.t('Not a member yet')}? <Text onPress={this.register} style={{ color: 'skyblue', fontWeight: 'bold' }}>{i18n.t('SIGN UP')}</Text></Text>
            </View>
          </View>
        </ScrollView>
        <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
          <View style={[styles.sheet]}>
            <Animated.View style={[styles.popup, slideUp]}>
              <View style={styles.blueBar}>
                <Image source={require('../../Images/phone-contact.png')} style={styles.iconab} />
                <Text style={{ color: 'white' }}>Contact Us</Text>
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
        {/* <TabNav onClick={this.isHomePressed} contactClick={this.handleOpen} /> */}
      </ImageBackground>

    );
  }
}

const mapStateToProps = (state) => {
  let {
    loginObj,loginMediaObj
  } = state.authReducer


  return { loginObj,loginMediaObj }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    triggerAuthLogin,triggerMediaAuthLogin
  }, dispatch)
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Login);