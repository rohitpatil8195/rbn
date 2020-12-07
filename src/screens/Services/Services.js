
import React, { Component ,useEffect} from 'react';
import { View, Text, StyleSheet,Modal, ImageBackground, Image,FlatList, TouchableOpacity, ScrollView, Animated, Dimensions } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';
import Scroller from '../../components/Scroller';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Loader from '../../components/Loader';
import { triggerAuthLogin, triggerLogout,triggerCustom } from '../../actions';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment/moment';
//import { FlatList } from 'react-native-gesture-handler';
//import { triggerCustom } from '../../actions';




// create a component
class Services extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isCheck: this.props.route.params.checkDep,
            isCheck0: this.props.route.params.checkDes,
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
             available_capacity1:'',
             available_capacity2:'',
             available_capacity3:'',
             service_type3:'',
         services_Ids:this.props.route.params.Service_ids,
         service_type:this.props.route.params.serve_type,
         isSpace:null,
         Home_data:[],
         finalData:[],
         logData:[],
         prices:[],
         Air_data:[],
         Marine_data:[],
         Road_data:[],
         available_capacity:'',
         filterd_list:[],
         Final_filterd:[],

            


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
       // console.log("params data"+this.props.route.params.data)
        // const chech = await AsyncStorage.getItem('persist:sampleRedux')
              const chech = await  (this.props.route.params.data);
        const js =  (chech);
      // let authreducer = JSON.parse(js['authReducer'])
      // let loginobj = authreducer['searchObj'];
//console.log("async_objdata-- "+JSON.stringify(loginobj));
    
       let logindata =  (chech);

           
    //   //serv_home_collection
    //   let HomeServ_collection = (logindata['result'][0]['serv_home_collection']);
    //   let HomeServ_collection1 = (logindata['result'][1]['serv_home_collection']);
   
    //                //   console.log("....."+ HomeServ_collection)
    //   this.HomeServ_collection = HomeServ_collection;
    //     this.HomeServ_collection1 = HomeServ_collection1;


    //     let HomeServ_delivery = (logindata['result'][0]['serv_home_delivery']);
    //   let HomeServ_delivery1 = (logindata['result'][1]['serv_home_delivery']);
   
    //                 //  console.log("....."+ HomeServ_delivery1)
    //   this.HomeServ_delivery = HomeServ_delivery;
    //     this.HomeServ_delivery1 = HomeServ_delivery1;

        let logData = logindata['result'];
        this.setState({
        Home_data:logData
        })
     // console.log("hommmmmmmmm",this.state.Home_data)

