//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, ActivityIndicator, Image,FlatList, TouchableOpacity, ScrollView, Animated, Dimensions, BackHandler } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';
import Scroller from '../../components/Scroller';
import Lang from '../../components/Lang';
import TabNav from '../../components/TabNav';
import Contactscrl from '../../components/Contactscrl';
import i18n from "i18n-js";
import DropDown from '../../components/DropDown';
import SearchableDropdown from 'react-native-searchable-dropdown';
//import SearchableFlatlist from "searchable-flatlist";
import DateTime from '../../components/DateTimePickerModal';
import moment from 'moment/moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { triggerAuthCountry, triggerAuthCity, triggerSearch } from '../../actions';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { isNullableTypeAnnotation } from '@babel/types';


const data = [
  {
    imageUrl: require('../../Images/fitting.png'),
    title: "Search for Most Fitting Shipping Service",
    id: 1
  },
  {
    imageUrl: require('../../Images/details.png'),
    title: "Provide Details required",
    id: 2
  },
  {
    imageUrl: require('../../Images/purchase-online.png'),
    title: "Purchase The Service Online",
    id: 3
  },
  {
    imageUrl: require('../../Images/fitting.png'),
    title: "Search for Most Fitting Shipping Service",
    id: 4
  },
  {
    imageUrl: require('../../Images/details.png'),
    title: "Provide Details required",
    id: 5
  },
  {
    imageUrl: require('../../Images/purchase-online.png'),
    title: "Purchase The Service Online",
    id: 6
  }
];



renderItem = ({ item }) => (
  <View style={{ minHeight: 70, padding: 5 }}>
    <Text style={{ color: '#bada55', fontWeight: 'bold', fontSize: 26 }}>
      {item.city_name + ' '}
      {item.city_district}
    </Text>
    <Text style={{ color: 'white', fontWeight: 'bold' }}>
      {item.phoneNumbers[0].digits}
    </Text>
  </View>
);
let backPressed = 0;

