import * as React from 'react';
import { View, Text, Image } from 'react-native';
import LoginScreen from '../screens/Login/Login';
import ForgotScreen from '../screens/Forgot/Forgot';
import RegisterScreen from '../screens/Register/Register';
import HomeScreen from '../screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerComponent from '../components/DrawerComponent';
import About from '../screens/About/About';
import Contact from '../screens/Contact/Contact';
import Sender from '../screens/Sender/Sender';
import Recipient from '../screens/Recipient/Recipient';
import Form3 from '../screens/Form3/Form3';
//Paypal 
import Completeform from '../screens/Completeform/Completeform';
import Paypal from '../screens/OrderComplete/Paypal';
import OrderComplete from '../screens/OrderComplete/OrderComplete';
import Settings from '../screens/Settings/Settings';
import Bookings from '../screens/Bookings/Bookings';
import Information from '../screens/Information/Information';
import Invoice from '../screens/Invoice/Invoice';
import Request from '../screens/Request/Request';
import Delivery from '../screens/Delivery/Delivery';
import PrivacyPolicy from '../screens/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from '../screens/TermsConditions/TermsConditions';
import Question from '../screens/Question/Question';
import Shipping from '../screens/Shipping/Shipping';
import Payment from '../screens/Payment/Payment';
import Modify from '../screens/Modify/Modify';
import Other from '../screens/Other/Other';
import Services from '../screens/Services/Services';
import Pro from '../screens/Pro/Pro';
import Proform from '../screens/Proform/Proform';
// import Home from '../screens/Home/Home';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import BeforeOrder from '../screens/BeforeOrder/BeforeOrder';
import ServiceList from '../screens/ServiceList/ServiceList';
import AuthLoadingScreen from '../screens/AuthLoad';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

// const Tab = createBottomTabNavigator();

// function TabNav() {
//   return (
//       <Tab.Navigator
      
//       initialRouteName='HomeScreen'
//       tabBarOptions={
//         {
//         activeTintColor: 'white',
//         inactiveTintColor: 'gray',
//         style:{backgroundColor: '#2c3e50'}
//       }}
//       >
//         <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <Image source={require('../Images/home.png')} style={{height: 25, width: 25}} />
//           )
//         }} />
//         <Tab.Screen name="About" component={About} options={{
//           tabBarLabel: 'About Us',
//           tabBarIcon: ({ color, size }) => (
//             <Image source={require('../Images/businessman-talking-about-data-analysis.png')} style={{height: 25, width: 25}} />
//           )
//         }} />
//         <Tab.Screen name="Home" component={Home} options={{
//           tabBarLabel: 'Personal Area',
//           tabBarIcon: ({ color, size }) => (
//             <Image source={require('../Images/menu.png')} style={{height: 20, width: 20}} />
//           )
//         }} />
//         <Tab.Screen name="Contact" component={Contact} options={{
//           tabBarLabel: 'Contact Us',
//           tabBarIcon: ({ color, size }) => (
//             <Image source={require('../Images/phone-contact.png')} style={{height: 25, width: 25}} />
//           )
//         }} />        
//       </Tab.Navigator>
//   );
// }

function DrawerRoutes() {
  return (    
      <Drawer.Navigator
      edgeWidth={0}
      drawerContent={props => DrawerComponent(props)}
        initialRouteName="HomeScreen"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { },
        }}
        >
        <Drawer.Screen name='HomeScreen' component={HomeScreen} />
        <Drawer.Screen name='About' component={About} />
        <Drawer.Screen name='Contact' component={Contact} />
        
      </Drawer.Navigator>
  );
}

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={DrawerRoutes} />
          <Stack.Screen name="Sender" component={Sender} />
          <Stack.Screen name="Recipient" component={Recipient} />
          <Stack.Screen name="Form3" component={Form3} />
          <Stack.Screen name="Completeform" component={Completeform} />
          <Stack.Screen name="Paypal" component={Paypal} />
          <Stack.Screen name="OrderComplete" component={OrderComplete} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Bookings" component={Bookings} />
          <Stack.Screen name="Information" component={Information} />
          <Stack.Screen name="Invoice" component={Invoice} />
          <Stack.Screen name="Request" component={Request} />
          <Stack.Screen name="Delivery" component={Delivery} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="TermsConditions" component={TermsConditions} />
          <Stack.Screen name="Question" component={Question} />
          <Stack.Screen name="Shipping" component={Shipping} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Modify" component={Modify} />
          <Stack.Screen name="Other" component={Other} />
          <Stack.Screen name="Services" component={Services} />
          <Stack.Screen name="Pro" component={Pro} />
          <Stack.Screen name="Proform" component={Proform} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="BeforeOrder" component={BeforeOrder} />
          <Stack.Screen name="ServiceList" component={ServiceList} />
          <Stack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen} />
          </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;