
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';
import DateTime from '../../components/DateTimePickerModal';
import moment from 'moment/moment';


export default class BeforeOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isSender: false,
        isRecipient: false,
        isCheck: false,
        isCheck1: false,
        isCheck2: false,
        isCheck3: false,
        isCheck4: false,
        isCheck5: false,
        isYes: false,
        isNo: false,
        categoryList: ['India', 'USA', 'UK', 'Canada', 'South Africa'],
        isArrow: false,
        isDatePickerVisible: false,
        DOB: '',
    };
  }

  _showDateTimePicker = () => {
    this.setState({ isDatePickerVisible: true });
}

_hideDateTimePicker = () => this.setState({ isDatePickerVisible: false });

_handleDatePicked = date => {
    this.setState({ DOB: moment(date).format('DD-MM-YYYY'), isDatePickerVisible: false });
};

  onArrowPressed = () => {
    if (!this.state.isArrow) {
        this.setState({ isArrow: true })
    } else {
        this.setState({ isArrow: false })
    }
}

isSenderPressed = () => {
    if (!this.state.isSender) {
        this.setState({ isSender: true })
    } else {
        this.setState({ isSender: false })
    }
    this.setState({ isSender: true, isRecipient: false })
}

isRecipientPressed = () => {
    if (!this.state.isRecipient) {
        this.setState({ isRecipient: true })
    } else {
        this.setState({ isRecipient: false })
    }
    this.setState({ isRecipient: true, isSender: false })
}

