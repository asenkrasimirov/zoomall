import * as React from 'react';
import { ImageBackground, Pressable, Text, Alert } from 'react-native';

import { PurpleButton } from './Buttons/PurpleButton';
import { WhiteButton } from './Buttons/WhiteButton';

import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    benefitsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30
    },
    benefits: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    benefitsTop: {
        paddingTop: 20,
        flex: 1,
        alignItems:  'flex-end',
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
    buttonsWrap: {
        position: 'absolute',
        left: 10,
        bottom: 73,
        right: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    buttonStyle: {
        flex: 1,
        height: 50,
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    buttonStyleText: {
        display: 'flex',
        flex: 1,
        color: 'white',
        alignSelf: 'stretch',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
        fontSize: 18
    },
    buttonWhiteText: {
        color: '#A45084'
    }
});

export default class Benefits3 extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.benefitsWrapper}>
                <ImageBackground source={require('../assets/benefit3.png')} resizeMode='contain' style={styles.benefitsTop}>
                    <View style={styles.buttonsWrap}>
                        <PurpleButton style={{flex: 1, paddingLeft: 5, paddingRight: 5}} buttonState="active" onPress={() => this.props.navigation.navigate('RegisterScreen')} title="Регистрация" />
                        <WhiteButton style={{flex: 1, paddingLeft: 5, paddingRight: 5}} title="Вход" onPress={() => this.props.navigation.navigate('LoginScreen')} />
                    </View>
                </ImageBackground>
            </View>
        );
    }
};