this.getCal();

    // setTimeout(() => {
    //     this.getCal();
    //     }, 5000)
    }
   


   getCal=()=>{
             console.log("wt on Serv",typeof this.state.Weight[0])
        let tranp_type =this.ser_type;
        let transp_type1 = this.ser_type1;
         let wt = this.state.Weight;
         let reqData = {   
            service_type: "1",
            weight: "["+wt+"]",
            dimension: this.state.Diments,
               serv_id:"210",
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
                              let prices = data['result'];
                              console.log("data yee"+JSON.stringify(prices))
                           console.log("data yee"+JSON.stringify(data))
                           let logData = data['result'];
                         
                           console.log("logData''' ",logData)
                           this.setState({
                            logData:logData,
                            prices:prices,
                            available_capacity,
                           })

                           for(let i=0; i<this.state.Home_data.length; i++){
                               this.state.Home_data[i]['transport_fee'] = this.state.logData[i][0]
                               this.state.Home_data[i]['fee_on_transport'] = this.state.logData[i][1]
                               this.state.Home_data[i]['home_colectn'] = this.state.logData[i][2]
                               this.state.Home_data[i]['home_delv'] = this.state.logData[i][3]
                               this.state.Home_data[i]['servc_from'] = this.state.logData[i][4]
                               this.state.Home_data[i]['rbn_transport_fee'] = this.state.logData[i][5]
                           }
                          // let store = this.state.Home_data

                         console.log("this",this.state.Home_data)
                         let wet = [];
                         console.log("wt len",this.state.Weight.length)
                        for(let i=0 ; i<=this.state.Weight.length; i++){
                      const check_fin = this.state.Home_data.filter(x=>x.available_capacity >= this.state.Weight[i]);
                          // const check_fin = this.state.Home_data;
                          return this.setState({
                            finalData:check_fin
                        })
                       }
                            //  this.setState({
                            //      finalData:check_fin
                            //  })
                           console.log("Home data",this.state.finalData)


                           let available_capacity = this.state.finalData['available_capacity'];
                           this.setState({
                            available_capacity:available_capacity,
                           })

                        //    const check_a = this.state.Home_data.filter(x => x.serv_type == 1 && this.state.Weight <= 10 );
                        //   // const check_W_a = check_a.filter(x=>x.available_capacity >= this.state.Weight);
                        //    this.setState({
                        //     Air_data:check_a,
                        
                        // })

                    //     const check_m = this.state.Home_data.filter(x => x.serv_type == 2 );
                    //     const check_W_m = check_m.filter(x=>x.available_capacity >= this.state.Weight);
                    //     this.setState({
                    //         Marine_data:check_W_m
                    //  })

                        // console.log("Marine_data",this.state.Marine_data)
         
                //      const check_r = this.state.Home_data.filter(x => x.serv_type == 3);
                //     const check_W = check_r.filter(x=>x.available_capacity >= this.state.Weight);
                //       this.setState({
                //           Road_data:check_W
                //    })


                 //  console.log("Road_data",this.state.check_W)
             
                
                  
                           //tmpArray:[]
                    //        let tmpArray = [this.state.final_Data]
                    //        for (var i = 0; i < data.result.length; i++) {
                    //         tmpArray.push(data.result[i].result)
                    //     }
                    //     this.setState({
                    //         final_Data: tmpArray
                    //   })
                      
                    //        var hege = this.state.prices;
                    //      var stale = this.state.Home_data;
                    //    var children = hege.concat(stale);
                    //    this.setState({
                    //    final_Data:children
                    //    })
                      // console.log("finalllll",this.state.final_Data)
                        //    if((this.state.Weight < this.state.available_capacity1) && this.state.Weight <  this.state.available_capacity2 &&  this.state.Weight <  this.state.available_capacity3) 
                        //    {
                        //                   this.setState.isSpace == true;
                        //    }
//(this.state.Weight < this.state.available_capacity1) &&
                        //    if(logData.length == 0 || logData.length == undefined || logData.length == null ){
                        //          return 0;
                        // }else if(data['result'].length == 1){
                        //        this.setState({
                        //         total_price1 :JSON.stringify(data['result'][0][0]),
                        //         homeCollection1 : (data['result'][0][2]),
                        //         home_delv1 : JSON.stringify(data['result'][0][3])

                        //        })
                        // }else if(data['result'].length == 2){
                        //     this.setState({
                        //         total_price1 :JSON.stringify(data['result'][0][0]),
                        //         total_price2 :JSON.stringify(data['result'][1][0]),
                        //         homeCollection1 : JSON.stringify(data['result'][0][2]),
                        //         homeCollection2 : JSON.stringify(data['result'][1][2]),
                        //         home_delv1 : JSON.stringify(data['result'][0][3]),
                        //         home_delv2 : JSON.stringify(data['result'][1][3])

                        //        })
                        // }else if(data['result'].length ==3) {
                        //     this.setState({
                        //         total_price1 :JSON.stringify(data['result'][0][0]),
                        //         total_price2 :JSON.stringify(data['result'][1][0]),
                        //         total_price3 :JSON.stringify(data['result'][2][0]),
                        //         homeCollection1 : JSON.stringify(data['result'][0][2]),
                        //         homeCollection2 : JSON.stringify(data['result'][1][2]),
                        //         homeCollection3 : JSON.stringify(data['result'][2][2]),
                        //         home_delv1 : JSON.stringify(data['result'][0][3]),
                        //         home_delv2 : JSON.stringify(data['result'][1][3]),
                        //         //home_delv3 : JSON.stringify(data['result'][3][3])
                        //        })
                        // } 

                        //   console.log("$$$$ "+this.state.total_price2)
                  
                        //   transport_fee,
                        //   fee_on_transport,
                        //   home_colectn,
                        //   home_delv,
                        //   servc_from,
                        //   rbn_transport_fee
                          //this.insurance = insurance;
                    
                          //console.log("insurance"+ this.insurance)
                          
                          // let price = JSON.stringify(data['result'][0]['total']);
                        
                          // let price =(prc['total'])
                           
                          // this.total_price1 = price;
                        //    if(tranp_type =1 && price1 != 0 ){
                        //     this.total_price1 = price1;
                        //     }if(transp_type1=2 && price2 != 0 ){
                        //      this.total_price2 = price2;
                        //      }if(tranp_type=3 &&  price3 != 0 ){
                        //      this.total_price3 = price3;
                        //     } 
                           
                           
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
    isCheckPressed0 = () => {
        if (!this.state.isCheck0) {
            this.setState({ isCheck0: true })
        } else {
            this.setState({ isCheck0: false })
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
        
        const check_a = this.state.Home_data.filter(x => x.serv_type == 1 && this.state.Weight <= 10 );
        // const check_W_a = check_a.filter(x=>x.available_capacity >= this.state.Weight);
         this.setState({
          Air_data:check_a,
      
      })
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
        // const newData = this.state.Home_data.filter((item)=>{
        //     return item.serv_type == 1;
        //   })
        //   this.setState({
        //     Home_data: newData
        //   });
        
        const check_m = this.state.Home_data.filter(x => x.serv_type == 2 );
        const check_W_m = check_m.filter(x=>x.available_capacity >= this.state.Weight);
        this.setState({
            Marine_data:check_W_m
     })

        
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
        
        const check_r = this.state.Home_data.filter(x => x.serv_type == 3);
        const check_W = check_r.filter(x=>x.available_capacity >= this.state.Weight);
          this.setState({
              Road_data:check_W
       })
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
            console.log("countyyyyyy  "+this.state.des_country)
            this.props.navigation.navigate('Sender', { sender_country:this.state.des_country,sender_city:this.state.des_city,reciver_country:this.state.arr_country,reciver_city:this.state.arr_city})
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
            this.setState({isCheck1: true, shipping_filter:"1"})
            this.setState({isCheck2: false})
         
          } else{
            this.setState({isCheck1: false})
          }
          console.log('ship',this.state.shipping_filter)
         
    }


    isCheckPressed2=()=> {
        if (!this.state.isCheck2) {
            this.setState({isCheck2: true,shipping_filter:"0"})
            this.setState({isCheck1: false})
          }else{
            this.setState({isCheck2: false})
          }
          console.log('ship',this.state.shipping_filter)
    }

    isCheckPressed3=()=> {
        if (!this.state.isCheck3) {
            this.setState({isCheck3: true,Delivery_required:"1"})
            this.setState({isCheck4: false})
          }else{
            this.setState({isCheck3: false})
          }
    }

    isCheckPressed4=()=> {
        if (!this.state.isCheck4) {
            this.setState({isCheck4: true,Delivery_required:"0"})
            this.setState({isCheck3: false})
          }else{
            this.setState({isCheck4: false})
          }
    }
    
    isCheckPressed5=()=> {
        if (!this.state.isCheck5) {
            this.setState({isCheck5: true,insurance_filter:"1"})
            this.setState({isCheck6: false})
          }else{
            this.setState({isCheck5: false})
          }
    }

    isCheckPressed6=()=> {
        if (!this.state.isCheck6) {
            this.setState({isCheck6: true,insurance_filter:"0",
          
         })
            this.setState({isCheck5: false})
          } else{
            this.setState({isCheck6: false})
          }
    }


     Filteropt=()=>{
           this.setState({setFilter: true});
           this.setState({ isAir: false, isMaritime: false, isRoad: false });
           const check_filter = this.state.finalData.filter(x =>x.serv_home_collection == this.state.shipping_filter );
             this.setState({
                 filterd_list:check_filter
          });
          const check_del = this.state.filterd_list.filter(y =>y.home_delv == this.state.Delivery_required)
          this.setState({
            Final_filterd:check_del
     });
           

   
        //    if(this.state.insurance_filter == "0"){
          
            
        //    let filt = this.state.Final_filterd['serv_user_id'] = "0"
            

        //    }else{
        //            return this.state.Final_list0;
      
        //    }
        //      console.log("filterd_list",this.state.Final_list0)
    


           Animated.timing(this.state.animation, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start( this.setState({setFilter: true}),
     );
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
            
          
            <View style={{flex:1}}>
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
                                        <TouchableOpacity onPress={this.isCheckPressed0}>{
                                            this.state.isCheck0 ?
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
                        {this.state.isMaritime  ?
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
                    <View style={{borderColor:'black',borderWidth:1,flex:1,height:'25%'}}>
                  { this.state.isAir === false && this.state.isRoad === false && this.state.isMaritime === false && this.state.setFilter === false ? <FlatList       
          data={ this.state.finalData } 
        //  ItemSeparatorComponent={this._renderSeparator}
          keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => 
                    <View> 
                      
                        <TouchableOpacity style={styles.cardO}  
                             onPress={ ()=> this.props.navigation.navigate('Sender', { Diments:this.state.Diments,
                                servicess_id:item.serv_id,
                                transp_type:  item.serv_type,
                                isWight:this.state.Weight,
                                sender_country:this.state.des_country,
                                sender_city:this.state.des_city,
                                reciver_country:this.state.arr_country,
                                reciver_city:this.state.arr_city,
                                services_type:this.state.service_type,
                                home_colectn:item.home_colectn,
                                home_delv:item.home_delv,
                                checkDepAdd:this.state.isCheck,
                                checkDesAdd:this.state.isCheck0
                            
                                  })}
                        >
                       <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(item.serv_date_of_departure).format('DD MMM YYYY')}</Text>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr2}</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />

                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(item.serv_date_of_arrival).format('DD MMM YYYY')}</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr2}</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >{item.transport_fee + item.fee_on_transport}€</Text>
                                    <Text style={{ fontSize: 8 }}>Exclude insurance</Text>
                                    <View style={styles.line3}></View>
                                    {item.serv_type==1 ?<Text style={{fontSize:12}}>Type - Air</Text> : item.serv_type==2 ? <Text style={{fontSize:12}}>Type-Maritime</Text> :  <Text style={{fontSize:12}}>Type - Road</Text>  }
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                          { item.home_colectn==0 ? <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View> :
                            <View style={styles.small}>
                            <Image source={require('../../Images/product.png')} style={styles.icon} />
                            <Text style={{ fontSize: 8 }}>At shipper's warehouse</Text>
                        </View>
                        }

                            { item.home_delv==0 ? <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Delivery</Text>
                            </View> :
                            <View style={styles.small}>
                            <Image source={require('../../Images/product.png')} style={styles.icon} />
                            <Text style={{ fontSize: 8 }}>At shipper's warehouse</Text>
                        </View>
                        }
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 10 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 10 }}>{item.available_capacity}kg</Text>
                                </View>
                            </View>
                        </View>
                       </TouchableOpacity> 
                  
                    </View>
} 
        />: null }
      

        { this.state.setFilter  ? <FlatList       
          data={ this.state.Final_filterd } 
        //  ItemSeparatorComponent={this._renderSeparator}
          keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => 
                    <View> 
                      
                        <TouchableOpacity style={styles.cardO} 
                            onPress={ ()=> this.props.navigation.navigate('Sender', { Diments:this.state.Diments,
                                servicess_id:item.serv_id,
                                transp_type:  item.serv_type,
                                isWight:this.state.Weight,
                                sender_country:this.state.des_country,
                                sender_city:this.state.des_city,
                                reciver_country:this.state.arr_country,
                                reciver_city:this.state.arr_city,
                                services_type:this.state.service_type,
                                home_colectn:item.home_colectn,
                                home_delv:item.home_delv
                                  })}
                        >
                       <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(item.serv_date_of_departure).format('DD MMM YYYY')}</Text>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr2}</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />

                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(item.serv_date_of_arrival).format('DD MMM YYYY')}</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr2}</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >{item.transport_fee + item.fee_on_transport}€</Text>
                                    <Text style={{ fontSize: 8 }}>Exclude insurance</Text>
                                    <View style={styles.line3}></View>
                                    {item.serv_type==1 ?<Text style={{fontSize:12}}>Type - Air</Text> : item.serv_type==2 ? <Text style={{fontSize:12}}>Type - Maritime</Text> :  <Text style={{fontSize:12}}>Type - Road</Text>  }
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                        { item.home_colectn==0 ? <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View> :
                            <View style={styles.small}>
                            <Image source={require('../../Images/product.png')} style={styles.icon} />
                            <Text style={{ fontSize: 8 }}>At shipper's warehouse</Text>
                        </View>
                        }

                            { item.home_delv==0 ? <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Delivery</Text>
                            </View> :
                            <View style={styles.small}>
                            <Image source={require('../../Images/product.png')} style={styles.icon} />
                            <Text style={{ fontSize: 8 }}>At shipper's warehouse</Text>
                        </View>
                        }
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 10 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 10 }}>{item.available_capacity}kg</Text>
                                </View>
                            </View>
                        </View>
                       </TouchableOpacity> 
                  
                    </View>
} 
        />: null }

        {(this.state.isAir === true ) ? <FlatList       
          data={ this.state.Air_data } 
        //  ItemSeparatorComponent={this._renderSeparator}
          keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => 
                    <View> 
                       
                        <TouchableOpacity style={styles.cardO}   
           onPress={ ()=> this.props.navigation.navigate('Sender', { Diments:this.state.Diments,
            servicess_id:item.serv_id,
            transp_type:  item.serv_type,
            isWight:this.state.Weight,
            sender_country:this.state.des_country,
            sender_city:this.state.des_city,
            reciver_country:this.state.arr_country,
            reciver_city:this.state.arr_city,
            services_type:this.state.service_type,   
            home_colectn:item.home_colectn,
            home_delv:item.home_delv
            
              })}>
                       <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(item.serv_date_of_departure).format('DD MMM YYYY')}</Text>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr2}</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />

                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(item.serv_date_of_arrival).format('DD MMM YYYY')}</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr2}</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >{item.transport_fee + item.fee_on_transport}€</Text>
                                    <Text style={{ fontSize: 8 }}>Exclude insurance</Text>
                                    <View style={styles.line3}></View>
                                    {item.serv_type==1 ?<Text style={{fontSize:12}}>Type - Air</Text> : item.serv_type==2 ? <Text style={{fontSize:12}}>Type - Maritime</Text> :  <Text style={{fontSize:12}}>Type - Road</Text>  }
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                        { item.home_colectn==0 ? <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View> :
                            <View style={styles.small}>
                            <Image source={require('../../Images/product.png')} style={styles.icon} />
                            <Text style={{ fontSize: 8 }}>At shipper's warehouse</Text>
                        </View>
                        }

                            { item.home_delv==0 ? <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Delivery</Text>
                            </View> :
                            <View style={styles.small}>
                            <Image source={require('../../Images/product.png')} style={styles.icon} />
                            <Text style={{ fontSize: 8 }}>At shipper's warehouse</Text>
                        </View>
                        }
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 10 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 10 }}>{item.available_capacity}kg</Text>
                                </View>
                            </View>
                        </View>
                       </TouchableOpacity> 
                    
                    </View>
} 
        />: null}

        {(this.state.isMaritime === true ) ? <FlatList       
          data={ this.state.Marine_data } 
        //  ItemSeparatorComponent={this._renderSeparator}
          keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => 
                    <View> 
                       
                        <TouchableOpacity style={styles.cardO}
                          onPress={ ()=> this.props.navigation.navigate('Sender', { Diments:this.state.Diments,
                            servicess_id:item.serv_id,
                            transp_type:  item.serv_type,
                            isWight:this.state.Weight,
                            sender_country:this.state.des_country,
                            sender_city:this.state.des_city,
                            reciver_country:this.state.arr_country,
                            reciver_city:this.state.arr_city,
                            services_type:this.state.service_type,
                            home_colectn:item.home_colectn,
                            home_delv:item.home_delv
                              })}
                        >
                       <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(item.serv_date_of_departure).format('DD MMM YYYY')}</Text>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr2}</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />

                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(item.serv_date_of_arrival).format('DD MMM YYYY')}</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr2}</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >{item.transport_fee + item.fee_on_transport}€</Text>
                                    <Text style={{ fontSize: 8 }}>Exclude insurance</Text>
                                    <View style={styles.line3}></View>
                                    {item.serv_type==1 ?<Text style={{fontSize:12}}>Type - Air</Text> : item.serv_type==2 ? <Text style={{fontSize:12}}>Type - Maritime</Text> :  <Text style={{fontSize:12}}>Type - Road</Text>  }
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                        { item.home_colectn==0 ? <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View> :
                            <View style={styles.small}>
                            <Image source={require('../../Images/product.png')} style={styles.icon} />
                            <Text style={{ fontSize: 8 }}>At shipper's warehouse</Text>
                        </View>
                        }

                            { item.home_delv==0 ? <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Delivery</Text>
                            </View> :
                            <View style={styles.small}>
                            <Image source={require('../../Images/product.png')} style={styles.icon} />
                            <Text style={{ fontSize: 8 }}>At shipper's warehouse</Text>
                        </View>
                        }
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 10 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 10 }}>{item.available_capacity}kg</Text>
                                </View>
                            </View>
                        </View>
                       </TouchableOpacity> 
                    
                    </View>
} 
        />: null}

               {(this.state.isRoad === true ) ? <FlatList       
          data={ this.state.Road_data } 
         
        //  ItemSeparatorComponent={this._renderSeparator}
          keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => 
                    <View> 
                       
                        <TouchableOpacity style={styles.cardO}  
            onPress={ ()=> this.props.navigation.navigate('Sender', { Diments:this.state.Diments,
            servicess_id:item.serv_id,
            transp_type:  item.serv_type,
            isWight:this.state.Weight,
            sender_country:this.state.des_country,
            sender_city:this.state.des_city,
            reciver_country:this.state.arr_country,
            reciver_city:this.state.arr_city,
            services_type:this.state.service_type,
            home_colectn:item.home_colectn,
            home_delv:item.home_delv
              })}>
                       <View style={styles.morehalf}>
                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(item.serv_date_of_departure).format('DD MMM YYYY')}</Text>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_dc_addr2}</Text>
                                </View>
                            </View>
                            <Image source={require('../../Images/send.png')} style={styles.send} />

                            <View style={styles.half}>
                                <View style={styles.slotc}>
                                    <Text>{moment(item.serv_date_of_arrival).format('DD MMM YYYY')}</Text>
                                    <View style={styles.line4}></View>
                                    <Text style={{ fontSize: 10 }}>{this.serv_ware_ac_addr2}</Text>
                                </View>
                            </View>
                            <View style={styles.remain}>
                                <View style={styles.charges}>
                                    <Text >{item.transport_fee + item.fee_on_transport}€</Text>
                                    <Text style={{ fontSize: 8 }}>Exclude insurance</Text>
                                    <View style={styles.line3}></View>
                                    {item.serv_type==1 ?<Text style={{fontSize:12}}>Type - Air</Text> : item.serv_type==2 ? <Text style={{fontSize:12}}>Type - Maritime</Text> :  <Text style={{fontSize:12}}>Type - Road</Text>  }
                                </View>
                            </View>
                        </View>
                        <View style={styles.morehalf1}>
                        { item.home_colectn==0 ? <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Collection</Text>
                            </View> :
                            <View style={styles.small}>
                            <Image source={require('../../Images/product.png')} style={styles.icon} />
                            <Text style={{ fontSize: 8 }}>At shipper's warehouse</Text>
                        </View>
                        }

                            { item.home_delv==0 ? <View style={styles.small}>
                                <Image source={require('../../Images/product.png')} style={styles.icon} />
                                <Text style={{ fontSize: 8 }}>Home Delivery</Text>
                            </View> :
                            <View style={styles.small}>
                            <Image source={require('../../Images/product.png')} style={styles.icon} />
                            <Text style={{ fontSize: 8 }}>At shipper's warehouse</Text>
                        </View>
                        }
                            <View style={styles.remain1}>
                                <View style={styles.space}>
                                    <Text style={{ fontSize: 10 }}>Available Space:</Text>
                                    <Text style={{ fontSize: 10 }}>{item.available_capacity}kg</Text>
                                </View>
                            </View>
                        </View>
                       </TouchableOpacity> 
                    
                    </View>
} 
        />: null}

                </View>
                
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
