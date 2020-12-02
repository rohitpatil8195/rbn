//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView,FlatList } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment/moment';

// create a component
export default class Request extends Component {
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
           
var formdata = new FormData();
formdata.append("user_id", this.state.User_id);
      
  const request_option={
     method :'POST',
       redirect: 'follow', 
       body :formdata
  }
  console.log("Body",JSON.stringify(request_option))
  fetch("http://rbn.sairoses.com/Front/index.php/API/fields/modify", request_option)
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

      login = () => {
        this.props.navigation.navigate('HomeScreen', {})
    }

    render() {
        return (
               <SafeAreaView>
            <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
                   <View style={styles.one}>
                   <View style={styles.view1}>
                       <TouchableOpacity onPress={this.login}>
                       <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                       </TouchableOpacity>
                       <Text style={styles.about}>My Requests</Text>
                   </View>
                   </View>
           </ImageBackground>
           <View style={styles.card}>
               <View style={styles.card1}>
                   <View style={styles.search}>
                   <TextInputComponent onChangeText={(text)=>this.searchFilterFunction(text)} keyboardType = 'numeric' placeholder='Search By Number'
                     designStyle={{ width: '80%', right: 20, height: 65}} />
                    <View style={styles.blue}>
                        <Image source={require('../../Images/magnifying-glass.png')} style={styles.mag} />
                    </View>
                   </View>
                   <Image source={require('../../Images/download120.png')} style={styles.download} resizeMode='center' />
               </View>
               <FlatList       
          data={this.state.filterd_result_data } 
        //  ItemSeparatorComponent={this._renderSeparator}
          keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
        <View style={styles.card00}>
               <View style={styles.grey}>
                   <Text style={styles.textc}>Requests Date : <Text style={styles.textc1}>{item.modify_update_date}</Text></Text>
                   <Text style={styles.textc}>Number : <Text style={styles.textc1}>{item.modify_order_no}</Text></Text>
               </View>
               <View style={styles.cont}>
                    <View style={styles.Three}>
                   <Text style={styles.textcc}>Type Of Requests : <Text style={styles.textc1}>{item.modify_issue_type}</Text></Text>
                    </View>
                    <View style={styles.Three}>
                   <Text style={styles.textcc}>Status : {item.res_cnt > 0 ?<Text style={styles.textc2}>Processed</Text>:<Text style={styles.textc2}>Processing</Text>}</Text>
                    </View>
                    <View style={styles.Three}>
                   <Text style={styles.textcc}>Reply Date : <Text style={styles.textc1}>{item.res_date}</Text></Text>
                    </View>               
               </View> 
               </View>
              }/>

               </View>
           </SafeAreaView>
        );
    }
}
