//import liraries
import React, { Component ,useEffect} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, Animated, Dimensions } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';
import Scroller from '../../components/Scroller';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Loader from '../../components/Loader';
import { triggerAuthLogin, triggerLogout } from '../../actions';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment/moment';
import { triggerCustom } from '../../actions';




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
            Weight:this.props.route.params.weight,
            Diments:this.props.route.params.Dimen

        }
    }


    userInfo = async () => {
        let chech = await AsyncStorage.getItem('persist:sampleRedux');
        let js = JSON.parse(chech);
       let authreducer = JSON.parse(js['authReducer'])
       let loginobj = authreducer['searchObj'];
     console.log("async_objdata-- "+JSON.stringify(loginobj));
       let logindata = (loginobj['data'])
       //console.log(logindata) serv_id
           
   let service_type = (logindata['result'][0]['serv_id']);
   let serv = service_type
   this.service_id = serv;

console.log("service id>>"+ this.service_id)

   let serv_type = (logindata['result'][0]['serv_type']);
   let serv_type1 = (logindata['result'][1]['serv_type']);
   let serv_type2 = (logindata['result'][2]['serv_type']);
   this.ser_type = serv_type;
     this.ser_type1 = serv_type1;
   this.ser_type2 = serv_type2;
   
   let serv_date_of_departure = (logindata['result'][0]['serv_date_of_departure']);
   let serv_date_of_departure1 = (logindata['result'][1]['serv_date_of_departure']);
   let serv_date_of_departure2 = (logindata['result'][2]['serv_date_of_departure']);
                  //let serv_date_of_departure2 =  moment().format('YY/MMM/DD');
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
console.log("+++++ "+ serv_ofr_price1)
this.serv_ofr_price = serv_ofr_price;
 this.serv_ofr_price1 =serv_ofr_price1;
this.serv_ofr_price2 = serv_ofr_price2;
  

    }
   


    componentDidMount = (searchObj) => {
        console.log('search', this.props.searchObj);
         this.userInfo();
         this.getCal();
         
         
    }  

    componentWillFocus =() =>{
        this.getCal();
    }


    getCal = () => {
        let formdata = new FormData();
        formdata.append("tranport_type", "["+ this.state.ser_type +"]")
        formdata.append("service_type", 1)
        formdata.append("insurance_type", "")
        formdata.append("weight", "["+this.state.Weight+"]")
        formdata.append("dimension", this.state.Diments);
        formdata.append("belongings", '')
        formdata.append("quantity", "["+1+"]")
        formdata.append("unit_of_measure", "")
        formdata.append("unit_value", "")
        formdata.append("currency", "")
        formdata.append("scat_id", "["+1+"]")
        formdata.append("exchange_rate",  "")
        formdata.append("serv_id",   this.service_id )
       // console.log(this.state.countrySelect)
console.log("service id"+ this.state.service_id )
        console.log('formdatail: ', JSON.stringify(formdata))
        this.props.triggerCustom(formdata, this.onSuccess, this.onError)
     
       
      }


      onSuccess = (data) => {
        console.log('success', data)
    
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
        if (!this.state.isAir) {
            this.setState({ isAir: true })
        } else {
            this.setState({ isAir: false })
        }
        this.setState({ isAir: true, isMaritime: false, isRoad: false })
    }

    isMaritimePressed = () => {
        if (!this.state.isMaritime) {
            this.setState({ isMaritime: true })
        } else {
            this.setState({ isMaritime: false })
        }
        this.setState({ isAir: false, isMaritime: true, isRoad: false })
    }

    isRoadPressed = () => {
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

    serviceList = () => {
        this.props.navigation.navigate('ServiceList', {})
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
               
                <ScrollView style={{marginTop:"2%",height:'60%',marginBottom:'8%',borderColor:'black',borderWidth:1}}>
                   {(this.ser_type == 1 ||  this.ser_type1 == 1 || this.ser_type2 == 1) &&  this.state.isAir == true ?  <TouchableOpacity onPress={this.sender} style={styles.cardN}>
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
                                    <Text >{this.serv_ofr_price}</Text>
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
                    </TouchableOpacity> : this.state.isMaritime == true && (this.ser_type == 2 || this.ser_type1 == 2 || this.ser_type2 == 2) ?  <TouchableOpacity onPress={this.sender} style={styles.cardN}>
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
                                    <Text >{this.serv_ofr_price1}</Text>
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
                    </TouchableOpacity> : this.state.isRoad == true && (this.ser_type == 3 || this.ser_type1 == 3 || this.ser_type2 ==3 )  ?  <TouchableOpacity onPress={this.sender} style={styles.cardN}>
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
                                    <Text >{this.serv_ofr_price2}</Text>
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
                    </TouchableOpacity> : null  }
                              

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
                </ScrollView>
              
                <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
                    <View style={[styles.sheet]}>
                        <Animated.View style={[styles.popup, slideUp]}>
                            <View style={styles.blueBar}>
                                <Image source={require('../../Images/filter-sort-white.png')} style={styles.icon} />
                                <Text style={{ color: 'white' }}>Services Filter</Text>
                                <TouchableOpacity onPress={this.handleClose}>
                                    <View style={styles.closeIcon}>
                                        <Image source={require('../../Images/close.png')} style={styles.icon} />
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <Scroller />
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