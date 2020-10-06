import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import i18n from "i18n-js";

export default class TabNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // isHome: false,
        // isAbout: false,
        // isPersonal: false,
        // isContact: false
    };
  }

//   isHomePressed=()=> {
//     if (!this.state.isHome) {
//         this.setState({isHome: true})
//       } else {
//         this.setState({isHome: false})
//       }
//       this.setState({isHome: true, isAbout: false, isPersonal: false, isContact: false})
// }

// isAboutPressed=()=> {
//     if (!this.state.isAbout) {
//         this.setState({isAbout: true})
//       } else {
//         this.setState({isAbout: false})
//       }
//       this.setState({isHome: false, isAbout: true, isPersonal: false, isContact: false})
// }

// isPersonalPressed=()=> {
//     if (!this.state.isPersonal) {
//         this.setState({isPersonal: true})
//       } else {
//         this.setState({isPersonal: false})
//       }
//       this.setState({isHome: false, isAbout: false, isPersonal: true, isContact: false})
// }

isContactPressed=()=> {
    if (!this.state.isContact) {
        this.setState({isContact: true})
      } else {
        this.setState({isContact: false})
      }
      this.setState({isHome: false, isAbout: false, isPersonal: false, isContact: true})
}

  render() {
    return (
      <View style={Styles.bottom}>
          {
              this.props.isHome == true ?
              <TouchableOpacity style={Styles.blocks} onPress={this.props.onClick}>
              <Image source={require('../Images/home.png')} style={Styles.img} />
              <Text style={Styles.text1}>{i18n.t('Home')}</Text>
          </TouchableOpacity>
          : 
          <TouchableOpacity style={Styles.blocks} onPress={this.props.onClick}>
            <Image source={require('../Images/home.png')} style={Styles.img} />
            <Text style={Styles.text}>{i18n.t('Home')}</Text>
        </TouchableOpacity>
          }
        
        {
            this.props.isAbout == true ?
            <TouchableOpacity style={Styles.blocks} onPress={this.props.aboutClick}>
            <Image source={require('../Images/businessman-talking-about-data-analysis.png')} style={Styles.img} />
            <Text style={Styles.text1}>{i18n.t('About Us')}</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={Styles.blocks} onPress={this.props.aboutClick}>
            <Image source={require('../Images/businessman-talking-about-data-analysis.png')} style={Styles.img} />
            <Text style={Styles.text}>{i18n.t('About Us')}</Text>
        </TouchableOpacity>
        }
        
        {
            this.props.isPersonal == true ?
            <TouchableOpacity style={Styles.blocks} onPress={this.props.personClick}>
            <Image source={require('../Images/menu.png')} style={Styles.img} />
            <Text style={Styles.text1}>{i18n.t('Personal Area')}</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={Styles.blocks} onPress={this.props.personClick}>
            <Image source={require('../Images/menu.png')} style={Styles.img} />
            <Text style={Styles.text}>{i18n.t('Personal Area')}</Text>
        </TouchableOpacity>
        }
        
        {
            this.state.isContact == true ?
            <TouchableOpacity style={Styles.blocks} onPress={this.isContactPressed}>
            <Image source={require('../Images/phone-contact.png')} style={Styles.img} />
            <Text style={Styles.text1}>{i18n.t('Contact Us')}</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={Styles.blocks} onPress={this.props.contactClick}>
            <Image source={require('../Images/phone-contact.png')} style={Styles.img} />
            <Text style={Styles.text}>{i18n.t('Contact Us')}</Text>
        </TouchableOpacity>
        }
        

      </View>
    );
  }
}

const Styles = StyleSheet.create({
    bottom: {
        height: 50,
        width: '100%',
        backgroundColor: '#2c3e50',
        position: 'absolute',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 0
    },
    blocks: {
        height: '100%',
        width: '24%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        color: 'grey'
    },
    text1: {
        fontSize: 12,
        color: 'white'
    },
    img: {
        height: 20, 
        width: 20,
        marginVertical: 3
    },
})