import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from "./Styles";
import TextInputComponent from '../../components/TextInputComponent';
import DateTime from '../../components/DateTimePickerModal';
import moment from 'moment/moment';

export default class BeforeOrder extends Component {
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
        categoryList: ['India', 'USA', 'UK', 'Canada', 'South Africa'],
        isArrow: false,
        isDatePickerVisible: false,
        DOB: '',
    };
  }

  _showDateTimePicker = () => {
    this.setState({ isDatePickerVisible: true });
}

_hideDateTimePicker = () => this.setState({ isDatePickerVisible: false });

_handleDatePicked = date => {
    this.setState({ DOB: moment(date).format('DD-MM-YYYY'), isDatePickerVisible: false });
};

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
        this.setState({ isYes: true })
    } else {
        this.setState({ isYes: false })
    }
    this.setState({ isYes: true, isNo: false })
}

isNoPressed = () => {
    if (!this.state.isNo) {
        this.setState({ isNo: true })
    } else {
        this.setState({ isNo: false })
    }
    this.setState({ isNo: true, isYes: false })
}

completeform = () => {
    this.props.navigation.navigate('Completeform', {})

}

ordercomplete = () => {
    this.props.navigation.navigate('OrderComplete', {})
}

completeform = () => {
    this.props.navigation.navigate('Completeform')
}

  render() {
    return (
      <View style={styles.container}>
             <ImageBackground source={require('../../Images/header-bg-white.jpg')} style={styles.imagebg} resizeMode='cover'>
                    <View style={styles.one}>
                        <View style={styles.view1}>
                            <TouchableOpacity onPress={this.completeform}>
                            <Image source={require('../../Images/arrow-point-to-right.png')} style={styles.back} resizeMode='center' />
                            </TouchableOpacity>
                            <Text style={styles.about}>Italy - Senegal<Text style={styles.text1}> (17 Oct - 20 Oct)</Text></Text>
                        </View>
                    </View>
                </ImageBackground>
        <View style={styles.card1}>
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
                    </View>
                    <View style={styles.card1}>
                        <Text style={styles.sender}>Home Collection</Text>
                    </View>
                    <View style={styles.card4}>
                        <View style={styles.Home}>
                            <View style={styles.Home1}>
                                <Text>Departure Date :</Text>
                                <DateTime
                            placeholder='dd-mm-yy'
                            showPicker={() => this._showDateTimePicker()}
                            isVisible={this.state.isDatePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                            is24Hour={false}
                            mode='date'
                            // errorStyle={{marginTop:'-6%'}}
                            // error={this.state.errors['DOB']}
                            // maximumDate={moment().toDate()}
                            value={this.state.DOB}
                            designStyle={{width: '70%'}}
                        />
                            </View>
                            <View style={styles.Home2}>
                                <TextInputComponent onChangeText={this.onChangeTextEmail}
                                    placeholder={'Additional Information For Pony (e.g.\n Who Contacts In Case Of Needs, \n Intercom, Etc.)'}
                                    underlineColorAndroid='grey' Ref={input => { this.userName = input }} designStyle={{ height: 100 }} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={this.ordercomplete} style={styles.button}>
                            <Image source={require('../../Images/success.png')} style={styles.icon} />
                            <Text style={styles.save}>Pay Now</Text>
                        </TouchableOpacity>
                    </View>
      </View>
    );
  }
}
