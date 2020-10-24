//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Button, ImageBackground, Image } from 'react-native';
import styles from "./Styles";
import { ScrollView, } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInputComponent from '../../components/TextInputComponent';
import DropDown from '../../components/DropDown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { triggerAuthCountry, triggerCategory, triggerProduct, triggerUnits, triggerCustom } from '../../actions';

// create a component
class Form3 extends Component {
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
            isArrow: true,
            categoryList: [],
            categorySelect: '',
            categoryId: '',
            categoryCode: '',
            countryList: [],
            countrySelect: '',
            countryId: '',
            countryCode: '',
            unitList: [],
            unitSelect: '',
            unitId: '',
            unitCode: '',
            productList: [],
            productSelect: '',
            productId: '',
            productCode: '',
            favColor: undefined,
            belonging:'',
            Quantity:'',
            cust_Duty:'',
            unit_values:'',
            Diments:this.props.route.params.Diments,
            serv_id:this.props.route.params.serv_id,
            fWight:this.props.route.params.rWight,
            transp_type:this.props.route.params.transp_type,
            reason: [
                {
                    label: 'Commercial',
                    value: 'commercial',
                },
                {
                    label: 'Gift',
                    value: 'gift',
                },
                {
                    label: 'Sample',
                    value: 'sample',
                },
                {
                    label: 'Return',
                    value: 'return',
                },
                {
                    label: 'Personal Effects',
                    value: 'personal effects',
                },
            ],
            favdolor: undefined,
            exchange: [
                {
                    label: 'Euro(€)',
                    value: 'euro(€)',
                },
                {
                    label: 'CFCA',
                    value: 'cfca',
                },
            ],
            unitEx1: undefined,
            unitEx: [
                {
                    label: 'm',
                    value: 'm',
                },
                {
                    label: '10u',
                    value: '10u',
                },
                {
                    label: '12u',
                    value: '12u',
                },
                {
                    label: '40u',
                    value: '40u',
                },
                {
                    label: '1000u',
                    value: '1000u',
                },
                {
                    label: 'boite',
                    value: 'boite',
                },
                {
                    label: 'carton',
                    value: 'carton',
                },
                {
                    label: 'ensamble',
                    value: 'ensamble',
                },
                {
                    label: 'kg',
                    value: 'kg',
                },
                {
                    label: 'litre',
                    value: 'litre',
                },
                {
                    label: 'm2',
                    value: 'm2',
                },
                {
                    label: 'pacquet',
                    value: 'pacquet',
                },
                {
                    label: 'paire',
                    value: 'paire',
                },
                {
                    label: 'piece',
                    value: 'piece',
                },
                {
                    label: 'pile',
                    value: 'pile',
                },
                {
                    label: 'plot 1kg',
                    value: 'plot 1kg',
                },
                {
                    label: 'rame',
                    value: 'rame',
                },
                {
                    label: 'rouleau',
                    value: 'rouleau',
                },
                {
                    label: 'sac/50kg',
                    value: 'sac/50kg',
                },
                {
                    label: 'u',
                    value: 'u',
                },

                
            ],
            isTick: false,
        }
        
    }



    componentDidMount = () => {
        this.props.triggerAuthCountry(this.onCountrySuccess, this.onCountryError)
        // this.onCategory(this.state.categoryId)
        this.props.triggerUnits(this.onUnitSuccess, this.onUnitError)
        let formdata = new FormData();
        formdata.append('cat_belonging', '')
        // this.props.triggerAuthCity(formdata, this.onCitySuccess, this.onCityError)
        this.props.triggerCategory(formdata, this.onCategorySuccess, this.onCategoryError)
        console.log("fWight",this.state.fWight)
    }
   
    submit_form=()=>{

   let Api_data ={
tranport_type: this.state.transp_type,
service_type :"1",
insurance_type: "1",
weight: "["+this.state.fWight+"]",
dimension: this.state.Diments,
belongings: "["+ this.state.belonging +"]",
quantity: "["+ this.state.Quantity+"]",
unit_of_measure: "["+this.state.unitEx1+"]",
unit_value: "["+this.state.unit_values+"]",
currency: "["+this.state.favdolor+"]",
home_colectn: "0",
home_delv: "0",
scat_id: "["+this.state.productId+"]",
serv_id: this.state.serv_id,
exchange_rate: "["+this.state.favdolor+"]",
}

//unit of measure this.state.unitEx1
console.log("unit",this.state.unit_values)
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Api_data) 
};
console.log("requestOptions",JSON.stringify(requestOptions))
fetch("http://rbn.sairoses.com/Front/index.php/API/fields/calculation", requestOptions)
.then(async response => {
    const data = await response.json();

           console.log("data yee"+JSON.stringify(data))
        //    let formData = data['result'];
        //    console.log("form3Data''' ",formData)
  if(data['result'] != null || '' || undefined){
        this.setState({
            cust_Duty:JSON.stringify(data['result'][0]['custom_duty'])
        })
    }else{
            return 0;
        }
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


    
    onUnitSuccess = (data) => {
        var result = data.result.map(function (el) {
            // var o = Object.assign({}, el);
            // var a = Object.assign({}, el);

            return el;
        })
        console.log("unitList", result)
        this.setState({
            unitList: result,
        })
    }

    onUnitSelect = (val) => {
        this.state.unitSelect = val
        this.state.unitList.map(item => {
            if (item.value == val) {
                this.state.unitId = item.id
                this.state.unitCode = item.code
                this.setState({
                    unitId: this.state.unitId,
                    unitCode: this.state.unitCode
                })
            }
        })
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

    onCategoryError = () => {
        console.log('oops something went wrong')
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
        // console.log('contrySelect', this.state.countrySelect)
        // this.onCity(this.state.countryId)
    }

    onCategorySuccess = (data) => {
        // console.log('data', data)
        var result = data.result.map(function (el) {
            // var o = Object.assign({}, el);
            // var a = Object.assign({}, el);
            el.label = el.cat_name_en;
            el.value = el.cat_name_en;
            el.id = el.cat_id;
            return el;
        })
        // console.log("categoryList", result)
        this.setState({
            categoryList: result,
        })
    }

    onCategorySelect = (val) => {
        this.state.categorySelect = val
        this.state.categoryList.map(item => {
            if (item.value == val) {
                this.state.categoryId = item.id
                this.state.categoryCode = item.code
                this.setState({
                    categoryId: this.state.categoryId,
                    categoryCode: this.state.categoryCode
                })
            }
        })
        // console.log('categorySelect', this.state.categorySelect)
        this.onProduct(this.state.countryId)
    }

    onProduct = (productId) => {
        let formdata = new FormData();
        formdata.append('scat_cat_id', productId)
        // this.props.triggerAuthCity(formdata, this.onCitySuccess, this.onCityError)
        this.props.triggerProduct(formdata, this.onProductSuccess, this.onProductError)
    }

    onProductSuccess = (data) => {
        // console.log('data', data)
        var result = data.result.map(function (el) {
            // var o = Object.assign({}, el);
            // var a = Object.assign({}, el);
            el.label = el.scat_name_en;
            el.value = el.scat_name_en;
            el.id = el.scat_id;
            return el;
        })
   //  console.log("productList", result)
        this.setState({
            productList: result,
        })
    }

    onProductSelect = (val) => {
        this.state.productSelect = val
        this.state.productList.map(item => {
            if (item.value == val) {
                this.state.productId = item.id
                this.state.productCode = item.code
                this.setState({
                    productId: this.state.productId,
                    productCode: this.state.productCode
                })
            }
        })
        console.log('cityZip', this.state.productId)
    }

    // onCategory = (categoryId) => {
    //     // console.log('countryId', countryId)
    //     let formdata = new FormData();
    //     formdata.append('cat_belonging', categoryId)
    //     // this.props.triggerAuthCity(formdata, this.onCitySuccess, this.onCityError)
    //     this.props.triggerCategory(this.onCategorySuccess, this.onCategoryError)
    // }
    onTickPressed = () => {
        if (!this.state.isTick) {
            this.setState({ isTick: true })
        } else {
            this.setState({ isTick: false })
        }
    }

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
            this.setState({ isYes: true , belonging:1})
        } else {
            this.setState({ isYes: false })
        }
        this.setState({ isYes: true, isNo: false })
        console.log("belonging is"+this.state.belonging)
    }

    isNoPressed = () => {
        if (!this.state.isNo) {
            this.setState({ isNo: true ,belonging:0 })
        } else {
            this.setState({ isNo: false })
        }
        this.setState({ isNo: true, isYes: false })
        console.log("belonging is"+this.state.belonging)
    }

    completeform = () => {
        this.props.navigation.navigate('Completeform', {})
    }

    recipient = () => {
        this.props.navigation.navigate('Recipient', {})
    }




      
    
    render() {
        let ReasonPlaceholder = {
            label: 'Reason for shipping',
            value: null,
            color: '#9EA0A4',
        };
        let ProductCatPlaceholder = {
            label: 'Product Category',
            value: null,
            color: '#9EA0A4',
        };
        let ProductPlaceholder = {
            label: 'Products',
            value: null,
            color: '#9EA0A4',
        };
        let CountryPlaceholder = {
            label: 'Country Of Origin',
            value: null,
            color: '#9EA0A4',
        };
        let UnitPlaceholder = {
            label: 'Unit Of Measure',
            value: null,
            color: '#9EA0A4',
        };
        let ExchangePlaceholder = {
            label: 'Exchange Rate',
            value: null,
            color: '#9EA0A4',
        };
        return (
            <SafeAreaView style={styles.safe}>
                <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
                    <View style={styles.one}>
                        <View style={styles.view1}>
                            <TouchableOpacity onPress={this.recipient}>
                                <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                            </TouchableOpacity>
                            <Text style={styles.about}>Italy - Senegal<Text style={styles.text1}> (17 Oct - 20 Oct)</Text></Text>
                        </View>
                    </View>
                </ImageBackground>
                <ScrollView style={styles.scrl} contentContainerStyle={styles.scroll}>
                    <View style={styles.card1}>
                        <Text style={styles.sender}>Characteristics</Text>
                    </View>
                    <View style={styles.card}>
                        <View style={{ height: '2%' }}></View>
                        <DropDown
                            //  items={this.state.items}
                            placeholder={ReasonPlaceholder}
                            data={this.state.reason}
                            onValueChange={(value) => {
                                this.setState({
                                    favColor: value,
                                });
                            }}
                            value={this.state.favColor}
                            source={require('../../Images/arrow-point-to-right.png')}
                            textInputProps={{ underlineColorAndroid: 'black' }}
                            style={{ marginTop: '-5%', width: '85%', alignSelf: 'center' }}
                            errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} />
                        <TextInputComponent
                            onChangeText={text => this.setState({ FirstName: text })}
                            placeholder='Contents'
                            underlineColorAndroid='grey'
                            designStyle={{ paddingBottom: 75, height: 100, marginLeft: '-5%' }} />

                    </View>
                    {/* <View style={styles.card1}>
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
                    </View> */}
                    <View style={styles.card1}>
                        <Text style={styles.sender}>Custom Duties</Text>
                    </View>
                    {/* <View style={styles.card31}> */}
                    <View style={styles.card31}>
                        <View style={styles.cardv3}>
                            <TouchableOpacity onPress={this.isCheckPressed}>{
                                this.state.isCheck ?
                                    <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />

                                    :
                                    <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                            }</TouchableOpacity>
                            <Text style={{ fontSize: 13, color: 'grey', marginHorizontal: 5 }}>I Am Not Interested in Purchasing The Custom Service</Text>
                        </View>
                    </View>
                    {
                        this.state.isCheck == false ?
                            <View style={styles.card32}>
                                <View style={styles.cardv4}>
                                    <Text style={{ fontSize: 13, color: 'grey' }}>Complete the following table so that your shipping is managed properly</Text>
                                </View>

                                <View style={styles.goods}>
                                    <Text style={{ marginHorizontal: 10 }}>Goods Details</Text>
                                    {
                                        this.state.isArrow == true ?
                                            <TouchableOpacity onPress={this.onArrowPressed}>
                                                <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.downup} resizeMode='center' />
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity onPress={this.onArrowPressed}>
                                                <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.down} resizeMode='center' />
                                            </TouchableOpacity>
                                    }

                                </View>
                                {
                                    this.state.isArrow == true ?
                                        <View style={styles.cardv5}>
                                            <View style={styles.cardv51}>
                                                <View style={styles.cardv511}>
                                                    <Text>Belonging :</Text>
                                                    <View style={styles.cardv5111}>
                                                        {
                                                            this.state.isYes == true ?
                                                                <TouchableOpacity onPress={this.isYesPressed} style={styles.yesno}>
                                                                    <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon1} />
                                                                    <Text style={{ color: 'dodgerblue' }}>Yes</Text>
                                                                </TouchableOpacity>
                                                                :
                                                                <TouchableOpacity onPress={this.isYesPressed} style={styles.yesno}>
                                                                    <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon1} />
                                                                    <Text>Yes</Text>
                                                                </TouchableOpacity>
                                                        }
                                                        {
                                                            this.state.isNo == true ?
                                                                <TouchableOpacity onPress={this.isNoPressed} style={styles.yesno}>
                                                                    <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon1} />
                                                                    <Text style={{ color: 'dodgerblue' }}>No</Text>
                                                                </TouchableOpacity>
                                                                :
                                                                <TouchableOpacity onPress={this.isNoPressed} style={styles.yesno}>
                                                                    <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon1} />
                                                                    <Text>No</Text>
                                                                </TouchableOpacity>
                                                        }
                                                    </View>
                                                </View>
                                                <DropDown
                                                    placeholder={ProductCatPlaceholder}
                                                    data={this.state.categoryList}
                                                    onValueChange={this.onCategorySelect}
                                                    source={require('../../Images/arrow-point-to-right.png')}
                                                    textInputProps={{ underlineColorAndroid: 'black' }}
                                                    value={this.state.categorySelect}
                                                    style={{ marginTop: '-9%', width: '85%', alignSelf: 'center' }}
                                                    errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} />
                                                <DropDown
                                                    placeholder={ProductPlaceholder}
                                                    data={this.state.productList}
                                                    onValueChange={this.onProductSelect}
                                                    source={require('../../Images/arrow-point-to-right.png')}
                                                    textInputProps={{ underlineColorAndroid: 'black' }}
                                                    value={this.state.productSelect}
                                                    style={{ width: '85%', alignSelf: 'center', marginTop: '-15%' }}
                                                    errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} />
                                                {
                                                    this.state.isYes == true ?
                                                        null
                                                        :
                                                        <View style={styles.upload}>
                                                            <Image source={require('../../Images/upload.png')} style={styles.down} resizeMode='center' />
                                                            <Text style={{ marginHorizontal: 10 }}>Upload documents</Text>
                                                        </View>
                                                }

                                            </View>
                                        </View>
                                        :
                                        null
                                }

                                <DropDown
                                    placeholder={CountryPlaceholder}
                                    data={this.state.countryList}
                                    onValueChange={this.onCountrySelect}
                                    source={require('../../Images/arrow-point-to-right.png')}
                                    textInputProps={{ underlineColorAndroid: 'black' }}
                                    value={this.state.countrySelect}
                                    style={{ width: '85%', marginTop: '-5%' }}
                                    errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} />
                                <TextInputComponent
                                    onChangeText={text => this.setState({ Quantity: text })}
                                    placeholder='Quantity'
                                    underlineColorAndroid='lightgrey'
                                    designStyle={{ height: 40, marginLeft: '-10%', marginTop: '-3%' }} />
                                <DropDown
                                    placeholder={UnitPlaceholder}
                                    data={this.state.unitEx}
                                    onValueChange={(value) => {
                                        this.setState({
                                            unitEx1: value,
                                        });
                                    }}
                                    source={require('../../Images/arrow-point-to-right.png')}
                                    textInputProps={{ underlineColorAndroid: 'black' }}
                                    value={this.state.unitEx1}
                                    style={{ width: '85%', marginTop: '-15%' }}
                                    errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                                    <TextInputComponent
                                        onChangeText={unit_values =>this.setState({unit_values})}
                                        placeholder='Unit Value'
                                        underlineColorAndroid='grey'
                                        keyboardType = 'numeric'
                                        designStyle={{ width: 130, height: 40, marginLeft: '-15%', marginTop: '-3%' }} />
                                    <DropDown
                                        placeholder={ExchangePlaceholder}
                                        data={this.state.exchange}
                                        onValueChange={(value) => {
                                            this.setState({
                                                favdolor: value,
                                            });
                                        }}
                                        source={require('../../Images/arrow-point-to-right.png')}
                                        textInputProps={{ underlineColorAndroid: 'black' }}
                                        value={this.state.favdolor}
                                        style={{ width: 130, marginLeft: '-55%', marginTop: '-10%' }}
                                        errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} />
                                </View>
                                <TextInputComponent
                                    onChangeText={text => this.setState({ FirstName: text })}
                                    placeholder='Custom Duty $'
                                    underlineColorAndroid='lightgrey'
                                    designStyle={{ height: 40, marginLeft: '-10%', marginTop: '-8%' }} />
                                <View  style={styles.plus} >
                               
                                    <Image source={require('../../Images/add-button-inside-black-circle.png')} style={styles.plus1} resizeMode='center' />
                                    
                           
                                </View>
                                {/* <Button  onPress={this.submit_form} title='Get Custom Duty"  /> */}
                                <View style={{marginBottom:14}}>
                                <Button 
                                onPress={this.submit_form}
                                title="Get Custom Duty"
                                color="#841584"
                                accessibilityLabel="Learn more about this purple button"
                              />
                              </View>
                                <View style={styles.ship}>
                                    <View style={styles.v1}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Total Value Shipped :</Text>
                                    </View>
                                    <View style={styles.v2}>
                                        <View style={styles.v21}>
                                            <Text style={{ fontSize: 17 }}>{this.state.Quantity}</Text>
                                            <Text style={{ fontSize: 10 }}>Quantity</Text>
                                        </View>
                                        <View style={styles.v22}>
                                            <Text style={{ fontSize: 17 }}>${this.state.cust_Duty}</Text>
                                            <Text style={{ fontSize: 10 }}>Custom Duty</Text>
                                        </View>

                                    </View>
                                </View>
                                <View style={styles.check1}>
                                    <TouchableOpacity onPress={this.isCheck1Pressed}>{
                                        this.state.isCheck1 ?
                                            <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />

                                            :
                                            <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                                    }</TouchableOpacity>
                                    <Text style={{ color: 'grey', marginHorizontal: 5 }}>I Declare The Information Above-mentioned Is True, Correct And Complete.</Text>
                                </View>
                                <View style={styles.check2}>
                                    <TouchableOpacity onPress={this.isCheck2Pressed}>{
                                        this.state.isCheck2 ?
                                            <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />

                                            :
                                            <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                                    }</TouchableOpacity>
                                    <Text style={{ color: 'grey', marginHorizontal: 5 }}>I Also Declared To Be Aware That Otherwise, The Goods May Not Be Shipped, Or It May Be Necessary To Integrate The Cost Of Customs Duties</Text>
                                </View>
                            </View>
                            :
                            null
                    }
                    {/* </View> */}
                    {/* <View style={styles.card1}>
                        <Text style={styles.sender}>Home Collection</Text>
                    </View>
                    <View style={styles.card4}>
                        <View style={styles.Home}>
                            <View style={styles.Home1}>
                                <Text>Departure Date :</Text>
                                <TextInputComponent onChangeText={this.onChangeTextEmail}
                                    placeholder='dd-mm-yy' underlineColorAndroid='grey' Ref={input => { this.userName = input }} designStyle={{ width: 150, height: 50, }} />
                                <Image source={require('../../Images/calendar.png')} style={styles.calendar} resizeMode='center' />
                            </View>
                            <View style={styles.Home2}>
                                <TextInputComponent onChangeText={this.onChangeTextEmail}
                                    placeholder={'Additional Information For Pony (e.g.\n Who Contacts In Case Of Needs, \n Intercom, Etc.)'}
                                    underlineColorAndroid='grey' Ref={input => { this.userName = input }} designStyle={{ height: 100 }} />
                            </View>
                        </View>
                    </View> */}
                    <View style={styles.card5}>
                        <View style={styles.declare}>
                            <View style={styles.card51}>
                                <TouchableOpacity onPress={this.isCheck3Pressed}>{
                                    this.state.isCheck3 ?
                                        <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />

                                        :
                                        <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                                }</TouchableOpacity>
                                <Text
                                    style={{ color: 'grey', marginHorizontal: 5 }}
                                >I Declare That My Shipping Does Not Include Any Following Hazardous Products :</Text>
                            </View>
                            <View style={styles.card52}>
                                <Text style={{ color: 'grey' }}>- Lithium batteries alone (Furthur Details +)</Text>
                                <Text style={{ color: 'grey' }}>- Electronic Smoking Devices (Furthur Details +)</Text>
                                <Text style={{ color: 'grey' }}>- Perfumes</Text>
                                <Text style={{ color: 'grey' }}>- Aerosols, Gas Bottles, Extinguishers</Text>

                            </View>
                            <View style={styles.card51}>
                                <TouchableOpacity onPress={this.isCheck4Pressed}>{
                                    this.state.isCheck4 ?
                                        <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />

                                        :
                                        <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                                }</TouchableOpacity>
                                <Text
                                    style={{ color: 'grey', marginHorizontal: 5 }}
                                >I Declare That My Shipping Does Not Include Any forbidden goods</Text>
                            </View>
                            <View style={styles.card51}>
                                <TouchableOpacity onPress={this.isCheck5Pressed}>{
                                    this.state.isCheck5 ?
                                        <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />
                                        :
                                        <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />
                                }</TouchableOpacity>
                                <Text
                                    style={{ color: 'grey', marginHorizontal: 5 }}
                                >I accept the terms and conditions of the web site</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={this.completeform} style={styles.button}>
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
        countryObj,
        categoryObj,
        productObj,
        unitObj,
        customObj
    } = state.authReducer


    return {
        countryObj,
        categoryObj,
        productObj,
        unitObj,
        customObj
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        triggerAuthCountry,
        triggerCategory,
        triggerProduct,
        triggerUnits,
        triggerCustom
    }, dispatch)
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Form3);