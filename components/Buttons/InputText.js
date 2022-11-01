import * as React from 'react';

import { Pressable, Text, StyleSheet, TextInput, View, Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = StyleSheet.create({
    buttonStyle: {
        height: 48,
        alignItems: 'center',
    },
    inputWrapper: {
        display: 'flex',
        color: 'white',
        alignSelf: 'stretch',
        textAlign: 'left',
        textAlignVertical: 'center',
        borderRadius: 10,
        fontSize: 18,
        backgroundColor: '#F4F6F9',
        height: 48,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonStyleText: {
        height: 48,
        fontSize: 17
    },
    buttonStyleDisabled: {
        opacity: 0.35
    },
    inputIcon: {
        width: 26,
        marginRight: 10
    }
});

export class InputText extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {

        let icon = '';
        const onChangeText = typeof(this.props.onChangeText) ? this.props.onChangeText : false;

        if(this.props.icon == 'email') {
            icon = require('../../assets/icons/email.png');
        }
        if(this.props.icon == 'password') {
            icon = require('../../assets/icons/password.png');
        }
        if(this.props.icon == 'phone') {
            icon = require('../../assets/icons/phone.png');
        }
        if(this.props.icon == 'profile') {
            icon = require('../../assets/icons/profile.png');
        }
        if(this.props.icon == 'date') {
            icon = require('../../assets/icons/date.png');
        }

        return (
            <View style={styles.inputWrapper}>
                <Image style={styles.inputIcon} resizeMode={'contain'} source={icon} />
                <TextInput onChangeText={onChangeText} style={styles.buttonStyleText} placeholder={this.props.placeholder} />
            </View>
        );
    }
}