import React from 'react';
import { ActivityIndicator, StatusBar, View, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        let user_id = await AsyncStorage.getItem('user_id');
        console.log("valid token -----------", user_id);
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(user_id ? 'Home' : 'Login');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default AuthLoadingScreen