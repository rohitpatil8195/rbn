import React from "react";
import { TextInput, Image, Dimensions, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ErrorMessage from './ErrorMessage';

export default class DateTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ flexDirection: 'column', width: '92%', }}>
                <View
                    style={{
                        height: Dimensions.get('window').height * 0.08,
                        width: '97%',
                        flexDirection: 'row',
                        marginBottom: 10
                    }}>
                    <TouchableOpacity style={{ height: 50, width: '98%' }}
                        onPress={this.props.showPicker} disabled={this.props.disabled}>
                        <TextInput
                            ref={this.props.Ref}
                            onChangeText={(text) => this.props.onChangeText(text, this.props.placeholder)}
                            style={{ height: 50, width: '100%', color: 'black' }, this.props.designStyle}
                            underlineColorAndroid='black'
                            value={this.props.value}
                            editable={false}
                            options={{ format: "DD-MM-YYYY" }}
                            placeholder={this.props.placeholder}></TextInput>
                        {this.props.isIconrequired ?
                            <View
                                style={{
                                    height: 50,
                                    width: '15%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    source={this.props.source}
                                    style={{
                                        height: '60%',
                                        width: '60%',
                                        resizeMode: 'contain',
                                    }}></Image>
                            </View>
                            : null}

                        <DateTimePickerModal
                            isVisible={this.props.isVisible}
                            onConfirm={this.props.onConfirm}
                            onCancel={this.props.onCancel}
                            is24Hour={false}
                            mode={this.props.mode}
                            minimumDate={this.props.minDate}
                            format={this.props.format}
                            hintText={this.props.hintText}
                            maximumDate={this.props.maximumDate}
                        />
                    </TouchableOpacity>
                </View>
                {this.props.error ? <ErrorMessage errorValue={this.props.error} errorStyle={this.props.errorStyle} /> : null}
            </View>
        );
    }
}
