//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView,FlatList } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment/moment';


// create a component
export default class Delivery extends Component {
    constructor(props){
        super(props);
        this.state={
            isInfo: false,
            isPass: false, 
            User_id:0,
            result_data:[],
            filterd_result_data:[]
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
        this.myReq_Api();
    }
   
    myReq_Api=()=>{
        let a = this.state.User_id;
var formdata = new FormData();
formdata.append("track_id", "label-"+612);
      
  const request_option={
     method :'POST',
       redirect: 'follow', 
       body :formdata
  }
  console.log("Body",JSON.stringify(request_option))
  fetch("http://rbn.sairoses.com/Front/index.php/API/fields/delv_track", request_option)
  .then(async response =>{
      const data =await response.json();
      console.log("data yee"+(data['result']));
       const result =(data['result']);

       this.setState({
           result_data:result,
           filterd_result_data:result
       })
     console.log("result_data",this.state.result_data)
  }).catch(error => {
    this.setState({ errorMessage: error.toString() });
    console.error('There was an error!', error);
});
    }





    searchFilterFunction = (text) => {
        // Check if searched text is not blank
      //  let newData =[this.state.result_data]
        console.log("text",text)
        if (text != '') {
          // Inserted text is not blank
          // Filter the masterDataSource
          // Update FilteredDataSource
       
        const newData = this.state.result_data.filter(
            function (item) {
              const itemData = item.modify_order_no
                ? item.modify_order_no.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          //console.log("newdata",newData)
          this.setState({
            filterd_result_data:newData,
            Search:text
          })
          // setFilteredDataSource(newData);
          // Search(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          this.setState({
            filterd_result_data:this.state.result_data,
            Search:text
          })
          // setFilteredDataSource(masterDataSource);
          // setSearch(text);
        }
      };

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
                       <Text style={styles.about}>Delivery tracking</Text>
                   </View>
                   </View>
           </ImageBackground>
           <View style={styles.card}>
               <View style={styles.card1}>
                   <View style={styles.search}>
                   <TextInputComponent onChangeText={(text)=>this.searchFilterFunction(text)} placeholder='Search by shipment code or tracking no'
                     designStyle={{ width: '80%', right: 20, height: 65}} />
                    <View style={styles.blue}>
                        <Image source={require('../../Images/magnifying-glass.png')} style={styles.mag} />
                    </View>
                   </View>
                   <TouchableOpacity style={styles.button}>
                       <Text style={styles.track}>Digit your shipping code to verify your delivery status</Text>
                   </TouchableOpacity>
               </View>
               <FlatList       
          data={this.state.filterd_result_data } 
        //  ItemSeparatorComponent={this._renderSeparator}
          keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
               <View style={styles.card01}>
               <View style={styles.grey}>
                   <Text style={styles.textc}>Date : <Text style={styles.textc1}>21-05-2020</Text></Text>
               </View>
               <View style={styles.cont}>
                    <View style={styles.Three}>
                   <Text style={styles.textcc}>Event : <Text style={styles.textc1}>Lorem Ipsum</Text></Text>
                    </View>
                    <View style={styles.Three}>
                    </View>
                    <View style={styles.Three}>
                    </View>               
               </View>
        </View> } />
               </View>
               </SafeAreaView>
        );
    }
}