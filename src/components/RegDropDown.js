import RNPickerSelect from "react-native-picker-select";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ErrorMessage from './ErrorMessage';

export default class RegDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <View style={{ flexDirection: 'row', height: '100%', width: '100%' }}>
                    {this.props.title !== "" ? <Text style={[styles.titles, this.props.titleStyle]}>{this.props.title}</Text> : null}
                    <Image source={this.props.source} style={[{ height: 25, width: 25, alignSelf: 'center', marginLeft: -13, marginHorizontal: 5 }, this.props.IconStyle]} />
                    <RNPickerSelect
                        onValueChange={(value) => { this.props.onValueChange(value) }}
                        placeholder={this.props.placeholder}
                        items={this.props.data}
                        autoFocusInput={true}
                        itemTextColor='black'
                        itemTextStyle={{ fontSize: 18, color: 'black' }}
                        style={{
                            inputAndroid: [{
                                fontSize: 16,
                                height: 40,
                                width: 250,
                                paddingBottom: 10,
                                opacity: 0.75,
                                paddingHorizontal: 5,
                                color: 'black',
                                top: 2
                            }, this.props.defineStyle],
                            inputIOS: {
                                fontSize: 16,
                                height: 40,
                                width: 330,
                                paddingHorizontal: 10,
                                paddingVertical: 3,
                                borderWidth: 2,
                                borderColor: 'gray',
                                borderRadius: 6,
                                opacity: 0.75,
                                color: 'black',
                            },

                            iconContainer: {
                                top: 8,
                                right: 10,
                            },
                        }}
                        value={this.props.value}
                        useNativeAndroidPickerStyle={false}
                        textInputProps={this.props.textInputProps}


                    />
                </View>
                {this.props.error ? <ErrorMessage errorValue={this.props.error} errorStyle={this.props.errorStyle} /> : null}
            </>

        )
    };
}

const styles = StyleSheet.create({
    titles: {
        marginBottom: 4,
        marginHorizontal: 10,
    },
});