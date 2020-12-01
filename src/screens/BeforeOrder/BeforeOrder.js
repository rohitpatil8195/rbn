
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';
import DateTime from '../../components/DateTimePickerModal';
import moment from 'moment/moment';
import RNPaypal from 'react-native-paypal-lib';
import AsyncStorage from '@react-native-community/async-storage';

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
        ordr_invc_addr:'',
        paypal_Resp:[],
        Pony:'',
        Invoice_Order_no:'',
       form4_data:this.props.route.params.from4
    };
  }

   componentDidMount=async()=>{
    const chech = await AsyncStorage.getItem('persist:sampleRedux')
    const js =  JSON.parse(chech);
  
// let authreducer = JSON.parse(js['authReducer'])
let authreducer = JSON.parse(js['authReducer'])
let loginobj = authreducer['loginObj'];

let logindata = loginobj['data']
// console.log(logindata['result'][0])
let User_ord_id = logindata['result'][0]['user_id'];
 
      this.setState({
        ordr_invc_addr:0,
        User_Id_No:User_ord_id
      })
      console.log("user_id<<>><<>",this.state.User_Id_No)
   }

  navi_Forward=()=>{
      let data = this.state.form4_data
    let formdata = {}
    formdata["all_info"]= this.state.form4_data,
    formdata["paypal_data"] = this.state.paypal_Resp
    console.log(formdata)
      console.log(">>>>>",this.state.paypal_Resp['response'])
      console.log("Pony",this.state.Invoice_Order_no)
      this.submit_form();
    //['Recipent_info']['Email']
   
}
navi_Backward=()=>{
    this.props.navigation.navigate('BeforeOrder', {})
}

  callApi=()=>{
    RNPaypal.paymentRequest({
      clientId: 'AWdjxB7ONcUN_bMajfIQsXH3s-DpnJy3eT1Xgtdw1AiAehPrVM0U1z4yGmB-95UhYEePBj2KhNrcQ465',
      environment: RNPaypal.ENVIRONMENT.NO_NETWORK,
      intent: RNPaypal.INTENT.SALE,
      price: 60,
      currency: 'USD',
      description: `RBN testing`,
      acceptCreditCards: true
  }).then(response => {
    console.log("before")
      console.log("this resp",response)
          alert("Transaction Successful")
          this.setState({
              paypal_Resp:response
          })
        this.navi_Forward()
  }).catch(err => {
    console.log("errorrssss")
      console.log(err.message)
      alert("Transaction Cancelled")
      this.navi_Backward()
  })
  }


  _showDateTimePicker = () => {
    this.setState({ isDatePickerVisible: true });
}

_hideDateTimePicker = () => this.setState({ isDatePickerVisible: false });

_handleDatePicked = date => {
    this.setState({ DOB: moment(date).format('YYYY-MM-DD'), isDatePickerVisible: false });
   // console.log("DOB",this.state.DOB)
};

  onArrowPressed = () => {
    if (!this.state.isArrow) {
        this.setState({ isArrow: true })
    } else {
        this.setState({ isArrow: false })
    }
}

isSenderPressed = () => {
    if (this.state.isSender) {
        this.setState({ 
            isSender: false}
            ,()=>{
            this.setState({
                ordr_invc_addr:0
            })
        })
    } else {
        this.setState({ isSender: false })
    }
    this.setState({ isSender: true, isRecipient: false })
   console.log("ordr_invc_send",this.state.ordr_invc_addr)
}

