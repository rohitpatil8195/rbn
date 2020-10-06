import React, { Component } from 'react';
import { View, Text, ImageBackground, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';

class Pro extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  proform = ()=>{
    this.props.navigation.navigate('Proform', {})
  }

  render() {
    return (
      <SafeAreaView style={styles.container} >
        <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.v1}>
        <ImageBackground source={require('../../Images/WhatsAppImage2020-07-09at10.30.32PM.jpeg')} style={styles.image} resizeMode='cover'>
        <TouchableOpacity onPress={this.proform} style={styles.plus}>
        <Icon name="plus" size={30} color='white' />
        </TouchableOpacity>        
          </ImageBackground>
        </View>
  
        <View style={styles.ave}>
          <Text style={styles.header}>The Avenue Central</Text>
        </View>
        <View style={styles.Apart}>
          <Text style={{fontSize: 15, color: 'red'}}>5 Apartments Left</Text>
        </View>
        <View style={styles.follower}>
          <Text style={{fontSize: 15, color: 'dodgerblue'}}>10k Followers</Text>
          <Text style={{fontSize: 15, color: 'red'}}>$750 - $1350</Text>
        </View>
        <View style={styles.stat}>
          <Text style={{fontSize: 15, color: 'grey'}}>Stating $600</Text>
        </View>
        <View style={styles.exc}>
          <View style={styles.borders}>
            <View style={styles.sec1}>
              <Text style={{fontSize: 15, color: 'white'}}>8.0</Text>
            </View>
            <View style={styles.sec2}>
              <Text style={{fontSize: 15, color: 'green', fontWeight: 'bold'}}>Excellent</Text>
            </View>
          </View>
          <Text style={{fontSize: 15, color: 'grey', marginHorizontal: 10}}>(12 Reviews)</Text>
        </View>
        <View style={styles.add}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Address</Text>
        </View>
        <View style={styles.loc}>
          <View style={styles.loc1}>
            <View style={styles.loc11}>
              <Icon name="enviromento" size={15} style={{marginHorizontal: 3}} />
              <Text>728 South Lower River St.San- Bernardino,</Text>
            </View>
            <View style={styles.loc12}>
            <Text>CA 92407</Text>
            </View>
          </View>
          <View style={styles.loc2}>
          <Icon name="gitlab" size={25} style={{marginHorizontal: 10}} />
          <Text>4kms</Text>
          </View>
        </View>
        <View style={styles.add}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Description</Text>
        </View>
        <View style={styles.mod1}>
          <Text>Modern spacious 3 bedroom flat for residential purpose.
            This building is close to the national highway. Big living
            hall, guest bath, indoor pool close to...
          </Text>
        </View>
        <View style={styles.add}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Facilities</Text>
        </View>
        <View style={styles.mod2}>
          <Text></Text>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Pro;
