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
                                                import DocumentPicker from 'react-native-document-picker';

                                                // create a component
                                                var tempArr
                                                var current_index = 0
                                                var new_index=0
                                                class Form3 extends Component {
                                                    constructor(props) {
                                                        super(props);
                                                //         tranport_type: this.state.transp_type,
                                                // service_type :this.state.serv_typ,
                                                // insurance_type: "1",
                                                // weight: "["+this.state.fWight+"]",
                                                // dimension: this.state.Diments,
                                                // belongings: "["+ this.state.belonging +"]",
                                                // quantity:this.state.Quantity+"]",
                                                // unit_of_measure: "["+this.state.scat_measure+"]",
                                                // unit_value: "["+this.state.scat_unit_val+"]",
                                                // currency: "["+this.state.favdolor+"]",
                                                // home_colectn: "0",
                                                // home_delv: "0",
                                                // scat_id: "["+this.state.productId+"]",
                                                // serv_id: this.state.serv_id,
                                                // exchange_rate: "["+this.state.favdolor+"]",
                                                // }
                                                        tempArr = [{ 'ordr_belonging':'' ,'ordr_cat_id':'','ordr_scat_id':'','ordr_purc_invc':"",'ordr_country_origin':'', 'cat_List':[], 'isYes':null,'isNo':null, 'quantity':0, 'ordr_unit_measure':'','ordr_unit_value':'','product_lst':[],'ordr_exchange':'','ordr_custom':0.0,'upload_doc_detail':null,'product_cat_name':'','upload_doc':'','product_name':'','country_nm':'','productNm':''}],
                                                        this.state = {
                                                            isSender: false,
                                                            isRecipient: false,
                                                            isCheck: false,
                                                            isCheck1: false,
                                                            isCheck2: false,
                                                            isCheck3: false,
                                                            isCheck4: false,
                                                            isCheck5: false,
                                                            // isYes: null,
                                                            // isNo: null,
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
                                                            scat_measure:[],
                                                            productList: [],
                                                            productSelect: '',
                                                            productId: [],
                                                            productCode: '',
                                                            scat_unit_val:'',
                                                            favColor: undefined,
                                                            belonging:'',
                                                            Quantity:[],
                                                            cust_Duty:'',
                                                            fee_on_custom:'',
                                                            final_cust_duty:'',
                                                            unit_values:'',
                                                            Diments:this.props.route.params.Diments,
                                                            serv_id:this.props.route.params.serv_id,
                                                            fWight:this.props.route.params.rWight,
                                                            transp_type:this.props.route.params.transp_type,
                                                            serv_typ:this.props.route.params.ser_typ,
                                                            sender_deatils:this.props.route.params.sender_form,
                                                            Recipent_deatils:this.props.route.params.recipents_data,
                                                            singleFile:null,
                                                            file_name:'',
                                                            addPackage:tempArr,
                                                            Content:'',
                                                            total_Duty:'',  
                                                            total_quantity:'',   
                                                            new_index_g:new_index,                           
                                                            key:[],
                                                            Cat_All_data:[],
                                                            belonging_yesArr:[],
                                                            belongingNoArr:[],
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
                                                        console.log("sender_deatils",this.state.sender_deatils['Company_name'])
                                                        // console.log("sender_deatils",this.state.sender_deatils)
                                                        // console.log("Recipent_deatils",this.state.Recipent_deatils)
                                                        this.props.triggerAuthCountry(this.onCountrySuccess, this.onCountryError)
                                                        // this.onCategory(this.state.categoryId)
                                                        this.props.triggerUnits(this.onUnitSuccess, this.onUnitError)
                                                        let formdata = new FormData();
                                                        formdata.append('cat_belonging', '')
                                                        // this.props.triggerAuthCity(formdata, this.onCitySuccess, this.onCityError)
                                                        this.props.triggerCategory(formdata, this.onCategorySuccess, this.onCategoryError)
                                                        this.setState({ isYes: null })
                                                        console.log("fWight",this.state.fWight);
                                                       // console.log("-->>",this.state.addPackage)
                                                    }
                                                
                                                    submit_form=(index)=>{
                                                      //  console.log("quant",tempArr[index].productId)
                                                let Api_data ={
                                                tranport_type: this.state.transp_type,
                                                service_type :this.state.serv_typ,
                                                insurance_type: "1",
                                                weight: "["+this.state.fWight+"]",
                                                dimension: this.state.Diments,
                                                belongings: "["+ tempArr[index].ordr_belonging+"]",
                                                quantity:"["+tempArr[index].quantity+"]",
                                                unit_of_measure: "["+tempArr[index].ordr_unit_measure+"]",
                                                unit_value: "["+tempArr[index].ordr_unit_value+"]",
                                                currency: "["+tempArr[index].ordr_exchange+"]",
                                                home_colectn: "0",
                                                home_delv: "0",
                                                scat_id: "["+tempArr[index].ordr_scat_id+"]",
                                                serv_id: this.state.serv_id,
                                                exchange_rate: "["+tempArr[index].ordr_exchange+"]",
                                                }

                                                //unit of measure this.state.unitEx1
                                            // console.log("unit",this.state.unit_values)
                                                const requestOptions = {
                                                    method: 'POST',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify(Api_data) 
                                                };
                                                console.log("requestOptions",JSON.stringify(requestOptions))

                                                fetch("http://rbn.sairoses.com/Front/index.php/API/fields/calculation", requestOptions)
                                                .then(async response => {
                                                    const data = await response.json();
                                                
                                                        console.log("data yee"+JSON.stringify(data['result']))
                                                        //    let formData = data['result'];
                                                        //    console.log("form3Data''' ",formData)
                                                if(data['result'] != null || '' || undefined){

                                                    let c_dty =JSON.stringify(data['result'][0]['custom_duty']);
                                                    let c_fee =JSON.stringify(data['result'][0]['fee_on_custom'])
                                                    
                                                        // this.setState({
                                                        //     cust_Duty:JSON.stringify(data['result'][0]['custom_duty']),
                                                        //     fee_on_custom:JSON.stringify(data['result'][0]['fee_on_custom'])
                                                        // })
                                                    
                                                        let float = parseFloat(c_dty) + parseFloat(c_fee)
                                                        let fin = float
                                                    
                                                        tempArr[index].ordr_custom = fin.toFixed(2)
                                                    this.setState({
                                                        addPackage:tempArr
                                                        })
                                                    
                                                        this.getTotal_Duty()
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

                                                    onCountrySelect = (val,index) => {
                                                        tempArr[index].country_nm=val
                                                        this.setState({
                                                            addPackage:tempArr
                                                        })
                                                        this.state.countrySelect = val
                                                        this.state.countryList.map(item => {
                                                            if (item.value == val) {
                                                                this.state.countryId = item.id
                                                                this.state.countryCode = item.code
                                                                tempArr[index].ordr_country_origin=item.id
                                                                this.setState({
                                                                    addPackage:tempArr,
                                                                    countryId: this.state.countryId,
                                                                    countryCode: this.state.countryCode
                                                                })
                                                            }
                                                        })
                                                        // console.log('contrySelect', this.state.countrySelect)
                                                        // this.onCity(this.state.countryId)
                                                    }

                                                    onQuantitySelect =(val,index) =>{
                                                        tempArr[index].quantity=val
                                                        this.setState({
                                                            addPackage:tempArr
                                                        })
                                                        this.getTotal_Duty()
                                                    }

                                                    exchange_rts=(val,index)=>{
                                                        tempArr[index].ordr_exchange =val
                                                        this.setState({
                                                            addPackage:tempArr
                                                        })
                                                    }

                                                    onCategorySuccess = (data) => {
                                                    // console.log('dataooooo', data)
                                                        //             this.setState({
                                                        //                 Cat_All_data:data,
                                                                        
                                                        //             })        
                                                                    
                                                        //  console.log("this is tem data",(this.state.Cat_All_data).length)                                                                                       
                                                        var result = data.result.map(function (el) {
                                                            // var o = Object.assign({}, el);
                                                            // var a = Object.assign({}, el);
                                                            el.label = el.cat_name_en;
                                                            el.value = el.cat_name_en;
                                                            el.id = el.cat_id;
                                                            return el;
                                                        })
                                                        //console.log("result", JSON.parse(result))
                                                    // const a = parseInt(this.state.belonging)
                                                        // console.log("categoryList>>",this.state.belonging)

                                                        const check_yes = result.filter(x=>x.cat_belonging == 1);
                                                        console.log("check_yes",check_yes)
                                                        const check_no = result.filter(x=>x.cat_belonging == 0);
                                                      
                                                   
                                                        this.setState({
                                                            categoryList: result,
                                                            belonging_yesArr:check_yes,
                                                            belongingNoArr:check_no
                                                        })
                                                        console.log("check_fin :- ",check_fin)
                                                        
                                                        // this.setState({
                                                        //     categoryList: result,
                                                        // })
                                                      //  this.onFilterd_catList(data);
                                                    }

                                                    // onFilterd_catList=(data)=>{
                                                        
                                                    //              //console.log("fintd",data)
                                                    //     var result = data.result.map(function (el) {
                                                    //         // var o = Object.assign({}, el);
                                                    //         // var a = Object.assign({}, el);
                                                    //         el.label = el.cat_name_en;
                                                    //         el.value = el.cat_name_en;
                                                    //         el.id = el.cat_id;
                                                    //         return el;
                                                    //     },tempArr[index].cat_List = result)
                                                        
                                                   
                                                    //     this.setState({
                                                    //         addPackage:tempArr
                                                    //     })   
                                                    // }

                                                    onCategorySelect = (val,index) => {

                                                        current_index = index
                                                      //  console.log("blog ++"+tempArr[index].belongings)
                                                        //   let cList = JSON.parse(JSON.stringify(this.state.categoryList));
                                                        // const check_fin = cList.filter(x=>x.tempArr[index].belongings == 0);
                                                        //     this.setState({
                                                        //         categoryList:check_fin
                                                        //     })
                                                                    //  alert(JSON.stringify(index)) 
                                                            tempArr[index].product_cat_name=val
                                                            // this.setState({
                                                            //     addPackage:tempArr
                                                            // })
                                                        this.state.categorySelect = val
                                                        this.state.categoryList.map(item => {
                                                            if (item.value == val) {
                                                                this.state.categoryId = item.id
                                                                this.state.categoryCode = item.code
                                                                tempArr[index].ordr_cat_id=item.id
                                                                this.setState({
                                                                    categoryId: this.state.categoryId,
                                                                    categoryCode: this.state.categoryCode,
                                                                    addPackage:tempArr
                                                                })
                                                            }
                                                        })
                                                        
                                                        console.log('categorySelect>>>>', this.state.categoryId)
                                                        console.log('categorySelect>>>>', tempArr[index].ordr_cat_id)
                                                        this.onProduct(tempArr[index].ordr_cat_id)
                                                    }

                                                    onProduct = (productId) => {
                                                    
                                                        let formdata = new FormData();
                                                        formdata.append('scat_cat_id', productId)
                                                        // this.props.triggerAuthCity(formdata, this.onCitySuccess, this.onCityError)
                                                        this.props.triggerProduct(formdata, this.onProductSuccess, this.onProductError)
                                                    }

                                                    onProductSuccess = (data,val,index) => {
                                                        
                                              //  console.log('data_prod', data)
                                                // (tempArr[index].product_name)
                                                        var result = data.result.map(function (el) {
                                                            // el.tempArr[index].product_name = el.scat_name_en;
                                                            // el.tempArr[index].product_name = el.scat_name_en;
                                                            // el.tempArr[index].productId = el.scat_id;
                                                            el.label = el.scat_name_en;
                                                            el.value = el.scat_name_en;
                                                            el.id = el.scat_id;
                                                            //   console.log("result",result)
                                                            return el;
                                                        })
                                                    alert("please Choose Product")

                                                    tempArr[current_index].product_lst = result
                                                      //  console.log("result.....",tempArr[current_index].product_lst)
                                                
                                                        this.setState({
                                                            addPackage:tempArr,
                                                        //  productList: result,
                                                        })
                                                    }

                                                    onProductSelect = (val,index) => {
                                                        //console.log("val",val)
                                                        // tempArr[index].product_name=val
                                                        // this.setState({
                                                        //     addPackage:tempArr
                                                        // })
                                                    console.log("val",val)
                                                    // this.state.productSelect = val
                                                        tempArr[index].product_lst.map(item => {
                                                            if (item.label == val) {
                                                                
                                                                // this.state.productId = item.id
                                                                // this.state.productCode = item.code
                                                                // this.state.scat_unit_val = item.scat_unit_val
                                                                // this.state.scat_measure = item.scat_measure
                                                                tempArr[index].ordr_scat_id = item.id
                                                        
                                                                tempArr[index].productNm = item.label
                                                            // tempArr[index].productCode = item.code
                                                                tempArr[index].ordr_unit_value = item.scat_unit_val
                                                                tempArr[index].ordr_unit_measure = item.scat_measure
                                                                this.setState({
                                                                    // productId: this.state.productId,
                                                                    // productCode: this.state.productCode,
                                                                    // scat_unit_val: this.state.scat_unit_val,
                                                                    // scat_measure:this.state.scat_measure,
                                                                    addPackage:tempArr
                                                                    
                                                                })
                                                                console.log("red lable", [index])
                                                            }
                                                        })
                                                        // console.log('cityZip', this.state.productId)
                                                        // console.log('Unit value is', this.state.scat_unit_val)
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

                                                    isYesPressed = (index) => {
                                                        console.log(index)
                                                          
                                                        if (!tempArr[index].isYes) {
                                                        //  this.onCategorySuccess();
                                                        

                                                        //   console.log("belonging yes"+cList)
                                                        tempArr[index].isYes = false     
                                                            this.setState({ isYes: true,isNo: false,belonging: 1,},()=>{
                                                            //   this.onProduct()
                                                               new_index = index;
                                                                tempArr[index].ordr_belonging = 1
                                                                this.setState({
                                                                    addPackage:tempArr
                                                                })
                                                        
                                                            
                                                                // console.log("belonging Yes"+this.state.belonging)
                                                                // let cList = JSON.parse(JSON.stringify(this.state.categoryList));
                                                                // const check_fin = cList.filter(x=>x.cat_belonging == 1);
                                                                // this.setState({
                                                                //     categoryList:check_fin
                                                                // })
                                                            
                                                            })
                                                        
                                                        } else {
                                                            tempArr[index].isYes = false                        
                                                            this.setState({addPackage:tempArr})
                                                        
                                                        }
                                                        tempArr[index].isYes = true     
                                                        tempArr[index].isNo = false     
                                                        this.setState({addPackage:tempArr})
                                                    
                                                    }

                                                    isNoPressed = (index) => {
                                                        console.log(index)
                                                        if (!tempArr[index].isNo) {
                                                            //console.log("belonging No"+this.state.categoryList)
                                                            this.setState({ isNo: true, isYes : false  },()=>{
                                                            // this.onProduct()
                                                                tempArr[index].ordr_belonging = 0
                                                                new_index = index;
                                                                this.setState({
                                                                    addPackage:tempArr
                                                                })
                                                                    this.setState.belonging = 0
                                                                
                                                                // let cList = JSON.parse(JSON.stringify(this.state.categoryList));
                                                                // const check_fin = cList.filter(x=>x.cat_belonging == 0);
                                                                // this.setState({
                                                                //     categoryList:check_fin
                                                                // })
                                                            
                                                            })
                                                            // const check_fin = this.state.categoryList.filter(x=>x.cat_belonging == this.state.belonging);
                                                            // this.setState({
                                                            //     categoryList:check_fin
                                                            // })
                                                            //console.log("belonging No"+check_fin)
                                                        } else {
                                                            tempArr[index].isNo = false
                                                            this.setState({ addPackage:tempArr})
                                                        
                                                        }
                                                        tempArr[index].isNo = true
                                                        tempArr[index].isYes = false
                                                        this.setState({ addPackage:tempArr})
                                                    
                                                    }
//[{ 'ordr_belonging':'' ,'ordr_cat_id':'','ordr_scat_id':'','ordr_purc_invc':"",'ordr_country_origin':'', 'cat_List':[], 'isYes':null,'isNo':null, 'quantity':0, 'ordr_unit_measure':'','ordr_unit_value':'','product_lst':[],'ordr_exchange':'','ordr_custom':0.0,'upload_doc_detail':null,'product_cat_name':'','upload_doc':'','product_name':'','country_nm':'','productNm':''}]
                                                    completeform = () => {
                                                            //  console.log("length_is "+tempArr[0]['ordr_country_origin']);
                                                            // // let result=[]
                                                            //    for (var i = 0; i < tempArr.length; i++) {
                                                            //     // result = tempArr.filter(tempArr[i]['cat_List']);
                                                            //     delete person.last_name;

                                                            //     if(tempArr.length <0){
                                                            //          result = tempArr.splice(tempArr[i]['cat_List']);
                                                            // //    result = tempArr.splice(tempArr[i]['cat_List']);
                                                            // //     // this.setState({ 
                                                            // //     //     addPackage:tempArr
                                                            // //     // })   
                                                            //     break;
                                                            // }
                                                            //     }
                                                            //     console.log(result)
 

                                                        // console.log("sender_deatils",this.state.sender_deatils)
                                                        // console.log("Recipent_deatils",this.state.Recipent_deatils)
                                                      //  let abx =  JSON.stringify(this.state.addPackage)
                                                        let formdata = {}
                                                        formdata["Reason"]= this.state.favColor,
                                                        formdata["Content"]= this.state.Content,
                                                        //formdata["Belonging"]= this.state.belonging,
                                                        //formdata["Product_cat"]= this.state.onCategorySelect,
                                                        // formdata["Unit_of_measure"]= this.state.scat_measure,
                                                        // formdata["Unit_value"]= this.state.scat_unit_val,
                                                        formdata["Custom_duty"]= this.state.total_Duty,
                                                        formdata["Quantity"]= this.state.total_quantity,
                                                        formdata["file_name"]= this.state.file_name,
                                                      //  formdata["isCheck"]= this.state.isCheck,
                                                        formdata["Country_Org"]= this.state.countrySelect,
                                                        formdata["muitiple_orders"]  = this.state.addPackage,
                                                        formdata['sender_info'] = this.state.sender_deatils,
                                                        formdata['recipent_info'] = this.state.Recipent_deatils
                                                        //formdata["muitiple_orders"]= this.state.addPackage
                                                   // console.log("country is",this.state.addPackage)
                  //  tempArr = [{ 'key': 0,'cat_List':[], 'belongings':'' ,'isYes':null,'isNo':null, 'quantity':0,'product_lst':[],'exchange_rt':'','custom_dty_price':0.0,'upload_doc_detail':null,'product_cat_name':'','upload_doc':'','ordr_cat_id':'','product_name':'','country_nm':'','productNm':'','productId':'','scat_unit_val':'', 'scat_measure':''}]
                                                        this.props.navigation.navigate('Completeform', {Form3:formdata})
                                                    }

                                                    recipient = () => {
                                                        this.props.navigation.navigate('Recipient', {})
                                                    }


                                                
                                    
                                                
                                                    uploadImage = async (index) => {

                                                        if (tempArr[index].upload_doc_detail!= null) {
                                                    
                                                        let res = await fetch(
                                                            'http://rbn.sairoses.com/Front/index.php/API/upload_file/purchase_invoice',
                                                            {
                                                            method: 'post',
                                                            body: JSON.stringify(tempArr[index].upload_doc_detail),
                                                            headers: {
                                                                'Content-Type': 'multipart/form-data; ',
                                                            },
                                                            }
                                                        );
                                                        let responseJson = await res.json();
                                                        if (responseJson.status == 1) {
                                                            alert('Upload Successful');
                                                        }
                                                        } else {
                                                        //if no file selected the show alert
                                                        alert('Please Select File first');
                                                        }
                                                    };
                                                    

                                                    
                                                    selectFile = async (val,index) => {
                                                        //Opening Document Picker to select one file
                                                        try {
                                                        const res = await DocumentPicker.pick({
                                                            //Provide which type of file you want user to pick
                                                            type: [DocumentPicker.types.allFiles],
                                                            //There can me more options as well
                                                            // DocumentPicker.types.allFiles
                                                            // DocumentPicker.types.images
                                                            // DocumentPicker.types.plainText
                                                            // DocumentPicker.types.audio
                                                            // DocumentPicker.types.pdf
                                                        });
                                                        //Printing the log realted to the file
                                                        console.log('res : ' + JSON.stringify(res));
                                                        //Setting the state to show single file attributes
                                                        let name = JSON.stringify(res.name)
                                                        tempArr[index].upload_doc = name
                                                        tempArr[index].upload_doc_detail = res
                                                        
                                                        this.setState({
                                                            addPackage:tempArr
                                                        })
                                                        //   this.setState({
                                                        //     singleFile : res,
                                                        //     file_name:name
                                                        //   })
                                                        
                                                        } catch (err) {
                                                            // this.setState({
                                                            //     singleFile : null,
                                                            //     file_name:''
                                                            //   })
                                                            tempArr[index].upload_doc =''
                                                            tempArr[index].upload_doc_detail = ''     
                                                        //Handling any exception (If any)
                                                        if (DocumentPicker.isCancel(err)) {
                                                            //If user canceled the document selection
                                                            alert('Canceled from single doc picker');
                                                        } else {
                                                            //For Unknown Error
                                                            alert('Unknown Error: ' + JSON.stringify(err));
                                                            throw err;
                                                        }
                                                        }
                                                    };
                            


                                                getTotal_Duty=()=>{
                                                //   console.log("type", parseFloat(tempArr[0].custom_dty_price)+parseFloat(tempArr[1].custom_dty_price));

                                                //     var val = tempArr.reduce(function(previousValue, currentValue) {
                                                //         return  ((previousValue.custom_dty_price) + (currentValue.custom_dty_price))
                                                    
                                                        
                                                //     })
                                                //     console.log(val);
   
                                                    

                                                var sum = 0;
                                                var quant =0;
                                                        for (var i = 0; i < tempArr.length; i++) {
                                                        sum += parseFloat(tempArr[i].ordr_custom)
                                                        quant += parseInt(tempArr[i].quantity)
                                                        }
                                                     //   console.log("type quanrti", quant)
                                                        this.setState({
                                                         total_Duty:(sum).toFixed(2),
                                                         total_quantity:quant
                                                        })
                                                     // console.log("addd",sum)

                                                      

                                                 //     let count = tempArr.length;
                                                //    // console.log("count",tempArr[0].custom_dty_price)
                                                //     let total =0;
                                                //     for(let i=0; i<=count; i++){
                                                    
                                                //         let  total= total + tempArr[count].custom_dty_price;
                                                //        console.log(total)
                                                        
                                                //     }

                                                // console.log("ttls",total)
                                                    //    tempArr[index].total_Duty = totals;
                                                    // this.setState({
                                                    //     total_Duty:totals
                                                    //     })
                                                    //  console.log("dty",this.state.total_Duty)
                                                    
                                                }

                                                    addMore = (index) => {
                                                    //    this.setState=({
                                                        
                                                    //    })
                                                    // let i =1;
                                                //    var count = key;
                                                //     // console.log("count",(key))
                                                //     var counts = count.length;
                                                //  console.log("indexx",(counts))
                                                    
                                                    //     let addPackage =this.state.addPackage;
                                                    
                                                    //     addPackage.push(
                                                            
                                                            
                                                    
                                                    //     );
                                                    //     this.setState({addPackage})
                                                
                                                    //  var tempArr = [];
                                                    // console.log("cust_dyayayac ",tempArr.length)
                                                    // let total =0;
                                                    // for(let i=0; i<=tempArr.length; i++){
                                                    
                                                    //     let  totals=total + tempArr[i].custom_dty_price;
                                                    //       return totals;
                                                        
                                                    // }
                                                    // //    tempArr[index].total_Duty = totals;
                                                    // this.setState({
                                                    //     total_Duty:totals
                                                    //     })
                                                    //  console.log("dty",this.state.total_Duty)

                                                    tempArr.push({ 'ordr_belonging':'','ordr_cat_id':'','ordr_scat_id':'','ordr_purc_invc':"",'ordr_country_origin':'', 'cat_List':[], 'quantity':0 ,'isYes':null,'isNo':null, 'product_cat_name':'', 'ordr_unit_measure':'','ordr_unit_value':'','product_lst':[],'ordr_exchange':'','ordr_custom':0.0,'upload_doc_detail':null,'upload_doc':'','productNm':'','product_name':'', 'country_nm':''})
                                                    this.setState({
                                                        addPackage:tempArr
                                                    })
                                                
                                                    this.getTotal_Duty()
                                                  //  console.log("tem",tempArr)
                                                    }


                            
                                                        // deleteForm=(index)=>{

                                                        //     for (var i = 0; i < tempArr.length; i++) {
                                                        //         if(index === tempArr.length){
                                                        //         tempArr.splice(tempArr[i]);
                                                        //         this.setState({ 
                                                        //             addPackage:tempArr
                                                        //         })   
                                                        //         break;
                                                        //     }
                                                        //     this.getTotal_Duty();
                                                        //         }


                                                        //     // console.log("ind",index)
                                                        //     // tempArr.splice(index,1);
                                                        //     // this.setState({ 
                                                        //     //     addPackage:tempArr
                                                        //     // })    
                                                        //     // console.log("temdel",tempArr)
                                                        // }

                                                    
                                                    
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
                                                                            onChangeText={text => this.setState({ Content: text })}
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
                                                                                {/* {
                                                                                    this.state.isArrow == true ?
                                                                                        <View style={styles.cardv5}>
                                                                                            <View style={styles.cardv51}>
                                                                                                <View style={styles.cardv511}>
                                                                                                    <Text>Belonging :{this.state.key}</Text>
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
                                                                                                        <View style={{flexDirection:'row'}}>
                                                                                                        <TouchableOpacity style={styles.upload} onPress={this.selectFile}>
                                                                                                        <View  >
                                                                                                        
                                                                                                { this.state.file_name == '' ? <Text style={{ marginHorizontal: 36}}>Select document</Text>: <Text style={{ marginHorizontal: 50}}>{this.state.file_name}</Text> }
                                                                                            
                                                                                                        </View>
                                                                                                        </TouchableOpacity>
                                                                                                            
                                                                                                        <TouchableOpacity  style={styles.uploadss} onPress={this.uploadImage}>  
                                                                                                        <View>
                                                                                                    
                                                                                                        <Image source={require('../../Images/upload.png')} style={styles.down} resizeMode='center' />
                                                                                                    </View>
                                                                                                    </TouchableOpacity>
                                                                                                    </View>
                                                                                                }

                                                                                            </View>
                                                                                        </View>
                                                                                        :
                                                                                        null
                                                                                } */}

                                                                                {/* <DropDown
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
                                                                                    value={this.state.scat_measure}
                                                                                    style={{ width: '85%', marginTop: '-15%' }}
                                                                                    errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} />
                                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                                                                                    <TextInputComponent
                                                                                        onChangeText={this.state.scat_unit_val}
                                                                                        placeholder={this.state.scat_unit_val}
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
                                                                                    onChangeText={this.state.cust_Duty}
                                                                                    placeholder= {this.state.cust_Duty}
                                                                                    defaultValue={this.state.cust_Duty}
                                                                                    underlineColorAndroid='lightgrey'
                                                                                    designStyle={{ height: 40, marginLeft: '-10%', marginTop: '-8%' }} />
                                                */}
                                                                                    {/* <TouchableOpacity activeOpacity = { .5 }  style={styles.plus} onPress={() => this.addMore(this.state.addPackage.length)}></TouchableOpacity> */}
                                                                                
                                                                                {/* <View style={styles.plus}> 
                                                                        
                                                                                
                                                                                    <Image source={require('../../Images/add-button-inside-black-circle.png')} style={styles.plus1} resizeMode='center' />
                                                                                    
                                                                                
                                                                                </View>
                                                        
                                                                                <View style={{marginBottom:14 ,flexDirection:'row'}}>
                                                                                <Button 
                                                                                onPress={this.submit_form} 
                                                                            // onPress={this.addMore} 
                                                                                title="Get Custom Duty"
                                                                                color="#841584"
                                                                                accessibilityLabel="Learn more about this purple button"
                                                                            />
                                                                                <Button 
                                                                                onPress={()=>this.addMore()}
                                                                                title="Add More"
                                                                                color="#841584"
                                                                                accessibilityLabel="Learn more about this purple button"
                                                                            />
                                                                            </View> */}
                                                            

                                                                            
                                                                            
                                                                            {  this.state.addPackage.map((value, index) => {
                                                                                 //   value.isBel == yes
                                                                                 
                                                                                   var tempData; 
                                                                                   value.isYes == true
                                                                                   var tempData = (value.isYes === true ?this.state.belonging_yesArr : this.state.belongingNoArr );
                                                                                 setTimeout(() => {
                                                                                    
                                                                                    console.log("tnp<data",tempData)
                                                                                  },300)

                                                                                 
                                                                                    return (
                                                                                    <View style={styles.cardv55}>
                                                                                    <View style={styles.cardv51}>
                                                                                    <View style={styles.cardv5i}>
                                                                                        <View style={styles.cardv511}>
                                                                                            <Text>Belonging :</Text>
                                                                                            <View style={styles.cardv5111}>
                                                                                                {
                                                                                                    value.isYes == true ?
                                                                                                        <TouchableOpacity onPress={()=>this.isYesPressed(index)} style={styles.yesno}>
                                                                                                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon1} />
                                                                                                            <Text style={{ color: 'dodgerblue' }}>Yes</Text>
                                                                                                        </TouchableOpacity>
                                                                                                        :
                                                                                                        <TouchableOpacity onPress={()=>this.isYesPressed(index)} style={styles.yesno}>
                                                                                                            <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon1} />
                                                                                                            <Text>Yes</Text>
                                                                                                        </TouchableOpacity>
                                                                                                }
                                                                                                {
                                                                                                value.isNo == true ?
                                                                                                        <TouchableOpacity onPress={()=>this.isNoPressed(index)} style={styles.yesno}>
                                                                                                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon1} />
                                                                                                            <Text style={{ color: 'dodgerblue' }}>No</Text>
                                                                                                        </TouchableOpacity>
                                                                                                        :
                                                                                                        <TouchableOpacity onPress={()=>this.isNoPressed(index)} style={styles.yesno}>
                                                                                                            <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon1} />
                                                                                                            <Text>No</Text>
                                                                                                        </TouchableOpacity>
                                                                                                }
                                                                                            </View>
                                                                                        </View>
                                                                                        <DropDown
                                                                                            // placeholder={ProductCatPlaceholder}
                                                                                            data={tempData}
                                                                                            onValueChange={(val)=>this.onCategorySelect(val,index)}
                                                                                            source={require('../../Images/arrow-point-to-right.png')}
                                                                                            textInputProps={{ underlineColorAndroid: 'black' }}
                                                                                            value={value.product_cat_name}
                                                                                            style={{ marginTop: '-9%', width: '85%', alignSelf: 'center' }}
                                                                                            errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} />
                                                                                        <DropDown
                                                                                            // placeholder={ProductPlaceholder}
                                                                                            data={value.product_lst}
                                                                                            onValueChange={(val)=>this.onProductSelect(val,index)}
                                                                                            source={require('../../Images/arrow-point-to-right.png')}
                                                                                            textInputProps={{ underlineColorAndroid: 'black' }}
                                                                                            value={value.productNm}
                                                                                            style={{ width: '85%', alignSelf: 'center', marginTop: '-15%' }}
                                                                                            errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} />
                                                                                        {
                                                                                            this.state.isYes == true ?
                                                                                                null
                                                                                                :
                                                                                                <View style={{flexDirection:'row'}}>
                                                                                                <TouchableOpacity style={styles.upload} onPress={(val)=>this.selectFile(val,index)}>
                                                                                                <View  >
                                                                                                    
                                                                                        { this.state.file_name == '' ? <Text style={{ marginHorizontal: 36}}>Select document</Text>: <Text style={{ marginHorizontal: 50}}>{this.state.file_name}</Text> }
                                                                                    
                                                                                                </View>
                                                                                                </TouchableOpacity>
                                                                                                        
                                                                                                    <TouchableOpacity  style={styles.uploadss} onPress={(val)=>this.uploadImage(val,index)}>  
                                                                                                    <View>
                                                                                                
                                                                                                    <Image source={require('../../Images/upload.png')} style={styles.down} resizeMode='center' />
                                                                                                </View>
                                                                                                </TouchableOpacity>
                                                                                                </View>
                                                                                        }
                                                                                            </View> 
                                                                                            <DropDown
                                                                                                            //  placeholder={CountryPlaceholder}
                                                                                                            data={this.state.countryList}
                                                                                                            onValueChange={(val)=>this.onCountrySelect(val,index)}
                                                                                                            source={require('../../Images/arrow-point-to-right.png')}
                                                                                                            textInputProps={{ underlineColorAndroid: 'black' }}
                                                                                                            value={value.country_nm}
                                                                                                            style={{ width: '85%', marginTop: '-1%',marginLeft:'8%' }}
                                                                                                            errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} />
                                                                                                        <TextInputComponent
                                                                                                            onChangeText={(val)=>this.onQuantitySelect(val,index)}
                                                                                                            placeholder='Quantity'
                                                                                                            underlineColorAndroid='lightgrey'
                                                                                                            designStyle={{ height: 40, marginLeft: '-5%', marginTop: '-1%' }} />
                                                                                                            <DropDown
                                                                                                            // placeholder={UnitPlaceholder}
                                                                                                            data={this.state.unitEx}
                                                                                                            onValueChange={(value) => {
                                                                                                                this.setState({
                                                                                                                    unitEx1: value,
                                                                                                                });
                                                                                                            }}
                                                                                                            //       onValueChange={(value) => {
                                                                                                            //        this.setState({
                                                                                                            //            unitEx1: value.scat_measure,
                                                                                                            //        });
                                                                                                            //    }}
                                                                                                            

                                                                                                            source={require('../../Images/arrow-point-to-right.png')}
                                                                                                            textInputProps={{ underlineColorAndroid: 'black' }}
                                                                                                            value={value.ordr_unit_measure}
                                                                                                            style={{ width: '85%', marginTop: '-10%',marginLeft:'10%' }}
                                                                                                            errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} />
                                                                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>

                                                                                                            <TextInputComponent
                                                                                                                onChangeText={value.ordr_unit_value}
                                                                                                                placeholder={value.ordr_unit_value}
                                                                                                                underlineColorAndroid='grey'
                                                                                                                keyboardType = 'numeric'
                                                                                                                designStyle={{ width: 130, height: 40, marginLeft: '-15%', marginTop: '-3%' }} />
                                                                                                                    <DropDown
                                                                                                                placeholder={ExchangePlaceholder}
                                                                                                                data={this.state.exchange}
                                                                                                                onValueChange={(value) => this.exchange_rts(value,index)}
                                                                                                                source={require('../../Images/arrow-point-to-right.png')}
                                                                                                                textInputProps={{ underlineColorAndroid: 'black' }}
                                                                                                                value={value.ordr_exchange}
                                                                                                                style={{ width: 130, marginLeft: '-55%', marginTop: '-10%' }}
                                                                                                                errorStyle={{ paddingBottom: 7, marginTop: '-2%' }} />
                                                                                    </View>
                                                                                                                <Text style={{ height: 40, marginLeft: '10%', marginTop: '8%' }}>custom Duty: {value.ordr_custom}</Text>
                                                                                    {/* <TextInputComponent
                                                                                                            onChangeText={value.custom_dty_price}
                                                                                                        //   placeholder= { value.custom_dty_price }
                                                                                                        
                                                                                                            underlineColorAndroid='lightgrey'
                                                                                                            designStyle={{ height: 40, marginLeft: '-6%', marginTop: '-8%' }} /> */}
                                                                            
                                                                                                                {/* <TouchableOpacity activeOpacity = { .5 }  style={styles.plus} onPress={() => this.addMore(this.state.addPackage.length)}></TouchableOpacity> */}
                                                                                                            
                                                                                                        <View style={styles.plus}> 
                                                                                                                                
                                                                                                            <Image source={require('../../Images/add-button-inside-black-circle.png')} style={styles.plus1} resizeMode='center' />
                                                                                                            
                                                                                                        
                                                                                                        </View>
                                                                                    
                                                                                                        <View style={{marginBottom:14,flexDirection:'row',justifyContent:'space-between'}}>
                                                                                                        <Button 
                                                                                                        onPress={()=>this.submit_form(index)}
                                                                                                        title="Custom Duty"
                                                                                                        color="#841584"
                                                                                                        accessibilityLabel="Learn more about this purple button"
                                                                                                        /> 
                                                                                                        <Button 
                                                                                                        onPress={()=>this.addMore()}
                                                                                                        title="Add More"
                                                                                                        color="#841584"
                                                                                                        accessibilityLabel="Learn more about this purple button"
                                                                                                        />
                                                                                                        {/* <Button 
                                                                                                        onPress={()=>this.deleteForm(index)}
                                                                                                        title="delete"
                                                                                                        color="#841584"
                                                                                                        accessibilityLabel="Learn more about this purple button"
                                                                                                        /> */}
                                                                                                        </View>
                                                                                                    
                                                                                                        
                                                                                                        
                                                                                                    
                                                                                                        </View>
                                                                                                        
                                                                                    
                                                                                </View>
                                                                                    );
                                                                                    })}
                                                                            
                                                                            </View>
                                                                            :
                                                                            null
                                                                    }
                                                                    {/* </View> */}

                                                                        
                                                                                {/* <Button  onPress={this.submit_form} title='Get Custom Duty"  /> */}

                                                                    
                                                                        {  <View style={styles.cardx}>
                                                                        <View style={styles.ship}>
                                                                                    <View style={styles.v1}>
                                                                                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Total Value Shipped :</Text>
                                                                                    </View>
                                                                                    <View style={styles.v2}>
                                                                                        <View style={styles.v21}>
                                                                                            <Text style={{ fontSize: 17 }}>{this.state.total_quantity}</Text>
                                                                                            <Text style={{ fontSize: 11 }}>Quantity</Text>
                                                                                        </View>
                                                                                        <View style={styles.v22}>
                                                                                            <Text style={{ fontSize: 15 }}>${this.state.total_Duty}</Text>
                                                                                            <Text style={{ fontSize: 11 }}>Custom-Duty</Text>
                                                                                        </View>

                                                                                    </View>
                                                                                </View>
                                                                                <View style={styles.checkx}>
                                                                                    <TouchableOpacity onPress={this.isCheck1Pressed}>{
                                                                                        this.state.isCheck1 ?
                                                                                            <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />

                                                                                            :
                                                                                            <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                                                                                    }</TouchableOpacity>
                                                                                    <Text style={{ color: 'grey', marginHorizontal: 5 }}>I Declare The Information Above-mentioned Is True, Correct And Complete.</Text>
                                                                                </View>
                                                                                <View style={styles.checkx2}>
                                                                                    <TouchableOpacity onPress={this.isCheck2Pressed}>{
                                                                                        this.state.isCheck2 ?
                                                                                            <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />

                                                                                            :
                                                                                            <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                                                                                    }</TouchableOpacity>
                                                                                    <Text style={{ color: 'grey', marginHorizontal: 5 }}>I Also Declared To Be Aware That Otherwise, The Goods May Not Be Shipped, Or It May Be Necessary To Integrate The Cost Of Customs Duties</Text>
                                                                                </View>
                                                                    </View>  }



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
                                                                    <View style={styles.cardv555}></View>
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