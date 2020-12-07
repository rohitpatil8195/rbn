import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import styles from "./Styles";
import { ScrollView, } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInputComponent from '../../components/TextInputComponent';
import DropDown from '../../components/DropDown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateAll } from "indicative/validator";
import { triggerAuthRegister, triggerAuthCountry, triggerAuthCity, triggerForm1 } from '../../actions';

// create a component
class Sender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
            categorySelect: '',
            countryList: [],
            countrySelect: '',
            countryId: '',
            cityList: [],
            citySelect: '',
            cityResponse: null,
            cityZip: '',
            countryCode: '',
            cityDis: '',
            Company_name: '',
            FirstName: '',
            Surname: '',
            Telephone: '',
            Email: '',
            Address: '',
            VAT_Number: '',
            Additional_Info: '',
            errors: {},
            sender_city:this.props.route.params.sender_city,
            sender_country:this.props.route.params.sender_country,
            reciver_country:this.props.route.params.reciver_country,
            reciver_city:this.props.route.params.reciver_city,
            Diments:this.props.route.params.Diments,
            serv_id:this.props.route.params.servicess_id,
            Weight:this.props.route.params.isWight,
            transp_type:this.props.route.params.transp_type,
            servi_typ:this.props.route.params.services_type,
            home_collection:this.props.route.params.home_colectn,
            home_delivary:this.props.route.params.home_delv,
            depAddRadio:this.props.route.params.checkDepAdd,
            desAddRadio:this.props.route.params.checkDesAdd,

            

        }
        this.props.triggerAuthCountry(this.onCountrySuccess, this.onCountryError)
    }
   
    componentDidMount() {
        const mystring = this.state.sender_city
     const splits = mystring.split(",",3);
     var city = splits[1];
     // output: this    
        this.setState({
              countrySelect: this.state.sender_country,
             cityZip: splits[0],
             citySelect:splits[1],
            cityDis: splits[2],

           
        })
   console.log("transp_type", this.state.citySelect)
    //   console.log("home_collection",this.state.home_collection)
    //   console.log("home_delivary",this.state.home_delivary)
     
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
            el.label = el.city_name;
            el.value = el.city_name;
            el.id = el.city_id;
            el.zip = el.city_zip;
            el.dis = el.city_district;
            return el;
        })
        this.setState({
            cityList: result,
            // cityResponse: data.result
        })
       // console.log("citylist", this.state.cityList)
        // console.log("cityResponse", cityResponse)

    }
   
    onCitySelect = (val) => {
        this.state.citySelect = val
        this.state.cityList.map(item => {
            if (item.value == val) {
                this.state.cityZip = item.zip
                this.state.cityDis = item.dis
                this.setState({
                    cityZip: this.state.cityZip,
                    cityDis: this.state.cityDis
                })
            }
        })
        //console.log('cityZip', this.cityZip)
    }

    validationRules = {
        
        FirstName: 'required',
      
        Surname: 'required',
       Address: 'required',
        //countrySelect: 'required',
       // onCitySelect: 'required',
        cityZip: 'required',
        cityDis: 'required',
        Telephone: 'required',
        Email: 'required|email',
         VAT_Number: 'required',
        Additional_Info: 'required',
        // // privacy: 'required',
        // // term: 'required'
      };

    validtionMessages = {
       
        'FirstName.required': '   Enter FirstName',
        'Surname.required': '   Enter Surname',
        'Email.required': 'Enter valid Email',
       'Address.required': 'Please Enter the Address',
        'countrySelect.required': 'Select Country',
        'onCitySelect.required': 'Enter City',
        'cityZip.required': 'Enter Zip',
        'cityDis.required': '                             Districts',
        'Telephone.required': 'Please Enter the Mobile Number',
        'VAT_Number.required': 'Please Enter VAT_Number',
        'onCountrySelect.required': 'Please select the Country',
        'Additional_Info.same': 'Additional_Info',
        // // 'term.required': 'Please accept the Terms and Conditions Policy',
        // // 'privacy.required': 'Please accept the Privacy Policy'
      };

    onSignUpValidation = async () => {
        const numRegex = /^[6-9][0-9]{9}$/;
        if (!numRegex.test(this.state.Telephone)) {
          this.setState({
            error: "Enter Telephone",
            show: false
          })
        }
    
       
    
        const data = this.state;
    
        try {
         // console.log('before')
          await validateAll(data, this.validationRules, this.validtionMessages);
         // console.log('after')
        //   this.recipient()
        } catch (error) {
          const formattedErrors = {};
          Array.from(error).forEach(
            errors => (formattedErrors[errors.field] = [errors.message])
          );
          this.setState({ errors: formattedErrors });
          return;
        }
        console.log('signup')
        this.recipient();
      };

      

    recipient = () => {
    //    let formdata = new FormData();
    // console.log("home_collection",this.state.home_collection)
    // console.log("home_delivary",this.state.home_delivary)
    let formdata = {}
    formdata["Company_name"]= this.state.Company_name,
    formdata["FirstName"]= this.state.FirstName,
    formdata["Surname"]= this.state.Surname,
    formdata["Telephone"]= this.state.Telephone,
    formdata["Email"]= this.state.Email,
    formdata["Address"]= this.state.Address,
    formdata["Country"]= this.state.onCountrySelect,
    formdata["City"]= this.state.onCitySelect,
    formdata["cityZip"]= this.state.cityZip,
    formdata["District"]= this.state.cityDis,
    formdata["VAT_Number"]= this.state.VAT_Number,
    formdata["Additional_Info"]= this.state.Additional_Info,
    formdata["serv_id"] = this.state.serv_id,
    formdata["transp_type"] = this.state.transp_type,
    formdata["home_collection"] = this.state.home_collection,
    formdata["home_delivary"] = this.state.home_delivary,
   // formdata["depAddRado"] = this.state.desAddRadio
   // this.props.triggerForm1(formdata); desAddRadio
    console.log("all data",formdata)
this.props.triggerForm1()
        console.log("should be weight",this.state.Weight);
        console.log("data is",this.state.Diments)
        this.props.navigation.navigate('Recipient', {depAddRado:this.state.desAddRadio,senders_Data:formdata,servic_typ:this.state.servi_typ,transp_type:this.state.transp_type,Diments:this.state.Diments,sWight:this.state.Weight,serv_id:this.state.serv_id,reciver_country:this.state.reciver_country,reciver_city:this.state.reciver_city })

    }

    service = () => {
        this.props.navigation.navigate('Services', {})
    }

    render() {
      const  str = this.state.sender_city;
      const newO =  str.replace(/,?\s/, "");
      const A = newO.replace(/[0-9]/g, '');
      const splits = A.split(",",3);
     
      const az=splits[0];
      console.log("splss",az)

        let CategoryPlaceholder = {
            label: 'Country',
            value: null,
            color: '#9EA0A4',
        };
        let fCityPlaceholder = {
            label: az,
            value: null,
            color: 'black',
        };
        return (
            <SafeAreaView style={styles.safe}>
                <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
                    <View style={styles.one}>
                        <View style={styles.view1}>
                            <TouchableOpacity onPress={this.service}>
                                <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                            </TouchableOpacity>
                            <Text style={styles.about}>Italy - Senegal<Text style={styles.text1}> (17 Oct - 20 Oct)</Text></Text>
                        </View>
                    </View>
                </ImageBackground>
                <ScrollView style={styles.scrl} contentContainerStyle={styles.scroll}>
                    <View style={styles.card1}>
                        <Text style={styles.sender}>Sender Details</Text>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.card21}>
                            <View style={{ height: '2%' }}></View>
                            <TextInputComponent onChangeText={text => this.setState({ Company_name:text })} placeholder='Company Name'
                                underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40, height: 50}}     errorStyle={{ marginTop: '-6%' }} />
                            <TextInputComponent onChangeText={text => this.setState({ FirstName:text})} placeholder='First Name'
                                underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40, height: 50, }} error={this.state.errors['FirstName']}  errorStyle={{ marginTop: '-6%' }}/>
                            <TextInputComponent onChangeText={text => this.setState({ Surname:text })} placeholder='Surname'
                                underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40, height: 50, }} error={this.state.errors['Surname']}  errorStyle={{ marginTop: '-6%' }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                                {/* <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='+00'
                                    underlineColorAndroid='grey' designStyle={{ width: '25%', marginLeft: '15%', height: 50 }} /> */}
                                <TextInputComponent
                                    // source={require('../../Images/phone.png')}
                                    // imageStyle={{ height: 25, width: 25, marginLeft: 30 }}
                                    designStyle={{ width: '25%', left: 45, color: 'black' }}
                                    // onChangeText={(text) => { this.setState({ code: text }) }}
                                    value={this.state.countryCode}
                                    placeholder='+36'
                                    Ref={input => { this.userName = input }}
                                    underlineColorAndroid='grey'
                                    editable={false}
                                    error={this.state.errors['countryCode']}  errorStyle={{ marginTop: '-6%' }} 
                                    />
                                <TextInputComponent   keyboardType={'phone-pad'} onChangeText={text => this.setState({ Telephone:text})} placeholder='Telephone'
                                    underlineColorAndroid='grey' designStyle={{ width: '80%', marginLeft: '-25%', height: 50 }}
                                    error={this.state.errors['Telephone']}  errorStyle={{ marginTop: '-6%' }} 
                                    />
                            </View>
                            <TextInputComponent onChangeText={text => this.setState({ Email:text })} placeholder='Email'
                                underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40, height: 50, }}
                                error={this.state.errors['Email']}  errorStyle={{ marginTop: '-6%' }}
                                />
                            <TextInputComponent onChangeText={text => this.setState({ Address:text })} placeholder='Address'
                                underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40, height: 50, }} 
                                error={this.state.errors['Address']}  errorStyle={{ marginTop: '-6%' }}
                                />
                            <DropDown
                                placeholder={CategoryPlaceholder}
                                data={this.state.countryList}
                                onValueChange={this.onCountrySelect}
                                source={require('../../Images/arrow-point-to-right.png')}
                                textInputProps={{ underlineColorAndroid: 'black' }}
                                value={this.state.countrySelect}
                                style={{ marginTop: '-9%' }}
                                //errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} 
                                error={this.state.errors['onCountrySelect']}  errorStyle={{ marginTop: '-6%' }}
                                />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <TextInputComponent
                                    // onChangeText={text => this.setState({ FirstName: text })}
                                    value={this.state.cityZip}
                                    editable={false}
                                    placeholder='Zipcode'
                                    underlineColorAndroid='grey'
                                    designStyle={{ width: '52%', marginLeft: '-15%', height: 50, color: 'black' }}
                                    error={this.state.errors['cityZip']}  errorStyle={{ marginTop: '-6%' }}
                                />
                                {/* <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='City'
                                    underlineColorAndroid='grey' designStyle={{ width: '58%', marginLeft: '-3%', height: 50 }} /> */}
                                <DropDown
                                    source={require('../../Images/location.png')}
                                    placeholder={fCityPlaceholder}
                                    data={this.state.cityList}
                                    onValueChange={this.onCitySelect}
                                    source={require('../../Images/arrow-point-to-right.png')}
                                    textInputProps={{ underlineColorAndroid: 'black' }}
                                    value={this.citySelect}
                                    style={{ width: '52%', marginLeft: '-50%', height: 50, marginTop: '-4.5%' }}
                                    //errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} 
                                   
                                    />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                                {/* <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='District'
                                    underlineColorAndroid='grey' designStyle={{ width: '52%', marginLeft: '15%', height: 50 }} /> */}
                                <TextInputComponent
                                    // onChangeText={text => this.setState({ FirstName: text })}
                                    value={this.state.cityDis}
                                    editable={false}
                                    placeholder='District'
                                    underlineColorAndroid='grey'
                                    designStyle={{ width: '52%', marginLeft: '15%', height: 50, color: 'black' }}
                                    error={this.state.errors['cityDis']}  errorStyle={{ marginTop: '-6%' }}
                                />
                                <TextInputComponent onChangeText={text => this.setState({ VAT_Number:text })} placeholder='VAT Number'
                                    underlineColorAndroid='grey' designStyle={{ width: '58%', marginLeft: '-3%', height: 50 }} 
                                    error={this.state.depAddRadio == true ? this.state.errors['VAT_Number'] : null}  errorStyle={{ marginTop: '-6%' }}
                                    />
                            </View>

                            <TextInputComponent onChangeText={text => this.setState({ Additional_Info:text })} placeholder='Additional Info'
                                underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40, paddingBottom: 75, height: 100 }}
                                error={this.state.errors['Additional_Info']}  errorStyle={{ marginTop: '-6%' }}
                                />
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={() => this.onSignUpValidation()} style={styles.button}>
                        {/* <TouchableOpacity onPress={this.recipient} style={styles.button}> */}
                            <Image source={require('../../Images/success.png')} style={styles.icon} />
                            <Text style={styles.save}>Save & Continue</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    let {
        registerObj,
        countryObj,
        cityObj,
        form1Obj
    } = state.authReducer


    return {
        registerObj,
        countryObj,
        cityObj,
        form1Obj
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        triggerAuthRegister,
        triggerAuthCountry,
        triggerAuthCity,
        triggerForm1
    }, dispatch)
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Sender);

