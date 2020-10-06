import React, { Component } from 'react';
import { StyleSheet,View, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import StepIndicator from 'react-native-step-indicator';
const PAGES = ['Page 1','Page 2','Page 3'];

const labels = ["Join group","Ask you bid","Payment"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#1e90ff',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#1e90ff',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#1e90ff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 15,
  currentStepLabelColor: '#1e90ff'
}
 
export default class StepIndicators extends Component { 
constructor(props) {
    super(props)
    // var dataSource = new ViewPager.DataSource({
    //     pageHasChanged: (p1, p2) => p1 !== p2,
    //   });
    this.state = {
        // dataSource: dataSource.cloneWithPages(PAGES),
        currentPosition: 0
    }
}
 
render() {
  return (
    <View style={styles.container}>
        <View style={styles.stepIndicator}>
    <StepIndicator
         customStyles={customStyles}
         currentPosition={this.state.currentPosition}
         labels={labels}
         stepCount={3}
         direction='horizontal'
    />
    </View>
    <ViewPager
        dataSource={this.state.dataSource}
        renderPage={this.renderViewPagerPage}
        onChangePage={(page) => {this.setState({currentPage:page})}}
          />
    </View>
  )
}
 
renderViewPagerPage = (data) => {
    return(<View style={styles.page}>
      <Text>{data}</Text>
    </View>)
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
    },
    stepIndicator: {
      marginVertical:50,
    },
    page: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  });