// create a component
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      isAbout: false,
      isQuote: true,
      isService: false,
      isParcel: false,
      isPackage: false,
      isPallat: false,
      isCheck1: false,
      ischeck2: false,
      data: data,
      isPersonal: false,
      islang: false,
      isCheck: false,
      isSearch: false,
      isFilter: false,
      isAir: false,
      isMaritime: false,
      isRoad: false,
      animation: new Animated.Value(0),
      categoryList: [],
      categorySelect: '',
      countryList: [],
      countrySelect: '',
      countryId: '',
      countryCode: '',
      cityList: [],
      citySelect: '',
      cityId: '',
      City_name: [],
      cityZip: '',
      desCountryList: [],
      desCountrySelect: '',
      desCountryId: '',
      desCountryCode: '',
      desCityList: [],
      desCitySelect: '',
      desCityId: '',
      servUserId: '',
      onAdd: false,
      isDatePickerVisible: false,
      DOB: '',
      valueArray: [],
      disabled: false,
      addPackage:[],
      loader:false,
      Array: [
        [
          {
            textHeader: "firstname",
          }, {
            textHeader: "lastname",
          }
        ]
      ],
      depCityId: '',
      arrCityId: '',
      depCountryId: '',
      arrCountryId: '',
      date: '',
      servId: '',
      W:'',
      L:'',
      D:'',
      H:''

     

    }
    this.index = 0;
    this.animatedValue = new Animated.Value(0);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.props.triggerAuthCountry(this.onCountrySuccess, this.onCountryError)
  }

  onCountrySuccess = (data) => {
    var result = data.result.map(function (el) {
      // var o = Object.assign({}, el);
      // var a = Object.assign({}, el)
      el.label = el.cntry_name ;
      el.value = el.cntry_name;
      el.id = el.cntry_id;
      el.code = el.cntry_code;
      return el;
    })
    // console.log("countryList", result)
    this.setState({
      countryList: result,
      desCountryList: result
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
 
  onDesCountrySelect = (val) => {
    this.state.desCountrySelect = val
    this.state.desCountryList.map(item => {
      if (item.value == val) {
        this.state.desCountryId = item.id
        this.state.desCountryCode = item.code
        this.setState({
          desCountryId: this.state.desCountryId,
          desCountryCode: this.state.desCountryCode
        })
      }
    })
    this.onDesCity(this.state.desCountryId)
  }


  onCity = (countryId) => {
    // console.log('countryId', countryId)
    let formdata = new FormData();
    formdata.append('cntry_id', countryId)
    this.props.triggerAuthCity(formdata, this.onCitySuccess, this.onCityError)
   // console.log("cc"+formdata)
  }
    
  onDesCity = (desCountryId) => {
    // console.log('countryId', countryId)
    let formdata = new FormData();
    formdata.append('cntry_id', desCountryId)
    this.props.triggerAuthCity(formdata, this.onDesCitySuccess, this.onDesCityError)
  }


  onCitySuccess = (data) => {

    var result = data.result.map(function (el) {
      el.label = el.city_zip + ', ' + el.city_name + ', ' +el.city_district;
      el.value = el.city_zip + ', ' + el.city_name + ', ' +el.city_district;
      el.id = el.city_id;
      el.zip = el.city_zip;
      return el;
    })
    this.setState({
      cityList: result,
      // desCityList: result
      // cityResponse: data.result
    })
    // const newObject = {};
    // delete Object.assign(newObject, o, {['name']: o['city_name'] })['city_name'];
    //console.log("citylist", this.state.cityList)
    // console.log("desCityList", this.state.desCityList)

  }

 


  onDesCitySuccess = (data) => {
    var result = data.result.map(function (el) {
      el.label = el.city_zip + ', ' + el.city_name + ', ' +el.city_district;
      el.value = el.city_zip + ', ' + el.city_name + ', ' +el.city_district;
      el.id = el.city_id;
      el.zip = el.city_zip;
      return el;
    })
    this.setState({
      // cityList: result,
      desCityList: result
      // cityResponse: data.result
    })
    //console.log("citylist", this.state.cityList)
    // console.log("desCityList", this.state.desCityList)
  }
 

//this is filter function ************
  // onCitySelect = (val) => {

  //   this.state.citySelect = val
  //   console.log("cty"+this.state.citySelect);
  //   let cc_list = []
  //   this.state.cityList.map(item => {
  //     if (item.city_name.toLowerCase().startsWith(val.toLowerCase())) {
  //       //this.state.desCityId = item.id
  //       let final = item.city_name 
  //       cc_list.push(final)
  //     }
  //   })
  //   this.setState({
  //     City_name: cc_list
      
  //   })
  //   this.setState({City_name:this.state.City_name.split(',')})
  //   // let citylist = this.state.cityList.filter((item) => item.city_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //   // console.log(":::"+citylist)
  //   // this.setState({
  //   //         City_name:citylist,
  //   //       })
  //   // this.state.cityList.filter(item => {
  //   //   if (item.city_name == val) {
  //   //     //this.state.City_name = item.city_name
  //   //     this.setState({
  //   //       City_name: item.city_name,
  //   //     })
  //   //   }
  //   // })
  //   console.log("cty"+this.state.City_name);
  // }



  onCitySelect = (val) => {
    this.state.citySelect = val
    this.state.cityList.map(item => {
      if (item.value == val) {
        this.state.cityId = item.id
        this.setState({
          cityId: this.state.cityId,
        })
      }
    })
    // console.log('cityId', this.state.cityId)
  }

  

  onDesCitySelect = (val) => {
    this.state.desCitySelect = val
    console.log("city "+this.state.desCitySelect);
    this.state.desCityList.map(item => {
      if (item.value == val) {
        this.state.desCityId = item.id
        this.setState({
          desCityId: this.state.desCityId
        })
      
      }
    })
  }
  // componentDidUpdate = () => {
  //   AsyncStorage.clear();
  
  // }
     
  componentDidMount = () => {
    //AsyncStorage.clear();
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
  }
   
  handleBackButton = () => {
    if (this.props.navigation.isFocused()) {
      if (backPressed == 0) {
        BackHandler.exitApp();
      }
    }
  };

  addArray = () => {
    let array1 = JSON.parse(JSON.stringify(this.state.Array))
   console.log("array is-- " , array1)
    array1.push([
      {
        textHeader: "firstname",
      }, {
        textHeader: "lastname",
      }
    ])
    this.setState.Array = array1
  }

  addMore = (key) => {
      
    let addPackage =this.state.addPackage;
    addPackage.push(
        
      <View style={styles.card22}>
  
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}> */}
        {/* <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('Quantity')}
          underlineColorAndroid='grey' designStyle={{ width: '52%', marginLeft: '15%', height: 50 }} /> */}
        <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('Weight(Kg)')}
          underlineColorAndroid='grey' designStyle={{ width: '110%', marginLeft: '-15%', height: 50 }} />
        {/* </View> */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
          <Text style={styles.dim}>Dimensions (cm) :</Text>
          <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('L')}
            underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '45%', height: 50 }} />
          <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('D')}
            underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '25%', height: 50 }} />
          <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('H')}
            underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '5%', height: 50 }} />
        </View>
      
    </View>

    );
    this.setState({addPackage})
    

    // this.animatedValue.setValue(0);
    // let newlyAddedValue = { index: this.index }
    // this.setState({ disabled: true, valueArray: [...this.state.valueArray, newlyAddedValue] }, () => {
    //   Animated.timing(
    //     this.animatedValue,
    //     {
    //       toValue: 1,
    //       duration: 500,
    //       useNativeDriver: true
    //     }
    //   ).start(() => {
    //     this.index = this.index + 1;
    //     this.setState({ disabled: false });
    //   });
    // });
  }
   
 


  _showDateTimePicker = () => {
    this.setState({ isDatePickerVisible: true });
  }

  _hideDateTimePicker = () => this.setState({ isDatePickerVisible: false });

  _handleDatePicked = date => {
      console.log('A date has been picked', date)
    this.setState({ DOB: moment(date).format('YYYY-MM-DD'), isDatePickerVisible: false });
    
  };


  onAddPressed = () => {
    if (!this.state.onAdd) {
      this.setState({ onAdd: true })
    } else {
      this.setState({ onAdd: false })
    }
  }

  isLangPressed = () => {
    if (!this.state.islang) {
      this.setState({ islang: true })
    } else {
      this.setState({ islang: false })
    }
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

  isAboutPressed = () => {
    if (!this.state.isAbout) {
      this.setState({ isAbout: true })
    } else {
      this.setState({ isAbout: false })
    }
    this.setState({ isHome: false, isAbout: true, isPersonal: false, isContact: false })
    this.props.navigation.navigate('About', {})
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

  isQuotePressed = () => {
    if (!this.state.isQuote) {
      this.setState({ isQuote: true })
    } else {
      this.setState({ isQuote: false })
    }
    this.setState({ isQuote: true, isService: false })
  }

  isServicePressed = () => {
    if (!this.state.isService) {
      this.setState({ isService: true })
    } else {
      this.setState({ isService: false })
    }
    this.setState({ isService: true, isQuote: false })
  }

  isParcelPressed = () => {
    if (!this.state.isParcel) {
      this.setState({ isParcel: true })
    } else {
      this.setState({ isParcel: false })
    }
    this.setState({ isParcel: true, isPackage: false, isPallat: false })
  }

  isPackagePressed = () => {
    if (!this.state.isPackage) {
      this.setState({ isPackage: true })
    } else {
      this.setState({ isPackage: false })
    }
    this.setState({ isParcel: false, isPackage: true, isPallat: false })
  }

  isPallatPressed = () => {
    if (!this.state.isPallat) {
      this.setState({ isPallat: true })
    } else {
      this.setState({ isPallat: false })
    }
    this.setState({ isParcel: false, isPackage: false, isPallat: true })
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

  sender = () => {
    this.props.navigation.navigate('Sender', {})
  }

  forgot = () => {
    this.props.navigation.navigate('ForgotScreen', {})
  }

  register = () => {
    this.props.navigation.navigate('RegisterScreen', {})
  }

  isMenuPressed = () => {
    this.props.navigation.toggleDrawer()
  }

  services = async() => {
    this.setState.loader = true;
    let formdata = new FormData();
   // formdata.append("serv_user_id", this.state.servUserId)
   // formdata.append("ordr_serv_id", this.state.servId)
    formdata.append("serv_dept_cntry_id", this.state.countryId)
   // formdata.append("serv_dept_city_id", this.state.depCityId)
    formdata.append("serv_ariv_cntry_id", this.state.desCountryId)
  //  formdata.append("serv_ariv_city_id", this.state.arrCityId)
   formdata.append("serv_date", moment(this.state.DOB).format('DD-MM-YYYY'));
    // formdata.append("pckg_data[0][unit]", this.state.W)
    // formdata.append("pckg_data[0][len]", this.state.L)
    // formdata.append("pckg_data[0][dept]", this.state.D)
    // formdata.append("pckg_data[0][hegt]", this.state.H)
   // console.log(this.state.countrySelect)
    console.log('formdatail:--- ',(this.state.DOB))
    console.log('formdatail: ', JSON.stringify(formdata))
   
   let Dimen =this.state.L + '||' + this.state.D + "||" + this.state.H;
     let dimenLDH= []
     dimenLDH.push(Dimen);   
     
     
      this.props.triggerSearch(formdata, this.onSearchSuccess, this.onSearchError);
    
        this.setState.loader= false;


  this.onSearchSuccess = (data) => {
   this.setState({
    data:data
   }) 
 console.log('success Home', data)
    if(data != []){
      this.props.navigation.navigate('Services', {data:this.state.data,dep_country: this.state.countrySelect,dep_city:this.state.citySelect,arr_country:this.state.desCountrySelect,arr_city0:this.state.desCitySelect,time:this.state.DOB,weight:this.state.W,Dimen:dimenLDH})
  
     }  

  }

 
           
     
   }

  onSearchSuccess = (data) => {

    console.log('success Home', data)
  

  }
 
  render() {
    
    const screenHeight = Dimensions.get("window").height;

    const animationValue = this.animatedValue.interpolate(
      {
        inputRange: [0, 1],
        outputRange: [-59, 0]
      });
     
    let newArray = this.state.valueArray.map((item, key) => {
      if ((key) == this.index) {
        return (
          <Animated.View key={key} style={[styles.card21, { opacity: this.animatedValue, transform: [{ translateY: animationValue }] }]}>
            <>
              {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}> */}
              {/* <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('Quantity')}
                        underlineColorAndroid='grey' designStyle={{ width: '52%', marginLeft: '15%', height: 50 }} /> */}
              <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('Weight(Kg)')}
                underlineColorAndroid='grey' designStyle={{ width: '110%', marginLeft: '-15%', height: 50 }} />
              {/* </View> */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                <Text style={styles.dim}>Dimensions (cm) :</Text>
                <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('L')}
                  underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '45%', height: 50 }} />
                <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('D')}
                  underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '25%', height: 50 }} />
                <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('H')}
                  underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '5%', height: 50 }} />
              </View>
              
            </>
          </Animated.View>
        );
      }
      else {
        return (
          <View key={key} style={styles.card21}>
            <>
              {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}> */}
              {/* <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('Quantity')}
                        underlineColorAndroid='grey' designStyle={{ width: '52%', marginLeft: '15%', height: 50 }} /> */}
              <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('Weight(Kg)')}
                underlineColorAndroid='grey' designStyle={{ width: '110%', marginLeft: '-15%', height: 50 }} />
              {/* </View> */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                <Text style={styles.dim}>Dimensions (cm) :</Text>
                <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('L')}
                  underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '45%', height: 50 }} />
                <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('D')}
                  underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '25%', height: 50 }} />
                <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('H')}
                  underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '5%', height: 50 }} />
              </View>
            </>
          </View>
        );
      }
    });


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
      label: 'Coutry',
      value: null,
      color: '#9EA0A4',
    };

    let fCityPlaceholder = {
      label: 'City',
      value: null,
      color: '#9EA0A4',
    
    };
    let tCategoryPlaceholder = {
      label: 'Country',
      value: null,
      color: '#9EA0A4',
    };
    let tCityPlaceholder = {
      label: 'City',
      value: null,
      color: '#9EA0A4',
    };

    return (
      
      <View style={styles.container}>
        <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
          <View style={styles.one}>
            <View style={styles.view1}>
              <TouchableOpacity onPress={this.isMenuPressed}>
                <Image source={require('../../Images/menu2.png')} style={styles.back} resizeMode='center' />
              </TouchableOpacity>
              <Image source={require('../../Images/logo.png')} style={styles.logo} resizeMode='contain' />
            </View>
            <TouchableOpacity onPress={this.isLangPressed}>
              <Image source={require('../../Images/download-(2).png')} style={styles.back} resizeMode='center' />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {
          this.state.islang == true ?
            <Lang />
            :
            null
        }
        <ScrollView style={styles.scrl} contentContainerStyle={styles.scroll}>
          <View style={styles.header}>
            <View style={styles.h1}>
              {
                this.state.isQuote == true ?
                  <TouchableOpacity onPress={this.isQuotePressed}>
                    <Image source={require('../../Images/quote.png')} style={styles.icon} resizeMode='center' />
                    <Text style={styles.textb}>{i18n.t('FREE QUOTE')}</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={this.isQuotePressed}>
                    <Image source={require('../../Images/quote(1).png')} style={styles.icon} resizeMode='center' />
                    <Text>{i18n.t('FREE QUOTE')}</Text>
                  </TouchableOpacity>
              }
            </View>
            <View style={styles.h1}>
              {
                this.state.isService == true ?
                  <TouchableOpacity onPress={this.isServicePressed}>
                    <Image source={require('../../Images/time-left.png')} style={styles.icon} resizeMode='center' />
                    <Text style={styles.textb}>{i18n.t('HOW SERVICE WORKS')}</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={this.isServicePressed}>
                    <Image source={require('../../Images/time-left(1).png')} style={styles.icon} resizeMode='center' />
                    <Text>{i18n.t('HOW SERVICE WORKS')}</Text>
                  </TouchableOpacity>
              }
            </View>
          </View>
          {
            this.state.isQuote == true ?
              <View style={styles.n90}>
                <View style={styles.card}>
                  <Text style={styles.qt}>{i18n.t('Types Of Service')}</Text>
                </View>
                <View style={styles.card1}>
                  <View style={styles.card11}>
                    <View style={styles.card111}>
                      {
                        this.state.isParcel == true ?
                          <TouchableOpacity onPress={this.isParcelPressed} style={styles.card1111}>
                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon} resizeMode='center' />
                            <Text style={styles.textb}>{i18n.t('Parcel')}</Text>
                            <Image source={require('../../Images/envelope-of-white-paper-(1).png')} style={styles.icon} resizeMode='center' />
                          </TouchableOpacity>
                          :
                          <TouchableOpacity onPress={this.isParcelPressed} style={styles.card1111}>
                            <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon} resizeMode='center' />
                            <Text>{i18n.t('Parcel')}</Text>
                            <Image source={require('../../Images/envelope-of-white-paper.png')} style={styles.icon} resizeMode='center' />
                          </TouchableOpacity>
                      }

                    </View>
                    <View style={styles.card111}>
                      {
                        this.state.isPackage == true ?
                          <TouchableOpacity onPress={this.isPackagePressed} style={styles.card1111}>
                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon} resizeMode='center' />
                            <Text style={styles.textb}>{i18n.t('Package')}</Text>
                            <Image source={require('../../Images/package.png')} style={styles.icon} resizeMode='center' />
                          </TouchableOpacity>
                          :
                          <TouchableOpacity onPress={this.isPackagePressed} style={styles.card1111}>
                            <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon} resizeMode='center' />
                            <Text>{i18n.t('Package')}</Text>
                            <Image source={require('../../Images/package-(1).png')} style={styles.icon} resizeMode='center' />
                          </TouchableOpacity>
                      }

                    </View>
                    <View style={styles.card111}>
                      {
                        this.state.isPallat == true ?
                          <TouchableOpacity onPress={this.isPallatPressed} style={styles.card1111} >
                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon} resizeMode='center' />
                            <Text style={styles.textb}>{i18n.t('Pallat')}</Text>
                            <Image source={require('../../Images/use-pallet.png')} style={styles.icon} resizeMode='center' />
                          </TouchableOpacity>
                          :
                          <TouchableOpacity onPress={this.isPallatPressed} style={styles.card1111}>
                            <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon} resizeMode='center' />
                            <Text>{i18n.t('Pallat')}</Text>
                            <Image source={require('../../Images/use-pallet-(1).png')} style={styles.icon} resizeMode='center' />
                          </TouchableOpacity>
                      }

                    </View>

                  </View>
                  <View style={styles.card12}>
                    <Text style={styles.dep}>{i18n.t('Departure')}</Text>
                  </View>
                </View>
                <View style={styles.card2}>
                  <View style={styles.card21}>
                    {/* <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('Country')}
                      underlineColorAndroid='grey' designStyle={{  width: '109%', right: 40,height: 50,}} /> */}
                    <DropDown
                      placeholder={fCategoryPlaceholder}
                      data={this.state.countryList}
                      onValueChange={this.onCountrySelect}
                      value={this.state.countrySelect}
                      style={{ marginTop: '-9%' }}
                      errorStyle={{ paddingBottom: 7, marginTop: '-2%' }}
                      source={require('../../Images/arrow-point-to-right.png')}
                      textInputProps={{ underlineColorAndroid: 'black' }} /> 
                      
                   <DropDown
                      placeholder={fCityPlaceholder}
                      data={this.state.cityList}
                      onValueChange={this.onCitySelect}
                      value={this.state.citySelect}
                      style={{ marginTop: '-9%' }}
                      errorStyle={{ paddingBottom: 7, marginTop: '-2%' }}
                      source={require('../../Images/arrow-point-to-right.png')}
                      textInputProps={{ underlineColorAndroid: 'black' }} />

            
          
             

            {/* <TextInput
          placeholder="city"
          placeholderTextColor="#dddddd"
          style={{
            paddingLeft: 30,
  fontSize: 22,
  height: 10,
  flex: .1,
  borderWidth: 9,
  borderColor: '#E4E4E4'
          }}
          onChangeText={value => this.onCitySelect(value)}
          value={this.state.value}

        /> */}




        {/* <ScrollView><Text>{this.state.City_name}</Text></ScrollView> */}




      {/* <View >
        <TextInput
          placeholder={"Search"}
          style={{paddingHorizontal: 10,
            margin: 10,
            height: 50,
            borderColor: "gray",
            borderWidth: 1,
            fontSize: 18}}
          onChangeText={value => this.onCitySelect(value)}
        />
        <SearchableFlatlist
          searchProperty={"name"}
          searchTerm={this.onCitySelect(value)}
          data={this.state.cityList}
          containerStyle={{ flex: 1 }}
          renderItem={({ item }) => <Text style={{height: 50,
            width: "100%",
            textAlign: "center",
            textAlignVertical: "center",
            fontSize: 18}}>{item.name}</Text>}
          keyExtractor={item => item.id}
        />
      </View>
    */}
     
      
    {/* <SearchableDropdown
          // onTextChange={value => this.onCitySelect(value)}
          //On text change listner on the searchable input
          onItemSelect={item => alert(JSON.parse(item))}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '50%',
          }}
          items={this.state.cityList}
          //mapping of item array
          defaultIndex={this.state.value}
          //default selected item index
          placeholder="placeholder"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />  */}



   {/* <View style={{borderColor:'blue',borderWidth:2,height:85}}>

    <FlatList
   
            data={this.state.City_name}
            renderItem={({item})=>{
            
              <Text style={{fontSize:50,color:'black'}}>{item}</Text>
            }}
            // keyExtractor={(City_name) => City_name.city_zip}
          //  
          />
          </View> */}
  
                       
                    <View style={styles.remember}>
                   
                      <TouchableOpacity onPress={this.isCheck1Pressed}>{
                        this.state.isCheck1 ?
                          <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />

                          :
                          <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                      }</TouchableOpacity>
                      <Text style={styles.email}>{i18n.t('Business Address')}</Text>
                    </View>
                    <View style={styles.btm}>
                      <Text style={styles.dep}>{i18n.t('Destination')}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.card3}>
                  <View style={styles.card21}>
                    <DropDown
                      placeholder={tCategoryPlaceholder}
                      data={this.state.desCountryList}
                      onValueChange={this.onDesCountrySelect}
                      value={this.state.desCountrySelect}
                      style={{ marginTop: '-9%' }}
                      errorStyle={{ paddingBottom: 7, marginTop: '-2%' }}
                      source={require('../../Images/arrow-point-to-right.png')}
                      textInputProps={{ underlineColorAndroid: 'black' }} />
                    <DropDown
                      placeholder={tCityPlaceholder}
                      data={this.state.desCityList}
                      onValueChange={this.onDesCitySelect}
                      value={this.state.desCitySelect}
                      style={{ marginTop: '-9%' }}
                      errorStyle={{ paddingBottom: 7, marginTop: '-2%' }}
                      source={require('../../Images/arrow-point-to-right.png')}
                      textInputProps={{ underlineColorAndroid: 'black' }} />
                    <View style={styles.remember}>
                      <TouchableOpacity onPress={this.isCheck2Pressed}>{
                        this.state.isCheck2 ?
                          <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />

                          :
                          <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                      }</TouchableOpacity>
                      <Text style={styles.email}>{i18n.t('Business Address')}</Text>
                    </View>
                    <View style={styles.btm}>
                      <Text style={styles.dep}>{i18n.t('Package Data')}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.cardN}>
                  <View style={styles.card21}>
                    <>
                      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}> */}
                      {/* <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('Quantity')}
                        underlineColorAndroid='grey' designStyle={{ width: '52%', marginLeft: '15%', height: 50 }} /> */}


