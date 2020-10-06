import RNPickerSelect from "react-native-picker-select";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ErrorMessage from './ErrorMessage';

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={[this.props.style]}>
                {this.props.title !== "" ? <Text style={[styles.titles, this.props.titleStyle]}>{this.props.title}</Text> : null}
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
                            width: '100%',
                            paddingBottom: 13,
                            opacity: 0.75,
                            paddingHorizontal: 5,
                            color: 'black',
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
                    Icon={() => {
                        return <Image source={this.props.source} style={[{ height: 15, width: 15, transform: [{ rotate: '270deg' }] }, this.props.IconStyle]} />;
                    }}

                />
                {this.props.error !== "" ?
                    <View >
                        <ErrorMessage errorValue={this.props.error} errorStyle={this.props.errorStyle} />
                    </View>
                    : null}
            </View>
        )
    };
}

const styles = StyleSheet.create({
    titles: {
        marginBottom: 4,
        marginHorizontal: 10,
    },
});