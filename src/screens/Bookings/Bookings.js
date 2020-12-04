//import liraries
import React, { Component } from 'react';
import { View, Text,FlatList, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from "./Styles";
import Popup from '../../components/Popup';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment/moment';
// create a component
export default class MyClass extends Component {
    constructor(props){
        super(props)
        this.state={
            isDot1: false,
            isDot2: false,
            User_id:0,
            result_data:[]
        }
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
           
            User_id:User_ord_id
          })
      console.log("useid",this.state.User_id)
        this.BokkingApi();
    }

    BokkingApi=()=>{

        
var formdata = new FormData();
formdata.append("user_id", this.state.User_id);
      
  const request_option={
     method :'POST',
       redirect: 'follow', 
       body :formdata
  }
  console.log("Body",JSON.stringify(request_option))
  fetch("http://rbn.sairoses.com/Front/index.php/API/fields/user-booking-history", request_option)
  .then(async response =>{
      const data =await response.json();
      console.log("data yee"+(data['result']));
       const result =(data['result']);
       const result_Duty  =(data['result'][0]['ordr_custom_duties']['ordr_custom']);
       console.log("result_Duty",result_Duty)
    //    for(let i=0; i<result.length; i++){
    //     result[i]['transport_fee'] = this.state.logData[i][0]
    //     // this.state.Home_data[i]['fee_on_transport'] = this.state.logData[i][1]
    //     // this.state.Home_data[i]['home_colectn'] = this.state.logData[i][2]
    //     // this.state.Home_data[i]['home_delv'] = this.state.logData[i][3]
    //     // this.state.Home_data[i]['servc_from'] = this.state.logData[i][4]
    //     // this.state.Home_data[i]['rbn_transport_fee'] = this.state.logData[i][5]
    // }

       this.setState({
           result_data:result
       })
     console.log("result_data",this.state.result_data)
  }).catch(error => {
    this.setState({ errorMessage: error.toString() });
    console.error('There was an error!', error);
});
    }


    isDot1Pressed=()=> {
        if (!this.state.isDot1) {
            this.setState({isDot1: true})
          } else {
            this.setState({isDot1: false})
          }
    // this.setState({ isDot1: true, isDot2: false })
    }

    isDot2Pressed=()=> {
        if (!this.state.isDot2) {
            this.setState({isDot2: true})
          } else {
            this.setState({isDot2: false})
          }
    // this.setState({ isDot2: true, isDot1: false })
    }

    home = () => {
        this.props.navigation.navigate('HomeScreen')
    }

    render() {
        return (
            <SafeAreaView>
            <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
                   <View style={styles.one}>
                   <View style={styles.view1}>
                       <TouchableOpacity onPress={this.home}>
                       <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                       </TouchableOpacity>
                       <Text style={styles.about}>My Bookings</Text>
                   </View>
                   </View>
           </ImageBackground>
           <FlatList       
          data={this.state.result_data } 
        //  ItemSeparatorComponent={this._renderSeparator}
          keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
         <View style={styles.scroll}>
                 <View style={styles.card4}>
                        {
                                    this.state.isDot1 == true ?
                                    <Popup data={this.props}/>
                                    :
                                    null
                                }
                            <View style={styles.circle} />
                            <View style={styles.cardView}>
                            <View style={styles.cardv1}>
                                  <Text style={{color: 'grey'}}>Order No. - <Text style={{color: 'skyblue'}}>{item.ordr_id}</Text></Text>
                                  <TouchableOpacity style={styles.men} onPress={this.isDot1Pressed}>
                                  <Image source={require('../../Images/menu-(1).png')} style={styles.men1} />
                                  </TouchableOpacity>
                              </View>
                              <View style={styles.cardv2}>
                                <View style={styles.cardv21}>
                                    <View style={styles.card211}>
                                        <View style={styles.card2111}>
                                            <Text style={styles.card2111a}>{moment(item.comp_create_date).format('DD-MMM-YYYY')}</Text>
                                            <View style={styles.line}></View>
                                            <Text style={styles.card2111b}> {item.serv_ware_dc_addr}</Text>
                                        </View>
                                        <View style={styles.card2112}>
                                            <Image source={require('../../Images/product.png')} style={styles.product} />
                                            <Text style={styles.cardHome}>Home Collection</Text>
                                        </View>
                                    </View>
                                    <View style={styles.card212}>
                                        <Image source={require('../../Images/send.png')} style={styles.arr} />
                                    </View>
                                    <View style={styles.card211}>
                                    <View style={styles.card2111}>
                                            <Text style={styles.card2111a}>{moment(item.ordr_create_date).format('DD-MMM-YYYY')}</Text>
                                            <View style={styles.line}></View>
                                            <Text style={styles.card2111b}> {item.serv_ware_ac_addr}</Text>
                                        </View>
                                        <View style={styles.card2112}>
                                            <Image source={require('../../Images/product.png')} style={styles.product} />
                                            <Text style={styles.cardHome}>At Shippers Warehouse</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.cardv22}>
                                    <Text style={styles.cardv221}>{item.ordr_total_price}</Text>
                                    <Text style={styles.cardHome}>Shipping Amount</Text>
                                    <View style={styles.line1}></View>
                            <Text style={styles.car}>Carrier - { item.ordr_serv_type == 1 ? <Text style={{color: 'dodgerblue'}}>Air</Text> : item.ordr_serv_type == 2 ? <Text style={{color: 'dodgerblue'}}>Maritime</Text> :  item.ordr_serv_type == 3 ? <Text style={{color: 'dodgerblue'}}>Road</Text> : null }</Text>
                                    <View style={styles.processing}>
                                        <Text style={styles.white}>Processing</Text>
                                    </View>
                                    <Text style={styles.invo}>Invoice / Payment-<Text style={{color: 'dodgerblue'}}>{item.ordr_invoice_id}</Text></Text>
                                </View>
                              </View>
                              <View style={styles.cardv3}>
                                  <Text style={styles.sendtext}>Sender / Recipient -   {item.ordr_send_name} {item.ordr_send_surname}/{item.ordr_recpt_name} {item.ordr_recpt_surname}</Text>
                                  {/* <View style={styles.redbot}>
                                      <Text style={styles.sendtext}>Label Pickup Ref. - <Text style={{color: 'dodgerblue'}}>54</Text></Text>
                                      <View style={styles.row}>
                                          <Text style={styles.sendtext}>custom Duty Recap - </Text>
                                          <Image source={require('../../Images/invoice.png')} style={styles.product} />
                                      </View>
                                  </View> */}
                              </View>
                            </View>
                            <View style={styles.circle1} />
                          </View>
        </View> 
        
        
          }/>
                        
           </SafeAreaView>
        );
    }
}
{/* <View style={styles.cardView}>  item.ordr_serv_type == 2 ? <Text style={{color: 'dodgerblue'}}>Maritime</Text>
                              <View style={styles.cardv1}>
                                  <Text style={{color: 'grey'}}>Order No. - <Text style={{color: 'skyblue'}}>54</Text></Text>
                                  <Image source={require('../../Images/menu-(1).png')} style={styles.men} />
                              </View>
                          </View> */}

