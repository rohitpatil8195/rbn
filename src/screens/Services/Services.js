import React, { Component ,useEffect} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, Animated, Dimensions } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';
import Scroller from '../../components/Scroller';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Loader from '../../components/Loader';
import { triggerAuthLogin, triggerLogout,triggerCustom } from '../../actions';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment/moment';
//import { triggerCustom } from '../../actions';




// create a component
class Services extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isCheck: false,
            isSearch: false,
            isFilter: false,
            isAir: false,
            isMaritime: false,
            isRoad: false,
            animation: new Animated.Value(0),
            disp_add:'',
            des_add:'',
            serv_date_of_departure:'',
            serv_date_of_arrival:'',
            ser_type:'',
            ser_type1:'',
            ser_type2:'',
            serv_date_of_departure:'',
            serv_date_of_departure1:'',
            serv_date_of_departure2:'',
            serv_date_of_arrival:'',
            serv_date_of_arrival1:'',
            serv_date_of_arrival2:'',
            serv_ware_dc_addr:'',
            serv_ware_dc_addr1:'',
            serv_ware_dc_addr2:'',
            serv_ware_ac_addr:'',
            serv_ware_ac_addr1:'',
            serv_ware_ac_addr2:'',
            serv_ofr_price:'',
            serv_ofr_price1:'',
            serv_ofr_price2:'',
            sender_country:'',
            rec_country:'',
            service_id:'',
            total_price1:'',
            total_price2:'',
            total_price3:'',
            Weight:this.props.route.params.weight,
            Diments:this.props.route.params.Dimen, 
             des_country:this.props.route.params.dep_country,
             des_city:this.props.route.params.dep_city,
             arr_country:this.props.route.params.arr_country,
             arr_city:this.props.route.params.arr_city0,
            isCheck1: false,
            isCheck2: false,
            isCheck3: false,
            isCheck4: false,
            isCheck5: false,
            isCheck6: false,
            shipping_filter:'',
            Delivery_required:'',
            insurance_filter:'',
            HomeServ_collection:'',
            HomeServ_collection1:'',
            HomeServ_delivery:'',
            HomeServ_delivery1:'',
            insurance:'',
            homeCollection:'',
             home_delv:'',
             setAvailList:true,
             setFilter:false,
             service_type1:'',

             service_type2:'',

             service_type3:'',
         services_Ids:[]

            


        }
    }


    
    componentDidMount = async() => {
      
      await  this.userInfo();
        
        
            // setTimeout(() => {
            //     this.userInfo();
            //     }, 1000)

        //    var bd : ({
        //         tranport_type: "[2]";
        //          service_type: "1";
        //            weight: "[15]";
        //        dimension: ["3||4||1"];
        //             quantity: "[1]";
        //             scat_id: "[0]";
        //             serv_id: "209"

        //     };
            // const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({   tranport_type: "[2]",
            //     service_type: "1",
            //       weight: "[15]",
            //   dimension: ["3||4||1"],
            //        quantity: "[1]",
            //        scat_id: "[0]",
            //        serv_id: "209"})
            // };
            // console.log("req option", requestOptions )
            // fetch('http://rbn.sairoses.com/Front/index.php/API/fields/calculation', requestOptions)
            //     .then(async response => {
            //         const data = await response.json();
            //                console.log("data yee"+JSON.stringify(data))
            //         // check for error response
            //         if (!response.ok) {
            //             // get error message from body or default to response status
            //             const error = (data && data.message) || response.status;
            //             return Promise.reject(error);
            //         }
        
            //         this.setState({ postId: data.id })
            //     })
            //     .catch(error => {
            //         this.setState({ errorMessage: error.toString() });
            //         console.error('There was an error!', error);
            //     });
        
           
    }  


    userInfo = async () => {
        console.log("this data",this.props.route.params.data)
        // const chech = await AsyncStorage.getItem('persist:sampleRedux')
        const chech = await  (this.props.route.params.data);
        const js =  (chech);
      // let authreducer = JSON.parse(js['authReducer'])
      // let loginobj = authreducer['searchObj'];
//console.log("async_objdata-- "+JSON.stringify(loginobj));
  
       let logindata =  chech
   //  console.log("this is login data"+ logindata['result'][0]['serv_id'])
           
      //serv_home_collection
   
      let HomeServ_collection = (logindata['result'][0]['serv_home_collection']);
      let HomeServ_collection1 = (logindata['result'][1]['serv_home_collection']);
   
                      console.log("....."+ HomeServ_collection)
      this.HomeServ_collection = HomeServ_collection;
        this.HomeServ_collection1 = HomeServ_collection1;


        let HomeServ_delivery = (logindata['result'][0]['serv_home_delivery']);
      let HomeServ_delivery1 = (logindata['result'][1]['serv_home_delivery']);
   
                    //  console.log("....."+ HomeServ_delivery1)
      this.HomeServ_delivery = HomeServ_delivery;
        this.HomeServ_delivery1 = HomeServ_delivery1;


        let service_type1 = (logindata['result'][0]['serv_id']);
   
        let service_type2 = (logindata['result'][1]['serv_id']);
        
        let service_type3 = (logindata['result'][2]['serv_id']);
        const serv1 = service_type1;
        const serv2 = service_type2;
        const serv3 = service_type3;
       //   this.service_id = serv;
       this.setState({
        service_type1:serv1,
        service_type:serv2,
        service_type3:serv3,
         services_Ids: [service_type1,service_type2,service_type3]
       });
     
       //console.log("service arrays are"+this.state.services_Ids)

console.log("service id>>"+ this.state.service_id)

   let serv_type = (logindata['result'][0]['serv_type']);
   let serv_type1 = (logindata['result'][1]['serv_type']);
   let serv_type2 = (logindata['result'][2]['serv_type']);
 console.log("service serv_type1>>"+ serv_type)
 console.log("service serv_type2>>"+ serv_type1)
   this.ser_type = serv_type;
     this.ser_type1 = serv_type1;
   this.ser_type2 = serv_type2;
   
   let serv_date_of_departure = (logindata['result'][0]['serv_date_of_departure']);
   let serv_date_of_departure1 = (logindata['result'][1]['serv_date_of_departure']);
  let serv_date_of_departure2 = (logindata['result'][2]['serv_date_of_departure']);
                 // let serv_date_of_departure2 =  moment().format('YY/MMM/DD');
                   //console.log("....."+ serv_date_of_departure2)
   this.serv_date_of_departure = serv_date_of_departure;
     this.serv_date_of_departure1 = serv_date_of_departure1;
   this.serv_date_of_departure2 = serv_date_of_departure2;
   

   let serv_date_of_arrival = (logindata['result'][0]['serv_date_of_arrival']);
   let serv_date_of_arrival1 = (logindata['result'][1]['serv_date_of_arrival']);
   let serv_date_of_arrival2 = (logindata['result'][2]['serv_date_of_arrival']);
   this.serv_date_of_arrival = serv_date_of_arrival;
     this.serv_date_of_arrival1 = serv_date_of_arrival1;
   this.serv_date_of_arrival2 = serv_date_of_arrival2;
   


   this.serv_date_of_departure = serv_date_of_departure;
   this.serv_date_of_departure1 = serv_date_of_departure1;
 this.serv_date_of_departure2 = serv_date_of_departure2;
 

 let serv_ware_dc_addr = (logindata['result'][0]['serv_ware_dc_addr']);
 let serv_ware_dc_addr1 = (logindata['result'][1]['serv_ware_dc_addr']);
 let serv_ware_dc_addr2 = (logindata['result'][2]['serv_ware_dc_addr']);
 this.serv_ware_dc_addr = serv_ware_dc_addr;
   this.serv_ware_dc_addr1 =serv_ware_dc_addr1;
 this.serv_ware_dc_addr2 = serv_ware_dc_addr2;
   

 this.serv_date_of_departure = serv_date_of_departure;
 this.serv_date_of_departure1 = serv_date_of_departure1;
this.serv_date_of_departure2 = serv_date_of_departure2;


let serv_ware_ac_addr = (logindata['result'][0]['serv_ware_ac_addr']);
let serv_ware_ac_addr1 = (logindata['result'][1]['serv_ware_ac_addr']);
let serv_ware_ac_addr2 = (logindata['result'][2]['serv_ware_ac_addr']);
this.serv_ware_ac_addr = serv_ware_ac_addr;
 this.serv_ware_ac_addr1 =serv_ware_ac_addr1;
this.serv_ware_ac_addr2 = serv_ware_ac_addr2;


let serv_ofr_price = (logindata['result'][0]['serv_ofr_price']);
let serv_ofr_price1 = (logindata['result'][1]['serv_ofr_price']);
let serv_ofr_price2 = (logindata['result'][2]['serv_ofr_price']);
//console.log("+++++ "+ serv_ofr_price1)
this.serv_ofr_price = serv_ofr_price;
 this.serv_ofr_price1 =serv_ofr_price1;
this.serv_ofr_price2 = serv_ofr_price2;

this.getCal();

    // setTimeout(() => {
    //     this.getCal();
    //     }, 5000)
    }
   


   getCal=()=>{

        let tranp_type =this.ser_type;
        let transp_type1 = this.ser_type1;
         let wt = this.state.Weight;
         let reqData = {   
            service_type: "1",
            weight: "["+wt+"]",
            dimension: this.state.Diments,
               serv_id:"209",
            serv_ids: "["+this.state.services_Ids+"]"
            }
        console.log('red ==> ',reqData)

          const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reqData) 
            };
            // console.log("service arrays are"+ typeof(this.service_type1))
            // console.log("Test___"+this.state.Weight)
            // console.log("req option", requestOptions )
            fetch('http://rbn.sairoses.com/Front/index.php/API/fields/transportcalculation', requestOptions)
                .then(async response => {
                    const data = await response.json();
            
                           console.log("data yee"+JSON.stringify(data))
                           let price1 = JSON.stringify(data['result'][0][0]);
                           let price2 = JSON.stringify(data['result'][1][0]);
                           let price3 = JSON.stringify(data['result'][2][0]);
                           let insurance = JSON.stringify(data['result'][0]['insurance']);
                          let homeCollection1 = JSON.stringify(data['result'][0][2]);
                          let homeCollection2 = JSON.stringify(data['result'][1][2]);
                          let homeCollection3 = JSON.stringify(data['result'][2][2]);
                          let home_delv1 = JSON.stringify(data['result'][0][3]);
                          let home_delv2 = JSON.stringify(data['result'][0][3]);
                          let home_delv3 = JSON.stringify(data['result'][0][3]);
                     
                        //   transport_fee,
                        //   fee_on_transport,
                        //   home_colectn,
                        //   home_delv,
                        //   servc_from,
                        //   rbn_transport_fee
                          this.insurance = insurance;
                          this.homeCollection1 = homeCollection1;
                          this.homeCollection2 = homeCollection2;
                          this.homeCollection3 = homeCollection3;
                          this.home_delv1 = home_delv1;
                          this.home_delv2 = home_delv2;
                          this.home_delv3 = home_delv3;
                          //console.log("insurance"+ this.insurance)
                          
                          // let price = JSON.stringify(data['result'][0]['total']);
                        
                          // let price =(prc['total'])
                           
                          // this.total_price1 = price;
                           if(tranp_type =1 && price1 != 0 ){
                            this.total_price1 = price1;
                            }if(transp_type1=2 && price2 != 0 ){
                             this.total_price2 = price2;
                             }if(tranp_type=3 &&  price3 != 0 ){
                             this.total_price3 = price3;
                            } 
                           
                           
                    // check for error response
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



    // getCal = () => {
    //     let formdata = new FormData();
    //     formdata.append("tranport_type",  this.ser_type )
    //     formdata.append("service_type", "1")
    //     formdata.append("insurance_type", "1")
    //     formdata.append("weight", this.state.Weight)
    //     formdata.append("dimension", this.state.Diments);
    //     formdata.append("belongings", "[0]")
    //     formdata.append("quantity", "1")
    //     formdata.append("unit_of_measure", "1")
    //     formdata.append("unit_value", "1")
    //     formdata.append("currency", "1")
    //     formdata.append("scat_id", "1")
    //     formdata.append("serv_id",   this.state.service_id )
    //    // console.log(this.state.countrySelect)
  
    //    const requestOptions = {
    //     method: 'POST',
    //     body: JSON.stringify(formdata)
    //    }
    // console.log("req option", formdata )
    // fetch('http://rbn.sairoses.com/Front/index.php/API/fields/calculation', requestOptions)
    //     .then(async response => {
    //         const data = await response.json();
    //                console.log("data yee"+JSON.stringify(data))
                   
    //         // check for error response
    //         if (!response.ok) {
    //             // get error message from body or default to response status
    //             const error = (data && data.message) || response.status;
    //             return Promise.reject(error);
    //         }

    //         this.setState({ postId: data.id })
    //     })
    //     .catch(error => {
    //         this.setState({ errorMessage: error.toString() });
    //         console.error('There was an error!', error);
    //     });


    // // console.log("service id"+ this.state.service_id )
    // //     console.log('formdatail: ', JSON.stringify(formdata))
    // //     this.props.triggerCustom(formdata, this.onSuccess, this.onError);
     
    //   } 


      onSuccess = (data) => {
        console.log('success', data)
    
      }
    
      onError = (data) => {
        console.log('onError', data)
    
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

    isCheckPressed = () => {
        if (!this.state.isCheck) {
            this.setState({ isCheck: true })
        } else {
            this.setState({ isCheck: false })
        }
    }

    isSearchPressed = () => {
        if (!this.state.isSearch) {
            this.setState({ isSearch: true })
        } else {
            this.setState({ isSearch: false })
        }
    }

    isFilterPressed = () => {
        if (!this.state.isFilter) {
            this.setState({ isFilter: true })
        } else {
            this.setState({ isFilter: false })
        }
    }

    isAirPressed = () => {
        this.setState({setAvailList: false})
        this.setState({setFilter: false});
        this.userInfo()
        if (!this.state.isAir) {
            this.setState({ isAir: true })
        } else {
            this.setState({ isAir: false })
        }
        this.setState({ isAir: true, isMaritime: false, isRoad: false })
    }

    isMaritimePressed = () => {
        this.userInfo()
        this.setState({setAvailList: false})
        this.setState({setFilter: false});
        if (!this.state.isMaritime) {
            this.setState({ isMaritime: true })
        } else {
            this.setState({ isMaritime: false })
        }
        this.setState({ isAir: false, isMaritime: true, isRoad: false })
    }

    isRoadPressed = () => {
        this.userInfo()
        this.setState({setAvailList: false})
        this.setState({setFilter: false});
        if (!this.state.isRoad) {
            this.setState({ isRoad: true })
        } else {
            this.setState({ isRoad: false })
        }
        this.setState({ isAir: false, isMaritime: false, isRoad: true })
    }

    sender = () => {
        this.props.isLoggedIn == false ?
            this.props.navigation.replace('Login', {})
            :
            //console.log("countyyyyyy  "+this.state.sender_country)
            this.props.navigation.navigate('Sender', { sender_country:this.state.des_country , sender_city:this.state.des_city,reciver_country:this.state.arr_country,reciver_city:this.state.arr_city})
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

    serviceList = () => {
        this.props.navigation.navigate('ServiceList', {})
    }

    isCheckPressed1=()=> {
        if (!this.state.isCheck1) {
            this.setState({isCheck1: true, shipping_filter:1})
         
          } else{
            this.setState({isCheck1: false})
          }
         
    }


    isCheckPressed2=()=> {
        if (!this.state.isCheck2) {
            this.setState({isCheck2: true,shipping_filter:0})
          } else{
            this.setState({isCheck2: false})
          }
         
    }

    isCheckPressed3=()=> {
        if (!this.state.isCheck3) {
            this.setState({isCheck3: true,Delivery_required:1})
          }else{
            this.setState({isCheck3: false})
          }
    }

    isCheckPressed4=()=> {
        if (!this.state.isCheck4) {
            this.setState({isCheck4: true,Delivery_required:0})
          }else{
            this.setState({isCheck4: false})
          }
    }
    
    isCheckPressed5=()=> {
        if (!this.state.isCheck5) {
            this.setState({isCheck5: true,insurance_filter:1})
          }else{
            this.setState({isCheck5: false})
          }
    }

    isCheckPressed6=()=> {
        if (!this.state.isCheck6) {
            this.setState({isCheck6: true,insurance_filter:0})
          } else{
            this.setState({isCheck6: false})
          }
    }


     Filteropt=()=>{
           this.setState({setFilter: true});
           this.setState({ isAir: false, isMaritime: false, isRoad: false })
             //console.log("aaaa",this.state.shipping_filter)
           Animated.timing(this.state.animation, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start( this.setState({setFilter: true}) );
    }


    


    render() {
        const screenHeight = Dimensions.get("window").height;

        const { dep_country,arr_country,time,weight,Dimen } = this.props.route.params;
   let send_contr = Dimen;
  console.log("-->>>"+send_contr);
    //   this.state.sender_country = send_contr;

       

        let curet = new Date(time);
        curet.getDate();
        let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
monthNames[curet.getMonth()];
var gsDayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  gsDayNames[curet.getDay()];

       // const { arr_country } = this.props.route.params;
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
            
          
            <View>
                <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
                    <View style={styles.one}>
                        <View style={styles.view1}>
                            {/* <TouchableOpacity onPress={this.isMenuPressed}>
                                <Image source={require('../../Images/menu2.png')} style={styles.back} resizeMode='center' />
                            </TouchableOpacity> */}
                            <Image source={require('../../Images/logo.png')} style={styles.logo} resizeMode='contain' />
                        </View>
                        {/* <Image source={require('../../Images/tracking.png')} style={styles.back} resizeMode='center' /> */}
                    </View>
                </ImageBackground>
                {
                    this.state.isSearch == true ?
                        <View style={styles.searchCard}>
                            <View style={styles.searchCard1}>
                                <View style={styles.searchCard2}>
                                    <TextInputComponent source={require('../../Images/calendar.png')} onChangeText={this.onChangeTextEmail} placeholder='Departure, Destination, Date' Ref={input => { this.userName = input }} />
                                </View>
                                <View style={styles.searchCard3}>
                                    <TouchableOpacity onPress={this.isSearchPressed}>
                                        <Image source={require('../../Images/magnifying-glass-bl.png')} style={styles.searchIcon} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                        :
                        <View style={styles.hide}>
                            <View style={styles.card}>
                                <View style={styles.vertical}>
                                    <View style={styles.twoicons}>
                                        <Image source={require('../../Images/dot-and-circle.png')} style={styles.down} resizeMode='center' />
                                        <Image source={require('../../Images/dotted-barline.png')} style={styles.dotted} resizeMode='contain' />
                                        <Image source={require('../../Images/maps-and-flags.png')} style={styles.down} resizeMode='center' />
                                    </View>
                                </View>
                                <View style={styles.vertical1}>
                                    <Text style={{ fontSize: 12, color: 'grey' }}>Departure</Text>
                                    <Text style={{ fontSize: 12 }} >{dep_country}</Text>
                                    <View style={styles.remember}>
                                        <TouchableOpacity onPress={this.isCheckPressed}>{
                                            this.state.isCheck ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />

                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                                        }</TouchableOpacity>
                                        <Text style={styles.email}>Business Address</Text>

                                    </View>
                                    <View style={styles.line}>
                                        <View style={styles.line1} />
                                        <Image source={require('../../Images/down-arrow.png')} style={styles.down} />
                                        <View style={styles.line2} />
                                    </View>
                                    <Text style={{ fontSize: 12, color: 'grey' }}>Destination</Text>
                                    <Text style={{ fontSize: 12 }}>{arr_country}</Text>
                            
                                    <View style={styles.remember}>
                                        <TouchableOpacity onPress={this.isCheckPressed}>{
                                            this.state.isCheck ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />

                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                                        }</TouchableOpacity>
                                        <Text style={styles.email}>Business Address</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.pcard}>
                                <View style={styles.card1}>
                                    <Image source={require('../../Images/calendar.png')} style={styles.down} />
                                    <Text style={{ fontSize: 35, fontWeight: 'bold', marginHorizontal: 5 }}>{ curet.getDate() ? curet.getDate() : null}</Text>
                                    <View style={styles.day}>
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{monthNames[curet.getMonth()]}</Text>
                                        <Text style={{ fontSize: 10 }}>{ gsDayNames[curet.getDay()]}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={this.isSearchPressed} style={styles.search}>
                                    <Image source={require('../../Images/magnifying-glass.png')} style={styles.icon} />
                                    <Text style={{ fontSize: 15, color: 'white', marginHorizontal: 5 }}>Search</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                }
                <View style={styles.card2}>
                    <View style={styles.card2c}>
                        <TouchableOpacity onPress={this.serviceList}>
                            <Text>Available Services</Text>
                        </TouchableOpacity>
                        <View style={styles.filter}>
                            <TouchableOpacity onPress={this.handleOpen}>
                                <Image source={require('../../Images/filter-sort-blue.png')} style={styles.icon} />
                            </TouchableOpacity>
                            <Text>FILTER</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.card3}>
                    <View style={styles.card2c}>
                        {
                            this.state.isAir == true ?
                                <TouchableOpacity onPress={this.isAirPressed} style={styles.compo}>
                                    <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon} />
                                    <Text style={{ color: 'dodgerblue' }}>Air</Text>
                                    <Image source={require('../../Images/plane.png')} style={styles.icon} />
                                </TouchableOpacity>
 
                                :
                                <TouchableOpacity onPress={this.isAirPressed} style={styles.compo}>
                                    <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon} />
                                    <Text>Air</Text>
                                    <Image source={require('../../Images/plane(1).png')} style={styles.icon} />
                                </TouchableOpacity>
                        }
                        {this.state.isMaritime ?
                            <TouchableOpacity onPress={this.isMaritimePressed} style={styles.compo1}>
                                <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon} />
                                <Text style={{ color: 'dodgerblue' }}>Maritime</Text>
                                <Image source={require('../../Images/ocean-transportation.png')} style={styles.icon} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={this.isMaritimePressed} style={styles.compo1}>
                                <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon} />
                                <Text>Maritime</Text>
                                <Image source={require('../../Images/ocean-transportation-(1).png')} style={styles.icon} />
                            </TouchableOpacity>
                        }
                        {this.state.isRoad ?

                            <TouchableOpacity onPress={this.isRoadPressed} style={styles.compo2}>
                                <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon} />
                                <Text style={{ color: 'dodgerblue' }}>Road</Text>
                                <Image source={require('../../Images/delivery-truck-with-packages-behind.png')} style={styles.icon} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={this.isRoadPressed} style={styles.compo2}>
                                <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon} />
                                <Text>Road</Text>
                                <Image source={require('../../Images/delivery-truck-with-packages-behind(1).png')} style={styles.icon} />
                            </TouchableOpacity>

                        }
                    </View>
                </View>
{/*                
                <ScrollView style={{marginTop:"2%",height:'60%',marginBottom:'8%',borderColor:'black',borderWidth:1}}>

                      <TouchableOpacity onPress={this.sender} style={styles.cardN}>
                        <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_departure).format('DD MMM YYYY')}</Text>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr}</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />

                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_arrival).format('DD MMM YYYY')}</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr}</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >{this.total_price1}$</Text>
                                    <Text style={{ fontSize: 8 }}>Include insurance</Text>
                                    <View style={styles.line3}></View>
                                    <Text>Type - Air</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                            </View>
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 8 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                      <TouchableOpacity onPress={this.sender} style={styles.cardN}>
                        <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_departure2).format('DD MMM YYYY')}</Text>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr1}</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />

                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_arrival1).format('DD MMM YYYY')}</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr1}</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >{this.total_price2}$</Text>
                                    <Text style={{ fontSize: 8 }}>Include insurance</Text>
                                    <View style={styles.line3}></View>
                                    <Text>Type-Maritime</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                            </View>
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 8 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                      <TouchableOpacity onPress={this.sender} style={styles.cardN}>
                        <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_departure1).format('DD MMM YYYY')}</Text>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr2}</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />

                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_arrival2).format('DD MMM YYYY')}</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr2}</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >{this.total_price3}$</Text>
                                    <Text style={{ fontSize: 8 }}>Include insurance</Text>
                                    <View style={styles.line3}></View>
                                    <Text>Type - Road</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                            </View>
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 8 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                         
                              

                    {/* <TouchableOpacity style={styles.card4}>
                        <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>17 Oct 19</Text>
                                    <Text style={{ fontSize: 10 }}>Camapania, Itlay</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>20 Oct 19</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>Dakar, Senegal</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >400$</Text>
                                    <Text style={{ fontSize: 8 }}>Include insurance</Text>
                                    <View style={styles.line3}></View>
                                    <Text>Type - Air</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                            </View>
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 8 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity style={styles.card4}>
                        <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>17 Oct 19</Text>
                                    <Text style={{ fontSize: 10 }}>Camapania, Itlay</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>20 Oct 19</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>Dakar, Senegal</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >400$</Text>
                                    <Text style={{ fontSize: 8 }}>Include insurance</Text>
                                    <View style={styles.line3}></View>
                                    <Text>Type - Air</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                            </View>
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 8 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity style={styles.card4}>
                        <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>17 Oct 19</Text>
                                    <Text style={{ fontSize: 10 }}>Camapania, Itlay</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>20 Oct 19</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>Dakar, Senegal</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >400$</Text>
                                    <Text style={{ fontSize: 8 }}>Include insurance</Text>
                                    <View style={styles.line3}></View>
                                    <Text>Type - Air</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                            </View>
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 8 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity style={styles.card4}>
                        <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>17 Oct 19</Text>
                                    <Text style={{ fontSize: 10 }}>Camapania, Itlay</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>20 Oct 19</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>Dakar, Senegal</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >400$</Text>
                                    <Text style={{ fontSize: 8 }}>Include insurance</Text>
                                    <View style={styles.line3}></View>
                                    <Text>Type - Air</Text>
                                </View>
                            </View>
                        </View>
                       
                    </TouchableOpacity> */}
                   { this.state.setAvailList == true  ? <ScrollView  style={{marginTop:"2%",height:'60%',marginBottom:'8%',borderColor:'black',borderWidth:1}}>

            {  this.total_price1 > 0 && (this.ser_type == 1 ||  this.ser_type1 == 1 || this.ser_type2 == 1) ?  <TouchableOpacity onPress={this.sender} style={styles.cardM}>
                        <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_departure).format('DD MMM YYYY')}</Text>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr}</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />

                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_arrival).format('DD MMM YYYY')}</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr}</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >{this.total_price1}€</Text>
                                    <Text style={{ fontSize: 8 }}>Include insurance</Text>
                                    <View style={styles.line3}></View>
                                    <Text>Type - Air</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                            </View>
                            <View style={styles.remain2}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 8 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>: null }
             

                         { (this.ser_type == 3 ||  this.ser_type1 == 3 || this.ser_type2 == 3)  && this.total_price2 > 0 ?  <TouchableOpacity onPress={this.sender} style={styles.cardN}>
                        <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_departure1).format('DD MMM YYYY')}</Text>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr2}</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />

                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_arrival2).format('DD MMM YYYY')}</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr2}</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >{this.total_price2}€</Text>
                                    <Text style={{ fontSize: 8 }}>Include insurance</Text>
                                    <View style={styles.line3}></View>
                                    <Text>Type - Road</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                            </View>
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 8 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>: null  }
               
            



                    { this.total_price2 > 0 && (this.ser_type == 2 ||  this.ser_type1 == 2 || this.ser_type2 == 2)   ?  <TouchableOpacity onPress={this.sender} style={styles.cardM}>
                        <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_departure2).format('DD MMM YYYY')}</Text>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr1}</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />

                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_arrival1).format('DD MMM YYYY')}</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr1}</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >{this.total_price2}€</Text>
                                    <Text style={{ fontSize: 8 }}>Include insurance</Text>
                                    <View style={styles.line3}></View>
                                    <Text style={{fontSize:12}}>Type-Maritime</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                            </View>
                            <View style={styles.remain2}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 8 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>: null  }



                    </ScrollView> :       this.state.setFilter == true  ?  <ScrollView  style={{marginTop:"2%",height:'60%',marginBottom:'8%',borderColor:'black',borderWidth:1}}>

