import React,{Component} from 'react';
import {Text,View,Button} from 'react-native';
import RNPaypal from 'react-native-paypal-lib';
class Paypal extends Component {
    constructor(props){
       super(props);
       this.state={
           All_info:this.props.route.param.All_form_data
       };
    }
   componentDidMount=()=>{
      console.log("heyyyy",RNPaypal)
   }

   navi_Forward=()=>{
    let formdata = {}
    formdata["all_info"]= this.state.All_info,
    this.props.navigation.navigate('OrderComplete', {})
}
navi_Backward=()=>{
    this.props.navigation.navigate('BeforeOrder', {})
}

    render() {
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
            this.navi_Forward()
      }).catch(err => {
        console.log("errorrssss")
          console.log(err.message)
          alert("Transaction Cancelled")
          this.navi_Backward()
      })
      }
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    
       <Button title="Complete Payment" onPress={()=>callApi()}/>
            </View>
        );
    }
}
export default Paypal;