{/*                         
                      <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('Weight(Kg)')}
                        underlineColorAndroid='grey' designStyle={{ width: '110%', marginLeft: '-15%', height: 50 }} /> */}
                     
                      {/* <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', width: '100%' }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                        <Text style={styles.dim}>Dimensions (cm) :</Text>
                        <TextInputComponent onChangeText={text => this.setState({ FirstName: text })}  placeholder={i18n.t('L')}
                          underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '45%', height: 50 }} />
                        <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('D')}
                          underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '25%', height: 50 }} />
                        <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder={i18n.t('H')}
                          underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '5%', height: 50 }} />
              
                      </View> */}
                  
                    
                    
                      <TextInputComponent onChangeText={text => this.setState({ W: text })} placeholder={i18n.t('Weight(Kg)')}
                        underlineColorAndroid='grey' designStyle={{ width: '110%', marginLeft: '-15%', height: 50 }} />

                                  <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', width: '100%' }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                        <Text style={styles.dim}>Dimensions (cm) :</Text>
                        <TextInputComponent onChangeText={text => this.setState({ L: text })}  placeholder={i18n.t('L')}
                          underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '45%', height: 50 }} />
                        <TextInputComponent onChangeText={text => this.setState({ D: text })} placeholder={i18n.t('D')}
                          underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '25%', height: 50 }} />
                        <TextInputComponent onChangeText={text => this.setState({ H: text })} placeholder={i18n.t('H')}
                          underlineColorAndroid='grey' designStyle={{ width: 50, marginLeft: '5%', height: 50 }} />
              
                      </View>



                                  {/* <Text>---{this.setState.L}</Text> */}
                      {this.state.addPackage.map((value, index) => {
          return value
        })}
        </View>
         
                    </>
               
           
                    {/* <View>
                      {
                        newArray
                      }
                    </View> */}
                    
                    <TouchableOpacity onPress={() => this.addMore(this.state.addPackage.length)}>
                      <Text style={styles.textb}>{i18n.t('+ Add Package')}</Text>
                    </TouchableOpacity>
                   
                  </View>
                </View>
                <View style={styles.cardM}>
                <DateTime
                      placeholder='Date'
                      showPicker={() => this._showDateTimePicker()}
                      isVisible={this.state.isDatePickerVisible}
                      onConfirm={this._handleDatePicked}
                      onCancel={this._hideDateTimePicker}
                      is24Hour={false}
                      mode='date'
                     
                      // errorStyle={{marginTop:'-6%'}}
                      // error={this.state.errors['DOB']}
                      // maximumDate={moment().toDate()}
                      value={this.state.DOB}
                    />
                    <TouchableOpacity onPress={this.services} style={styles.search}>
                    {this.state.loader=false ? <ActivityIndicator size="small" color="#0000ff" />:<Text style={{ color: 'white' }}>{i18n.t('Search')}</Text>}
                    </TouchableOpacity>
                </View>
              </View>
              :
              <View style={styles.n91}>
                <View style={styles.cards}>
                  <View style={styles.cards1}>
                    <Text style={styles.t1}>Please watch the video for service information.</Text>
                    <View style={styles.cards11}>
                      <ImageBackground source={require('../../Images/1.jpg')} style={styles.cards11im} resizeMode='cover'>
                        <Image source={require('../../Images/play-button.png')} style={styles.play} resizeMode='center' />
                      </ImageBackground>
                    </View>
                    <Text style={styles.t1}>Purchase Your Shipping Service In Few Steps</Text>
                    <View style={styles.flat}>
                      <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={this.state.data}
                        renderItem={({ item: rowData }) => {
                          return (
                            <View
                              style={styles.cards12}
                            >

                              <View style={styles.corner} >
                                <Text style={{ color: 'white' }}>{rowData.id}</Text>
                              </View>
                              <Image source={rowData.imageUrl} style={styles.image} />
                              <View style={styles.text}>
                                <Text style={{ color: 'grey', textAlign: 'center' }}>{rowData.title}</Text>
                              </View>
                            </View>
                          );
                        }}
                        keyExtractor={(item, index) => index}
                      />
                    </View>
                  </View>
                </View>
              </View>
          }

        </ScrollView>
        <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
          <View style={[styles.sheet]}>
            <Animated.View style={[styles.popup, slideUp]}>
              <View style={styles.blueBar}>
                <Image source={require('../../Images/phone-contact.png')} style={styles.icon1} />
                <Text style={{ color: 'white' }}>{i18n.t('Contact Us')}</Text>
                <TouchableOpacity onPress={this.handleClose}>
                  <View style={styles.closeIcon}>
                    <Image source={require('../../Images/close.png')} style={styles.icon1} />
                  </View>
                </TouchableOpacity>
              </View>

              <Contactscrl />
            </Animated.View>
          </View>
        </Animated.View>
        <TabNav aboutClick={this.isAboutPressed} personClick={this.isPersonalPressed} contactClick={this.handleOpen} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  let {
    countryObj, cityObj, searchObj
  } = state.authReducer


  return { countryObj, cityObj, searchObj }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    triggerAuthCountry, triggerAuthCity, triggerSearch
  }, dispatch)
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Home);