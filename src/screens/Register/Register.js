import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, Modal, Animated, Dimensions, } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';
import Lang from '../../components/Lang';
import TabNav from '../../components/TabNav';
import Contactscrl from '../../components/Contactscrl';
import i18n from "i18n-js";
import { validateAll } from "indicative/validator";
import Loader from '../../components/Loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { triggerAuthRegister, triggerAuthCountry, triggerAuthCity, } from '../../actions';
// import ErrorMessage from '../../components/ErrorMessage';
import RegDropDown from '../../components/RegDropDown';

// create a component
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck1: false,
      isCheck2: false,
      islang: false,
      ismodalVisible: false,
      islang: false,
      lodd:false,
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
      FirstName: '',
      Surname: '',
      CompanyName: '',
      Country: '',
      City: '',
      Zip: '',
      Districts: '',
      mobile: '',
      email: '',
      password: '',
      ConfirmPassword: '',
      error: '',
      errors: {},
      displayPassword: false,
      show: true,
      code: '',
      code1: '',
      isProcessing: false,
      term: '',
      privacy: '',
      categoryList: [],
      categorySelect: '',
      countryList: [],
      countrySelect: '',
      countryId: '',
      cityList: [],
      citySelect: '',
      cityResponse: null,
      cityZip: '',
      countryCode: ''
    }
    this.props.triggerAuthCountry(this.onCountrySuccess, this.onCountryError)
  }


  validationRules = {
    FirstName: 'required',
    Surname: 'required',
    // CompanyName: 'required',
    countrySelect: 'required',
    citySelect: 'required',
    cityZip: 'required',
    // Districts: 'required',
    code1: 'required',
    email: 'required|email',
    password: 'required',
    ConfirmPassword: 'required|same:password',
    // privacy: 'required',
    // term: 'required'
  };

  validtionMessages = {
    'FirstName.required': 'Enter FirstName',
    'Surname.required': 'Enter Surname',
    'email.required': 'Enter valid Email',
    // 'CompanyName.required': 'Please Enter the CompanyName',
    'countrySelect.required': 'Select Country',
    'citySelect.required': 'Enter City',
    'cityZip.required': 'Enter Zip',
    // 'Districts.required': 'Please Enter the Districts',
    'code1.required': 'Please Enter the Mobile Number',
    'password.required': 'Please Enter the valid Password',
    'email.email': 'Please enter the correct format of email',
    'ConfirmPassword.required': 'Please enter the Confirm Password',
    'ConfirmPassword.same': 'Password and Confirm password does not match',
    // 'term.required': 'Please accept the Terms and Conditions Policy',
    // 'privacy.required': 'Please accept the Privacy Policy'
  };

  onSignUpValidation = async () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const numRegex = /^[6-9][0-9]{9}$/;
    if (!numRegex.test(this.state.code1)) {
      this.setState({
        error: "Enter Telephone",
        show: false
      })
    }

    const data = this.state;

    try {
      //console.log('before')
      await validateAll(data, this.validationRules, this.validtionMessages);
      console.log('after')
    } catch (error) {
      const formattedErrors = {};
      Array.from(error).forEach(
        errors => (formattedErrors[errors.field] = [errors.message])
      );
      this.setState({ errors: formattedErrors });
      return;
    }


    // if (passwordRegex.test(this.state.password)) {

    // } else {
    //   this.setState({ errors: { 'password': 'The password must contain at least 6 character having atleast one lowercase letter,one uppercase letter,one special character and one numeric digit.' } });
    //   return;
    // }
    console.log('signup')
    this.onSignUp()
  };


  onSignUp = () => {
    console.log('insignup')
    this.setState({ isProcessing: true,lodd:true });
    console.log("------CALL----" + this.state.FirstName + "--" + this.state.Surname + this.state.CompanyName + this.state.Country + this.state.City + this.state.Zip + this.state.password + this.state.mobile);
    let formdata = new FormData();
    formdata.append("user_f_name", this.state.FirstName)
    formdata.append("user_l_name", this.state.Surname)
    // formdata.append("comp_name", this.state.CompanyName)
    formdata.append("user_country", this.state.countrySelect)
    formdata.append("user_city", this.state.citySelect)
    formdata.append("user_pin_code", this.state.cityZip)
    // formdata.append("user_s_name", this.state.Districts)
    formdata.append("user_email", this.state.email.toLowerCase())
    formdata.append("user_password", this.state.password)
    formdata.append("user_mb_no", this.state.code1)
    // formdata.append("comp_terms", this.state.term)
    // formdata.append("comp_privacy", this.state.privacy)
    console.log('formdatain', JSON.stringify(formdata))
    this.props.triggerAuthRegister(formdata, this.onSignUpSuccess, this.onSignUpError)

  }

  onCountrySuccess = (data) => {
    var result = data.result.map(function (el) {
      // var o = Object.assign({}, el);
      // var a = Object.assign({}, el);
      el.label = el.cntry_name;
      el.value = el.cntry_name;
      el.id = el.cntry_id;
      el.code = el.cntry_code;
      return el;
    })
    // console.log("countryList", result)
    this.setState({
      countryList: result,
    })
  }

  onCountrySelect = (val) => {
    this.state.countrySelect = val
    this.state.countryList.map(item => {
      if (item.value == val) {
        this.state.countryId = item.id
        this.state.countryCode = item.code
        this.setState({
          countryId: this.state.countryId,
          countryCode: this.state.countryCode
        })
      }
    })
    // console.log('countryId', this.state.countryId)
    this.onCity(this.state.countryId)
  }

  onCity = (countryId) => {
    // console.log('countryId', countryId)
    let formdata = new FormData();
    formdata.append('cntry_id', countryId)
    this.props.triggerAuthCity(formdata, this.onCitySuccess, this.onCityError)
  }

  onCitySuccess = (data) => {

    var result = data.result.map(function (el) {
      el.label = el.city_zip + ', ' + el.city_name + ', ' +el.city_district;
      el.value = el.city_name;
      el.id = el.city_id;
      el.zip = el.city_zip;
      return el;
    })
    this.setState({
      cityList: result,
      // cityResponse: data.result
    })
    console.log("citylist", this.state.cityList)
    // console.log("cityResponse", cityResponse)

  }

  onCountryError = () => {

  }

  onCityError = () => {

  }

  onCitySelect = (val) => {
    this.state.citySelect = val
    this.state.cityList.map(item => {
      if (item.value == val) {
        this.state.cityZip = item.zip
        this.setState({
          cityZip: this.state.cityZip
        })
      }
    })
    console.log('cityZip', this.state.cityZip)
  }

  onSignUpSuccess = () => {
    console.log('sssss')
    this.setModalVisible()
  }

  onSignUpError = () => {
    console.log('eeerrrr')
    // alert('Something went wrong')
  }

  Login = () => {
    this.props.navigation.navigate('Login', {})
  }

  setModalVisible = (visible) => {
    this.setState({ ismodalVisible: visible });
  }

  closeModal = () => {
    this.setState({ ismodalVisible: false })
    this.props.navigation.navigate('Login', {})
  }

  isLangPressed = () => {
    if (!this.state.islang) {
      this.setState({ islang: true })
    } else {
      this.setState({ islang: false })
    }
  }

  isCheck1Pressed = () => {
    if (!this.state.isCheck1) {
      this.setState({ isCheck1: true })
    } else {
      this.setState({ isCheck1: false })
    }
  }

  isCheck2Pressed = () => {
    if (!this.state.isCheck2) {
      this.setState({ isCheck2: true })
    } else {
      this.setState({ isCheck2: false })
    }
  }

  singin = () => {
    this.props.navigation.navigate('Login', {})
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

  render() {
    const { ismodalVisible } = this.state;

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

    let fCategoryPlaceholder = {
      label: 'Country',
      value: null,
      color: '#9EA0A4',
    };
    let fCityPlaceholder = {
      label: 'City',
      value: null,
      color: '#9EA0A4',
    };

    return (
      <ImageBackground source={require('../../Images/1-login-bg.png')} style={styles.imagebg} resizeMode='cover'>
        <ScrollView style={styles.scroll}>

          <View style={styles.header}>
            <TouchableOpacity onPress={this.Login} style={styles.back}>
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
        { this.state.lodd ===true ? <Loader loading={this.props.registerObj.loading} />: null} 
            <Text style={styles.signin}>{i18n.t('Create An Account')}</Text>
            <View style={styles.b1}>
              <Text style={styles.email}>{i18n.t('First Name')} *</Text>
            </View>
            <View style={styles.bars}>
              <TextInputComponent
                source={require('../../Images/user.png')}
                onChangeText={(text) => { this.setState({ FirstName: text }) }}
                placeholder={i18n.t('First Name')}
                Ref={input => { this.userName = input }}
                error={this.state.errors['FirstName']}
                errorStyle={{ marginTop: '-6%' }} />
            </View>
            <View style={styles.empty}></View>
            <View style={styles.b1}>
              <Text style={styles.email}>{i18n.t('Surname')} *</Text>
            </View>
            <View style={styles.bars}>
              <TextInputComponent
                source={require('../../Images/user.png')}
                onChangeText={(text) => { this.setState({ Surname: text }) }}
                placeholder={i18n.t('Surname')}
                Ref={input => { this.userName = input }}
                error={this.state.errors['Surname']}
                errorStyle={{ marginTop: '-6%' }} />
            </View>
            <View style={styles.empty}></View>
            {/* <View style={styles.b1}>
              <Text style={styles.email}>{i18n.t('Company Name')}</Text>
            </View>
            <View style={styles.bars}>
              <TextInputComponent source={require('../../Images/building.png')} onChangeText={(text) => { this.setState({ CompanyName: text }) }}
                placeholder={i18n.t('Company Name')} Ref={input => { this.userName = input }}
                error={this.state.errors['CompanyName']} errorStyle={{ marginTop: '-6%' }} />
            </View>
            <View style={styles.empty}></View> */}
            <View style={styles.b1}>
              <Text style={styles.email}>{i18n.t('Country')} *</Text>
            </View>
            <View style={styles.bars}>
              <RegDropDown
                source={require('../../Images/global.png')}
                placeholder={fCategoryPlaceholder}
                data={this.state.countryList}
                onValueChange={this.onCountrySelect}
                value={this.state.countrySelect}
                style={{ marginTop: '-7%' }}
                error={this.state.errors['countrySelect']}
                errorStyle={{ paddingBottom: 7, }} />
            </View>
            <View style={styles.empty}></View>
            <View style={styles.b1}>
              <Text style={styles.email}>{i18n.t('City')} *</Text>
            </View>
            <View style={styles.bars}>
              <RegDropDown
                source={require('../../Images/location.png')}
                placeholder={fCityPlaceholder}
                data={this.state.cityList}
                onValueChange={this.onCitySelect}
                value={this.state.citySelect}
                style={{ marginTop: '-7%' }}
                error={this.state.errors['citySelect']}
                errorStyle={{ paddingBottom: 7, }} />
            </View>
            <View style={styles.empty}></View>
            <View style={styles.b1}>
              <Text style={styles.email}>{i18n.t('Zip')} *</Text>
            </View>
            <View style={styles.bars}>
              <TextInputComponent
                source={require('../../Images/address.png')}
                // onChangeText={(text) => { this.setState({ Zip: text }) }}
                value={this.state.cityZip}
                placeholder={i18n.t('Zip')}
                Ref={input => { this.userName = input }}
                error={this.state.errors['cityZip']}
                keyboardType='numeric'
                maxLength={10}
                errorStyle={{ marginTop: '-6%' }}
                editable={false}
                designStyle={{ color: 'black' }}
              />
            </View>
            {/* <View style={styles.empty}></View>
                            <View style={styles.b1}>
                            <Text style={styles.email}>{i18n.t('Districts')}</Text>
                            </View>
                            <View style={styles.bars}>
                            <TextInputComponent source={require('../../Images/map.png')} onChangeText={this.onChangeTextEmail} placeholder={i18n.t('Districts')} Ref={input => { this.userName = input }} />
                            </View> */}
            <View style={styles.empty}></View>
            <View style={styles.b1}>
              <Text style={styles.email}>{i18n.t('Telephone')} *</Text>
            </View>
            <View style={styles.tele}>
              <View style={styles.bars1}>
                <TextInputComponent
                  source={require('../../Images/phone.png')}
                  imageStyle={{ height: 25, width: 25, marginLeft: 30 }}
                  designStyle={{ width: '37%', left: 45, color: 'black' }}
                  // onChangeText={(text) => { this.setState({ code: text }) }}
                  value={this.state.countryCode}
                  placeholder='+36'
                  Ref={input => { this.userName = input }}
                  editable={false} />
              </View>
              <View style={styles.bars2}>
                <TextInputComponent
                  onChangeText={(text) => { this.setState({ code1: text }) }}
                  placeholder='123456789'
                  Ref={input => { this.userName = input }}
                  error={this.state.errors['code1']}
                  keyboardType='numeric'
                  maxLength={10}
                  errorStyle={{ marginTop: '-6%' }} />
              </View>
            </View>
            <View style={styles.empty}></View>
            <View style={styles.b1}>
              <Text style={styles.email}>{i18n.t('Email Id')} *</Text>
            </View>
            <View style={styles.bars}>
              <TextInputComponent
                source={require('../../Images/envelope.png')}
                onChangeText={(text) => { this.setState({ email: text }) }}
                placeholder={i18n.t('Email Id')}
                Ref={input => { this.userName = input }}
                error={this.state.errors['email']}
                errorStyle={{ marginTop: '-6%' }} />
            </View>
            <View style={styles.empty}></View>
            <View style={styles.b1}>
              <Text style={styles.email}>{i18n.t('Password')} *</Text>
            </View>
            <View style={styles.bars}>
              <TextInputComponent
                source={require('../../Images/key.png')}
                onChangeText={(text) => { this.setState({ password: text }) }}
                placeholder={i18n.t('Password')}
                Ref={input => { this.userName = input }}
                secureTextEntry={!this.state.displayPassword}
                error={this.state.errors['password']}
                errorStyle={{ marginTop: '-6%' }} />
            </View>
            <View style={styles.empty}></View>
            <View style={styles.b1}>
              <Text style={styles.email}>{i18n.t('Confirm Password')} *</Text>
            </View>
            <View style={styles.bars}>
              <TextInputComponent
                source={require('../../Images/key.png')}
                onChangeText={(text) => { this.setState({ ConfirmPassword: text }) }}
                placeholder={i18n.t('Password')}
                Ref={input => { this.userName = input }}
                secureTextEntry={!this.state.displayPassword}
                error={this.state.errors['ConfirmPassword']}
                errorStyle={{ marginTop: '-6%' }} />
            </View>
            <View style={styles.remember}>
              <TouchableOpacity onPress={this.isCheck1Pressed}>{
                this.state.isCheck1 ?
                  <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />

                  :
                  <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

              }</TouchableOpacity>
              <Text style={styles.email}>{i18n.t('Terms & conditions')}</Text>
            </View>
            {/* {this.state.isCheck1 == false ? <Text style={styles.err}>{this.state.errors['term']}</Text> : null} */}
            <View style={styles.terms}>
              <TouchableOpacity onPress={this.isCheck2Pressed}>{
                this.state.isCheck2 ?
                  <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />

                  :
                  <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

              }</TouchableOpacity>
              <Text style={styles.email}>{i18n.t('Privacy Policy')}</Text>
            </View>
            {/* {this.state.isCheck2 == false ? <Text style={styles.err}>{this.state.errors['privacy']}</Text> : null} */}
            <TouchableOpacity onPress={() => this.onSignUpValidation()} style={styles.touch} >
              <View style={styles.singinbutton}>
                <Image source={require('../../Images/add-people-interface-symbol-of-black-person-close-up-with-plus-sign-in-small-circle.png')} style={styles.buttonicon} resizeMode='center' />
                <Text style={styles.SIGNIN}>{i18n.t('Register')}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.bottom}>
              <Text>{i18n.t('Already have an account')} ? <Text onPress={this.singin} style={{ color: 'skyblue', fontWeight: 'bold' }}>{i18n.t('SIGN IN')}</Text></Text>
            </View>
          </View>

        </ScrollView>
        <Modal
          animationType='fade'
          transparent={true}
          visible={ismodalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image source={require('../../Images/contact.png')} resizeMode='contain' style={styles.key} />
              <View style={styles.text}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 5 }}>Congrats!</Text>
                <Text style={{ color: 'grey', textAlign: 'center' }}>{i18n.t('Your account is created')}!</Text>
              </View>
              <TouchableOpacity style={styles.done} onPress={this.closeModal}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, color: 'white' }}>{i18n.t('Done')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    registerObj, countryObj, cityObj
  } = state.authReducer


  return { registerObj, countryObj, cityObj }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    triggerAuthRegister, triggerAuthCountry, triggerAuthCity
  }, dispatch)
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Register);