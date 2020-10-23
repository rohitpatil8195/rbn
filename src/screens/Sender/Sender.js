import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import styles from "./Styles";
import { ScrollView, } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInputComponent from '../../components/TextInputComponent';
import DropDown from '../../components/DropDown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
            sender_city:this.props.route.params.sender_city,
            sender_country:this.props.route.params.sender_country,
            reciver_country:this.props.route.params.reciver_country,
            reciver_city:this.props.route.params.reciver_city,
            Diments:this.props.route.params.Diments,
            serv_id:this.props.route.params.serv_id,
            Weight:this.props.route.params.isWight,
            transp_type:this.props.route.params.transp_type

        }
        this.props.triggerAuthCountry(this.onCountrySuccess, this.onCountryError)
    }
   
    componentDidMount() {
        const mystring = this.state.sender_city
     const splits = mystring.split(",");
     var city = splits[1];
     // output: this    
        this.setState({
              countrySelect: this.state.sender_country,
             cityZip: splits[0],
             citySelect:splits[1],
            cityDis: splits[2],

           
        })
       // console.log(this.state.sender_city)
     
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
        console.log("citylist", this.state.cityList)
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
        console.log('cityZip', this.cityZip)
    }

    recipient = () => {
        this.props.triggerForm1()
        console.log("should be weight",this.state.Weight);
        console.log("data is",this.state.Diments)
        this.props.navigation.navigate('Recipient', {transp_type:this.state.transp_type,Diments:this.state.Diments,sWight:this.state.Weight,serv_id:this.state.serv_id,reciver_country:this.state.reciver_country,reciver_city:this.state.reciver_city })

    }

    service = () => {
        this.props.navigation.navigate('Services', {})
    }

    render() {
        
        let CategoryPlaceholder = {
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
                            <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Company Name'
                                underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40, height: 50, }} />
                            <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='First Name'
                                underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40, height: 50, }} />
                            <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Surname'
                                underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40, height: 50, }} />
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
                                    editable={false} />
                                <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Telephone'
                                    underlineColorAndroid='grey' designStyle={{ width: '80%', marginLeft: '-25%', height: 50 }} />
                            </View>
                            <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Email'
                                underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40, height: 50, }} />
                            <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Address'
                                underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40, height: 50, }} />
                            <DropDown
                                placeholder={CategoryPlaceholder}
                                data={this.state.countryList}
                                onValueChange={this.onCountrySelect}
                                source={require('../../Images/arrow-point-to-right.png')}
                                textInputProps={{ underlineColorAndroid: 'black' }}
                                value={this.state.countrySelect}
                                style={{ marginTop: '-9%' }}
                                errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <TextInputComponent
                                    // onChangeText={text => this.setState({ FirstName: text })}
                                    value={this.state.cityZip}
                                    editable={false}
                                    placeholder='Zipcode'
                                    underlineColorAndroid='grey'
                                    designStyle={{ width: '52%', marginLeft: '-15%', height: 50, color: 'black' }}
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
                                    errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} />
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
                                />
                                <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='VAT Number'
                                    underlineColorAndroid='grey' designStyle={{ width: '58%', marginLeft: '-3%', height: 50 }} />
                            </View>

                            <TextInputComponent onChangeText={text => this.setState({ FirstName: text })} placeholder='Additional Info'
                                underlineColorAndroid='grey' designStyle={{ width: '109%', right: 40, paddingBottom: 75, height: 100 }} />
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={this.recipient} style={styles.button}>
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