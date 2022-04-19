import React, { Component } from "react"
import { styles } from "./styles"
import { View, Text, TextInput } from "react-native"
import Label from "../label/index"
import validator from "../../Utils/validator"

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            value: "",
            defaulValue: "",
            validate: false,
        }
    }

    onRef = (ref) => {
        this.input = ref;
        this.props.TextInputRef && this.props.TextInputRef(ref)
    }

    onBlurInput = () => {
        this.props.onBlurInput && this.props.onBlurInput()
    }

    onFocusInput = () => {
        this.props.onFocusInput && this.props.onFocusInput()
    }

    onChangeInput = (value) => {
        const { type } = this.props;

        if (type) {
            if (value.trim() !== '') {
                if (validator(type, value).error !== '') {
                    this.setState({
                        error: validator(type, value).error,
                        value,
                        validate: false,
                    });
                } else {
                    this.setState({
                        error: '',
                        value,
                        validate: true,
                    });
                }
            } else {
                this.setState({
                    error: '',
                    value,
                    validate: false,
                });
            }
        }
        this.props.onChangeInput && this.props.onChangeInput(value);
    }

    render() {
        const { editable, ...props } = this.props;
        return (
            <View
                pointerEvents={editable ? 'auto' : 'none'}
                style={editable ? styles.container : styles.containerDisabled}
            >
                <Label {...props} />
                <TextInput
                    {...props}
                    ref={this.onRef}
                    style={styles.input}
                    onChangeText={this.onChangeInput}
                    onBlur={this.onBlurInput}
                    onFocus={this.onFocusInput}
                    editable={editable}
                />
                {/* {this.state.error && <Text style={styles.messageText}>{this.state.error}</Text>} */}
            </View>
        )


    }
}