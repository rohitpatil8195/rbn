import React, { Component } from 'react';
import { 
    View,
    Image 
} from 'react-native';
import styles from "./Styles";
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import Loader from '../../components/Loader';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // static navigationOptions = {
  //     header: null
  // }

  componentDidMount() {
      setTimeout(() => {
        this.props.isLoggedIn == false ?
          this.props.navigation.navigate('Login')
          :
          this.props.navigation.navigate('HomeScreen')
      }, 500)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../Images/0-splash1.png')} style={styles.img} resizeMode='stretch' />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  let {
    loginObj,
    isLoggedIn
  } = state.authReducer


  return { loginObj, isLoggedIn }
}



export default connect(
  mapStateToProps, null
)(SplashScreen);