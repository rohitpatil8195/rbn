import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { additionOfTwoNumbers, substractionOfTwoNumbers, dividationOfTwoNumbers, multiplicationOfTwoNumbers, showTextOfTwo, showLang } from './actions';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    let obj = {
      a: 25,
      b: 10
    }
    let text = {
      c: 'aaru',
      d: 'palu'
    }
    this.props.additionOfTwoNumbers(obj, text)
    this.props.substractionOfTwoNumbers(obj)
    this.props.dividationOfTwoNumbers(obj)
    this.props.multiplicationOfTwoNumbers(obj)
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: '50%' }}>
        <Text>{this.props.data} </Text>
        <Text>{this.props.data1}</Text>
        <Text>{this.props.data2}</Text>
        <Text>{this.props.data3}</Text>
        <Text>{this.props.data4}</Text>

        <TouchableOpacity style={{ height: 50, width: 70, backgroundColor: 'skyblue', borderRadius: 10, marginVertical: 50, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
          this.props.additionOfTwoNumbers({
            a: 'john', b: 'blake'
          })
        }}>

          <Text>Click to add</Text>

        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  let {
    data, data1, data2, data3
  } = state.persistedReducer


  return { data, data1, data2, data3 }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ additionOfTwoNumbers, substractionOfTwoNumbers, dividationOfTwoNumbers, multiplicationOfTwoNumbers }, dispatch)
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
