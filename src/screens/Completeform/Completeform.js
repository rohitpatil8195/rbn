//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import styles from "./Styles";
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInputComponent from '../../components/TextInputComponent';

// create a component
export default class Completeform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSender: false,
            isCheck: false,
            isCheck1: this.props.route.params.check1,
            isCheck2: this.props.route.params.check2,
            isCheck3: this.props.route.params.check3,
            isCheck4: this.props.route.params.check5,
            isCheck5: false,
            isYes: false,
            ismodalVisible: false,
            isArrows: false,
            isArrowr: false,
            isArrowc: false,
            isArrowi: false,
            isArrowcstm: false,
            sender_info:this.props.route.params.sender_info,
            Recipent_info:this.props.route.params.recipent_info,
            form3Data:this.props.route.params.Form3,
            multi_products:this.props.route.params.muitiple_orders
        }
    }




    componentDidMount = async()=>{
        console.log("lolol",this.state.form3Data['recipent_info']);
        this.setState({
            isArrows:true,
            isArrowr: true,
            isArrowc: true,
            isArrowi: true,
            isArrowcstm: true
        }) 
    } 
    isArrowsPressed = () => {
        if (!this.state.isArrows) {
            this.setState({ isArrows: true })
        } else {
            this.setState({ isArrows: false })
        }
    }

    isArrowrPressed = () => {
        if (!this.state.isArrowr) {
            this.setState({ isArrowr: true })
        } else {
            this.setState({ isArrowr: false })
        }
    }

    isArrowcPressed = () => {
        if (!this.state.isArrowc) {
            this.setState({ isArrowc: true })
        } else {
            this.setState({ isArrowc: false })
        }
    }

    isArrowiPressed = () => {
        if (!this.state.isArrowi) {
            this.setState({ isArrowi: true })
        } else {
            this.setState({ isArrowi: false })
        }
    }

    isArrowcstmPressed = () => {
        if (!this.state.isArrowcstm) {
            this.setState({ isArrowcstm: true })
        } else {
            this.setState({ isArrowcstm: false })
        }
    }

    setModalVisible = (visible) => {
        this.setState({ ismodalVisible: visible });
    }

    isSenderPressed = () => {
        if (!this.state.isSender) {
            this.setState({ isSender: true })
        } else {
            this.setState({ isSender: false })
        }
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
    }

    ordercomplete = () => {
        let formdata = {}
        // formdata["sender_data"]= this.state.sender_info,
        // formdata["Recipent_info"]= this.state.Recipent_info,
        formdata["form_data"]= this.state.form3Data,
        formdata["multi_products"] =this.state.multi_products
        console.log("formdata compelet form",formdata)
        this.props.navigation.navigate('BeforeOrder', {from4:formdata})
    }

    form3 = () => {
        this.props.navigation.navigate('Form3', {})
    }

    render() {
        const { ismodalVisible } = this.state;
        //console.log("hhhhhh",this.state.sender_info)
        return (
            <SafeAreaView style={styles.safe}>
                <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
                    <View style={styles.one}>
                        <View style={styles.view1}>
                            <TouchableOpacity onPress={this.form3}>
                            <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                            </TouchableOpacity>
                            <Text style={styles.about}>Italy - Senegal<Text style={styles.text1}> (17 Oct - 20 Oct)</Text></Text>
                        </View>
                    </View>
                </ImageBackground>
                <ScrollView style={styles.scrl} contentContainerStyle={styles.scroll}>
                    <View style={styles.card1}>
                        <Text style={styles.sender}>Sender Details</Text>
                        {
                            this.state.isArrows == true ?
                                <TouchableOpacity onPress={this.isArrowsPressed}>
                                    <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.downup} resizeMode='center' />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={this.isArrowsPressed}>
                                    <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.down} resizeMode='center' />
                                </TouchableOpacity>
                        }

                    </View>
                    {

                        this.state.isArrows == true ?
                            <View style={styles.card}>
                                <View style={styles.cardv1}>
                                    <Text style={styles.Textc1}>Company Name : <Text style={styles.Textc2}>{this.state.form3Data['sender_info']['Company_name']}</Text></Text>
                                    <Text style={styles.Textc1}>First Name : <Text style={styles.Textc2}>{this.state.form3Data['sender_info']['FirstName']}</Text></Text>
                                    <Text style={styles.Textc1}>Last Name : <Text style={styles.Textc2}>{this.state.form3Data['sender_info']['Surname']}</Text></Text>
                                    <Text style={styles.Textc1}>Telephone : <Text style={styles.Textc2}>{this.state.form3Data['sender_info']['Telephone']}</Text></Text>
                                    <Text style={styles.Textc1}>Email : <Text style={styles.Textc2}>{this.state.form3Data['sender_info']['Email']}</Text></Text>
                                    <Text style={styles.Textc1}>Address : <Text style={styles.Textc2}>{this.state.form3Data['sender_info']['Address']}</Text></Text>
                                    <Text style={styles.Textc1}>Country : <Text style={styles.Textc2}>{this.state.form3Data['sender_info']['Country']}</Text></Text>
                                    <Text style={styles.Textc1}>Zip Code : <Text style={styles.Textc2}>{this.state.form3Data['sender_info']['cityZip']}</Text></Text>
                                    <Text style={styles.Textc1}>City : <Text style={styles.Textc2}>{this.state.form3Data['sender_info']['City']}</Text></Text>
                                    <Text style={styles.Textc1}>Districts : <Text style={styles.Textc2}>{this.state.form3Data['sender_info']['District']}</Text></Text>
                                    <Text style={styles.Textc1}>VAT Number : <Text style={styles.Textc2}>{this.state.form3Data['sender_info']['VAT_Number']}</Text></Text>
                                    <Text style={styles.Textc1}>Additional Info :</Text>
                                    <Text style={styles.Textc2}>{this.state.form3Data['sender_info']['Additional_Info']}</Text>
                                </View>
                            </View>
                            :
                            null
                    }

                    <View style={styles.card1}>
                        <Text style={styles.sender}>Recipient Details</Text>
                        {
                            this.state.isArrowr == true ?
                                <TouchableOpacity onPress={this.isArrowrPressed}>
                                    <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.downup} resizeMode='center' />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={this.isArrowrPressed}>
                                    <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.down} resizeMode='center' />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        this.state.isArrowr == true ?
                            <View style={styles.card}>
                                <View style={styles.cardv1}>
                                <Text style={styles.Textc1}>Company Name : <Text style={styles.Textc2}>{this.state.form3Data['recipent_info']['Company_name']}</Text></Text>
                                    <Text style={styles.Textc1}>First Name : <Text style={styles.Textc2}>{this.state.form3Data['recipent_info']['FirstName']}</Text></Text>
                                    <Text style={styles.Textc1}>Last Name : <Text style={styles.Textc2}>{this.state.form3Data['recipent_info']['Surname']}</Text></Text>
                                    <Text style={styles.Textc1}>Telephone : <Text style={styles.Textc2}>{this.state.form3Data['recipent_info']['Telephone']}</Text></Text>
                                    <Text style={styles.Textc1}>Email : <Text style={styles.Textc2}>{this.state.form3Data['recipent_info']['Email']}</Text></Text>
                                    <Text style={styles.Textc1}>Address : <Text style={styles.Textc2}>{this.state.form3Data['recipent_info']['Address']}</Text></Text>
                                    <Text style={styles.Textc1}>Country : <Text style={styles.Textc2}>{this.state.form3Data['recipent_info']['Country']}</Text></Text>
                                    <Text style={styles.Textc1}>Zip Code : <Text style={styles.Textc2}>{this.state.form3Data['recipent_info']['cityZip']}</Text></Text>
                                    <Text style={styles.Textc1}>City : <Text style={styles.Textc2}>{this.state.form3Data['recipent_info']['City']}</Text></Text>
                                    <Text style={styles.Textc1}>Districts : <Text style={styles.Textc2}>{this.state.form3Data['recipent_info']['District']}</Text></Text>
                                    <Text style={styles.Textc1}>VAT Number : <Text style={styles.Textc2}>{this.state.form3Data['recipent_info']['VAT_Number']}</Text></Text>
                                    <Text style={styles.Textc1}>Additional Info :</Text>
                                    <Text style={styles.Textc2}>{this.state.form3Data['recipent_info']['Additional_Info']}</Text>
                                </View>
                            </View>
                            :
                            null
                    }

                    <View style={styles.card1}>
                        <Text style={styles.sender}>Characteristics</Text>
                        {
                            this.state.isArrowc == true ?
                                <TouchableOpacity onPress={this.isArrowcPressed}>
                                    <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.downup} resizeMode='center' />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={this.isArrowcPressed}>
                                    <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.down} resizeMode='center' />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        this.state.isArrowc == true ?
                            <View style={styles.card2}>
                                <View style={styles.card21}>
                                    <Text style={styles.Textc1}>Reason for shipping :</Text>
                                    <Text style={styles.Textc2}> {this.state.form3Data['Reason']}</Text>
                                    <Text style={styles.Textc1}>Contents :</Text>
                                    <Text style={styles.Textc2}> {this.state.form3Data['Content']}</Text>
                                </View>
                            </View>
                            :
                            null
                    }

                    <View style={styles.card1}>
                        <Text style={styles.sender}>Invoicing</Text>
                        {
                            this.state.isArrowi == true ?
                                <TouchableOpacity onPress={this.isArrowiPressed}>
                                    <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.downup} resizeMode='center' />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={this.isArrowiPressed}>
                                    <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.down} resizeMode='center' />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        this.state.isArrowi == true ?
                            <View style={styles.card3}>
                                <View style={styles.card31}>
                                    <Text style={styles.Textc1}>Address :</Text>
                                    <View style={styles.card32}>
                                        {
                                            this.state.isSender == true ?
                                                <TouchableOpacity onPress={this.isSenderPressed} style={styles.compo}>
                                                    <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon1} />
                                                    <Text style={{ color: 'dodgerblue', marginHorizontal: 10 }}>Sender</Text>
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity onPress={this.isSenderPressed} style={styles.compo}>
                                                    <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon1} />

                                                    <Text style={{ marginHorizontal: 10 }}>Sender</Text>
                                                </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            </View>
                            :
                            null
                    }

                    <View style={styles.card1}>
                        <Text style={styles.sender}>Custom Duties</Text>
                        {
                            this.state.isArrowcstm == true ?
                                <TouchableOpacity onPress={this.isArrowcstmPressed}>
                                    <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.downup} resizeMode='center' />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={this.isArrowcstmPressed}>
                                    <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.down} resizeMode='center' />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        this.state.isArrowcstm == true  && this.state.form3Data['isCheck0'] == false ?
                            <View style={styles.card4}>
                                <View style={styles.card41}>
                                    <View style={styles.card42}>
                                        <TouchableOpacity onPress={this.isCheckPressed}>{
                                           this.state.form3Data['isCheck'] ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />
                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                                        }</TouchableOpacity>
                                        <Text style={styles.align}>I Am Not Interested In Purchasing The Custom Service</Text>
                                    </View>
                                  <View style={styles.card43}>
                                        <View style={styles.card431}>
                                            {/* <Text style={styles.Textc1}>Product Details :</Text> */}
                                            {/* <View style={styles.card432}>
                                                <Text style={styles.Textc1}>Belonging :</Text>
                                                {
                                                    this.state.form3Data['Belonging'] == true ?
                                                        <TouchableOpacity onPress={this.isYesPressed} style={styles.compo1}>
                                                            <Image source={require('../../Images/dot-and-circle.png')} style={styles.icon1} />
                                                            <Text style={{ color: 'dodgerblue', marginHorizontal: 5 }}>Yes</Text>
                                                        </TouchableOpacity>
                                                        :
                                                        <TouchableOpacity onPress={this.isYesPressed} style={styles.compo1}>
                                                            <Image source={require('../../Images/dot-and-circle-2.png')} style={styles.icon1} />
                                                            <Text style={{ marginHorizontal: 5 }}>Yes</Text>
                                                        </TouchableOpacity>
                                                }
                                            </View> */}
                                            {/* <Text style={styles.Textc1}>Product Category :<Text style={styles.Textc2}>{ this.state.form3Data['Product_cat']}</Text></Text> */}
                                            <View style={styles.line}></View>
                                            <Text style={styles.Textc1}>Country Origin :<Text style={styles.Textc2}>{ this.state.form3Data['Country_Org']}</Text></Text>
                                            <Text style={styles.Textc1}>Quantity :<Text style={styles.Textc2}>{ this.state.form3Data['Quantity']}</Text></Text>
                                            {/* <Text style={styles.Textc1}>Unit of Measure :<Text style={styles.Textc2}>{ this.state.form3Data['Unit_of_measure']}</Text></Text>
                                            <Text style={styles.Textc1}>Unit Value :<Text style={styles.Textc2}>{ this.state.form3Data['Unit_value']}</Text></Text> */}
                                            <Text style={styles.Textc1}>Custom Duty $ :<Text style={styles.Textc2}>{ this.state.form3Data['Custom_duty']}</Text></Text>

                                        </View>
                                    </View> 

                                   { this.state.form3Data['isCheck'] ==false && this.state.form3Data['Belonging'] == false  ? <View style={styles.upload}>
                                        <Image source={require('../../Images/upload.png')} style={styles.down} resizeMode='center' />
                                        <Text style={{ marginHorizontal: 10 }}>Lorem-Ipsum.png</Text>
                                    </View>  : null}
                                    { this.state.form3Data['isCheck']  ==false   ? <View style={styles.qua}> 
                                        <View style={styles.q1}>
                                            <Text style={styles.Textc1}>Quantity :<Text style={styles.Textc1}>{this.state.form3Data['Quantity']}</Text></Text>
                                        </View>
                                        <View style={styles.q2}>
                                            <Text style={styles.Textc1}>Total Custom Duty $ :<Text style={styles.Textc1}>{ this.state.form3Data['Custom_duty']}</Text></Text>
                                        </View>
                                    </View>  : null}
                                    <View style={styles.card42}>
                                        <TouchableOpacity onPress={this.isCheck1Pressed}>{
                                            this.state.isCheck1 ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />
                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                                        }</TouchableOpacity>
                                        <Text style={styles.align}>I Declare The Information Above-mentioned Is True, Correct And Complete.</Text>
                                    </View>
                                    <View style={styles.card421}>
                                        <TouchableOpacity onPress={this.isCheck2Pressed}>{
                                            this.state.isCheck2 ?
                                                <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />
                                                :
                                                <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                                        }</TouchableOpacity>
                                        <Text style={styles.align}>I Also Declare To Be Aware That Otherwise, The Goods May Not Be Shipped Or It May Be Necessary To Integrate The Cost Of Custom Duties.</Text>
                                    </View>
                                </View>
                            </View>
                            :
                            null
                    }
                    {/* <View style={styles.card1}>
                        <Text style={styles.sender}>Home Collection</Text>
                    </View>
                    <View style={styles.card5}>
                        <View style={styles.card21}>
                            <Text style={styles.Textc1}>Departure Date :<Text style={styles.Textc2}>17 Oct 2019</Text></Text>
                            <Text style={styles.Textc1, { marginVertical: 10 }}>Additional Information For Pony :<Text style={styles.Textc2}>Lorem Ipsum is simply dummy text of printing and typesetting industry.</Text></Text>
                        </View>
                    </View>
                    <View style={styles.card1}>
                        <Text style={styles.sender}>Your Order</Text>
                    </View>
                    <View style={styles.card6}>
                        <View style={styles.card21}>
                            <Text style={styles.Textc1}>Transport Fee (incl. RBN fee) :<Text style={styles.Textc2}>00 $</Text></Text>
                            <Text style={styles.Textc1}>Custom Duty (incl. RBN fee) :<Text style={styles.Textc2}>00 $</Text></Text>
                            <Text style={styles.Textc1}>Home Collection :<Text style={styles.Textc2}>00 $</Text></Text>
                            <Text style={styles.Textc1}>Insurance :<Text style={styles.Textc2}>00 $</Text></Text>
                            <Text style={styles.Textc1}>Total Price :<Text style={styles.Textc2}>00 $</Text></Text>

                        </View>
                    </View> */}
                    <View style={styles.card7}>
                        <View style={styles.card71}>
                        {/* onPress={this.isCheck3Pressed} */}
                            <TouchableOpacity >{
                                this.state.isCheck3 ?
                                    <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />
                                    :
                                    <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                            }</TouchableOpacity>
                            <Text style={{ color: 'grey', marginHorizontal: 10 }}>I Declare That My Shipping Does Not Include Any Following Hazardous Products :</Text>
                        </View>
                        <View style={styles.card7s}>
                            <View style={styles.card7s1}>
                            <Text>- Lithium batteries alone</Text>
                            <Text>- Perfumes</Text>
                            </View>
                            <View style={styles.card7s1}>
                            <Text>- Electronic Smoking Devices</Text>
                            <Text>- Aerosols, Gas Bottles, Extinguishers</Text>
                            </View>
                        </View>
                        <View style={styles.card71}>
                        {/* onPress={this.isCheck4Pressed} */}
                            <TouchableOpacity>{
                                this.state.isCheck4 ?
                                    <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />
                                    :
                                    <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                            }</TouchableOpacity>
                            <Text style={{ color: 'grey', marginHorizontal: 10 }}>I Accept The Terms And Conditions Of The Web Site</Text>
                        </View>
                        <View style={styles.card71}>
                            <TouchableOpacity onPress={this.isCheck5Pressed}>{
                                this.state.isCheck5 ?
                                    <Image source={require('../../Images/black-check-box-with-white-check.png')} style={styles.icon} />
                                    :
                                    <Image source={require('../../Images/check-box-empty.png')} style={styles.icon} />

                            }</TouchableOpacity>
                            <Text style={{ color: 'grey', marginHorizontal: 10 }}>I Have Read And Accepted The Privacy Policy</Text>
                        </View>

                    </View>
                    {/* <View style={styles.card1}>
                        <Text style={styles.sender}>Reminder For Forbidden Good</Text>
                        <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.down} resizeMode='center' />
                    </View> */}
                    <TouchableOpacity style={styles.card1} onPress={() => { this.setModalVisible(true) }}>
                        <Text style={styles.sender}>Send By E-mail</Text>
                        <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.down} resizeMode='center' />
                    </TouchableOpacity>
                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={this.ordercomplete} style={styles.button}>
                            <Image source={require('../../Images/success.png')} style={styles.icon} />
                            <Text style={styles.save}>Save & Continue</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={ismodalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.text}>
                                <Text style={{ fontSize: 25, fontWeight: 'bold', marginVertical: 5, textAlign: 'center' }}>Invoice Send By E-mail</Text>
                            </View>
                            <View style={styles.b1}>
                                <Text style={styles.email}>Email Id</Text>
                            </View>
                            <View style={styles.bars}>
                                <TextInputComponent source={require('../../Images/envelope.png')} onChangeText={this.onChangeTextEmail} placeholder='demo@ps.com' Ref={input => { this.userName = input }} />
                            </View>
                            <TouchableOpacity onPress={() => this.setState({ ismodalVisible: false })} style={styles.done}>
                                <Image source={require('../../Images/success.png')} style={styles.icon} />
                                <Text style={styles.save}>Send</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        );
    }
}