{  this.state.shipping_filter == this.HomeServ_collection1 &&  this.state.Delivery_required == this.HomeServ_delivery1 && this.state.insurance_filter == this.insurance?  <TouchableOpacity onPress={this.sender} style={styles.cardM}>
            <View style={styles.morehalf}>
                <View style={styles.half}>
                    <View style={styles.slotc}>
                        <Text>{moment(this.serv_date_of_departure).format('DD MMM YYYY')}</Text>
                        <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr}</Text>
                    </View>
                </View>
                <Image source={require('../../Images/send.png')} style={styles.send} />

                <View style={styles.half}>
                    <View style={styles.slotc}>
                        <Text>{moment(this.serv_date_of_arrival).format('DD MMM YYYY')}</Text>
                        <View style={styles.line4}></View>
                        <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr}</Text>
                    </View>
                </View>
                <View style={styles.remain}>
                    <View style={styles.charges}>
                        <Text >{this.total_price1}€</Text>
                        <Text style={{ fontSize: 8 }}>Include insurance</Text>
                        <View style={styles.line3}></View>
                        <Text>Type - Air</Text>
                    </View>
                </View>
            </View>
            <View style={styles.morehalf1}>
                <View style={styles.small}>
                    <Image source={require('../../Images/product.png')} style={styles.icon} />
                    <Text style={{ fontSize: 8 }}>Home Collection</Text>
                </View>
                <View style={styles.small}>
                    <Image source={require('../../Images/product.png')} style={styles.icon} />
                    <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                </View>
                <View style={styles.remain2}>
                    <View style={styles.space}>
                        <Text style={{ fontSize: 8 }}>Available Space:</Text>
                        <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>: null }

        { this.state.shipping_filter == this.HomeServ_collection2 &&  this.state.Delivery_required == this.HomeServ_delivery2 && this.state.insurance_filter == this.insurance ?   <TouchableOpacity onPress={this.sender} style={styles.cardM}>
            <View style={styles.morehalf}>
                <View style={styles.half}>
                    <View style={styles.slotc}>
                        <Text>{moment(this.serv_date_of_departure2).format('DD MMM YYYY')}</Text>
                        <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr1}</Text>
                    </View>
                </View>
                <Image source={require('../../Images/send.png')} style={styles.send} />

                <View style={styles.half}>
                    <View style={styles.slotc}>
                        <Text>{moment(this.serv_date_of_arrival1).format('DD MMM YYYY')}</Text>
                        <View style={styles.line4}></View>
                        <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr1}</Text>
                    </View>
                </View>
                <View style={styles.remain}>
                    <View style={styles.charges}>
                        <Text >{this.total_price2}€</Text>
                        <Text style={{ fontSize: 8 }}>Include insurance</Text>
                        <View style={styles.line3}></View>
                        <Text style={{fontSize:12}}>Type-Maritime</Text>
                    </View>
                </View>
            </View>
            <View style={styles.morehalf1}>
                <View style={styles.small}>
                    <Image source={require('../../Images/product.png')} style={styles.icon} />
                    <Text style={{ fontSize: 8 }}>Home Collection</Text>
                </View>
                <View style={styles.small}>
                    <Image source={require('../../Images/product.png')} style={styles.icon} />
                    <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                </View>
                <View style={styles.remain2}>
                    <View style={styles.space}>
                        <Text style={{ fontSize: 8 }}>Available Space:</Text>
                        <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>: null  }



                   </ScrollView>  :



                         
                   
                
                <ScrollView style={{marginTop:"2%",height:'60%',marginBottom:'8%',borderColor:'black',borderWidth:1}}>
            
                    { (this.ser_type == 1 ||  this.ser_type1 == 1 || this.ser_type2 == 1) && this.state.isAir == true && this.total_price1 > 0 ?  <TouchableOpacity onPress={this.sender} style={styles.cardN}>
                        <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_departure).format('DD MMM YYYY')}</Text>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr}</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />

                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_arrival).format('DD MMM YYYY')}</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr}</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >{this.total_price1}€</Text>
                                    <Text style={{ fontSize: 8 }}>Include insurance</Text>
                                    <View style={styles.line3}></View>
                                    <Text>Type - Air</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                            </View>
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 8 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>: null }

                     {(this.ser_type == 2 ||  this.ser_type1 == 2 || this.ser_type2 == 2) && this.state.isMaritime == true && this.total_price2 > 0 ?  <TouchableOpacity onPress={this.sender} style={styles.cardN}>
                        <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_departure2).format('DD MMM YYYY')}</Text>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr1}</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />

                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_arrival1).format('DD MMM YYYY')}</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr1}</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >{this.total_price2}€</Text>
                                    <Text style={{ fontSize: 8 }}>Include insurance</Text>
                                    <View style={styles.line3}></View>
                                    <Text>Type-Maritime</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                            </View>
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 8 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>:null } 
                    { (this.ser_type == 3 ||  this.ser_type1 == 3 || this.ser_type2 == 3) && this.state.isRoad == true && this.total_price3 > 0 ?  <TouchableOpacity onPress={this.sender} style={styles.cardN}>
                        <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_departure1).format('DD MMM YYYY')}</Text>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr2}</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />

                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(this.serv_date_of_arrival2).format('DD MMM YYYY')}</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr2}</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >{this.total_price3}€</Text>
                                    <Text style={{ fontSize: 8 }}>Include insurance</Text>
                                    <View style={styles.line3}></View>
                                    <Text>Type - Road</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View>
                            <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>At Shippers Warehouse</Text>
                            </View>
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 8 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 8 }}>5000kg / 10000kg</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>: null  }
                </ScrollView>
                   }
                <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
                    <View style={[styles.sheet]}>
                        <Animated.View style={[styles.popup, slideUp]}>
                            <View style={styles.blueBar}>
                                <Image source={require('../../Images/filter-sort-white.png')} style={styles.icon} />
                                <Text style={{ color: 'white' }}>Services Filter </Text>
                                <TouchableOpacity onPress={this.handleClose}>
                                    <View style={styles.closeIcon}>
                                        <Image source={require('../../Images/close.png')} style={styles.icon} />
                                    </View>
                                </TouchableOpacity>
                            </View>

                           
                           {
                                <View style={styles.scroll1}>
                                <View style={styles.shipping00}>
                                    <View style={styles.shipping1}>
                                        <Text>Shipping</Text>
                                    </View>
                                </View>
                                <View style={styles.shipping2}>
                                    <View style={styles.shipc}>
                                        <Text style={{color: 'grey'}}>Home Collection</Text>
                                        <TouchableOpacity onPress={this.isCheckPressed1}>{
                                                    this.state.isCheck1 ? 
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.iconzzz} />   
                
                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.iconzzz} />
                   
                                                }</TouchableOpacity>
                                    </View>
                                    <View style={styles.shipc1}>
                                    <Text style={{color: 'grey'}}>At Shipper's Warehouse</Text>
                                    <TouchableOpacity onPress={this.isCheckPressed2}>{
                                                    this.state.isCheck2 ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.iconzzz} />   
                
                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.iconzzz} />
                   
                                                }</TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.shipping00}>
                                <View style={styles.shipping1}>
                                        <Text>Delivery required</Text>
                                </View>
                                </View>
                                <View style={styles.shipping2}>
                                    <View style={styles.shipc}>
                                    <Text style={{color: 'grey'}}>Home Delivery</Text>
                                    <TouchableOpacity onPress={this.isCheckPressed3}>{
                                                    this.state.isCheck3 ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.iconzzz} />   
                
                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.iconzzz} />
                   
                                                }</TouchableOpacity>
                                    </View>
                                    <View style={styles.shipc1}>
                                    <Text style={{color: 'grey'}}>At Shipper's Warehouse</Text>
                                    <TouchableOpacity onPress={this.isCheckPressed4}>{
                                                    this.state.isCheck4 ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.iconzzz} />   
                
                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.iconzzz} />
                   
                                                }</TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.shipping00}>
                                <View style={styles.shipping1}>
                                        <Text>Add insurance service</Text>
                                </View>
                                </View>
                                <View style={styles.shipping2}>
                                    <View style={styles.shipc}>
                                    <Text style={{color: 'grey'}}>Include insurance</Text>
                                    <TouchableOpacity onPress={this.isCheckPressed5}>{
                                                    this.state.isCheck5 ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.iconzzz} />   
                
                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.iconzzz} />
                   
                                                }</TouchableOpacity>
                                    </View>
                                    <View style={styles.shipc1}>
                                    <Text style={{color: 'grey'}}>Exclude insurance</Text>
                                    <TouchableOpacity onPress={this.isCheckPressed6}>{
                                                    this.state.isCheck6 ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.iconzzz} />   
                
                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.iconzzz} />
                   
                                                }</TouchableOpacity>
                
                                    </View>
                                </View>
                                <View style={styles.bottomzzz}>
                                    <TouchableOpacity style={{ width: '45%'}} onPress={()=>this.setState.isFilter = false}>
                                    <View style={styles.clearzzz}>
                                        <Text>Clear</Text>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: '45%'}} onPress={this.Filteropt} >
                                    <View style={styles.applyzzz}>
                                        <Text style={{color: 'white'}}>Apply</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                                </View>
                            }


                            {/* <Scroller /> */}
                        </Animated.View>
                    </View>
                </Animated.View>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    let {
        loginObj,
        isLoggedIn, 
        searchObj,
        customObj
    } = state.authReducer


    return { loginObj, isLoggedIn, customObj }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        triggerAuthLogin,triggerCustom
    }, dispatch)
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Services);

{/* <View style={styles.card4}>
                            <View style={styles.slot}>
                                <View style={styles.slotc}>
                                    <Text>17 Oct 19</Text>
                                    <Text style={{fontSize: 10}}>Camapania, Itlay</Text>
                                </View>
                                <View style={styles.slotc1}>
                                    <Image source={require('../../Images/product.png')} style={styles.icon} />
                                    <Text style={{fontSize: 10}}>Home Collection</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />
                            <View style={styles.slot1}>
                                <View style={styles.sl1}>
                                <View style={styles.slotc}>
                                    <Text>20 Oct 19</Text>
                                    <Text style={{fontSize: 10}}>Dakar, Senegal</Text>
                                </View>
                                <View style={styles.slotc1}>
                                    <Image source={require('../../Images/product.png')} style={styles.icon} />
                                    <Text style={{fontSize: 10}}>At Shippers Warehouse</Text>
                                </View>
                                </View>
                                <View style={styles.sl1}></View>
                            </View>
                        </View> */}