isCheckPressed = () => {
    if (!this.state.isCheck) {
        this.setState({ isCheck: true })
    } else {
        this.setState({ isCheck: false })
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

isCheck3Pressed = () => {
    if (!this.state.isCheck3) {
        this.setState({ isCheck3: true })
    } else {
        this.setState({ isCheck3: false })
    }
}

isCheck4Pressed = () => {
    if (!this.state.isCheck4) {
        this.setState({ isCheck4: true })
    } else {
        this.setState({ isCheck4: false })
    }
}

isCheck5Pressed = () => {
    if (!this.state.isCheck5) {
        this.setState({ isCheck5: true })
    } else {
        this.setState({ isCheck5: false })
    }
}

isYesPressed = () => {
    if (!this.state.isYes) {
        this.setState({ isYes: true })
    } else {
        this.setState({ isYes: false })
    }
    this.setState({ isYes: true, isNo: false })
}

isNoPressed = () => {
    if (!this.state.isNo) {
        this.setState({ isNo: true })
    } else {
        this.setState({ isNo: false })
    }
    this.setState({ isNo: true, isYes: false })
}

completeform = () => {
    this.props.navigation.navigate('Completeform', {})

}



// submit_form=()=>{

//     let Api_data ={
      
//         ordr_user_id: 177,
//         ordr_serv_id: 170,
//         ordr_serv_type: 2,
//         ordr_pckg_data: [{"unit":"2","len":"12","dept":"12","hegt":"13"}],
//         ordr_send_cmpny: ,
//         ordr_send_surname: Kumar,
//         ordr_send_name: Shashi,
//         ordr_send_tel: 9421307444,
//         ordr_send_email: shashi.kumar@gmail.com,
//         ordr_send_addr: Italy,
//         ordr_send_cntry: 1,
//         ordr_send_city: 8297,
//         ordr_send_zip: 53021,
//         ordr_send_add_info: TEst,
//         ordr_recpt_cmpny: ,
//         ordr_recpt_surname: Kumar,
//         ordr_recpt_name: Disha,
//         ordr_recpt_tel: 8090809080,
//         ordr_recpt_email: disha.kumar@gmail.com,
//         ordr_recpt_addr: Senegal,
//         ordr_recpt_cntry: 2,
//         ordr_recpt_city: 8043,
//         ordr_recpt_zip: 26020,
//         ordr_recpt_add_info: Test,
//         ordr_reason_ship: Personal Effects,
//         ordr_content: Personal Effect,
//         ordr_invc_addr: 1,
//         ordr_img: ,
//         ordr_delvr_date: 2020-07-09,
//         ordr_time_frm: 02:16:00,
//         ordr_time_to: 02:16:00,
//         ordr_add_info_pony: test,
//         ordr_ship_type: 3,
//         ordr_home_colectn: 0,
//         ordr_home_delvry: 0,
//         ordr_insurance: 1,
//         ordr_ship_discription: ,
//         ordr_country_origin: 0,
//         ordr_quantity: 0,
//         ordr_unit_value: ,
//         ordr_total: 0,
//         ordr_custom_duties: [{"ordr_belonging":"1","ordr_cat_id":"199","ordr_scat_id":"426","ordr_purc_invc":"","ordr_country_origin":"","ordr_quantity":"1","ordr_unit_measure":"litre","ordr_unit_value":"5000","ordr_unit_value1":"5000","ordr_exchange":"euro","ordr_custom":"149.82"},{"ordr_belonging":"1","ordr_cat_id":"152","ordr_scat_id":"305","ordr_purc_invc":"","ordr_country_origin":"","ordr_quantity":"1","ordr_unit_measure":"kg","ordr_unit_value":"2600","ordr_unit_value1":"2600","ordr_exchange":"euro","ordr_custom":"77.91"}],
//         ordr_send_vat: 123qwe,
//         ordr_recr_vat: 123ABC,
//         ordr_no_custom: 0,
//         ordr_transport_fee: 500,
//         ordr_custom_duty: 227.56,
//         ordr_home_clectn: 0,
//         ordr_insurance_price: 0,
//         ordr_total_price: 827.73,
//         ordr_invoice_id: 146,
//         ordr_rbn_transport_fee: 100,
//         ordr_rbn_custom_fee: 0.17,
//         ordr_dept_bsnes_chk: 0,
//         ordr_ariv_bsnes_chk: 0,
//         ordr_pay_details: {"create_time":"2020-07-09T08:56:23Z","update_time":"2020-07-09T09:07:02Z","id":"63Y601446X665003R","intent":"CAPTURE","status":"COMPLETED","payer":{"email_address":"sb-pfmef2276237@personal.example.com","payer_id":"HD68B7QDZ6CTJ","address":{"country_code":"US"},"name":{"given_name":"John","surname":"Doe"}},"purchase_units":[{"reference_id":"default","amount":{"value":"827.73","currency_code":"EUR"},"payee":{"email_address":"quality.prometteur@gmail.com","merchant_id":"5DDLJCWLUMU7J"},"shipping":{"name":{"full_name":"Rashmi Test"},"address":{"address_line_1":"basaveshwarnagar","admin_area_2":"Banglore","admin_area_1":"Karnataka","postal_code":"560040","country_code":"IN"}},"payments":{"captures":[{"status":"COMPLETED","id":"7BH52411VV445941S","final_capture":true,"create_time":"2020-07-09T09:07:02Z","update_time":"2020-07-09T09:07:02Z","amount":{"value":"827.73","currency_code":"EUR"},"seller_protection":{"status":"ELIGIBLE","dispute_categories":["ITEM_NOT_RECEIVED","UNAUTHORIZED_TRANSACTION"]},"links":[{"href":"https://api.sandbox.paypal.com/v2/payments/captures/7BH52411VV445941S","rel":"self","method":"GET","title":"GET"},{"href":"https://api.sandbox.paypal.com/v2/payments/captures/7BH52411VV445941S/refund","rel":"refund","method":"POST","title":"POST"},{"href":"https://api.sandbox.paypal.com/v2/checkout/orders/63Y601446X665003R","rel":"up","method":"GET","title":"GET"}]}]}}],"links":[{"href":"https://api.sandbox.paypal.com/v2/checkout/orders/63Y601446X665003R","rel":"self","method":"GET","title":"GET"}]},
//         ordr_pay_status: COMPLETED,
//         ordr_pay_type: PayPal





ordercomplete = () => {


    this.props.navigation.navigate('Paypal', {})
}

completeform = () => {
    this.props.navigation.navigate('Completeform')
}

  render() {
    return (
      <View style={styles.container}>
             <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
                    <View style={styles.one}>
                        <View style={styles.view1}>
                            <TouchableOpacity onPress={this.completeform}>
                            <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                            </TouchableOpacity>
                            <Text style={styles.about}>Italy - Senegal<Text style={styles.text1}> (17 Oct - 20 Oct)</Text></Text>
                        </View>
                    </View>
                </ImageBackground>
        <View style={styles.card1}>
                        <Text style={styles.sender}>Invoicing</Text>
                    </View>
                    <View style={styles.card2}>
                        <View style={{ height: '2%' }}></View>
                        <View style={styles.invoice}>
                            <Text>Address</Text>
                            <View style={styles.sr}>
                                <View style={styles.send}>
                                    {
                                        this.state.isSender == true ?
                                            <TouchableOpacity onPress={this.isSenderPressed} style={styles.compo}>
                                                <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon1} />
                                                <Text style={{ color: 'dodgerblue' }}>Sender</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity onPress={this.isSenderPressed} style={styles.compo}>
                                                <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon1} />

                                                <Text>Sender</Text>
                                            </TouchableOpacity>
                                    }

                                </View>
                                <View style={styles.reci}>
                                    {
                                        this.state.isRecipient == true ?
                                            <TouchableOpacity onPress={this.isRecipientPressed} style={styles.compo}>
                                                <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon1} />
                                                <Text style={{ color: 'dodgerblue' }}>Recipient</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity onPress={this.isRecipientPressed} style={styles.compo}>
                                                <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon1} />

                                                <Text>Recipient</Text>
                                            </TouchableOpacity>
                                    }
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={styles.card1}>
                        <Text style={styles.sender}>Home Collection</Text>
                    </View>
                    <View style={styles.card4}>
                        <View style={styles.Home}>
                            <View style={styles.Home1}>
                                <Text>Departure Date :</Text>
                                <DateTime
                            placeholder='dd-mm-yy'
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
                            designStyle={{width: '70%'}}
                        />
                            </View>
                            <View style={styles.Home2}>
                                <TextInputComponent onChangeText={this.onChangeTextEmail}
                                    placeholder={'Additional Information For Pony (e.g.\n Who Contacts In Case Of Needs, \n Intercom, Etc.)'}
                                    underlineColorAndroid='grey' Ref={input => { this.userName = input }} designStyle={{ height: 100 }} />
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={this.ordercomplete} style={styles.button}>
                            <Image source={require('../../Images/success.png')} style={styles.icon} />
                            <Text style={styles.save}>Pay Now</Text>
                        </TouchableOpacity>
                    </View>
      </View>
    );
  }
}