isRecipientPressed = () => {
    if (!this.state.isRecipient) {
        this.setState({ isRecipient: true},()=>{
            this.setState({
                ordr_invc_addr:1
            })
        })
    } else {
        this.setState({ isRecipient: false })
    }
    this.setState({ isRecipient: true, isSender: false })
  console.log("ordr_invc_addr",this.state.ordr_invc_addr)
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



submit_form=()=>{

    let Api_data ={
      
        ordr_user_id: this.state.User_Id_No,
        ordr_serv_id: this.state.form4_data['form_data']['sender_info']['serv_id'],
        ordr_serv_type: 2,
        ordr_pckg_data: [{"unit":"2","len":"12","dept":"12","hegt":"13"}],
        ordr_send_cmpny:this.state.form4_data['form_data']['sender_info']['Company_name'] ,
        ordr_send_surname: this.state.form4_data['form_data']['sender_info']['Surname'],
        ordr_send_name: this.state.form4_data['form_data']['sender_info']['FirstName'],
        ordr_send_tel: this.state.form4_data['form_data']['sender_info']['Telephone'],
        ordr_send_email: this.state.form4_data['form_data']['sender_info']['Email'],
        ordr_send_addr: this.state.form4_data['form_data']['sender_info']['Address'],
        ordr_send_cntry: this.state.form4_data['form_data']['sender_info']['Country'],
        ordr_send_city: this.state.form4_data['form_data']['sender_info']['City'],
        ordr_send_zip: this.state.form4_data['form_data']['sender_info']['cityZip'],
        ordr_send_add_info: this.state.form4_data['form_data']['sender_info']['Additional_Info'],

        ordr_recpt_cmpny: this.state.form4_data['form_data']['recipent_info']['Company_name'],
        ordr_recpt_surname: this.state.form4_data['form_data']['recipent_info']['Surname'],
        ordr_recpt_name: this.state.form4_data['form_data']['recipent_info']['FirstName'],
        ordr_recpt_tel: this.state.form4_data['form_data']['recipent_info']['Telephone'],
        ordr_recpt_email: this.state.form4_data['form_data']['recipent_info']['Email'],
        ordr_recpt_addr: this.state.form4_data['form_data']['recipent_info']['Address'],
        ordr_recpt_cntry: this.state.form4_data['form_data']['recipent_info']['Country'],
        ordr_recpt_city: this.state.form4_data['form_data']['recipent_info']['City'],
        ordr_recpt_zip: this.state.form4_data['form_data']['recipent_info']['cityZip'],
        ordr_recpt_add_info: this.state.form4_data['form_data']['recipent_info']['Additional_Info'],

        ordr_reason_ship: this.state.form4_data['form_data']['Reason'],
        ordr_content: this.state.form4_data['form_data']['Content'],
        ordr_invc_addr: this.state.ordr_invc_addr,
        ordr_img: '',
        ordr_delvr_date:this.state.DOB,
        ordr_time_frm: '02:16:00',
        ordr_time_to: '02:16:00',
        ordr_add_info_pony: this.state.Pony,
        ordr_ship_type: this.state.form4_data['form_data']['sender_info']['transp_type'],
        ordr_home_colectn: this.state.form4_data['form_data']['sender_info']['home_collection'],
        ordr_home_delvry: this.state.form4_data['form_data']['sender_info']['home_delivary'],
        ordr_insurance: 1,
        ordr_ship_discription:"",
        ordr_country_origin:0,
        ordr_quantity: this.state.form4_data['form_data']['Quantity'],
        ordr_unit_value: '',
        ordr_total: 0,
        ordr_custom_duties:this.state.form4_data['form_data']['muitiple_orders'],
        ordr_send_vat: this.state.form4_data['form_data']['sender_info']['VAT_Number'],
        ordr_recr_vat: this.state.form4_data['form_data']['recipent_info']['VAT_Number'],
        ordr_no_custom: 0,
        ordr_transport_fee: 500,
        ordr_custom_duty: this.state.form4_data['form_data']['Custom_duty'],
        ordr_home_clectn: 0,
        ordr_insurance_price: 0,
        ordr_total_price: 827.73,
        ordr_invoice_id: 146,
        ordr_rbn_transport_fee: 100,
        ordr_rbn_custom_fee: 0.17,
        ordr_dept_bsnes_chk: 0,
        ordr_ariv_bsnes_chk: 0,
        ordr_pay_details: this.state.paypal_Resp['response'],
        ordr_pay_status: "COMPLETED",
        ordr_pay_type: "PayPal"

   }

   const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:Api_data 
};
console.log("requestOptions",JSON.stringify(requestOptions))
  console.log("req_data",Api_data)
fetch("http://rbn.sairoses.com/Front/index.php/API/madd/service-order", requestOptions)
.then(async response => {
    const data = await response.json();

        console.log("data yee"+typeof JSON.stringify(data['result']));
      let a = JSON.stringify(data['result']);
           this.setState({
            Invoice_Order_no:a
        })
        console.log("da6a",this.state.Invoice_Order_no)
        let formdata = {}
        formdata["order_id"]= this.state.Invoice_Order_no,
        formdata["Amount"]= this.state.form4_data['form_data']['Custom_duty'],
        formdata["Payment"]= this.state.paypal_Resp['response'],
        console.log("formdata",formdata)
        this.props.navigation.navigate('OrderComplete', {FormData:formdata})
    if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
    }

    this.setState({ postId: data.id })
})
.catch(error => {
    this.setState({ errorMessage: error.toString() });
    console.error('There was an error!', error);
});
}




// ordercomplete = () => {

//     //console.log("all the data",this.state.form4_data)
//     this.props.navigation.navigate('Paypal',{All_form_data:this.state.form4_data})
// }

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
                                <TextInputComponent onChangeText={(text)=>this.setState({Pony:text})}
                                    placeholder={'Additional Information For Pony (e.g.\n Who Contacts In Case Of Needs, \n Intercom, Etc.)'}
                                    underlineColorAndroid='grey' Ref={input => { this.Pony = input }} designStyle={{ height: 100 }} />
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={this.callApi} style={styles.button}>
                            <Image source={require('../../Images/success.png')} style={styles.icon} />
                            <Text style={styles.save}>Pay Now</Text>
                        </TouchableOpacity>
                    </View>
      </View>
    );
  }
}

